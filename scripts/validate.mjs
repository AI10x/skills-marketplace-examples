import assert from "node:assert/strict";
import { lstat, readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const bytes = await readFile(new URL("skills-index.json", root));
assert.ok(bytes.length <= 128 * 1024, "Manifest exceeds the marketplace limit");
const manifest = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
assert.deepEqual(Object.keys(manifest), ["skills"]);
assert.ok(Array.isArray(manifest.skills) && manifest.skills.length > 0 && manifest.skills.length <= 100);
const ids = new Set();
const paths = new Set();
const identifier = (s) => typeof s === "string" && /^[A-Za-z0-9_.-]{1,100}$/.test(s) && s !== "." && s !== "..";

for (const skill of manifest.skills) {
  assert.deepEqual(Object.keys(skill).sort(), ["currency", "description", "id", "name", "path", "price"]);
  assert.ok(identifier(skill.id) && !ids.has(skill.id), "Invalid or duplicate ID");
  ids.add(skill.id);
  assert.ok(typeof skill.path === "string" && skill.path.length <= 500 && !paths.has(skill.path));
  const parts = skill.path.split("/");
  assert.ok(parts.every(identifier) && /^(skills|skill)\.md$/i.test(parts.at(-1)), "Invalid skill path");
  paths.add(skill.path);
  assert.ok(typeof skill.name === "string" && skill.name.trim() && Buffer.byteLength(skill.name) <= 120);
  assert.ok(!/[\p{Cc}]/u.test(skill.name), "Control character in skill name");
  assert.ok(typeof skill.description === "string" && skill.description.trim() && Buffer.byteLength(skill.description) <= 2000);
  assert.ok(typeof skill.price === "string" && /^(0|[1-9][0-9]{0,5})\.[0-9]{2}$/.test(skill.price) && Number(skill.price) > 0);
  assert.ok(["USD", "EUR", "GBP", "CAD", "AUD"].includes(skill.currency));
  for (let i = 1; i <= parts.length; i++) {
    const stat = await lstat(new URL(parts.slice(0, i).join("/"), root));
    assert.ok(i === parts.length ? stat.isFile() : stat.isDirectory(), "Non-regular path or symlink");
  }
  const content = await readFile(new URL(skill.path, root));
  assert.ok(content.length > 0 && content.length <= 32 * 1024 && !content.includes(0));
  const text = new TextDecoder("utf-8", { fatal: true }).decode(content);
  assert.ok(text.startsWith(`---\nname: ${skill.id}\ndescription: `), "Skill metadata does not match its ID");
  assert.ok(text.includes(`\n# ${skill.name}\n`), "Skill heading does not match its name");
}
console.log(`Validated ${manifest.skills.length} catalog entries and regular UTF-8 skill files. No network calls or payments.`);

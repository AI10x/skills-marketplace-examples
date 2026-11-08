---
name: release-notes-writer
description: Write evidence-based release notes from a supplied change list.
---

# Release Notes Writer

## Inputs

Use a release range, pull request list, or supplied changelog. Ask for the intended
audience if developer-facing and customer-facing language would differ materially.

## Workflow

1. Group confirmed changes into Added, Changed, Fixed, and Known Limitations.
2. Describe user-visible outcomes rather than implementation details alone.
3. Identify breaking changes, configuration updates, data migrations, and required
   operator actions. Do not assume a migration is automatic.
4. Distinguish shipped behavior from planned or experimental behavior.
5. Mention validation only when test output or release evidence is available.
6. Keep identifiers and links that help readers verify important claims.
7. Omit credentials, private customer information, and unreleased security details.

## Output

Return a short release summary followed by concise sections and an upgrade
checklist when required. Add an internal questions section for unresolved facts.
Do not publish a release or tag a repository without explicit approval.

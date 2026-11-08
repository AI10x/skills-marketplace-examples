# Skills Marketplace Examples

Private sample catalog for the AI10x PayPal skills marketplace. These five
original examples are test content, not a production product offering.
All listed USD prices are synthetic sandbox amounts. This repository does not
enable payments or deploy the marketplace.

| Skill | File | Sandbox Price |
| --- | --- | --- |
| Accessibility Quick Check | `accessibility/skills.md` | USD 1.00 |
| SQL Query Review | `sql-review/skills.md` | USD 2.00 |
| Release Notes Writer | `release-notes/skills.md` | USD 1.50 |
| Incident Triage | `incident-triage/skills.md` | USD 3.00 |
| Test Plan Builder | `test-planning/skills.md` | USD 2.50 |

`skills-index.json` supplies preview descriptions and server-authoritative prices.
The full Markdown is stored separately in each indexed file. The marketplace
pins content to a Git commit when starting an order and reveals it only after
server-verified capture (or an explicitly labeled demo simulation).

## Server Configuration

```text
SPEC_SKILLS_GITHUB_REPO=AI10x/skills-marketplace-examples
SPEC_SKILLS_GITHUB_REF=main
SPEC_PAYPAL_MODE=sandbox
```

Use a fine-grained GitHub token restricted to this repository with Contents read
permission. Supply it only through the marketplace's protected server setup.
These three non-secret settings are not a complete runtime configuration: the
server also requires the matching PayPal sandbox app credentials, seller merchant
ID, HTTPS return URL, and private settings/receipt storage.

Never commit provider credentials, account passwords, gateway passwords, receipts,
or workspace bearer tokens. Use a separate sandbox personal buyer to test checkout.
Do not switch to live mode merely to test this catalog. Account access grants access
to all repository files, irrespective of marketplace purchase status.

## Validate

Run `node scripts/validate.mjs` with Node.js 20 or newer. There are no dependencies
or network calls. Validation checks the catalog, prices, IDs, paths and regular
UTF-8 skill files against the marketplace limits. It does not verify PayPal or
prove that a hosted checkout has been configured.

---
name: incident-triage
description: Structure incident evidence and plan safe, reversible investigation.
---

# Incident Triage

## Inputs

Collect a redacted symptom description, observed timestamps with timezones,
affected services, recent changes, and existing monitoring evidence.

## Workflow

1. Summarize observed impact and distinguish unavailable service from missing data.
2. Build a timestamped timeline, marking uncertainty and source provenance.
3. Separate observations, hypotheses, and confirmed causes. Rank hypotheses by
   evidence rather than familiarity.
4. Propose the smallest read-only check that distinguishes the leading hypotheses.
5. Before proposing a change, identify its blast radius, rollback path, and who
   must authorize it. Prefer reversible mitigation over speculative repair.
6. For interrupted payments or jobs, reconcile the existing operation before
   suggesting retries that could duplicate effects.
7. Define recovery signals, follow-up checks, and evidence to retain privately.

## Output

Return impact, timeline, ranked hypotheses, next checks, and a recovery checklist.
State clearly when the root cause is still unknown. Never print secrets, delete
receipts, disable authentication, or perform destructive recovery as a default.

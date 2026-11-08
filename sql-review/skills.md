---
name: sql-query-review
description: Review SQL correctness, parameter handling, and measurable performance risks.
---

# SQL Query Review

## Inputs

Request the query, database engine/version, relevant schema, and expected results.
Use redacted examples; do not request database passwords or production rows.

## Workflow

1. State the intended result and identify assumptions about uniqueness and nulls.
2. Trace joins for accidental row multiplication or unintended inner-join behavior.
3. Check aggregate grouping, date boundaries, timezone handling, and null comparison.
4. Confirm that user-controlled values use bound parameters. For dynamic identifiers,
   require an explicit allowlist rather than string interpolation.
5. Check pagination for deterministic ordering with a unique tie-breaker.
6. Suggest indexes as hypotheses tied to predicates and ordering. Do not claim
   a speedup without representative measurements.
7. Use a disposable fixture for execution tests. Do not run modifying statements
   or EXPLAIN ANALYZE against production without explicit authorization.

## Output

Provide a correctness summary, prioritized findings, a minimal revised query
when needed, and edge-case fixtures. Clearly label performance recommendations
that still need an execution plan or benchmark.

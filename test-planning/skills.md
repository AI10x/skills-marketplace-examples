---
name: test-plan-builder
description: Turn acceptance criteria into a focused, reproducible test matrix.
---

# Test Plan Builder

## Inputs

Use the feature description, acceptance criteria, API contract, and existing tests.
Ask one focused question when missing behavior would change the expected result.

## Workflow

1. List observable outcomes and map each acceptance criterion to a test.
2. Cover one representative success case before adding invalid-input boundaries.
3. Include unauthorized access, cancellation, timeouts, repeated requests, and
   recovery after interrupted writes where the feature supports those states.
4. For UI flows, include keyboard focus, error visibility, and a narrow viewport.
5. Prefer stable fixtures and observable behavior over timing sleeps and internal
   implementation assertions.
6. Keep unit, integration, and browser checks distinct. Label mocked provider
   behavior so it cannot be mistaken for real provider acceptance.
7. Use only synthetic data and test accounts. Real purchases, production writes,
   and outbound provider calls require explicit authorization.

## Output

Return a table with scenario, setup, action, expected result, and test level.
Prioritize a minimal regression set and list untested risks separately.
Do not report tests as passing unless they were actually executed successfully.

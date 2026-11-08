---
name: accessibility-quick-check
description: Review keyboard access, labels, focus behavior, and status announcements.
---

# Accessibility Quick Check

## Inputs

Use a supplied page URL, component source, or screenshots. State which inputs
are available and which checks cannot be performed without a running browser.

## Workflow

1. Identify the primary user journey and its interactive controls.
2. If a browser is available, complete the journey using only Tab, Shift+Tab,
   Enter, Space, and Escape where those keys apply. Check logical focus order,
   visible focus, and whether dialogs restore focus to their trigger.
3. Inspect accessible names for buttons and fields. Confirm error messages identify
   the affected field without relying on color alone.
4. Check headings, landmarks, meaningful link text, and image alternatives.
5. Inspect loading, success, and failure announcements. Avoid duplicate live-region
   messages or announcements on every keystroke.
6. Report measured contrast failures only when actual foreground and background
   colors are available. Do not invent a numerical ratio from a screenshot.

## Output

Return findings with the affected control, reproduction steps, user impact,
and a small proposed fix. Separate observed failures from checks still needed.
Include one regression test suggestion per confirmed issue.

This quick review is not a certification of full accessibility compliance.

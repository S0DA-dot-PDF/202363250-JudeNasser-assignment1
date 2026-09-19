# Technical Documentation — Personal Portfolio

> **This is a scaffold, not a finished document.** Each section below states what
> it must contain and roughly how long it should be. Write the content yourself —
> the Understanding criterion is scored on whether you can explain your own
> decisions. Delete every blockquote like this one before submitting.

**Author:** Jude Nasser · 202363250
**Course:** SWE 363 — Assignment 1

---

## 1. Overview

> 3–4 sentences. What the site is, what it is built with, and what it does.
> State plainly that it is a static front-end site with no back end.

---

## 2. File Structure

> The folder tree, with **one line per file saying what it is responsible for**.
> The tree alone is not enough — the responsibility statement is the point.
> Example: `js/script.js` — handles the light/dark theme toggle; contains no
> colour values.

---

## 3. Architecture and Separation of Concerns

> The most important section. Explain the division of labour:
>
> - HTML holds structure and content only
> - CSS holds every visual decision
> - JavaScript holds behaviour, and manipulates attributes — never styles
>
> Then give your concrete example: the theme toggle. The JS sets one attribute;
> it never touches a colour. Say why that matters — what would have to change if
> colour lived in the JavaScript instead.

---

## 4. The Colour System

> Explain CSS custom properties: six variables defined once in `:root`, used
> everywhere via `var(--name)`.
>
> Then explain why this made dark mode almost free — one extra block redefining
> the same six names, rather than overriding every rule. Mention that any colour
> left hardcoded would not switch (you hit this, and fixed four of them).
>
> Worth including: `--paper` stays lighter than `--shell` in both themes so cards
> keep reading as sitting on top of the page.

---

## 5. Layout — How Flexbox Is Used

> Which containers are flex, and which direction each one runs:
>
> - `body` — column, so sections stack with even spacing
> - `.projects` — row, so the two cards sit side by side
> - `.projectsCard` — column, so each card's contents stack
> - `form` — row, centred
>
> Explain that `flex-direction` applies only to a container's direct children, so
> a row can contain columns without conflict.
>
> Also explain why browser default margins were removed: margins do not collapse
> inside a flex container, so they add to `gap`. Spacing is controlled by `gap`
> in one place per container.

---

## 6. Responsive Design

> How the layout adapts on narrow screens: `flex-wrap: wrap` combined with
> `flex: 1 1 300px` means the cards stack automatically once two cards can no
> longer fit at 300px — no media query required.
>
> Mention the viewport meta tag and what it does. Say which screen sizes you
> tested at and how (browser resizing, or DevTools device toolbar).

---

## 7. The JavaScript Feature — Theme Toggle

> Walk through it step by step:
>
> 1. `querySelector("#themeToggle")` finds the button using a CSS selector
> 2. `addEventListener("click", ...)` registers a function the browser calls later
> 3. `getAttribute("data-theme")` reads the current state
> 4. `setAttribute` / `removeAttribute` flips it
> 5. The button's label and `aria-pressed` are updated to match
>
> Explain what `data-*` attributes are, and why a real `<button>` was used rather
> than a `<div>` — keyboard and screen-reader support come free.

---

## 8. Accessibility

> What you did: `alt` text on images, `<label for>` bound to every form field,
> `aria-pressed` on the toggle, a semantic `<button>`, `lang="en"` on `<html>`.
>
> Be honest about what is not perfect — for example, the muted secondary text
> colour sits below the WCAG AA 4.5:1 contrast ratio on the light background.
> Naming a known limitation and saying how you would address it scores better
> than claiming everything is fine.

---

## 9. Design Decisions and Trade-offs

> Two or three decisions where you chose between real options, and why:
>
> - Flexbox rather than CSS Grid for the card row
> - `object-fit: contain` rather than `cover`, so logos are not cropped
> - `flex-wrap` rather than a media query for the responsive breakpoint
> - A single page rather than separate pages for each section
>
> One short paragraph each. What you considered, what you picked, what it cost.

---

## 10. Known Limitations and Future Work

> Honest list. The contact form has no back end. The theme choice is not
> remembered between visits. The system colour-scheme preference is not detected.
> Then say briefly what you would do about each.

---

## 11. Browser Testing

> Which browsers you opened it in and confirmed it works. Note anything that
> behaved differently.

---

> **Length guide:** 600–1000 words total. Section 3 is the one that most
> distinguishes a strong submission — spend your effort there.

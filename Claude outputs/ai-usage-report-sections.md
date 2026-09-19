# AI Usage Report

**Project:** Personal Portfolio — SWE 363 Assignment 1
**Author:** Jude Nasser · 202363250

---

## Tools Used & Use Cases

**Claude (Anthropic)** was the only AI tool used in this assignment. I used it for:

- **Rubric analysis** — breaking down the assignment brief and grading criteria into a
  checklist, and identifying which requirements carried the most marks
- **Planning** — deciding the page structure and which sections belonged on one page,
  and choosing which JavaScript feature to build
- **Explanations** — concepts I had not covered yet, including Flexbox axes, the
  difference between GET and POST, CSS custom properties, and basic DOM methods
- **Code review** — pasting my HTML and CSS back and asking what was wrong with it
- **Design options** — generating dark colour palettes and border styles to choose from
- **Documentation support** — drafting the README and the technical documentation, which
  I then reviewed and edited

---

## Benefits & Challenges

**Benefits.** The biggest benefit was catching mistakes before they became bugs. Several
errors in my HTML were things a browser silently accepts rather than reporting: I had
written `class=""projectsCard` with the quotes in the wrong place, so the class was never
applied; I had used `//` for comments, which is JavaScript syntax and renders as visible
text in HTML; and I had put `target="_blank"` outside the opening tag, where it displayed
on the page instead of working. None of these produce an error message, so I would have
spent a long time wondering why my CSS was not applying.

It was also faster than searching for explanations of concepts I had not studied yet. I
have not taken JavaScript, so having the DOM methods explained in the context of my own
code was more useful than reading generic documentation.

**Challenges.** The advice was not always right for my situation. When I asked how to put
the project cards side by side, the suggestion was CSS Grid; I used Flexbox instead, because
it matched the W3Schools examples and the approach used in the course. I also rejected a
suggested change to my secondary text colour, because I preferred how the lighter grey
looked even though it has lower contrast.

A second challenge was that feedback was sometimes based on an older copy of my files, so I
was told to fix things I had already fixed. This meant I could not take the review at face
value and had to check each point against my actual code.

The largest single problem was one AI advice did not predict: my dark theme appeared not to
work at all after I set it up. The cause was that four colours in my stylesheet were still
written as literal values — `aliceblue`, a hardcoded pink, and two `#7a5c3e` borders — so
they could not respond to the theme variables. Nothing was wrong with the toggle; the
problem was in code I had written earlier, and I had to trace it myself before the advice
about palettes was of any use.

---

## Learning Outcomes

Working through this assignment, I learned:

- **Separation of concerns.** HTML holds structure, CSS holds appearance, JavaScript holds
  behaviour. My theme toggle contains no colour values at all — it changes one attribute,
  and the stylesheet does everything else.
- **CSS custom properties.** Defining the palette once as variables meant adding a whole
  second theme took one extra block of six lines instead of rewriting every rule.
- **How Flexbox axes work.** `justify-content` and `align-items` swap meaning depending on
  `flex-direction`. This is why my footer would not centre horizontally at first — it was a
  row, so I needed `justify-content`, not `align-items`.
- **Margins do not collapse inside a flex container.** They add to `gap` instead, which is
  why my spacing was roughly three times what I expected until I removed the browser's
  default margins.
- **The viewport meta tag.** Without it, mobile browsers render a page at about 980px and
  zoom out, so my responsive CSS never triggered. My layout had been correct the whole time;
  the browser was never told the real screen width.
- **Relative vs root-relative paths.** A leading `/` in an image path breaks on GitHub Pages,
  because it resolves from the domain root rather than the project folder. GitHub is also
  case-sensitive about filenames where macOS is not.
- **GET vs POST.** GET puts data in the URL and is for retrieving; POST puts it in the request
  body and is for actions with an effect. A contact form is POST.
- **Basic DOM work.** `querySelector`, `addEventListener`, `getAttribute` and `setAttribute`,
  and why `===` is used instead of `==`.

---

## Responsible Use & Modifications

I wrote the HTML and CSS myself and used AI for guidance, explanation and review rather than
generation. When I did ask for code — the theme toggle event listener — I asked for it only
after working through the logic step by step, and I can explain what every line does.

I did not accept suggestions unchanged. Specific cases:

- **Layout method.** Grid was recommended for the project cards. I used Flexbox, which I
  understood better and which matched the course material.
- **Link styling.** I was advised to move the italic and bold on my links out of the HTML and
  into CSS. I kept them as they were.
- **Text colour.** A darker secondary colour was recommended for contrast. I kept my original
  and instead documented the limitation honestly in the technical documentation.
- **Footer centring.** I worked this out myself rather than using the suggested code.
- **Colour palette.** I rejected the first dark palette I was given and chose a different one
  from a set of options.
- **Code comments.** The first set of comments written for my CSS and JavaScript were too long
  and did not sound like me, so I asked for shorter ones and edited them further.

AI was used to draft my `README.md` and `docs/technical-documentation.md`. I reviewed both
against my actual code, corrected statements that were not true of my project, filled in the
sections only I could answer, and edited the wording before committing them. Both describe
decisions I made and can explain.

Every piece of code in this repository was read and understood before it was committed. The
table below records each interaction, what I asked for, what I received, and what I changed.

---

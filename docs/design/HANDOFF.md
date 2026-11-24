# Portfolio rebuild: handoff

Written 2026-10-31 at the end of the first design session. Read this first, then open the three mock files in this folder.

## What we are doing

Amish is replacing the 3-year-old portfolio (Next.js 13 + Tailwind one-pager, student-era content) with a new site. The repo stays; the old site must remain in git history. Nothing in the repo has been changed yet. The working tree is clean on `main`, last commit `55ab9d6 testing`. Do not commit or wipe anything without asking.

The first session was pure design brainstorming through questions and mocks. The next step is building.

## Goal and audience

- **Primary goal:** get hired. In about 7-8 months (around mid-2027) Amish wants to move to a FAANG-level company or a startup. The site should read as a strong, confident engineer who builds critical systems.
- **Secondary goal:** personal brand, with personality visible in the details.
- **First impression wanted:** warmth, with craft and taste behind it.
- **Interaction level:** a few well-chosen scroll-driven moments, not constant motion.
- **Writing/blog:** wanted eventually. Build the structure now and ship it as a "coming soon" shell.

## Hard constraints (important)

1. **Never say "legacy"** anywhere (copy, headings, descriptions, comments in user-facing text). Amish works on a mature, complex codebase and does not want the age of it to define him. Describe the work by skills and ownership, for example "a large, complex product", "a custom architecture".
2. **Confidentiality is real.** Do not name the client, the product, or the domain (no "energy", "grid", "Advanced Energy Management System"). Say "mission-critical systems" and let the experience speak. Do not lead with the employer name (TCS) either. Amish wants to be seen as a product engineer, not as "services".
3. **Do not look AI-made.** Instrument Serif is out, because it has become a giveaway. Other fonts tried and rejected: Archivo, Schibsted Grotesk, Newsreader, Libre Caslon Display, Bodoni Moda, Gloock, for the headline. Also avoid the common recipe of cream paper + serif display + terracotta accent + mono labels + grain used together.
4. **Do not box him into a tech stack.** No strip of languages under the hero. He wants to be seen as someone who is not defined by one language or stack.
5. **Don't clutter the hero.** No eyebrow line above the headline.

## Decisions made

- **Headline (final):** "I build systems that stand the test of time."
- **Supporting line (final):** "Hi, I'm Amish, a software engineer who builds mission-critical systems." (Use "software engineer", not "product engineer", because "product engineer" means product-facing full-stack at many startups and would misplace a systems/backend profile.)
- **Main hero button:** "See my experience".
- **Accent:** amber (warm and soothing, fits Diwali season). Keep.
- **Themes:** light and dark both, with a switch (auto / light / dark). Dark is the hero look.
- **Portrait:** a real photo, to be provided later. Use a placeholder for now. Treatment idea: duotone or film grain that works in both themes.
- **Hero concept (chosen):** the "lit room". The headline is dim, and a warm light follows the cursor (or drifts on its own, or follows touch) and lights the letters under it. Amish loves this and says it is eye-catching and does not look AI-made. His concern: it is slightly hard to read, and fitting the big text to all screen sizes will be work.
- **Merge decision:** use the lit-room hero and the scroll-lit "credits" for the first impression, then calm editorial sections for everything people read.
- **Tech stack (recommended, not yet confirmed by Amish):** Astro + Tailwind, MDX content collections for the writing section, and GSAP ScrollTrigger (or small vanilla JS) for scroll moments. Reason: content-first, very little JavaScript by default, easy blog later. Next.js would also work.

## Section order

1. Hero (lit room)
2. Experience (end-credits style, one verb per line: Designed, Built, Documented, Owned, Released; the light moves down the page as you scroll)
3. Selected work (plain readable list)
4. About (portrait, short story, four films)
5. Writing ("coming soon" shell)
6. Contact (large "Let's talk." plus LinkedIn, GitHub, Resume)

## Files in this folder

| File | What it is |
| --- | --- |
| `merged.html` | **The current direction.** Lit-room hero and credits, then readable sections, light and dark. Start from this. |
| `experimental.html` | The lit-room concept alone (dark only). Amish loved the hero. |
| `index.html` | The first editorial concept, with a dropdown of all seven headline fonts. Kept for reference and for its readable layout. |
| `HANDOFF.md` | This file. |

All are standalone HTML files. They load Google Fonts, so they need an internet connection. The folder is outside the repo (`Desktop\portfolio-mock`) so the repo stays clean. None of the mocks has been checked by a screenshot or a phone-width test.

## Design tokens in `merged.html`

- **Dark:** bg `#0B0907`, bg-2 `#12100C`, ink `#EFE6D6`, muted `#A09584`, dim headline `#7A6E5D`, lit headline `#FFD79A`, accent `#F5A93A`, line `#2A241C`.
- **Light:** bg `#EEECE5`, bg-2 `#E6E3DA`, ink `#16130E`, muted `#615C51`, dim headline `#8E8676`, lit headline is the ink colour, accent `#A85A00`, line `#CCC7B9`.
- **Fonts:** Big Shoulders Display (900, uppercase) for the hero, credit verbs, section titles and "Let's talk."; Geist for body text; Geist Mono for small labels.
- **Hero size:** `clamp(3.2rem, 12.5vw, 12rem)`, line-height 0.88, `text-wrap: balance`.
- **Mechanics:** two stacked copies of the headline (dim base and lit top layer). The top layer uses a radial `mask-image` centred on the lamp position. JS updates `--lx/--ly` (headline) and a fixed `.halo` element. The credits set a `--lit` value (0.2 to 1) from distance to the middle of the viewport.

## Open items

- **Headline font:** Big Shoulders Display is the working choice. Amish has not explicitly confirmed it as final (he loved the experimental mock, which uses it).
- **Readability pass on the hero:** the dim headline color was raised in `merged.html` for contrast (about 4:1 in dark). Test on real phones, small laptops and very wide screens. Check the light theme too.
- **Portrait:** Amish will find one.
- **Real copy:** experience, projects, and about text are drafts for layout only (marked "Draft copy"). Facts to build the real copy from are below.
- **Projects:** only Dev Support is real (old site: Next.js, Tailwind, Firebase blog app, https://dev-support.vercel.app/, https://github.com/thisisamish/dev-support). Two placeholders remain. Ask what else he wants to show, including newer or work-adjacent things that are safe to show.
- **Resume link:** the old site linked a Google Drive PDF. Ask for the current one.
- **Email:** the old site used `amishhverma@gmail.com` but the account email in this session is different. Do not assume. Ask which address to show, or use a contact form or LinkedIn only.
- **Scroll moments:** hero light, credits light, and one calm transition into About. Add the transition.
- **Nav links in the first two mocks** do not all go to real sections. `merged.html` has real anchors.

## Facts about Amish (for writing the real copy)

- Systems Engineer at TCS, working as a Product Engineer on a client's widely adopted software product suite. Joined that project about 13 months ago (as of Oct 2026). Do not name the client, domain or product.
- Day to day: feature refinement, technical design, development, documentation, supporting the services team on rollouts to existing customers, defect resolution, some testing and automation.
- **Proudest of:** the technical design, implementation and documentation of two critical features. He designed them largely on his own. The codebase had a complex custom architecture, little documentation, and no onboarding or knowledge transfer. He still understood the requirements, designed, implemented, documented, and supported two product releases (one internal, one external) in 13 months.
- Also: wrote onboarding guides and explainer documents, owns a subsystem of three modules, has working expertise in two more. His team lead recommended him to the product manager as the highest-impact person on the team.
- Tech: C, Java, Oracle, Bash, distributed systems on Linux. Earlier: the full MERN stack, React, Next.js, Tailwind, Firebase. He describes himself as having grown from "knows the latest tech like React" to "systems programmer who knows the latest tech and the fundamentals".
- Personality: helpful, the go-to person when someone has a tech problem, emotionally intelligent, hard worker, curious about everything, notices details. Eclectic, critical, questions the status quo, eager to learn.
- Origin story from the old site: as a child he clipped tech columns from the Sunday newspaper hoping to build apps like them. Learned C, Python, C++, then web development.
- Interests: books, films (loves dissecting cinema), noodles.
- Four favourite films: Flee (2021), The Substance (2024), All of Us Strangers (2023), Veer-Zaara (2004).
- Links from the old site: LinkedIn https://www.linkedin.com/in/amishverma/, GitHub https://github.com/thisisamish, Twitter https://twitter.com/thisisamish, Instagram https://www.instagram.com/thisisamish/ (confirm which to keep; the old site's "digital nomad" line is dropped).
- The plan to leave the company in about 7-8 months is private. Do not put it on the site.

## Plan for the next session

1. Open `merged.html` in a browser and get Amish's reaction. Fix anything he dislikes (readability, spacing, hero size on small screens). Ask him to confirm Big Shoulders Display.
2. Confirm the tech stack (Astro recommended).
3. Draft the real experience, about, and project copy together. Follow the hard constraints above.
4. Preserve the old site: `git tag v1-2023` on the current commit (and ask before pushing anything).
5. Create a new branch, remove the old files in one commit, scaffold the new project, and port the merged design.
6. Test on phone widths, both themes, and with reduced motion enabled. Check Lighthouse, accessibility (the hero uses `aria-label` on the h1 and `aria-hidden` on the visual layers), and keyboard focus.

## How Amish likes to work

- He wants a brainstorming partner who asks questions and gives a clear recommendation when he asks. Short, decisive answers.
- He reacts quickly to visuals, so show a mock instead of describing a design. He views files locally, because the hosted artifact link did not work for him.
- Commit messages need the attribution line the session system gives. Do not commit unless he asks.

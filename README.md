# CampusPe Connect

A responsive JavaScript and Next.js App Router recreation of the supplied CampusPe landing-page design. “CampusPe Connect” is the project name only; CampusPe remains the interface brand.

## Technology

- Next.js App Router
- React and JavaScript
- Semantic HTML and CSS
- CSS-only layout, artwork treatment, hover effects, and responsive behavior
- No UI or animation libraries; no backend or external API

## Run locally

The current development environment did not include Node.js or npm, so these commands have not been run here. Install a current Node.js LTS version first, then run:

```bash
npm install
npm run dev
```

Visit http://localhost:3000. For a production build and local production server:

```bash
npm run build
npm start
```

## Project structure

```text
app/
  globals.css       Design tokens, page styles, breakpoints, interaction states
  layout.js         App Router document shell and page metadata
  page.js           Landing page sections and small interactive components
public/
  assets/           Supplied design artwork and icon exports
.gitignore
next.config.mjs
package.json
README.md
```

## Page and interactions

The page follows the supplied desktop design and PDF copy: sticky navigation, search-led hero, student/college/employer cards, stats and partner marks, opportunity discovery feed, resume upload mock, college features, employer workflow, app showcase, support CTA, and footer. The narrow layout stacks the same sections instead of introducing mobile-only content.

- Header: CampusPe logo returns to the top; navigation anchors to the appropriate sections; mobile menu toggles, closes on Escape, and closes after navigation.
- Search: entering a query opens a locally composed email with that query; empty search takes the visitor to the opportunity preview. This does not perform a real search.
- Opportunity filters: change the cards shown in the local feed preview.
- Resume picker: checks the local filename extension and 10MB size limit; the selected file is not uploaded or stored.
- College/employer/contact CTAs: use the visible design contact email or phone because application and signup destinations were not supplied.
- Footer links: route to the corresponding local page section, or contact email for policies; no policy pages are included.
- Buttons, navigation, cards, and inputs include hover/focus/active treatment; motion is reduced for `prefers-reduced-motion`.

## Design notes and assumptions

- Figma source: [CampusPe landing-page board](https://www.figma.com/design/WaeD7Di3IwHezkJVuE37Fz/Untitled--Copy-?node-id=0-1&p=f&t=dwRrCc3rZOWqWhAW-0). The supplied Figma board and PDF text export were accessible during implementation.
- No mobile Figma frame was supplied. Mobile uses a stacked reflow of the same content.
- Exported font metadata was unavailable; the stylesheet uses DM Sans and Manrope with system fallbacks. Google Fonts are requested by CSS when internet access is available.
- Supplied artwork is copied into `public/assets`. The hero illustration is recreated from CSS shapes and preview cards because no full hero screenshot/illustration was provided among those image exports. Partner wordmarks and the app preview are simplified illustrations, not supplied brand/product screenshots.
- The supplied CTA image is used at desktop widths, with accessible links positioned over its two illustrated buttons. On narrow screens the section switches to readable live text and buttons rather than shrinking the desktop artwork.
- CTA destinations beyond `contactus@campuspe.com` and `+91 6362606464` were not present in the source. No signup, waitlist, external app store, or scheduling endpoint is claimed to work.

## Checks and limitations

- Confirmed the Figma board is accessible and reviewed the supplied PDF copy and PNG asset dimensions. Validated `package.json` as JSON and verified local asset paths by inspection.
- A build, lint, browser preview, exact viewport comparison, responsive overflow check, and automated interaction check could not be performed in this environment because Node.js/npm are unavailable and no project runtime is installed.
- No actual GitHub repository was supplied or created, and no account authorization was available to publish this project. No live URL is claimed.
- Before submission, install Node.js, run the commands above, inspect 360px, 390px, 768px, 1024px, and 1440px, and connect any real signup, waitlist, scheduling, app-store, or policy destinations provided by CampusPe.

## CampusPe submission message

> Hi CampusPe team, I’ve completed a responsive JavaScript/Next.js recreation of the supplied landing-page design. The page includes the main student, college and employer journeys, opportunity-feed and resume-upload demos, responsive navigation, and accessible interaction states. I’ve documented the local-only behavior and the destinations that still need official CampusPe URLs.

## Two-minute walkthrough

1. “I used the App Router because this is a single marketing page, so the document shell and metadata live in `app/layout.js`, while the page content is in `app/page.js`.”
2. “The header, journey cards, section label, opportunity feed, college feature cards, app preview, and footer are separate focused components. Small data arrays make repeated cards consistent.”
3. “The stylesheet keeps repeated colors, widths, radii, and shadows in CSS variables. A two-column desktop layout becomes a single-column, scrollable mobile layout, with the navigation changing to a keyboard-operable menu.”
4. “The opportunity filters and resume-file selection are clearly local demos. The resume control validates the file name and size, but does not send files to a server.”
5. “The original brief did not include real signup or app endpoints. I therefore used the visible support email and phone rather than inventing services; those can be wired up when the official URLs are available.”

## Five likely interview questions

**1. Why use App Router here?**  
It is the current built-in Next.js routing system, and its root layout provides a natural place for page metadata and global styles without adding an extra dependency.

**2. How does the mobile menu support keyboard users?**  
It is a real button with an accessible name, `aria-expanded`, and `aria-controls`. Pressing Escape closes it, and choosing a link closes the menu.

**3. What is the opportunity search actually doing?**  
It preserves the query and composes a `mailto:` enquiry; it does not claim to query a live CampusPe search API. A real search needs an official destination or API.

**4. Does the resume uploader store the visitor’s file?**  
No. It checks the selected local file’s extension and 10MB limit and reports the result in the page; there is no upload endpoint or backend.

**5. What would you check before merging?**  
Run the production build, compare a screenshot with the Figma at the same desktop dimensions, test mobile and tablet widths for overflow, operate the mobile menu and controls by keyboard, and confirm official CTA URLs with the product team.

## Repository and deployment

- Project name: **CampusPe Connect**.
- GitHub repository: pending — credentials are not configured in this environment, so the repository must be created manually.
- Live deployment: pending — Vercel deployment must be triggered manually after the repository is pushed.

### Steps to publish (run from the project root)

```bash
# 1. Create the public GitHub repository
#    Option A — GitHub CLI (install from https://cli.github.com/):
gh repo create campuspe-connect --public --description "CampusPe landing page - responsive Next.js implementation"

#    Option B — GitHub web UI:
#    Go to https://github.com/new, name the repository campuspe-connect,
#    keep it Public, and create it without a README/.gitignore/LICENSE.

# 2. Push the local repository
git remote add origin git@github.com:nishant233032024/campuspe-connect.git
git branch -M main
git push -u origin main

# 3. Deploy to Vercel
#    Option A — Vercel CLI (install from https://vercel.com/cli):
vercel --prod

#    Option B — Vercel web UI:
#    Go to https://vercel.com/new, import the GitHub repository
#    nishant233032024/campuspe-connect, keep the default Next.js settings,
#    and click Deploy.

# 4. After deployment, update this README with the real URLs.
```

### Actual URLs

- GitHub repository: _pending_ — https://github.com/nishant233032024/campuspe-connect (create and push first)
- Live deployment: _pending_ — Vercel will assign a URL such as `https://campuspe-connect.vercel.app` after deployment

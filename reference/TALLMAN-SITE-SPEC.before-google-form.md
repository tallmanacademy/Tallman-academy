# Tallman Academy Website: Rebuild Specification

**Purpose.** This file is a complete build brief for Claude Code (or any developer) to recreate tallmanacademy.com so it looks and behaves the same as the current UENI site, but as a self-hosted static website that Billy owns outright.

**Source.** Captured on October 16, 2026 from https://www.tallmanacademy.com (19 pages). Every size, color, and position below was measured from the live site in a real browser at 1440px (desktop) and 375px (mobile) widths.

**How to use this file (instructions for Claude Code).**

1. Read this whole file before writing code. Sections 6 to 9 contain the exact CSS, JavaScript, shared HTML, and per page HTML. Use them verbatim unless a decision in Section 2 says otherwise.
2. The `images/` and `icons/` folders that sit next to this file hold every asset. Copy them into the project as `assets/images/` and `assets/icons/`.
3. `starter/` contains a working build generated from this exact spec. You may start from it, but this file is the source of truth.
4. Verify against `reference/screenshots/desktop/` (screenshots of the original site) using the checklist in Section 11. Target: every section top within 5px of the reference at 1440px wide.
5. `reference/snapshot/` is an offline copy of the original site for measuring only. Do not copy its HTML or CSS into the new site (it is UENI's proprietary code and is not needed).


## 1. Folder Contents

```
tallman-academy-site/
  TALLMAN-SITE-SPEC.md        <- this file
  images/                     <- 18 images used on the site (descriptive names)
  images/unused/              <- 18 more images found in the UENI media library but not shown on any page
  icons/                      <- 12 SVG icons used on the site
  starter/                    <- finished reference build of this spec (static HTML/CSS/JS)
  reference/screenshots/desktop/   <- full page screenshots of the ORIGINAL site at 1440px
  reference/screenshots/mobile/    <- full page screenshots of the starter build at 375px (verified against live mobile measurements)
  reference/snapshot/         <- offline copy of the original pages (measurement only)
```


## 2. Decisions and Inputs (defaults already applied)

These items cannot be copied from the old site, because the old site relied on UENI for them. The defaults below are already built into this spec. Change them only if Billy wants something different.

| # | Item | Default used in this spec | What you need to provide or decide |
|---|---|---|---|
| 1 | **Hosting** | Static site on Netlify, Vercel, or Cloudflare Pages (all have free tiers) | Pick one and connect the tallmanacademy.com domain (DNS A/CNAME records at the domain registrar) |
| 2 | **Contact form backend** | `<form action="FORM_ENDPOINT" method="POST">` | Create a free Formspree form (or use Netlify Forms) that emails billy@tallmanacademy.com, then replace `FORM_ENDPOINT`. With Netlify Forms instead, add `data-netlify="true" name="contact"` to the form and drop `action` |
| 3 | **"powered by UENI" footer badge** | Removed (the new site is not UENI). The right side of the footer is an empty `.footer-note` slot | Optionally put "© 2026 Tallman Academy" in `.footer-note` |
| 4 | **Consent checkbox text** | UENI terms replaced with links to Tallman Academy's own Terms and Privacy pages. reCAPTCHA sentence kept | Delete the reCAPTCHA sentence if the form provider does not use reCAPTCHA |
| 5 | **Cookie banner** ("We respect your privacy... Accept") | Not rebuilt (it existed only for UENI's tracking) | Add one only if analytics with cookies is added |
| 6 | **Analytics** | None | Old site used Google Tag Manager `GTM-TG56DMZ`. Add it back only if Billy still uses that GTM account |
| 7 | **Privacy policy text** | Copied verbatim from the old site (a generic UENI e-commerce template) | Recommend having Billy approve or replace it, since it mentions purchases and shipping that the site does not do |
| 8 | **Phone number** | None (the old site shows none) | Add if Billy wants one |
| 9 | **Typos in testimonials** ("Billy bring", "I have have") | Kept verbatim, as on the live site | Fix only with the quote author's okay |
| 10 | **Servant Leader blog post** | Included in full (Billy has permission to republish it) | Nothing |
| 11 | **Favicon** | `logo.png` (the old favicon was a generic UENI icon) | Nothing |


## 3. Tech Stack and URL Structure

* Plain static HTML, one shared CSS file, one small vanilla JS file. No framework, no build step required.
* Fonts from Google Fonts: **Cinzel** (400, 500, 600, 700) for headings and **Lora** (400, 500, 600, 700, italic 400) for body text.
* Keep every old URL so links and Google rankings carry over. Use folder style pages (`/offerings/index.html` serves `/offerings`). All internal links are root relative (`/blog`, not `blog.html`), so test with a local server (`python3 -m http.server`), not by double clicking files.

| URL | Page | Browser `<title>` |
|---|---|---|
| `/` | Home | Tallman Academy |
| `/offerings` | Services | Tallman Academy |
| `/blog` | Blog index | Blog |
| `/blog/elevating-the-guest-experience-be-the-reason-they-choose-you` | Post 1 | Elevating the Guest Experience: Be the Reason They Choose You |
| `/blog/unlocking-your-team-s-potential-with-the-right-culture` | Post 2 | Unlocking Your Team's Potential with the Right Culture |
| `/blog/becoming-a-trusted-servant-leader-3-ways-to-engage-and-retain-your-people` | Post 3 | Becoming a Trusted Servant Leader – 3 Ways to Engage and Retain Your People |
| `/blog/the-impact-of-effective-leadership-on-restaurant-success` | Post 4 | The Impact of Effective Leadership on Restaurant Success |
| `/contact-us` | Contact | Tallman Academy |
| `/meet-billy-tallman` | Meet Billy (team card) | Meet Billy Tallman |
| `/meet-billy-tallman/billy-tallman` | Billy's bio | Billy Tallman |
| `/about-us/be-the-leader-in-customer-excellence-6474675` | About 1 | Be the leader in customer excellence - Tallman Academy |
| `/about-us/empowering-excellence-every-step-of-the-way-6474676` | About 2 | Empowering Excellence, Every Step of the Way - Tallman Academy |
| `/services/business-support-services/speaking-engagements-150397738` | Service 1 | Speaking Engagements - Business Support Services - Tallman Academy |
| `/services/business-support-services/consulting-150407341` | Service 2 | Consulting - Business Support Services - Tallman Academy |
| `/merchant-policies` | Merchant policies | Tallman Academy |
| `/legal-notice` | Legal notice | Legal Notice |
| `/terms-and-conditions` | Terms | Tallman Academy |
| `/privacy-policy` | Privacy | Tallman Academy |
| `/return-and-refund-policy` | Refund policy | Tallman Academy |

**Meta description on every page:** "Trust Tallman Academy with your business needs in the Twin Cities and beyond with speaking engagements, consulting, and custom print solutions."
**Open Graph image:** `/assets/images/hero-restaurant.jpg` (1920x1080). **Site name:** Tallman Academy. **Canonical domain:** https://tallmanacademy.com (redirect `www.` to the bare domain, as the old site did).

Also generate `sitemap.xml` listing all 19 URLs and a `robots.txt` that allows everything and points to the sitemap.


## 4. Design System

### 4.1 Colors

| Token | Hex | Used for |
|---|---|---|
| `--primary` | `#004F71` | Section title bars, buttons, icons, card outlines, active carousel dot |
| `--accent` | `#0096D7` | 30x2px line after every section title |
| `--ink` | `#000000` | Body text |
| `--ink-soft` | `#333333` | About card headings, "LEARN MORE" links, form title |
| `--section-gray` | `#E6E6E6` | Contact section background, form input fill |
| `--footer-gray` | `#CCCCCC` | Footer background, input borders |
| `--chip-border` | `#C26E1A` | Outline of the six home page "amenity" chips |
| `--topbar-text` | `#DED9D8` | Home page top bar location text |
| `--dot-inactive` | `#D9D9D9` | Inactive carousel dots |
| `--placeholder` | `#F2F2F2` | Testimonial photo background while loading |
| Hero overlay | `rgba(0,0,0,.4)` | Darkens the hero photo |
| Top bar | `rgba(0,0,0,.2)` | Home top bar and mobile home header background |

### 4.2 Typography

All sizes are the exact computed pixel values from the live site (UENI scales a 16px base by 1.0268 for body and 0.9866 for headings, which is why they are not round numbers).

| Role | Font | Size / line height (desktop) | Mobile | Weight | Other |
|---|---|---|---|---|---|
| Body | Lora | 16.43 / 22.37px | same | 400 | |
| Paragraph prose | Lora | 16.43 / 29.83px | same | 400 | 16.43px gap between paragraphs |
| Hero title (h1) | Cinzel | 53.28 / 80.23px | 37.49 / 56.5px | 700 | letter-spacing 1px, white, centered |
| Hero subtitle | Cinzel | 30.86 / 46.48px | 23.68 / 35.7px | 400 | letter-spacing 1px, white, centered |
| Section bar title | Cinzel | 27.63 / 32.5px | 23.68 / 30.65px | 700 | white |
| Card / block heading (h3) | Cinzel | 23.68 / 30.65px | 19.73 / 20.43px | 700 | |
| Detail page title (h1) | Cinzel | 31.57 / 44.57px (about page: 32.1 / 45.32px) | service 27.63 / 32.5px, about 32.1 / 37.8px | 700 | |
| Small heading (h4, labels) | Cinzel | 17.76 / 26.74px | same | 500 or 700 | |
| Nav links | Lora | 15.40 / 20.98px | same | 400 | UPPERCASE |
| Testimonial name | Lora | 20.54 / 27.97px | same | 500 | centered |
| Small text, buttons, footer | Lora | 14.38px | same | 400 | |
| Consent text, top bar | Lora | 12.32px | same | 400 | |
| "LEARN MORE" caps link | Lora | 11.29 / 15.38px | same | 500 | UPPERCASE, 1px black underline |

Note: Cinzel is an all caps typeface, so headings look like small caps automatically. Do not add `text-transform`.

### 4.3 Layout

* **Content width:** 1024px, centered. At 1440px wide the content starts at x=208. Below 1088px wide, keep 32px side gutters; on mobile (≤768px) 16px gutters.
* **Breakpoint:** one breakpoint at 768px (`@media (max-width: 768px)`).
* **Section rhythm:** most sections have 60px top and bottom padding (40px on mobile).
* **Section title bar ("band"):** full width `#004F71` bar, 60px tall (grows if the title wraps). Title in white Cinzel, followed 30px later by a 30x2px `#0096D7` line. A small downward triangle notch (16px wide, 8px tall, `#004F71`) hangs below the bar, 5px in from the content's left edge.

### 4.4 Effects

| Element | Effect |
|---|---|
| Nav link hover | 1px underline grows from the left (scaleX 0 to 1, 0.3s) |
| Primary button hover | Swaps to white background with `#004F71` text, 0.22s ease-in |
| Blog card hover | Adds `box-shadow: 0 10px 25px rgba(0,0,0,.2)`, 0.3s |
| Footer link hover | Color to `#1A1A1A` |
| Hero mail button | `box-shadow: 0 4px 14px 1px rgba(0,0,0,.41)`; slight scale on hover |
| Ready card | `box-shadow: 0 15px 35px rgba(0,0,0,.1)`, radius 3px |
| Chips | `box-shadow: 0 10px 25px rgba(0,0,0,.1)`, radius 30px |
| Testimonial cards | `box-shadow: 0 10px 20px -8px rgba(0,0,0,.4)`, radius 4px |
| Form card | `box-shadow: 0 20px 60px rgba(0,0,0,.2)`, radius 4px |
| Floated detail images | `box-shadow: -15px 25px 40px -24px rgba(50,50,50,.46)` (about page: `0 20px 50px rgba(0,0,0,.3)`) |


## 5. Page by Page Layout

Positions are `x, y, width x height` in pixels measured on the ORIGINAL site at 1440px wide (desktop) or 375px wide (mobile). y is measured from the top of the page.

### 5.1 Shared header

**Home page (desktop):** transparent, sits on top of the hero photo.
* Top bar: 0 to 59px tall, `rgba(0,0,0,.2)`. Contains a small map pin icon and "Minneapolis, Minnesota" (Lora 12.32px, `#DED9D8`) at x=208, linking to Google Maps.
* Nav row: y=59, 65px tall. Links right aligned (last link ends at x=1216): HOME, SERVICES, BLOG, CONTACT, MEET BILLY TALLMAN, white, 8px 12px padding each.
* Logo: 140x140px, x=208, y=102 (it overlaps the hero).

**Every other page (desktop):** white sticky bar, 65px tall. Logo 37x37 at x=208, y=14. Same nav links in black. No underline on the current page.

**Mobile (all pages):** 54px bar. Logo centered (120x120 on home, overlapping the hero; 44x44 elsewhere). Hamburger (three 20x2px lines, white on home, black elsewhere) at the right, 18px from the edge. Tapping it opens a full screen white menu below the bar with the five links centered and stacked (47px rows); the current page link is `#004F71` with a 24x1px `#004F71` line under it. A floating 48px round `#004F71` mail button (mailto:billy@tallmanacademy.com) is fixed at bottom center, 58px from the bottom of the screen.

### 5.2 Home (`/`)

| # | Section | Desktop | Mobile |
|---|---|---|---|
| 1 | Hero (photo `hero-restaurant.jpg`, cover, 40% black overlay) | 0, 0, 1440x817. Title top y=371 (80px tall), subtitle y=500 (2 lines), round mail button 60x60 centered at y=653 | 375x574. Title y=160 (2 lines), subtitle y=337 (4 lines). Mail button 52x52 at right 16px, top edge 3px below the hero (overlaps the About bar) |
| 2 | About bar "About" | y=817 | y=574 |
| 3 | About card 1 | 208, 877, 1024x502. Photo 573x502 left, white text panel 450 wide right (padding 28px 30px). White 10px triangle on the panel's left edge at 160px from top, pointing at the photo. Soft gray shadow (about 50px) under the photo | Photo full width 375x326, then text panel (padding 20px 16px 40px) |
| 4 | About card 2 | 208, 1443 (64px gap). Mirror image: text panel left, photo right, triangle on the panel's right edge | Same as card 1 |
| 5 | Ready for Success card | Section 1945 to 2282. Card 208, 2005, 1024x217: image 160x160, then heading, paragraph, "LEARN MORE" (Cinzel 17.76 weight 900 underlined, links to /offerings) | Stacked: square image full card width (311x311), text below |
| 6 | Chips | Section 2281 to 2562. 3 columns x 2 rows of 297x60 pills starting at x=228, 41px column gap, 21px row gap | One column, full width, 20px gap |
| 7 | Contact (no form on home) | Bar at y=2563, gray section to 2888. "Location" (pin icon) at x=208 and "Email" (envelope icon) right aligned to x=1232, both at y=2715 | Bar y=3354. Items stacked |
| 8 | Testimonials | Bar at y=2888, section to 3738. Carousel of 6 cards (247x607): 3 visible, centered between two arrow buttons (64x64 at x=208 and x=1168). Dots 30x3px at y=3675 | Bar y=3736. One 283px card visible with the next one peeking; swipe; no arrows |
| 9 | Footer | y=3738, 77px tall | y=4542 |

**About card text is truncated with a literal " ..." on the home page** (exact strings are in the HTML in Section 9.1). "LEARN MORE" sits at the bottom right of each panel.

**Testimonial card anatomy:** photo 247x270 (cover), name (Lora 20.54 weight 500, up to 3 lines), quote clamped to 3 lines with an underlined "Read more" button under it (opens a dialog with the full quote), date, then five filled `#004F71` stars (28x20 each). Order: Carlotta Flores, James Finlinson, Denise Martin, Martin Madewell, Chuck Hoskin Jr., Michael Fairbanks. The carousel loops.

### 5.3 Services (`/offerings`)

* Bar "Empowering Hospitality Excellence" (y=65).
* "Business Support Services" (Cinzel 23.68, `#004F71`, centered) at y=179.
* Two service cards (307 wide) centered with a 32px gap at y=265: image 307x220 (radius 3px), title (Cinzel 17.76 weight 700), 3 line clamped description, underlined "Read More". Section ends y=728.
* "The Big 6 Culture" (same style as above) at y=781, then six Cinzel 17.76 weight 500 labels in 2 centered columns (490px each, 44px gap), rows 76px apart: Communication, Consistency / Sense of Urgency, Teamwork / Excellence, Accountability. Section ends y=1151.
* Contact section with form (Section 5.9), then footer.

### 5.4 Blog index (`/blog`)

* Bar "Blog". Cards 320 wide, 3 per row, 32px column gap, 30px row gap, starting y=185.
* Card: 1px `#004F71` border, radius 3px. Title (Cinzel 23.68, up to 4 lines, 16px margin), image 318x220 edge to edge, excerpt (first paragraph, clamped to 5 lines), and a pill button "Read more ..." (40px tall, 1px `#333333` border, fully rounded). The 4th card's excerpt is `text-align: justify` (a quirk of the original, kept).
* Mobile: one column, image 265px tall.

### 5.5 Blog post pages

* Bar with the post title as the page `h1` (wraps to 2 lines on desktop for long titles; 65px tall).
* Image 512px wide (natural height) floated left with a 32px right margin, flush against the bar. Article text starts 30px below the bar and wraps around the image.
* Section subheads: posts 1 and 2 use italic paragraphs (`<p><em>`); post 4 uses Cinzel `h3`; post 3 uses bold numbered lead ins and bullet lists (40px indent).
* "Related" heading (Cinzel 23.68 weight 700) then the other three posts as blog cards. Then the contact section.
* Mobile: image full width above the text.

### 5.6 About detail pages

* Bar "About Us". Image 543px wide floated left (heavier shadow). Title `h1` (Cinzel 32.1px, left aligned) beside the image, then the full text. Mobile: image 199px wide centered, title below.

### 5.7 Service detail pages

* Bar "Business Support Services". Image 512px wide floated left. Title `h1` Cinzel 31.57px centered in the space beside the image. Full text. Then "More Services" (Cinzel 23.68 weight 500, `#333333`, 64px top margin) and the other service's card. Then the contact section.

### 5.8 Meet Billy (`/meet-billy-tallman`) and bio (`/meet-billy-tallman/billy-tallman`)

* Meet page: bar "Meet Billy Tallman"; one centered 320px card (1px `#004F71` border, radius 4px, padding 16px) with "Founder, Experience Specialist" (Cinzel 23.68 weight 700 `#333333`), a 260px circle photo darkened by an inset 32% black overlay, and "Billy Tallman" (Cinzel 17.76 weight 500). The whole card links to the bio.
* Bio page: bar "Founder, Experience Specialist"; 330px circle photo at x=208 (no overlay); right column starts at x=613: "Billy Tallman" (Cinzel 17.76 weight 500) then the two bio paragraphs. Mobile: photo centered (244px), name centered, text below.

### 5.9 Contact section with form (used on every page except home)

* Gray `#E6E6E6` section with a "Contact" bar.
* Left column: Location and Email items, starting 33px below the form card's top, 48px apart.
* Right: white form card 620px wide (x=612), padding 24px 40px. "Get in Touch" (Cinzel 23.68 weight 500 `#333333`, centered), intro paragraph centered, then a 2 column grid (260px fields, 20px gap): first name, last name, email, phone (pill inputs 38px tall, `#E6E6E6` fill, `#CCCCCC` 1px border, 27.5px radius, 14px icon inside at the left), full width Description (no box, just a 1px `#CCCCCC` bottom line, 80px tall), consent checkbox (24px `#004F71` outline box), and the "Send Message" pill button (190x48, `#004F71`, radius 80px) centered.
* The form has `id="message_request"`; the hero mail button and "Get in touch with us" links point to `/contact-us#message_request`.
* Mobile: form card full width (padding 28px 16px), one field per row, location and email above the card.

### 5.10 Policy pages

* Legal notice: three rows (label in Cinzel 17.76 weight 600 at 50% width, value in Lora), each with a 1px `#D8D8D8` bottom border: Business Name / Tallman Academy; Registered Company Name / Tallman Academy; Registered Office Address / Minneapolis.
* Merchant policies: 683px centered box. Row "Delivery methods": **Collection** / Free. Row "Payment options": **Payment methods accepted** + cash icon (`images/payment-cash.svg`). Then links: Terms & Conditions | Privacy Policy | Refund Policy.
* Terms and Conditions: "Please contact us for our full Terms & Conditions."
* Refund Policy: "Please contact us for our full Refunds & Returns Policy."
* Privacy Policy: full text in Section 9.

### 5.11 Footer (all pages)

`#CCCCCC`, 77px tall on desktop. Left: "Merchant Policies" | "Legal Notice" (Lora 14.38px, a 1x16px white divider with 16px space each side). Right: empty slot (see Decision 3). Mobile: centered, stacked.


## 6. Images

Copy `images/` to `assets/images/`. All are the original full resolution files downloaded from the UENI media library.

| File | Size (px) | Used on | Display |
|---|---|---|---|
| logo.png | 317x317 | Header on every page, favicon | 140px (home), 37px (inner), 120px/44px mobile |
| hero-restaurant.jpg | 1920x1080 | Home hero, social share image | cover, centered |
| about-customer-excellence.jpg | 600x400 | Home about card 1, About detail 1 | cover 573x502 / 543 wide float |
| about-empowering-excellence.png | 733x733 | Home about card 2, About detail 2 | cover 573x502 / 543 wide float |
| ready-for-success.jpg | 500x500 | Home Ready for Success card | 160x160 |
| service-speaking-engagements.jpg | 1080x720 | Services card, service detail | 307x220 cover / 512 float |
| service-consulting.jpg | 275x183 | Services card, service detail | 307x220 cover / 512 float |
| blog-elevating-the-guest-experience.jpg | 1920x1080 | Post 1 card and header image | 318x220 cover / 512 float |
| blog-unlocking-your-teams-potential.jpg | 728x514 | Post 2 | same |
| blog-trusted-servant-leader.jpg | 463x239 | Post 3 | same |
| blog-effective-leadership.jpg | 1080x720 | Post 4 | same |
| billy-tallman.jpg | 1545x2000 | Meet card, bio | circle 260px / 330px |
| testimonial-carlotta-flores.jpg | 3364x3581 | Testimonial 1 | 247x270 cover |
| testimonial-james-finlinson.jpg | 2048x2048 | Testimonial 2 | same |
| testimonial-denise-martin.jpg | 2602x3463 | Testimonial 3 | same |
| testimonial-martin-madewell.jpg | 750x686 | Testimonial 4 | same |
| testimonial-chuck-hoskin.jpg | 280x303 | Testimonial 5 | same |
| testimonial-michael-fairbanks.jpg | 2300x2470 | Testimonial 6 | same |
| payment-cash.svg | 48x32 | Merchant policies | inline |

**Performance:** several testimonial photos are 3000px+ and up to 900KB. Resize them to 600px wide (and the hero to 1920px, quality 80) before launch; they display at 270px or less. This does not change how the site looks.

`images/unused/` holds 18 other images from the old site's media library that no page displays (stock style restaurant and team photos, three 512px PNG icons, and two phone photos). They are kept in case Billy wants them later.


## 7. Icons

Copy `icons/` to `assets/icons/`. In the HTML below, `{{icon:NAME}}` means "paste the contents of `icons/NAME.svg` here inline" (inline so the icons inherit `currentColor`). Every icon uses `fill="currentColor"`.

| NAME | Used for |
|---|---|
| map-pin-small | Home top bar location |
| map-pin | Contact section "Location" (25px, `#004F71`) |
| mail | Contact section "Email" (25px) and mobile floating mail button |
| mail-hero | Hero round button (26px, white) |
| star-outline | Home chips (45px with 8px padding, `#004F71`) |
| star-filled | Testimonial rating (28x20 with 4px side padding) |
| arrow-left / arrow-right | Testimonial carousel arrows (40px with 8px padding) |
| id-card | First and last name inputs (14px) |
| mail-small | Email input (14px) |
| phone | Phone input (14px) |
| checkbox | Consent checkbox outline (24px). `{{icon:checkbox class="empty"}}` means paste `checkbox.svg` and add `class="empty"` to its `<svg>` tag. `{{checked-tick-svg}}` is the checked state, this inline SVG: `<svg viewBox="0 0 24 24" fill="currentColor" class="tick"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>` |


## 8. Code

### 8.1 `assets/css/site.css` (complete)

```css
/* =========================================================
   Tallman Academy: site stylesheet
   Measured from tallmanacademy.com at 1440px and 375px wide.
   Breakpoint: 768px (mobile is max-width: 768px).
   ========================================================= */

/* ---------- 1. Tokens ---------- */
:root {
  --primary: #004F71;          /* bands, buttons, icons, borders */
  --accent: #0096D7;           /* 30x2 line after band titles */
  --ink: #000000;              /* body text */
  --ink-soft: #333333;         /* card headings, "Learn More" */
  --section-gray: #E6E6E6;     /* contact section background, input fill */
  --footer-gray: #CCCCCC;      /* footer background, input border */
  --chip-border: #C26E1A;      /* amenity chip outline */
  --topbar-text: #DED9D8;      /* home top bar location text */
  --dot-inactive: #D9D9D9;     /* carousel dots */
  --placeholder: #F2F2F2;      /* testimonial image placeholder */
  --rule: #D8D8D8;             /* legal notice row divider */

  --font-heading: "Cinzel", serif;
  --font-body: "Lora", serif;

  /* type scale (desktop) */
  --fs-body: 16.43px;    --lh-body: 22.37px;  --lh-prose: 29.83px;
  --fs-small: 14.38px;   --fs-xsmall: 12.32px; --fs-tiny: 11.29px;
  --fs-nav: 15.40px;     --lh-nav: 20.98px;
  --fs-h4: 17.76px;      --lh-h4: 26.74px;
  --fs-h3: 23.68px;      --lh-h3: 30.65px;
  --fs-band: 27.63px;    --lh-band: 32.50px;
  --fs-detail-h1: 31.57px; --lh-detail-h1: 44.57px;
  --fs-hero: 53.28px;    --lh-hero: 80.23px;
  --fs-hero-sub: 30.86px; --lh-hero-sub: 46.48px;
  --fs-ts-name: 20.54px; --lh-ts-name: 27.97px;

  --container: 1024px;
  --gutter: 32px;        /* side space when viewport < 1088px */
  --band-h: 60px;
  --section-pad: 60px;
}

/* ---------- 2. Base ---------- */
*, *::before, *::after { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }
body {
  margin: 0;
  background: #FFFFFF;
  color: var(--ink);
  font-family: var(--font-body);
  font-size: var(--fs-body);
  line-height: var(--lh-body);
  font-weight: 400;
}
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
p { margin: 0; }
h1, h2, h3, h4, h5 { margin: 0; font-family: var(--font-heading); font-weight: 700; }
ul { margin: 0; padding: 0; list-style: none; }
button { font: inherit; cursor: pointer; }
.sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

.container {
  width: min(var(--container), calc(100% - 2 * var(--gutter)));
  margin: 0 auto;
}

/* prose = long-form paragraphs (about, services, posts, bio) */
.prose p, .prose ul, .prose h3 { margin: 0 0 var(--fs-body); }
.prose p, .prose li { line-height: var(--lh-prose); }
.prose ul { list-style: disc; padding-left: 40px; margin: var(--fs-body) 0; }
.prose li + li { margin-top: 8px; }
.prose h3 { font-size: var(--fs-h3); line-height: var(--lh-h3); margin: 13.8px 0; }
.prose a { font-weight: 700; text-decoration: underline; }
.prose strong { font-weight: 700; }
.prose a strong { font-weight: 900; }
.prose blockquote { margin: 0; }

/* ---------- 3. Header: inner pages (white, sticky) ---------- */
.site-header {
  position: sticky; top: 0; z-index: 1100;
  background: #FFFFFF;
  height: 65px;
}
.site-header .container {
  height: 100%;
  display: flex; align-items: center; justify-content: space-between;
}
.site-header .logo img { width: 37px; height: 37px; }

.nav-list { display: flex; align-items: center; margin-right: 16px; }
.nav-list a {
  display: inline-flex;
  padding: 8px 12px;
  font-size: var(--fs-nav); line-height: var(--lh-nav);
  text-transform: uppercase;
  color: var(--ink);
}
.nav-list a span { position: relative; }
.nav-list a span::after {
  content: "";
  position: absolute; left: 0; right: 0; bottom: -5px;
  height: 1px; background: currentColor;
  transform: scaleX(0); transform-origin: left center;
  transition: transform .3s ease;
}
.nav-list a:hover span::after { transform: scaleX(1); }

.menu-toggle { display: none; }

/* ---------- 4. Header: home page (transparent over hero) ---------- */
.home-topbar {
  position: absolute; top: 0; left: 0; right: 0; z-index: 3;
  height: 59px;
  background: rgba(0, 0, 0, .2);
}
.home-topbar .container { height: 100%; display: flex; align-items: center; }
.home-topbar a {
  display: flex; align-items: center; gap: 0;
  font-size: var(--fs-xsmall); line-height: 16.78px;
  color: var(--topbar-text);
}
.home-topbar a svg { width: 20px; height: 14px; }

.home-header {
  position: absolute; top: 59px; left: 0; right: 0; z-index: 3;
  height: 65px;
}
.home-header .container { position: relative; height: 100%; display: flex; align-items: center; justify-content: flex-end; }
.home-header .logo { position: absolute; left: 0; top: 43px; }
.home-header .logo img { width: 140px; height: 140px; }
.home-header .nav-list a { color: #FFFFFF; }

/* ---------- 5. Hero (home) ---------- */
.hero {
  position: relative;
  background: center / cover no-repeat;
  color: #FFFFFF;
  text-align: center;
  padding: 371px 0 104px;
}
.hero::after { content: ""; position: absolute; inset: 0; background: rgba(0, 0, 0, .4); }
.hero-inner { position: relative; z-index: 1; padding: 0 30px; display: flex; flex-direction: column; align-items: center; }
.hero h1 {
  font-size: var(--fs-hero); line-height: var(--lh-hero);
  font-weight: 700; letter-spacing: 1px;
}
.hero .hero-sub {
  margin-top: 49px;
  font-family: var(--font-heading);
  font-size: var(--fs-hero-sub); line-height: var(--lh-hero-sub);
  font-weight: 400; letter-spacing: 1px;
}
.hero-msg {
  margin-top: 60px;
  width: 60px; height: 60px; border-radius: 30px;
  display: flex; align-items: center; justify-content: center;
  background: var(--primary); color: #FFFFFF;
  box-shadow: 0 4px 14px 1px rgba(0, 0, 0, .41);
  transition: transform .3s;
}
.hero-msg:hover { transform: scale(1.06); }
.hero-msg svg { width: 26px; height: 26px; }

/* ---------- 6. Section band (blue title bar) ---------- */
.band {
  background: var(--primary);
  color: #FFFFFF;
  min-height: var(--band-h);
  display: flex; align-items: center;
}
.band .container { position: relative; display: flex; align-items: center; min-height: var(--band-h); }
.band .container::after {          /* little notch under the bar */
  content: "";
  position: absolute; top: 100%; left: 5.2px;
  border: 8px solid transparent; border-top-color: var(--primary);
  border-bottom-width: 0;
}
.band h1, .band h2 {
  display: inline-flex; align-items: center; gap: 30px;
  font-family: var(--font-heading);
  font-size: var(--fs-band); line-height: var(--lh-band);
  font-weight: 700; text-align: left;
}
.band h1::after, .band h2::after {
  content: ""; flex: 0 0 30px; height: 2px; background: var(--accent);
}

section { position: relative; background: #FFFFFF; }

/* ---------- 7. Home: About feature cards ---------- */
.about-card {
  position: relative;
  display: grid; grid-template-columns: 573px 1fr;
  height: 502px;
  background: #FFFFFF;
}
.about-card + .about-card { margin-top: 64px; }
.about-card--flip { grid-template-columns: 1fr 573px; }
.about-card--flip .about-media { order: 2; }
.about-media { position: relative; }
.about-media::before {           /* soft shadow under the photo */
  content: ""; position: absolute; left: 0; right: 0; top: 100%; height: 0;
  box-shadow: 0 6px 34px 14px rgba(0, 0, 0, .16);
}
.about-media .img {
  position: relative; z-index: 1; width: 100%; height: 100%;
  background: center / cover no-repeat;
}
.about-panel {
  position: relative; z-index: 1;
  background: #FFFFFF;
  padding: 28px 30px;
  display: flex; flex-direction: column;
}
.about-panel::before {           /* white pointer toward the photo */
  content: ""; position: absolute; top: 160px; left: -10px;
  border: 10px solid transparent; border-left-width: 0; border-right-color: #FFFFFF;
}
.about-card--flip .about-panel::before {
  left: auto; right: -10px;
  border-right-width: 0; border-left: 10px solid #FFFFFF;
}
.about-panel h3 {
  font-size: var(--fs-h3); line-height: var(--lh-h3);
  color: var(--ink-soft); margin: 23.68px 0 20px;
}
.about-panel p { line-height: var(--lh-prose); }
.link-caps {
  align-self: flex-end; margin-top: auto;
  position: relative;
  font-size: var(--fs-tiny); line-height: 15.38px; font-weight: 500;
  text-transform: uppercase; color: var(--ink-soft);
}
.link-caps::after { content: ""; position: absolute; left: 0; right: 0; bottom: -1px; border-bottom: 1px solid #000; }

/* ---------- 8. Home: Ready for Success card ---------- */
.ready { padding: var(--section-pad) 0; }
.ready-card {
  display: flex; align-items: center; gap: 24px;
  padding: 20px 24px; border-radius: 3px;
  background: #FFFFFF;
  box-shadow: 0 15px 35px 0 rgba(0, 0, 0, .1);
  min-height: 217px;
}
.ready-card img { width: 160px; height: 160px; object-fit: cover; flex: 0 0 160px; }
.ready-card h3 { font-size: var(--fs-h3); line-height: var(--lh-h3); margin: 13.8px 0; }
.ready-card p { line-height: var(--lh-prose); }
.ready-card h4 { font-size: var(--fs-h4); line-height: var(--lh-h4); margin: 15.77px 0; }
.ready-card h4 a { font-weight: 900; text-decoration: underline; }

/* ---------- 9. Home: amenity chips ---------- */
.chips { padding: var(--section-pad) 0 80px; }
.chip-list {
  display: grid; grid-template-columns: repeat(3, 297px);
  column-gap: 41px; row-gap: 21px;
  padding-left: 20px;
}
.chip {
  display: flex; align-items: center;
  height: 60px; padding-left: 16px;
  background: #FFFFFF;
  border: 1px solid var(--chip-border); border-radius: 30px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .1);
}
.chip svg { width: 45px; height: 45px; padding: 8px; color: var(--primary); flex: 0 0 45px; }
.chip span { padding: 0 20px; font-weight: 500; }

/* ---------- 10. Contact section (all pages) ---------- */
.contact { background: var(--section-gray); }
.contact-body { padding: var(--section-pad) 0; }
.contact-item { display: grid; grid-template-columns: 25px 1fr; column-gap: 16px; row-gap: 18px; }
.contact-item svg { width: 25px; height: 25px; margin-top: 2px; color: var(--primary); }
.contact-item .label { font-family: var(--font-heading); font-size: var(--fs-h4); line-height: 24.19px; font-weight: 500; }
.contact-item a { grid-column: 2; }

/* home variant: two items in a row, no form */
.contact--home .contact-body { padding: 92px 0 108px; }
.contact--home .contact-row { display: flex; justify-content: space-between; }

/* inner-page variant: items left, form card right */
.contact--form .contact-row { display: flex; justify-content: space-between; align-items: flex-start; }
.contact--form .contact-items { padding-top: 33px; display: flex; flex-direction: column; gap: 48px; }
.form-card {
  width: 620px; padding: 24px 40px;
  background: #FFFFFF; border-radius: 4px;
  box-shadow: 0 20px 60px 0 rgba(0, 0, 0, .2);
}
.form-card h3 { text-align: center; font-size: var(--fs-h3); line-height: var(--lh-h3); font-weight: 500; color: var(--ink-soft); }
.form-card .intro { margin-top: 12px; text-align: center; line-height: var(--lh-prose); }
.form-grid { margin-top: 40px; display: grid; grid-template-columns: 1fr 1fr; column-gap: 20px; row-gap: 27px; }
.field label { display: block; font-size: var(--fs-small); line-height: 14.38px; }
.field .pill {
  margin-top: 7px; height: 38px; position: relative;
  display: flex; align-items: center;
  background: var(--section-gray);
  border: 1px solid var(--footer-gray); border-radius: 27.5px;
}
.field .pill svg { position: absolute; left: 16px; width: 14px; height: 14px; }
.field input, .field textarea {
  width: 100%; border: 0; background: transparent; outline: 0;
  font-family: var(--font-body); font-size: var(--fs-small); font-weight: 500; color: var(--ink);
}
.field input { height: 36px; padding: 0 14px 0 47px; }
.field input::placeholder, .field textarea::placeholder { color: #8A8A8A; font-weight: 500; }
.field--full { grid-column: 1 / -1; }
.field .line { margin-top: 15px; border-bottom: 1px solid var(--footer-gray); }
.field textarea { height: 79px; padding: 8px; resize: none; }
.consent { margin-top: 24px; display: flex; align-items: flex-start; gap: 0; font-size: var(--fs-xsmall); line-height: 20.98px; margin-left: -11px; }
.consent input { position: absolute; opacity: 0; width: 41px; height: 24px; margin: 0; }
.consent .box { flex: 0 0 41px; display: flex; justify-content: center; color: var(--primary); }
.consent .box svg { width: 24px; height: 24px; }
.consent input:checked + .box .tick { opacity: 1; }
.consent .tick { opacity: 0; }
.consent a { text-decoration: underline; }
.btn-primary {
  display: flex; align-items: center; justify-content: center;
  margin: 24px auto 16px;
  min-width: 190px; height: 48px; padding: 4px 21.56px;
  border: 2px solid var(--primary); border-radius: 80px;
  background: var(--primary); color: #FFFFFF;
  font-family: var(--font-body); font-size: var(--fs-small); letter-spacing: .08px;
  transition: .22s ease-in;
}
.btn-primary:hover { background: #FFFFFF; color: var(--primary); }

/* ---------- 11. Testimonials (home) ---------- */
.testimonials-body { padding: var(--section-pad) 0; }
.carousel { position: relative; padding: 0 64px; }
.carousel-viewport { overflow: hidden; }
.carousel-track { display: flex; gap: 44px; padding: 0 33.5px; transition: transform .5s ease; }
.ts-card {
  flex: 0 0 247px; display: flex; flex-direction: column;
  border-radius: 4px; overflow: hidden;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, .4);
  padding-bottom: 25px; text-align: center;
  margin-bottom: 6px;             /* room for the shadow */
}
.ts-card .ts-img { height: 270px; background: var(--placeholder) center / cover no-repeat; }
.ts-card .ts-name { margin: 25px 20.5px 0; font-size: var(--fs-ts-name); line-height: var(--lh-ts-name); font-weight: 500; min-height: 84px; }
.ts-card .ts-quote {
  margin: 11px 20.5px 0; line-height: var(--lh-ts-name);
  display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;
}
.ts-card .ts-more { text-decoration: underline; background: none; border: 0; padding: 0; line-height: var(--lh-ts-name); }
.ts-card .ts-date { margin-top: 16px; }
.ts-card .ts-stars { margin-top: 16px; display: flex; justify-content: center; color: var(--primary); }
.ts-card .ts-stars svg { width: 28px; height: 20px; padding: 0 4px; }
.carousel-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 64px; height: 64px; padding: 12px; border: 0; border-radius: 50%;
  background: transparent; color: var(--primary);
  display: flex; align-items: center; justify-content: center;
}
.carousel-arrow svg { width: 40px; height: 40px; padding: 8px; }
.carousel-arrow--prev { left: 0; }
.carousel-arrow--next { right: 0; }
.carousel-dots { display: flex; justify-content: center; gap: 10px; margin-top: 60px; }
.carousel-dots button { width: 30px; height: 3px; padding: 0; border: 0; background: var(--dot-inactive); }
.carousel-dots button[aria-current="true"] { background: var(--primary); }

/* read-more dialog */
.ts-dialog { border: 0; border-radius: 4px; padding: 32px; max-width: 560px; box-shadow: 0 20px 60px rgba(0, 0, 0, .3); }
.ts-dialog::backdrop { background: rgba(0, 0, 0, .5); }
.ts-dialog h3 { font-family: var(--font-body); font-weight: 500; font-size: var(--fs-ts-name); line-height: var(--lh-ts-name); text-align: center; }
.ts-dialog p { margin-top: 16px; line-height: var(--lh-prose); }
.ts-dialog .close { position: absolute; top: 8px; right: 8px; border: 0; background: none; font-size: 28px; line-height: 1; }

/* ---------- 12. Footer ---------- */
.site-footer { background: var(--footer-gray); }
.site-footer .container { height: 77px; display: flex; align-items: center; justify-content: space-between; }
.footer-links { display: flex; align-items: center; font-size: var(--fs-small); line-height: 17.95px; }
.footer-links li + li::before { content: ""; display: inline-block; width: 1px; height: 16px; background: #FFFFFF; margin: 0 16px; vertical-align: middle; }
.footer-links a:hover { color: #1A1A1A; }
.footer-note { font-size: var(--fs-small); }

/* mobile floating email button (hidden on desktop) */
.fab-mail { display: none; }

/* ---------- 13. Services page ---------- */
.services-body { padding: 54px 0 76px; }
.category-title { text-align: center; font-size: var(--fs-h3); line-height: var(--lh-h3); color: var(--primary); }
.service-grid { margin-top: 55px; display: flex; justify-content: center; gap: 32px; }
.service-card { width: 307px; text-align: center; }
.service-card .img { height: 220px; border-radius: 3px; background: center / cover no-repeat; }
.service-card h4 { margin-top: 16px; font-size: var(--fs-h4); line-height: var(--lh-h4); color: var(--ink-soft); }
.service-card h4 a { color: var(--ink); }
.service-card .desc { margin-top: 16px; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden; }
.service-card .more { display: inline-block; margin: 0 0 20px; text-decoration: underline; }
.big6 { padding: 53px 0 120px; }
.big6-grid { margin-top: 40px; display: grid; grid-template-columns: 490px 490px; column-gap: 44px; row-gap: 49px; text-align: center; }
.big6-grid h4 { font-size: var(--fs-h4); line-height: var(--lh-h4); font-weight: 500; }

/* ---------- 14. Blog cards ---------- */
.blog-body { padding: var(--section-pad) 0; }
.blog-grid { display: grid; grid-template-columns: repeat(3, 320px); column-gap: 32px; row-gap: 30px; }
.blog-card {
  display: flex; flex-direction: column;
  border: 1px solid var(--primary); border-radius: 3px;
  transition: box-shadow .3s;
}
.blog-card:hover { box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .2); }
.blog-card h3 { margin: 16px; font-size: var(--fs-h3); line-height: var(--lh-h3); min-height: 123px; }
.blog-card .img { height: 220px; background: center / cover no-repeat; }
.blog-card p { margin: 16px 16px 0; line-height: var(--lh-prose); display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 5; overflow: hidden; }
.blog-card .pill-btn {
  margin: 34px 16px 16px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--ink-soft); border-radius: 100px;
  font-size: var(--fs-small); line-height: 19.58px;
}
.blog-card--justify p { text-align: justify; }

/* ---------- 15. Detail pages: post / about / service ---------- */
.detail-body { padding: 0 0 60px; }
.service-detail .detail-body { padding-bottom: 77px; }
.detail-body::after { content: ""; display: block; clear: both; }
.float-media {
  float: left; position: relative;
  margin: 0 32px 16px 0;
  box-shadow: -15px 25px 40px -24px rgba(50, 50, 50, .46);
}
.float-media img { width: 100%; height: 100%; object-fit: cover; }
.post .float-media { width: 512px; }
.post .prose { padding-top: 30px; }
.about-detail .float-media { width: 543px; box-shadow: 0 20px 50px 0 rgba(0, 0, 0, .3); margin-right: 24px; }
.about-detail h1 { padding-top: 26px; font-size: 32.1px; line-height: 45.32px; text-align: left; margin-bottom: 20px; }
.service-detail .float-media { width: 512px; }
.service-detail h1 { padding-top: 24px; font-size: var(--fs-detail-h1); line-height: var(--lh-detail-h1); text-align: center; margin-bottom: 16px; }
.related { padding: 0 0 65px; }
.related h3 { font-size: var(--fs-h3); line-height: var(--lh-h3); margin-bottom: 31px; }
.related--services h3 { font-weight: 500; color: var(--ink-soft); margin: 64px 0 22px; }
.related--services .service-card { margin-left: 16px; }

/* ---------- 16. Meet Billy + bio ---------- */
.meet-body { padding: 60px 0; display: flex; justify-content: center; }
.person-card {
  width: 320px; min-height: 522px; padding: 16px;
  display: flex; flex-direction: column; align-items: center; gap: 16px;
  border: 1px solid var(--primary); border-radius: 4px;
  text-align: center; color: var(--ink-soft);
}
.person-card .title { font-family: var(--font-heading); font-size: var(--fs-h3); line-height: var(--lh-h3); font-weight: 700; }
.person-card .photo { width: 260px; height: 260px; border-radius: 50%; background: center / cover no-repeat; box-shadow: inset 0 400px 0 0 rgba(0, 0, 0, .32); }
.person-card .name { font-family: var(--font-heading); font-size: var(--fs-h4); line-height: var(--lh-h4); font-weight: 500; }
.bio-body { padding: 32px 0 40px; display: grid; grid-template-columns: 330px 1fr; column-gap: 75px; }
.bio-body .photo { width: 330px; height: 330px; border-radius: 50%; background: center / cover no-repeat; }
.bio-body .name { font-family: var(--font-heading); font-size: var(--fs-h4); line-height: 32px; font-weight: 500; margin-bottom: 56px; }

/* ---------- 17. Policy pages ---------- */
.policy-body { padding: var(--section-pad) 0; line-height: var(--lh-prose); }
.policy-body p { margin-bottom: var(--fs-body); }
.legal-row { display: flex; padding-bottom: 8.21px; border-bottom: 1px solid var(--rule); margin-bottom: 25px; }
.legal-row dt { flex: 0 0 50%; font-family: var(--font-heading); font-size: var(--fs-h4); line-height: 24.19px; font-weight: 600; }
.legal-row dd { margin: 0; }
.merchant { width: 683px; margin: 0 auto; }
.merchant-row { display: flex; padding: 24px 0; border-bottom: 1px solid #E3E3E3; }
.merchant-row .k { flex: 0 0 41.6667%; font-family: var(--font-heading); font-size: var(--fs-h4); line-height: var(--lh-h4); font-weight: 700; }
.merchant-links { margin-top: 34px; display: flex; gap: 0; }
.merchant-links a { padding-right: 10px; margin-right: 10px; border-right: 1px solid #EBEBEB; }
.merchant-links a:last-child { border-right: 0; }

/* =========================================================
   Mobile (max-width: 768px)
   ========================================================= */
@media (max-width: 768px) {
  :root {
    --gutter: 16px;
    --fs-band: 23.68px; --lh-band: 30.65px;
    --fs-h3: 19.73px;   --lh-h3: 20.43px;
    --fs-hero: 37.49px; --lh-hero: 56.5px;
    --fs-hero-sub: 23.68px; --lh-hero-sub: 35.7px;
  }
  .container { width: calc(100% - 32px); }

  /* header */
  .site-header { height: 54px; }
  .site-header .container { justify-content: center; }
  .site-header .logo img { width: 44px; height: 44px; }
  .menu-toggle {
    display: flex; flex-direction: column; justify-content: space-between;
    position: absolute; right: 18px; top: 11px;
    width: 33px; height: 33px; padding: 8px 6px 8px 6px;
    background: none; border: 0; z-index: 1001;
  }
  .menu-toggle i { display: block; height: 2px; width: 20px; background: currentColor; }
  .nav-list {
    position: fixed; top: 54px; left: 0; right: 0; bottom: 0;
    margin: 0; padding: 0 20px;
    flex-direction: column; align-items: stretch;
    background: #FFFFFF;
    opacity: 0; visibility: hidden; transition: opacity .25s;
  }
  .nav-open .nav-list { opacity: 1; visibility: visible; }
  .nav-list li { position: relative; }
  .nav-list a { width: 100%; justify-content: center; padding: 4px 0; height: 47px; align-items: center; color: var(--ink) !important; }
  .nav-list a span::after { display: none; }
  .nav-list a[aria-current="page"] { color: var(--primary) !important; }
  .nav-list a[aria-current="page"]::after {
    content: ""; position: absolute; bottom: 0; left: calc(50% - 12px); width: 24px; height: 1px; background: var(--primary);
  }

  .home-topbar { display: none; }
  .home-header { top: 0; height: 54px; background: rgba(0, 0, 0, .2); }
  .home-header .container { justify-content: center; }
  .home-header .logo { position: absolute; left: calc(50% - 60px); top: 5px; }
  .home-header .logo img { width: 120px; height: 120px; }
  .home-header .menu-toggle { color: #FFFFFF; }

  .hero { padding: 160px 0 94px; }
  .hero-inner { position: static; padding: 0 2px; }
  .hero-inner > * { position: relative; z-index: 1; }
  .hero .hero-sub { margin-top: 64px; }
  .hero-inner > .hero-msg { position: absolute; right: 16px; bottom: -55px; width: 52px; height: 52px; margin: 0; z-index: 5; }

  .fab-mail {
    display: flex; align-items: center; justify-content: center;
    position: fixed; left: calc(50% - 24px); bottom: 58px; z-index: 1000;
    width: 48px; height: 48px; border-radius: 50%;
    background: var(--primary); color: #FFFFFF;
  }
  .fab-mail svg { width: 24px; height: 24px; }

  /* about cards */
  .about-section > .container { width: 100%; }
  .about-card, .about-card--flip { display: block; height: auto; }
  .about-card + .about-card { margin-top: 0; }
  .about-media { height: 326px; }
  .about-media::before { display: none; }
  .about-panel { padding: 20px 16px 40px; }
  .about-panel::before { display: none; }
  .about-panel h3 { margin: 19.73px 0 16px; }
  .link-caps { margin-top: 24px; }

  .ready { padding: 40px 0; }
  .ready-card { flex-direction: column; align-items: stretch; gap: 0; padding: 20px 16px; }
  .ready-card img { width: 100%; height: auto; aspect-ratio: 1; flex: none; }
  .ready-card h3 { margin-top: 31px; }

  .chips { padding: 40px 0 65px; }
  .chip-list { grid-template-columns: 1fr; row-gap: 20px; padding-left: 0; }

  .contact--home .contact-body { padding: 40px 0 88px; }
  .contact-item { row-gap: 27px; }
  .contact--home .contact-row { flex-direction: column; gap: 48px; }
  .contact--form .contact-row { flex-direction: column; gap: 40px; }
  .contact--form .contact-items { padding-top: 0; }
  .form-card { width: 100%; padding: 28px 16px; }
  .form-grid { grid-template-columns: 1fr; }

  .testimonials-body { padding: 40px 0; }
  .carousel { padding: 0; }
  .carousel-arrow { display: none; }
  .carousel-viewport { overflow: visible; }
  .testimonials { overflow: hidden; }
  .carousel-track { gap: 36px; padding: 0; }
  .ts-card { flex-basis: 283px; }
  .ts-card .ts-img { height: 283px; }
  .ts-card .ts-quote { line-height: var(--lh-prose); }
  .carousel-dots { margin-top: 40px; }

  .site-footer .container { height: auto; padding: 29px 0 41px; flex-direction: column; gap: 16px; }
  .footer-links { line-height: 40.8px; }

  .services-body { padding: 22px 0 40px; }
  .service-grid { flex-direction: column; gap: 40px; margin-top: 45px; }
  .service-card { width: 100%; }
  .service-card .img { height: 260px; }
  .big6 { padding: 27px 0 60px; }
  .big6-grid { grid-template-columns: 1fr; row-gap: 49px; }

  .blog-body { padding: 40px 0; }
  .blog-grid { grid-template-columns: 1fr; row-gap: 30px; }
  .blog-card h3 { margin: 19px 19px 16px; min-height: 0; }
  .blog-card .img { height: 265px; }

  .float-media, .post .float-media, .about-detail .float-media, .service-detail .float-media {
    float: none; width: 100%; margin: 0 0 20px;
  }
  .about-detail .float-media { width: 199px; margin: 0 auto 29px; }
  .post .prose { padding-top: 0; }
  .service-detail .float-media { margin-bottom: 0; }
  .service-detail h1 { font-size: var(--fs-band); line-height: var(--lh-band); padding-top: 32.5px; margin-bottom: 20px; }
  .about-detail h1 { font-size: 32.1px; line-height: 37.8px; padding-top: 0; }

  .meet-body { padding: 40px 0; }
  .person-card { width: 100%; min-height: 0; }
  .person-card .photo { width: 240px; height: 240px; }
  .bio-body { grid-template-columns: 1fr; justify-items: center; padding-top: 16px; }
  .bio-body .photo { width: 244px; height: 244px; }
  .bio-body .name { margin: 16px 0 32px; text-align: center; }

  .legal-row { flex-direction: column; }
  .merchant { width: 100%; }
}
.consent .box { position: relative; }
.consent .box .tick { position: absolute; left: 50%; transform: translateX(-50%); }
.consent input:checked + .box .empty { opacity: 0; }
```

### 8.2 `assets/js/site.js` (complete)

```js
/* Tallman Academy: small progressive-enhancement script.
   1) Mobile menu toggle  2) Testimonial carousel  3) "Read more" dialog */
(function () {
  // 1. Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // 2. Testimonial carousel (loops; 3 cards visible on desktop, 1 + peek on mobile)
  var carousel = document.querySelector('.carousel');
  if (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var cards = Array.prototype.slice.call(track.children);
    var dots = Array.prototype.slice.call(carousel.parentElement.querySelectorAll('.carousel-dots button'));
    var index = 0;
    function step() {
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
      return cards[0].getBoundingClientRect().width + gap;
    }
    function go(i) {
      index = (i + cards.length) % cards.length;
      track.style.transform = 'translateX(' + (-index * step()) + 'px)';
      dots.forEach(function (d, n) { d.setAttribute('aria-current', n === index ? 'true' : 'false'); });
    }
    carousel.querySelector('.carousel-arrow--prev').addEventListener('click', function () { go(index - 1); });
    carousel.querySelector('.carousel-arrow--next').addEventListener('click', function () { go(index + 1); });
    dots.forEach(function (d, n) { d.addEventListener('click', function () { go(n); }); });
    // swipe on touch screens
    var x0 = null;
    track.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
      x0 = null;
    });
    window.addEventListener('resize', function () { go(index); });
  }

  // 3. Testimonial "Read more" dialog
  var dialog = document.querySelector('.ts-dialog');
  if (dialog) {
    document.querySelectorAll('.ts-more').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.ts-card');
        dialog.querySelector('h3').textContent = card.querySelector('.ts-name').textContent;
        dialog.querySelector('p').textContent = card.getAttribute('data-quote');
        dialog.showModal();
      });
    });
    dialog.querySelector('.close').addEventListener('click', function () { dialog.close(); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  }
})();
```

### 8.3 Shared HTML

**Page skeleton.** Every page is this skeleton. Replace `{{TITLE}}` with the title from Section 3. Inner pages use `<body>`; the home page uses `<body class="home">` and its own header (Section 9.1) instead of `{{INNER_HEADER}}`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{{TITLE}}</title>
<meta name="description" content="Trust Tallman Academy with your business needs in the Twin Cities and beyond with speaking engagements, consulting, and custom print solutions.">
<meta property="og:title" content="{{TITLE}}">
<meta property="og:description" content="Trust Tallman Academy with your business needs in the Twin Cities and beyond with speaking engagements, consulting, and custom print solutions.">
<meta property="og:image" content="https://tallmanacademy.com/assets/images/hero-restaurant.jpg">
<meta property="og:site_name" content="Tallman Academy">
<link rel="icon" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/site.css">
</head>
<body>
{{INNER_HEADER}}
<main>
  {{PAGE_MAIN}}
</main>
{{FOOTER}}
<script src="/assets/js/site.js" defer></script>
</body>
</html>
```

**`{{INNER_HEADER}}`** (all pages except home). Add `aria-current="page"` to the link of the current section: Services for /offerings and service pages, Blog for blog pages, Meet Billy Tallman for both Billy pages, Contact for /contact-us. No link is current on About and policy pages.

```html
<header class="site-header">
  <div class="container">
    <a class="logo" href="/" aria-label="Tallman Academy home"><img src="/assets/images/logo.png" alt="Tallman Academy"></a>
    <nav aria-label="Main"><ul class="nav-list" id="site-nav"><li><a href="/"><span>Home</span></a></li><li><a href="/offerings"><span>Services</span></a></li><li><a href="/blog"><span>Blog</span></a></li><li><a href="/contact-us"><span>Contact</span></a></li><li><a href="/meet-billy-tallman"><span>Meet Billy Tallman</span></a></li></ul></nav>
    <button class="menu-toggle" aria-label="Open menu" aria-controls="site-nav" aria-expanded="false"><i></i><i></i><i></i></button>
  </div>
</header>
```

**`{{FOOTER}}`** (all pages, includes the mobile floating mail button):

```html
<footer class="site-footer">
  <div class="container">
    <ul class="footer-links"><li><a href="/merchant-policies">Merchant Policies</a></li><li><a href="/legal-notice">Legal Notice</a></li></ul>
    <span class="footer-note"></span>
  </div>
</footer>
<a class="fab-mail" href="mailto:billy@tallmanacademy.com" aria-label="Email Billy">{{icon:mail-hero}}</a>
```

**`{{CONTACT_SECTION}}`** (bottom of every page except home and the policy pages). Replace `FORM_ENDPOINT` per Decision 2.

```html
<section class="contact contact--form" id="contact">
  <div class="band"><div class="container"><h2>Contact</h2></div></div>
  <div class="contact-body">
    <div class="container contact-row">
      <div class="contact-items">
      <div class="contact-item">{{icon:map-pin-small}}<div class="label">Location</div><a href="https://maps.google.com/?q=Minneapolis%2C%20Minnesota" target="_blank" rel="noopener">Minneapolis, Minnesota</a></div>
      <div class="contact-item">{{icon:mail-hero}}<div class="label">Email</div><a href="mailto:billy@tallmanacademy.com">billy@tallmanacademy.com</a></div>
      </div>
      <form class="form-card" id="message_request" action="FORM_ENDPOINT" method="POST">
        <h3>Get in Touch</h3>
        <p class="intro">We're excited to hear from you! Fill out the form below to get started on your journey towards restaurant success. Let's bring your vision to life and savor the difference together.</p>
        <div class="form-grid">
          <div class="field"><label for="first_name">Your first name</label><div class="pill">{{icon:id-card}}<input id="first_name" name="first_name" placeholder="First name" required></div></div>
          <div class="field"><label for="last_name">Your last name</label><div class="pill">{{icon:id-card}}<input id="last_name" name="last_name" placeholder="Last name"></div></div>
          <div class="field"><label for="email">Your email</label><div class="pill">{{icon:mail-hero}}<input id="email" name="email" type="email" placeholder="Email" required></div></div>
          <div class="field"><label for="phone">Your phone number</label><div class="pill">{{icon:phone}}<input id="phone" name="phone" type="tel" placeholder="e.g. +1 212 736 3100"></div></div>
          <div class="field field--full"><label for="message">Description</label><div class="line"><textarea id="message" name="message"></textarea></div></div>
        </div>
        <label class="consent"><input type="checkbox" name="consent" required><span class="box">{{icon:checkbox class="empty"}}{{checked-tick-svg}}</span><span>I agree with the <a href="/terms-and-conditions">Terms &amp; Conditions</a> and the <a href="/privacy-policy">Privacy Policy</a> of Tallman Academy. This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</span></label>
        <button class="btn-primary" type="submit">Send Message</button>
      </form>
    </div>
  </div>
</section>
```

## 9. Page HTML

Each block below is the exact contents of `<main>` for that page (for the home page: everything between `<body class="home">` and the footer). All text is verbatim from the live site.

### 9.1 Home: `/`

The home page has its own top bar and transparent header instead of `{{INNER_HEADER}}`. The `<main>` tag is included below.

```html
<div class="home-topbar"><div class="container"><a href="https://maps.google.com/?q=Minneapolis%2C%20Minnesota" target="_blank" rel="noopener">{{icon:map-pin-small}}Minneapolis, Minnesota</a></div></div>
<header class="home-header">
  <div class="container">
    <a class="logo" href="/" aria-label="Tallman Academy home"><img src="/assets/images/logo.png" alt="Tallman Academy"></a>
    <nav aria-label="Main"><ul class="nav-list" id="site-nav"><li><a href="/" aria-current="page"><span>Home</span></a></li><li><a href="/offerings"><span>Services</span></a></li><li><a href="/blog"><span>Blog</span></a></li><li><a href="/contact-us"><span>Contact</span></a></li><li><a href="/meet-billy-tallman"><span>Meet Billy Tallman</span></a></li></ul></nav>
    <button class="menu-toggle" aria-label="Open menu" aria-controls="site-nav" aria-expanded="false"><i></i><i></i><i></i></button>
  </div>
</header>
<main>
<section class="hero" style="background-image:url('/assets/images/hero-restaurant.jpg')">
  <div class="container hero-inner">
    <h1>Tallman Academy</h1>
    <p class="hero-sub">Inspirational Leadership and customer experience training</p>
    <a class="hero-msg" href="/contact-us#message_request" aria-label="Send a message">{{icon:mail-hero}}</a>
  </div>
</section>
<section class="about-section" id="about">
  <div class="band"><div class="container"><h2>About</h2></div></div>
  <div class="container">
    <article class="about-card">
      <div class="about-media"><div class="img" role="img" aria-label="" style="background-image:url('/assets/images/about-customer-excellence.jpg')"></div></div>
      <div class="about-panel">
        <a href="/about-us/be-the-leader-in-customer-excellence-6474675"><h3>Be the leader in customer excellence</h3><p>Welcome to Tallman Academy, your trusted partner in business consulting, leadership development, and guest experience. We are dedicated to helping businesses like yours thrive by enhancing workplace culture, empowering your team, and teaching the &quot;why&quot; behind customer experience. With a deep understanding of ...</p></a>
        <a class="link-caps" href="/about-us/be-the-leader-in-customer-excellence-6474675">Learn More<span class="sr-only"> Be the leader in customer excellence</span></a>
      </div>
    </article>
    <article class="about-card about-card--flip">
      <div class="about-media"><div class="img" role="img" aria-label="" style="background-image:url('/assets/images/about-empowering-excellence.png')"></div></div>
      <div class="about-panel">
        <a href="/about-us/empowering-excellence-every-step-of-the-way-6474676"><h3>Empowering Excellence, Every Step of the Way</h3><p>We are your strategic partner for business consulting, guiding you toward a brighter and more profitable future. Our expert team specializes in enhancing workplace culture, fostering employee empowerment, and streamlining operational efficiency. We understand that in today&#x27;s world, hospitality can be fast-paced ...</p></a>
        <a class="link-caps" href="/about-us/empowering-excellence-every-step-of-the-way-6474676">Learn More<span class="sr-only"> Empowering Excellence, Every Step of the Way</span></a>
      </div>
    </article>
  </div>
</section>
<section class="ready">
  <div class="container">
    <div class="ready-card">
      <img src="/assets/images/ready-for-success.jpg" alt="">
      <div>
        <h3>Ready for Success?</h3>
        <p>We have the tools you need to thrive in the competitive hospitality industry. Book our services today and understand the difference!</p>
        <h4><a href="/offerings">Learn More</a></h4>
      </div>
    </div>
  </div>
</section>
<section class="chips">
  <div class="container">
    <ul class="chip-list"><li class="chip">{{icon:star-outline}}<span>Situational Leadership</span></li><li class="chip">{{icon:star-outline}}<span>Workplace Culture</span></li><li class="chip">{{icon:star-outline}}<span>Service Excellence</span></li><li class="chip">{{icon:star-outline}}<span>Restaurant Marketing</span></li><li class="chip">{{icon:star-outline}}<span>Menu Science &amp; Design</span></li><li class="chip">{{icon:star-outline}}<span>Brand Awareness</span></li></ul>
  </div>
</section>
<section class="contact contact--home" id="contact">
  <div class="band"><div class="container"><h2>Contact</h2></div></div>
  <div class="contact-body">
    <div class="container contact-row">
      <div class="contact-item">{{icon:map-pin-small}}<div class="label">Location</div><a href="https://maps.google.com/?q=Minneapolis%2C%20Minnesota" target="_blank" rel="noopener">Minneapolis, Minnesota</a></div>
      <div class="contact-item">{{icon:mail-hero}}<div class="label">Email</div><a href="mailto:billy@tallmanacademy.com">billy@tallmanacademy.com</a></div>
    </div>
  </div>
</section>
<section class="testimonials" id="testimonials">
  <div class="band"><div class="container"><h2>Testimonials</h2></div></div>
  <div class="testimonials-body">
    <div class="container">
      <div class="carousel">
        <button class="carousel-arrow carousel-arrow--prev" aria-label="Previous">{{icon:arrow-left}}</button>
        <div class="carousel-viewport"><div class="carousel-track">
        <div class="ts-card" data-quote="I feel everyone in business needs to keep ahead of the times. My business is 101 years old and has been through many business cycles. I needed help to see my business from a point of view from someone I trust. I did not need to hear that everything I did from an owners perspective was right or wrong, I needed to hear how to help my team embrace new ideas. Changing the old culture, while respecting my company, I wanted my team to feel we are professionals dedicated to making the best possible business decisions for our management team, customers, and employees. We feel it is important to grasp the new challenges and opportunities for the future of our company personally and professionally and Billy helped us achieve that.">
          <div class="ts-img" style="background-image:url('/assets/images/testimonial-carlotta-flores.jpg')"></div>
          <span class="ts-name">Carlotta Flores - Chef/Owner at El Charro Cafe</span>
          <p class="ts-quote">I feel everyone in business needs to keep ahead of the times. My business is 101 years old and has been through many business cycles. I needed help to see my business from a point of view from someone I trust. I did not need to hear that everything I did from an owners perspective was right or wrong, I needed to hear how to help my team embrace new ideas. Changing the old culture, while respecting my company, I wanted my team to feel we are professionals dedicated to making the best possible business decisions for our management team, customers, and employees. We feel it is important to grasp the new challenges and opportunities for the future of our company personally and professionally and Billy helped us achieve that.</p>
          <button class="ts-more" type="button">Read more</button>
          <span class="ts-date">November 26, 2023</span>
          <div class="ts-stars" role="img" aria-label="5 stars">{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}</div>
        </div>
        <div class="ts-card" data-quote="Billy loves people and shows them great respect as he lifts them to greater heights. I have been among his team, seen him interact with leaders, and felt the care he injects into his restaurant. They are growing and improving constantly. I have have Billy coach my team if the opportunity were made available to me.">
          <div class="ts-img" style="background-image:url('/assets/images/testimonial-james-finlinson.jpg')"></div>
          <span class="ts-name">James Finlinson - President OneClickApp.com</span>
          <p class="ts-quote">Billy loves people and shows them great respect as he lifts them to greater heights. I have been among his team, seen him interact with leaders, and felt the care he injects into his restaurant. They are growing and improving constantly. I have have Billy coach my team if the opportunity were made available to me.</p>
          <button class="ts-more" type="button">Read more</button>
          <span class="ts-date">November 26, 2023</span>
          <div class="ts-stars" role="img" aria-label="5 stars">{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}</div>
        </div>
        <div class="ts-card" data-quote="Billy&#x27;s experience and excellent skill set contribute to all that he has to offer. His creative abilities extend from inventory solutions to building a team environment that grows with the company. His ability to bring people together, encourage and excite them is a great benefit to any company.">
          <div class="ts-img" style="background-image:url('/assets/images/testimonial-denise-martin.jpg')"></div>
          <span class="ts-name">Denise Martin - Controller Sevenwinds Casino</span>
          <p class="ts-quote">Billy&#x27;s experience and excellent skill set contribute to all that he has to offer. His creative abilities extend from inventory solutions to building a team environment that grows with the company. His ability to bring people together, encourage and excite them is a great benefit to any company.</p>
          <button class="ts-more" type="button">Read more</button>
          <span class="ts-date">November 26, 2023</span>
          <div class="ts-stars" role="img" aria-label="5 stars">{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}</div>
        </div>
        <div class="ts-card" data-quote="I had the pleasure of working with Billy for a few years in the casino hospitality business. Billy is truly a servant leader, understanding the big picture and how to get results the right way.">
          <div class="ts-img" style="background-image:url('/assets/images/testimonial-martin-madewell.jpg')"></div>
          <span class="ts-name">Martin Madewell - General Manager Hard Rock Casino</span>
          <p class="ts-quote">I had the pleasure of working with Billy for a few years in the casino hospitality business. Billy is truly a servant leader, understanding the big picture and how to get results the right way.</p>
          <button class="ts-more" type="button">Read more</button>
          <span class="ts-date">November 26, 2023</span>
          <div class="ts-stars" role="img" aria-label="5 stars">{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}</div>
        </div>
        <div class="ts-card" data-quote="Billy brings the high end entrepreneurial, service industry experience, and skills he has gained working in tribal operations and the private sector to Tallman Academy. And, of course, as a Cherokee Nation citizen, Billy bring a focus on success and a deeply held sense of purpose and mission that is far too rare in the industry.">
          <div class="ts-img" style="background-image:url('/assets/images/testimonial-chuck-hoskin.jpg')"></div>
          <span class="ts-name">Chuck Hoskin Jr. - Principal Chief of the Cherokee Nation</span>
          <p class="ts-quote">Billy brings the high end entrepreneurial, service industry experience, and skills he has gained working in tribal operations and the private sector to Tallman Academy. And, of course, as a Cherokee Nation citizen, Billy bring a focus on success and a deeply held sense of purpose and mission that is far too rare in the industry.</p>
          <button class="ts-more" type="button">Read more</button>
          <span class="ts-date">November 26, 2023</span>
          <div class="ts-stars" role="img" aria-label="5 stars">{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}</div>
        </div>
        <div class="ts-card" data-quote="Mr. Tallman is a visionary, I had the opportunity to embrace his talents working along side him, his business acumen is next level!">
          <div class="ts-img" style="background-image:url('/assets/images/testimonial-michael-fairbanks.jpg')"></div>
          <span class="ts-name">Michael Fairbanks - General Manager White Oak Casino</span>
          <p class="ts-quote">Mr. Tallman is a visionary, I had the opportunity to embrace his talents working along side him, his business acumen is next level!</p>
          <button class="ts-more" type="button">Read more</button>
          <span class="ts-date">December 3, 2023</span>
          <div class="ts-stars" role="img" aria-label="5 stars">{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}{{icon:star-filled}}</div>
        </div>
        </div></div>
        <button class="carousel-arrow carousel-arrow--next" aria-label="Next">{{icon:arrow-right}}</button>
      </div>
      <div class="carousel-dots"><button aria-label="Show testimonial 1" aria-current="true"></button><button aria-label="Show testimonial 2" aria-current="false"></button><button aria-label="Show testimonial 3" aria-current="false"></button><button aria-label="Show testimonial 4" aria-current="false"></button><button aria-label="Show testimonial 5" aria-current="false"></button><button aria-label="Show testimonial 6" aria-current="false"></button></div>
    </div>
  </div>
  <dialog class="ts-dialog"><button class="close" aria-label="Close">&times;</button><h3></h3><p></p></dialog>
</section>
</main>
```

### 9.2 Services: `/offerings`

```html
<section>
  <div class="band"><div class="container"><h2>Empowering Hospitality Excellence</h2></div></div>
  <div class="container services-body">
    <h3 class="category-title">Business Support Services</h3>
    <div class="service-grid"><div class="service-card">
        <a href="/services/business-support-services/speaking-engagements-150397738"><div class="img" style="background-image:url('/assets/images/service-speaking-engagements.jpg')"></div></a>
        <h4><a href="/services/business-support-services/speaking-engagements-150397738">Speaking Engagements</a></h4>
        <div class="desc">Discover the transformative power of our speaking engagements, meticulously designed to cultivate a culture of care within your workplace. At the heart of our approach is the core principle of employee empowerment, where every member of your team becomes an active participant in fostering a positive and nurturing work environment. Our expert speakers specialize in workplace culture, delivering insightful and inspiring sessions that leave a lasting impact.</div>
        <a class="more" href="/services/business-support-services/speaking-engagements-150397738">Read More</a>
      </div><div class="service-card">
        <a href="/services/business-support-services/consulting-150407341"><div class="img" style="background-image:url('/assets/images/service-consulting.jpg')"></div></a>
        <h4><a href="/services/business-support-services/consulting-150407341">Consulting</a></h4>
        <div class="desc">We partner with companies and small businesses to identify obstacles they face in reaching their goals. We determine out-of-the-box strategies to help companies overcome their challenges.  A needs assessment begins the process, working with you to determine the desired outcome.&amp;nbsp;&amp;nbsp;</div>
        <a class="more" href="/services/business-support-services/consulting-150407341">Read More</a>
      </div>
    </div>
  </div>
</section>
<section class="big6">
  <div class="container">
    <h3 class="category-title">The Big 6 Culture</h3>
    <div class="big6-grid"><h4>Communication</h4><h4>Consistency</h4><h4>Sense of Urgency</h4><h4>Teamwork</h4><h4>Excellence</h4><h4>Accountability</h4></div>
  </div>
</section>
{{CONTACT_SECTION}}
```

### 9.3 Blog index: `/blog`

```html
<section>
  <div class="band"><div class="container"><h2>Blog</h2></div></div>
  <div class="container blog-body">
    <div class="blog-grid">
      <a class="blog-card" href="/blog/elevating-the-guest-experience-be-the-reason-they-choose-you">
        <h3>Elevating the Guest Experience: Be the Reason They Choose You</h3>
        <div class="img" style="background-image:url('/assets/images/blog-elevating-the-guest-experience.jpg')"></div>
        <p>In today&#x27;s highly competitive hospitality industry, guests have endless choices when it comes to where they stay or dine. With numerous hotels, restaurants, and entertainment options available, standing out and attracting guests can be a challenge. However, it is not impossible. By focusing on elevating the guest experience, we can be the reason the guest chooses us over other options. In this blog post, we will discuss the importance of providing elevated guest experiences and how it can set us apart from our competitors. Let&#x27;s delve into the world of hospitality and discover how we can make a lasting impression on our guests.</p>
        <span class="pill-btn">Read more ...</span>
      </a><a class="blog-card" href="/blog/unlocking-your-team-s-potential-with-the-right-culture">
        <h3>Unlocking Your Team&#x27;s Potential with the Right Culture</h3>
        <div class="img" style="background-image:url('/assets/images/blog-unlocking-your-teams-potential.jpg')"></div>
        <p>Creating a positive and empowering workplace culture is crucial for achieving great results in any business. A strong and supportive culture not only boosts employee satisfaction and retention, but it also unlocks the potential of your team to drive success. In today&#x27;s competitive market, having a great workplace culture is more important than ever. It can make the difference between a stagnant, unproductive team and a dynamic, high-performing one. In this blog post, we&#x27;ll explore why a great culture in your business matters and how it can empower your team to achieve outstanding results.</p>
        <span class="pill-btn">Read more ...</span>
      </a><a class="blog-card" href="/blog/becoming-a-trusted-servant-leader-3-ways-to-engage-and-retain-your-people">
        <h3>Becoming a Trusted Servant Leader – 3 Ways to Engage and Retain Your People</h3>
        <div class="img" style="background-image:url('/assets/images/blog-trusted-servant-leader.jpg')"></div>
        <p>If this scenario is familiar to you, you’re in good company. Many organizations and their leaders are struggling to develop engaged employees who will stick around for the long haul. The causes of low engagement and high turnover are many—and the impact on organizations is tremendous. Consider these data points in the new report from Gallup:</p>
        <span class="pill-btn">Read more ...</span>
      </a><a class="blog-card blog-card--justify" href="/blog/the-impact-of-effective-leadership-on-restaurant-success">
        <h3>The Impact of Effective Leadership on Restaurant Success</h3>
        <div class="img" style="background-image:url('/assets/images/blog-effective-leadership.jpg')"></div>
        <p>In the bustling world of the restaurant industry, success hinges on more than just delectable dishes and attentive service. While these elements undoubtedly play a crucial role, the heartbeat of any thriving restaurant lies in its leadership. Effective leadership in the restaurant business is akin to the conductor of a well-orchestrated symphony, harmonizing diverse components to create a symphony of success. In this blog post, we&#x27;ll delve into the profound influence of leadership on restaurant success, exploring the multifaceted ways in which it shapes everything from workplace culture to operational efficiency.</p>
        <span class="pill-btn">Read more ...</span>
      </a>
    </div>
  </div>
</section>
{{CONTACT_SECTION}}
```

### 9.4 Post 1: `/blog/elevating-the-guest-experience-be-the-reason-they-choose-you`

```html
<article class="post">
  <div class="band"><div class="container"><h1>Elevating the Guest Experience: Be the Reason They Choose You</h1></div></div>
  <div class="container detail-body">
    <figure class="float-media" style="margin-top:0"><img src="/assets/images/blog-elevating-the-guest-experience.jpg" alt=""></figure>
    <div class="prose">
<p>In today's highly competitive hospitality industry, guests have endless choices when it comes to where they stay or dine. With numerous hotels, restaurants, and entertainment options available, standing out and attracting guests can be a challenge. However, it is not impossible. By focusing on elevating the guest experience, we can be the reason the guest chooses us over other options. In this blog post, we will discuss the importance of providing elevated guest experiences and how it can set us apart from our competitors. Let's delve into the world of hospitality and discover how we can make a lasting impression on our guests.</p>
<p><em>Understanding Elevated Guest Experiences</em></p>
<p>To truly understand the concept of elevated guest experiences, we need to go beyond just providing good customer service. It goes beyond simply meeting the needs and expectations of our guests. Elevated guest experiences involve creating a memorable and exceptional stay or dining experience that goes above and beyond what is expected.</p>
<p>It starts with a mindset of excellence and a genuine eagerness to serve. It's about paying attention to every detail, ensuring that everything is in place to provide the best possible experience for our guests. It's about being courteous and attentive, anticipating their needs before they even ask.</p>
<p>But more than just the practical aspects, elevated guest experiences are about making meaningful connections. It's about creating moments that touch the hearts and souls of our guests, leaving a lasting impression.</p>
<p><em>The Impact of Exceptional Guest Experiences on Your Business</em></p>
<p>Exceptional guest experiences have a profound impact on the success of your business. When guests have great experiences at your hotel or restaurant, they are more likely to become repeat customers and recommend your establishment to others. Satisfied guests can be your biggest brand ambassadors, spreading positive word-of-mouth and generating new business for you.</p>
<p>By providing elevated guest experiences, you demonstrate your eagerness to serve and your attention to detail. When guests feel valued and well taken care of, they are more likely to develop a sense of loyalty towards your business. This can lead to increased customer retention and higher customer lifetime value.</p>
<p>In addition, exceptional guest experiences help to differentiate you from your competitors. In today's crowded hospitality industry, standing out is crucial. When guests have meaningful connections with your establishment, they are more likely to choose you over other options.</p>
<p>Investing in creating exceptional guest experiences can also have financial benefits. Research shows that customers are willing to pay more for superior experiences. By providing exceptional service and going above and beyond for your guests, you have the opportunity to increase revenue and profitability.</p>
<p>Overall, exceptional guest experiences have a ripple effect on your business. They not only improve customer satisfaction and loyalty, but also drive revenue growth and enhance your reputation in the industry. By prioritizing and investing in elevating the guest experience, you can position your business for long-term success.</p>
<p><em>Strategies to Deliver Elevated Guest Experiences</em></p>
<p>To deliver elevated guest experiences, it is important to have a well-defined strategy in place. Start by cultivating an environment of excellence and an eagerness to serve among your staff. Encourage them to pay attention to every detail and be courteous and attentive to guests' needs. This will create a welcoming and personalized atmosphere that guests will appreciate.</p>
<p>Additionally, focus on creating meaningful connections with guests. Train your staff to go beyond the basic interactions and find ways to make guests feel valued and special. Whether it's remembering their names or preferences, or surprising them with small gestures, these actions can leave a lasting impression.</p>
<p>Another strategy is to leverage technology to enhance the guest experience. Invest in tools and systems that streamline processes and provide convenience for guests. For example, online booking platforms, mobile check-ins, and personalized recommendations based on guest preferences can all contribute to a seamless and elevated experience.</p>
<p>Lastly, empower your staff to solve problems and handle guest issues with empathy and efficiency. By addressing concerns promptly and going the extra mile to resolve any issues, you can turn potential negatives into positive experiences for guests.</p>
<p>By implementing these strategies, you can deliver exceptional guest experiences that will set you apart from your competitors and create loyal customers who will choose you time and time again.</p>
<p><em>How Technology Can Assist in Elevating the Guest Experience</em></p>
<p>Technology plays a vital role in elevating the guest experience. With advancements in digital solutions, hotels and restaurants now have a plethora of tools at their disposal to provide seamless and personalized experiences to their guests.</p>
<p>For instance, online booking platforms make it convenient for guests to make reservations at their preferred hotels or restaurants. Mobile check-ins streamline the check-in process, allowing guests to skip long queues and go straight to their rooms or tables.</p>
<p>Personalization is another area where technology excels. By leveraging guest data, hotels and restaurants can offer tailored recommendations, ensuring that guests feel special and valued. Whether it's suggesting nearby attractions based on their preferences or recommending menu items they might enjoy, technology allows for a more personalized and engaging experience.</p>
<p>Furthermore, technology can enhance communication and problem-solving. Chatbots and messaging apps enable instant and efficient communication between guests and staff, making it easier for guests to address any concerns or request additional services.</p>
<p>By harnessing the power of technology, hotels and restaurants can create memorable and exceptional experiences that leave a lasting impression on their guests. It allows for greater efficiency, convenience, and personalization, all of which contribute to an elevated guest experience. So, embrace technology and use it to your advantage to set yourself apart and become the preferred choice for guests.</p>
<p><em>Key Takeaways: How to Stand Out Through Elevated Guest Experiences</em></p>
<p>To stand out through elevated guest experiences, it is crucial to prioritize excellence, eagerness to serve, and meaningful connections. By focusing on these key elements, you can create great experiences that leave a lasting impression on your guests.</p>
<p>First and foremost, cultivate a culture of excellence among your staff. Encourage them to pay attention to every detail and be courteous and attentive to guests' needs. This will create a welcoming and personalized atmosphere that guests will appreciate.</p>
<p>Secondly, foster an eagerness to serve. Train your staff to go above and beyond basic interactions and find ways to make guests feel valued and special. Remembering their names or preferences, surprising them with small gestures, and anticipating their needs are all ways to create memorable connections.</p>
<p>Lastly, create meaningful connections with your guests. Take the time to engage in genuine conversations, listen to their feedback, and show that you genuinely care about their experience. These connections build loyalty and make guests more likely to choose you over your competitors.</p>
<p>By implementing these key takeaways, you can elevate the guest experience and set yourself apart in the competitive hospitality industry. Remember, great experiences, eagerness to serve, and meaningful connections are the foundation of exceptional guest experiences.</p>
    </div>
  </div>
</article>
<section class="related">
  <div class="container">
    <h3>Related</h3>
    <div class="blog-grid"><a class="blog-card" href="/blog/unlocking-your-team-s-potential-with-the-right-culture">
        <h3>Unlocking Your Team&#x27;s Potential with the Right Culture</h3>
        <div class="img" style="background-image:url('/assets/images/blog-unlocking-your-teams-potential.jpg')"></div>
        <p>Creating a positive and empowering workplace culture is crucial for achieving great results in any business. A strong and supportive culture not only boosts employee satisfaction and retention, but it also unlocks the potential of your team to drive success. In today&#x27;s competitive market, having a great workplace culture is more important than ever. It can make the difference between a stagnant, unproductive team and a dynamic, high-performing one. In this blog post, we&#x27;ll explore why a great culture in your business matters and how it can empower your team to achieve outstanding results.</p>
        <span class="pill-btn">Read more ...</span>
      </a><a class="blog-card" href="/blog/becoming-a-trusted-servant-leader-3-ways-to-engage-and-retain-your-people">
        <h3>Becoming a Trusted Servant Leader – 3 Ways to Engage and Retain Your People</h3>
        <div class="img" style="background-image:url('/assets/images/blog-trusted-servant-leader.jpg')"></div>
        <p>If this scenario is familiar to you, you’re in good company. Many organizations and their leaders are struggling to develop engaged employees who will stick around for the long haul. The causes of low engagement and high turnover are many—and the impact on organizations is tremendous. Consider these data points in the new report from Gallup:</p>
        <span class="pill-btn">Read more ...</span>
      </a><a class="blog-card" href="/blog/the-impact-of-effective-leadership-on-restaurant-success">
        <h3>The Impact of Effective Leadership on Restaurant Success</h3>
        <div class="img" style="background-image:url('/assets/images/blog-effective-leadership.jpg')"></div>
        <p>In the bustling world of the restaurant industry, success hinges on more than just delectable dishes and attentive service. While these elements undoubtedly play a crucial role, the heartbeat of any thriving restaurant lies in its leadership. Effective leadership in the restaurant business is akin to the conductor of a well-orchestrated symphony, harmonizing diverse components to create a symphony of success. In this blog post, we&#x27;ll delve into the profound influence of leadership on restaurant success, exploring the multifaceted ways in which it shapes everything from workplace culture to operational efficiency.</p>
        <span class="pill-btn">Read more ...</span>
      </a></div>
  </div>
</section>
{{CONTACT_SECTION}}
```

### 9.5 Post 2: `/blog/unlocking-your-team-s-potential-with-the-right-culture`

```html
<article class="post">
  <div class="band"><div class="container"><h1>Unlocking Your Team&#x27;s Potential with the Right Culture</h1></div></div>
  <div class="container detail-body">
    <figure class="float-media" style="margin-top:0"><img src="/assets/images/blog-unlocking-your-teams-potential.jpg" alt=""></figure>
    <div class="prose">
<p>Creating a positive and empowering workplace culture is crucial for achieving great results in any business. A strong and supportive culture not only boosts employee satisfaction and retention, but it also unlocks the potential of your team to drive success. In today's competitive market, having a great workplace culture is more important than ever. It can make the difference between a stagnant, unproductive team and a dynamic, high-performing one. In this blog post, we'll explore why a great culture in your business matters and how it can empower your team to achieve outstanding results.</p>
<p><em>The Influence of Culture in an Organization</em></p>
<p>The influence of culture in an organization cannot be underestimated. It is the driving force behind employee engagement, productivity, and overall success. A positive and healthy culture creates an environment where employees feel valued, supported, and motivated to perform their best. When employees feel a sense of belonging and connection to their organization, they are more likely to go above and beyond their job description to deliver exceptional results.</p>
<p>Culture sets the tone for how work is done within an organization. It encompasses the values, beliefs, and behaviors that guide decision-making and shape the overall work experience. A strong culture promotes teamwork, collaboration, and innovation, leading to increased efficiency and effectiveness in achieving goals.</p>
<p>A positive culture also fosters a sense of hospitality within the organization. Employees treat each other with respect and kindness, creating a welcoming and inclusive atmosphere. This not only enhances employee satisfaction but also attracts top talent and makes the organization a destination of choice for potential employees.</p>
<p>Furthermore, a great culture enables elevated experiences for both employees and customers. When employees feel empowered and supported, they are more likely to provide exceptional service to customers, resulting in increased customer satisfaction and loyalty.</p>
<p><em>Characteristics of a Positive and Healthy Business Culture</em></p>
<p>A positive and healthy business culture is characterized by several key factors that contribute to a supportive and empowering work environment. Firstly, communication is open, transparent, and respectful. Employees feel comfortable sharing their ideas, concerns, and feedback, and leaders actively listen and take their input into consideration. This fosters collaboration, creativity, and a sense of belonging within the organization.</p>
<p>Secondly, trust is a fundamental element of a positive culture. When trust is established, employees feel empowered to take risks, make decisions, and innovate. They know that their contributions are valued and that their efforts will be recognized and rewarded. This trust also extends to relationships among colleagues, creating a strong sense of teamwork and camaraderie.</p>
<p>A positive culture is also characterized by a focus on employee well-being and work-life balance. The organization supports and encourages employees to prioritize their physical and mental health, offering flexible work arrangements, wellness programs, and resources for personal development.</p>
<p>Lastly, a positive culture embraces diversity and inclusion. The organization recognizes and celebrates the unique perspectives, backgrounds, and talents of its employees. This inclusivity not only creates a welcoming environment but also enhances creativity and problem-solving, as diverse perspectives lead to innovative ideas and solutions.</p>
<p><em>Harnessing the Benefits of Great Culture for Team Productivity</em></p>
<p>Creating a positive and empowering workplace culture is not just about making your employees happy, it's about driving productivity and achieving outstanding results. When you have a great culture in your business, your team becomes motivated and empowered to go above and beyond their job description to deliver exceptional results. </p>
<p>One of the key benefits of a positive culture is that it promotes teamwork and collaboration. When employees feel supported and valued, they are more likely to work together, share ideas, and support one another. This leads to increased efficiency and effectiveness in achieving goals. The answer is yes, a great culture can unlock the potential of your team to work together towards a common purpose.</p>
<p>A positive culture also creates an environment of hospitality, where employees treat each other with respect and kindness. This not only enhances employee satisfaction but also attracts top talent and makes your organization a destination of choice for potential employees. When people enjoy coming to work and feel a sense of belonging, they are more likely to be engaged and productive.</p>
<p>Moreover, a great culture enables elevated experiences for both employees and customers. When employees feel empowered and supported, they are more likely to provide exceptional service to customers. This results in increased customer satisfaction and loyalty, which in turn drives business success.</p>
<p>Harnessing the benefits of great culture for team productivity requires creating an environment where communication is open, trust is established, well-being is prioritized, and diversity and inclusion are embraced. In the next sections, we will explore strategies to foster the right culture in your business and provide success stories of businesses that have achieved great results through their positive and healthy culture.</p>
<p><em>Strategies to Foster the Right Culture in Your Business</em></p>
<p>Creating the right culture in your business requires a deliberate and thoughtful approach. It's not something that can be achieved overnight, but with the right strategies, you can foster a positive and empowering workplace culture. </p>
<p>One of the first steps in fostering the right culture is to clearly define your organization's values and purpose. This sets the foundation for everything else. When your employees understand and align with the values and purpose of the organization, it creates a sense of meaning and direction in their work. </p>
<p>Another important strategy is to lead by example. As a leader, your actions and behaviors have a significant impact on the culture of your organization. Show respect and kindness to your employees, actively listen to their ideas and concerns, and provide recognition and rewards for their efforts. This builds trust and fosters a supportive environment where employees feel valued and empowered.</p>
<p>Communication is also key in fostering the right culture. Encourage open and transparent communication channels, where employees feel comfortable sharing their ideas, concerns, and feedback. This creates a culture of collaboration, creativity, and continuous improvement.</p>
<p>Investing in employee development and growth is another strategy that can contribute to a positive culture. Provide opportunities for learning and skill development, both through formal training programs and on-the-job experiences. When employees feel that their personal and professional growth is supported, it creates a culture of continuous learning and improvement.</p>
<p>Lastly, don't underestimate the power of celebrating achievements and milestones. Recognize and appreciate the hard work and contributions of your employees. This not only boosts morale and motivation, but it also reinforces the positive aspects of your culture.</p>
<p>By implementing these strategies, you can foster a culture that empowers your team to excel, driving exceptional results and success for your business. Remember, the answer is yes, a great culture can unlock the potential of your team to achieve outstanding results.</p>
<p><em>Case Studies: Success Stories of Businesses with Great Culture</em></p>
<p>In this section, we will explore some success stories of businesses that have achieved outstanding results through their positive and healthy culture. These case studies will provide real-life examples of how the right culture can transform a team and drive success.</p>
<p>Case Study 1: Zappos</p>
<p>Zappos, an online shoe and clothing retailer, is well-known for its exceptional company culture. They prioritize employee satisfaction and have a strong focus on delivering excellent customer service. Their employees are encouraged to bring their whole selves to work, and the company invests in creating a supportive and fun environment. This culture has resulted in high employee retention, increased customer loyalty, and significant business growth.</p>
<p>Case Study 2: Google</p>
<p>Google is famous for its innovative and inclusive culture. They foster an environment that promotes creativity, collaboration, and experimentation. Employees are given freedom to explore new ideas and are supported in their professional development. This culture of innovation has enabled Google to consistently launch successful products and remain at the forefront of technology.</p>
<p>Case Study 3: Southwest Airlines</p>
<p>Southwest Airlines is known for its strong culture of hospitality and employee empowerment. They prioritize treating employees well and providing opportunities for growth and development. This culture has led to exceptional customer service and high employee engagement, making Southwest Airlines one of the most successful airlines in the industry.</p>
<p>These case studies demonstrate the power of a positive and empowering workplace culture. By investing in their employees and creating a supportive environment, these businesses have achieved remarkable success. Their stories serve as inspiration and proof that a great culture can truly unlock the potential of a team and drive outstanding results.</p>
    </div>
  </div>
</article>
<section class="related">
  <div class="container">
    <h3>Related</h3>
    <div class="blog-grid"><a class="blog-card" href="/blog/elevating-the-guest-experience-be-the-reason-they-choose-you">
        <h3>Elevating the Guest Experience: Be the Reason They Choose You</h3>
        <div class="img" style="background-image:url('/assets/images/blog-elevating-the-guest-experience.jpg')"></div>
        <p>In today&#x27;s highly competitive hospitality industry, guests have endless choices when it comes to where they stay or dine. With numerous hotels, restaurants, and entertainment options available, standing out and attracting guests can be a challenge. However, it is not impossible. By focusing on elevating the guest experience, we can be the reason the guest chooses us over other options. In this blog post, we will discuss the importance of providing elevated guest experiences and how it can set us apart from our competitors. Let&#x27;s delve into the world of hospitality and discover how we can make a lasting impression on our guests.</p>
        <span class="pill-btn">Read more ...</span>
      </a><a class="blog-card" href="/blog/becoming-a-trusted-servant-leader-3-ways-to-engage-and-retain-your-people">
        <h3>Becoming a Trusted Servant Leader – 3 Ways to Engage and Retain Your People</h3>
        <div class="img" style="background-image:url('/assets/images/blog-trusted-servant-leader.jpg')"></div>
        <p>If this scenario is familiar to you, you’re in good company. Many organizations and their leaders are struggling to develop engaged employees who will stick around for the long haul. The causes of low engagement and high turnover are many—and the impact on organizations is tremendous. Consider these data points in the new report from Gallup:</p>
        <span class="pill-btn">Read more ...</span>
      </a><a class="blog-card" href="/blog/the-impact-of-effective-leadership-on-restaurant-success">
        <h3>The Impact of Effective Leadership on Restaurant Success</h3>
        <div class="img" style="background-image:url('/assets/images/blog-effective-leadership.jpg')"></div>
        <p>In the bustling world of the restaurant industry, success hinges on more than just delectable dishes and attentive service. While these elements undoubtedly play a crucial role, the heartbeat of any thriving restaurant lies in its leadership. Effective leadership in the restaurant business is akin to the conductor of a well-orchestrated symphony, harmonizing diverse components to create a symphony of success. In this blog post, we&#x27;ll delve into the profound influence of leadership on restaurant success, exploring the multifaceted ways in which it shapes everything from workplace culture to operational efficiency.</p>
        <span class="pill-btn">Read more ...</span>
      </a></div>
  </div>
</section>
{{CONTACT_SECTION}}
```

### 9.6 Post 3: `/blog/becoming-a-trusted-servant-leader-3-ways-to-engage-and-retain-your-people`

```html
<article class="post">
  <div class="band"><div class="container"><h1>Becoming a Trusted Servant Leader – 3 Ways to Engage and Retain Your People</h1></div></div>
  <div class="container detail-body">
    <figure class="float-media" style="margin-top:0"><img src="/assets/images/blog-trusted-servant-leader.jpg" alt=""></figure>
    <div class="prose">
<p>If this scenario is familiar to you, you’re in good company. Many organizations and their leaders are struggling to develop engaged employees who will stick around for the long haul. The causes of low engagement and high turnover are many—and the impact on organizations is tremendous. Consider these data points in the new report from <a href="https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx">Gallup</a>:</p>
<ul>
<li>77% of employees are either disengaged (59%) or <em>actively</em> disengaged (18%)</li>
<li>51% of currently employed workers are watching for, or actively seeking, a new job</li>
<li>70% of the variance in employee engagement is attributable to the manager</li>
</ul>
<p>Think about that last point. If you’re a manager, is that a sobering thought? It should be. Your leadership accounts for 70% of how engaged your team members feel at work.</p>
<p>So what can you do, as an individual leader, to develop and retain engaged team members? Let me suggest you implement these three leadership methods:</p>
<p><strong>1. Adopt a mindset of being an environmental curator.</strong> Leaders have the responsibility of fostering an environment that allows people to flourish. That environment is a medley of ingredients that, when mixed together in the right proportions, creates a culture that allows people to excel.</p>
<p>Our <a href="https://resources.blanchard.com/whitepapers/employee-work-passion-volume-3-connecting-the-dots">research</a> has identified 12 environmental factors that influence an employee’s level of passion toward their work. The 12 factors are grouped into three categories: 1. Organizational Factors (Distributive Fairness, Procedural Fairness, Growth, Performance Expectations), 2. Job Factors (Meaningful Work, Autonomy, Workload Balance, Task Variety), and 3. Relationship Factors (Connectedness to Leader, Connectedness to Colleagues, Collaboration, Feedback).</p>
<p>Adopting the mindset of being an environmental curator means you’re monitoring these factors on an ongoing basis and making tweaks here and there to continually optimize the conditions necessary for your team to succeed. In particular, it’s helpful to regularly ask yourself these questions:</p>
<ul>
<li>To what extent can I help people find meaning in their work and their roles?</li>
<li>To what extent can I display fairness by treating people equitably and ethically?</li>
<li>To what extent can I help provide people with learning, development, and growth opportunities in their current roles and advancement in their career?</li>
<li>To what extent can I make sure that people are clear on performance expectations, receive helpful feedback, and have opportunities to collaborate with others?</li>
<li>To what extent can I help manage people’s workloads and ensure they have enough autonomy and task variety?</li>
</ul>
<p>If your organization’s overall culture isn’t conducive to fostering high engagement, don’t let that stop you from trying to <a href="https://leadingwithtrust.com/2022/02/22/4-tips-servant-leader-in-toxic-culture/">create it within your own team</a>. Your immediate circle of influence is where you have the most power, so use your team as a living laboratory to implement best practices that are proven to produce engaged and committed employees.</p>
<p><strong>2. Start with trust.</strong> Trust is a primary driver of employee engagement. <a href="https://sloanreview.mit.edu/article/how-to-build-a-high-trust-workplace/">Research</a> shows that trusting employees are 260% more motivated at work, have 41% lower rates of absenteeism, and are 50% less likely to look for another job. A global <a href="https://leadingwithtrust.com/2019/09/09/a-study-of-over-19000-people-reveals-the-2-most-critical-factors-of-highly-engaged-employees/">study</a> of over 19,000 employees revealed the two most critical factors of highly engaged employees as: 1) being on a team and 2) trusting their leader. In fact, the study revealed that workers are <em>twelve times more likely to be fully engaged</em> if they trust their leader.</p>
<p>I’ve yet to meet a leader who doesn’t agree that trust is critically important—yet very few leaders have a specific plan for building trust within their teams. Research has shown that trust comprises four elements that we’ve captured in the acronym ABCD. Leaders build trust and engagement by showing they are:</p>
<ul>
<li>Able – They demonstrate competence by having the necessary training, skills, and expertise to perform well in their roles.</li>
<li>Believable – They act with integrity by being honest, treating people fairly, and acting in alignment with their personal and organizational values.</li>
<li>Connected – They demonstrate care and concern for others by showing goodwill, communicating openly, and building rapport.</li>
<li>Dependable – They honor their commitments. They are responsive, accountable, and do what they say they’ll do.</li>
</ul>
<p>Speaking to the power of trust, I love the story of <a href="https://en.wikipedia.org/wiki/George_Shultz">George P. Shultz</a>. Shultz served two separate presidential administrations in three different capacities: Secretary of Treasury, Secretary of Labor, and Secretary of State. He led US Marines in battle in the South Pacific in WWII, taught economics at MIT and the University of Chicago, and was a successful businessman. To mark the occasion of his 100th birthday, Shultz penned an <a href="https://www.hoover.org/research/trust-coin-realm">essay</a> that captured his most important learnings. He had this to say about trust:</p>
<p><em>“Looking back, I’m struck that there is one lesson that I learned early and have relearned over and over for a century. Put simply: ‘Trust is the coin of the realm.’ When trust was in the room, whatever room that was—the family room, the schoolroom, the coach’s room, the office room, the government room, or the military room—good things happened. When trust was not in the room, good things did not happen. Everything else is details.”</em></p>
<p><strong>3. Lead by serving.</strong> Despite the overwhelming evidence of the benefits of high trust and servant leader-led cultures (see <a href="https://www.researchgate.net/profile/Robert-Liden/publication/269835284_Servant_Leadership_and_Serving_Culture_Influence_on_Individual_and_Unit_Performance/links/54c51ba30cf256ed5a994790/Servant-Leadership-and-Serving-Culture-Influence-on-Individual-and-Unit-Performance.pdf">here</a>, <a href="https://www.trustacrossamerica.com/blog/?p=4947">here</a>, and <a href="https://hbr.org/2017/01/the-neuroscience-of-trust#:~:text=Compared%20with%20people%20at%20low,lives%2C%2040%25%20less%20burnout.">here</a>), many organizations still view servant leadership as being too soft on people and lacking a focus on organizational results.</p>
<p>In our book, <a href="https://www.amazon.com/Simple-Truths-Leadership-Servant-Leader/dp/1523000627/ref=sr_1_1?keywords=simple+truths+of+leadership+ken+blanchard&amp;qid=1641344361&amp;sprefix=simple+truths+of+leadership%2Caps%2C236&amp;sr=8-1"><em>Simple Truths of Leadership: 52 Ways to Be a Servant Leader and Build Trust</em></a>, Ken Blanchard and I argue that servant leadership is the best way to achieve both great results and great relationships. This is possible when you understand the two parts of servant leadership:</p>
<p>The <em>leadership</em> aspect focuses on vision, direction, and results—where you as a leader hope to take your people. Leaders may involve others in setting direction and determining desired results, but if people don’t know where they’re headed or what they’re meant to accomplish, the fault lies with the leader.</p>
<p>The <em>servant</em> aspect focuses on working side by side in relationship with your people. Once the vision and direction are clear, the leader’s role shifts to service—helping people accomplish agreed-upon goals.</p>
<p>Focusing on both people and results is not an either/or proposition; it’s both/and. Few people want to be on a team where they have great relationships but are constantly losing. That doesn’t provide any growth, learning, or challenge. And most people don’t want to be on a winning team that has horrible relationships. That just leads to burnout, stress, and anxiety. Trusted servant leaders focus on both results and relationships.</p>
<p>Remember the scenario I described earlier about leaders struggling to engage and retain team members? Well, let me share a more positive scenario I also get to see, albeit less often, as I work with organizations and leaders around the globe.</p>
<p><em>A leader tells me that their team is a bit of an outlier. While their organization makes great efforts to engage and retain key talent, this leader’s team is thriving. People inside and outside the organization are looking for ways to join this team because there’s an environment of trust and safety. The leader supports team members in their personal development and encourages open communication in the group. Team members look to collaborate—rather than compete—with one another. Team members aren’t afraid to take a risk and fail because they know their leader has their back.</em></p>
<p>If this doesn’t currently describe <em>your</em> team, don’t feel bad. You can get there by curating an environment where people can be their best, building trust with team members so they go the extra mile, and leading with service so people know you’re there to support them in achieving their goals. Whether you lead a small team or a large organization, creating a high engagement working culture that attracts and keeps talented people is well within your grasp.</p>
    </div>
  </div>
</article>
<section class="related">
  <div class="container">
    <h3>Related</h3>
    <div class="blog-grid"><a class="blog-card" href="/blog/elevating-the-guest-experience-be-the-reason-they-choose-you">
        <h3>Elevating the Guest Experience: Be the Reason They Choose You</h3>
        <div class="img" style="background-image:url('/assets/images/blog-elevating-the-guest-experience.jpg')"></div>
        <p>In today&#x27;s highly competitive hospitality industry, guests have endless choices when it comes to where they stay or dine. With numerous hotels, restaurants, and entertainment options available, standing out and attracting guests can be a challenge. However, it is not impossible. By focusing on elevating the guest experience, we can be the reason the guest chooses us over other options. In this blog post, we will discuss the importance of providing elevated guest experiences and how it can set us apart from our competitors. Let&#x27;s delve into the world of hospitality and discover how we can make a lasting impression on our guests.</p>
        <span class="pill-btn">Read more ...</span>
      </a><a class="blog-card" href="/blog/unlocking-your-team-s-potential-with-the-right-culture">
        <h3>Unlocking Your Team&#x27;s Potential with the Right Culture</h3>
        <div class="img" style="background-image:url('/assets/images/blog-unlocking-your-teams-potential.jpg')"></div>
        <p>Creating a positive and empowering workplace culture is crucial for achieving great results in any business. A strong and supportive culture not only boosts employee satisfaction and retention, but it also unlocks the potential of your team to drive success. In today&#x27;s competitive market, having a great workplace culture is more important than ever. It can make the difference between a stagnant, unproductive team and a dynamic, high-performing one. In this blog post, we&#x27;ll explore why a great culture in your business matters and how it can empower your team to achieve outstanding results.</p>
        <span class="pill-btn">Read more ...</span>
      </a><a class="blog-card" href="/blog/the-impact-of-effective-leadership-on-restaurant-success">
        <h3>The Impact of Effective Leadership on Restaurant Success</h3>
        <div class="img" style="background-image:url('/assets/images/blog-effective-leadership.jpg')"></div>
        <p>In the bustling world of the restaurant industry, success hinges on more than just delectable dishes and attentive service. While these elements undoubtedly play a crucial role, the heartbeat of any thriving restaurant lies in its leadership. Effective leadership in the restaurant business is akin to the conductor of a well-orchestrated symphony, harmonizing diverse components to create a symphony of success. In this blog post, we&#x27;ll delve into the profound influence of leadership on restaurant success, exploring the multifaceted ways in which it shapes everything from workplace culture to operational efficiency.</p>
        <span class="pill-btn">Read more ...</span>
      </a></div>
  </div>
</section>
{{CONTACT_SECTION}}
```

### 9.7 Post 4: `/blog/the-impact-of-effective-leadership-on-restaurant-success`

```html
<article class="post">
  <div class="band"><div class="container"><h1>The Impact of Effective Leadership on Restaurant Success</h1></div></div>
  <div class="container detail-body">
    <figure class="float-media" style="margin-top:0"><img src="/assets/images/blog-effective-leadership.jpg" alt=""></figure>
    <div class="prose">
<p>In the bustling world of the restaurant industry, success hinges on more than just delectable dishes and attentive service. While these elements undoubtedly play a crucial role, the heartbeat of any thriving restaurant lies in its leadership. Effective leadership in the restaurant business is akin to the conductor of a well-orchestrated symphony, harmonizing diverse components to create a symphony of success. In this blog post, we'll delve into the profound influence of leadership on restaurant success, exploring the multifaceted ways in which it shapes everything from workplace culture to operational efficiency.</p>
<h3>The Foundation of a Thriving Restaurant</h3>
<p>At the heart of every successful restaurant is a solid foundation built upon effective leadership. The benefits of strong leadership are manifold. A skilled restaurant leader inspires the team to excel, fostering a culture of high morale and dedication. This, in turn, leads to exceptional customer experiences, higher staff retention rates, and an enhanced brand reputation. When leaders lead by example, exhibiting passion for their craft, dedication to service, and unwavering commitment to quality, it sets the tone for the entire establishment.</p>
<p>Effective leadership is not solely about issuing directives; it's about actively listening to your team, valuing their contributions, and empowering them to take ownership of their roles. A leader who understands the importance of nurturing talent and fostering a collaborative environment creates a positive ripple effect throughout the restaurant, boosting staff motivation, and ultimately contributing to the bottom line.</p>
<h3>Nurturing Workplace Culture</h3>
<p>One of the many roles of effective leadership is the cultivation and maintenance of a vibrant workplace culture. In the restaurant industry, where staff interaction with customers is paramount, a positive and empowering culture can be the difference between a thriving establishment and one that struggles to stay afloat. Leadership sets the tone for this culture.</p>
<p>Leaders who prioritize teamwork, open communication, and mutual respect create an environment where employees feel valued and motivated. This, in turn, leads to better collaboration among staff members, reduced turnover rates, and a stronger sense of belonging. Employees who feel appreciated and connected to the restaurant's mission are more likely to go the extra mile, ensuring exceptional service and customer satisfaction.</p>
<h3>Efficient Operations Through Leadership</h3>
<p>The restaurant world is fast-paced and often chaotic, making efficient operations a critical aspect of success. Effective leadership plays a pivotal role in streamlining these operations. Leaders who understand the intricacies of restaurant management can identify bottlenecks, optimize workflows, and enhance overall efficiency.</p>
<p>For instance, through effective leadership, restaurant owners and managers can implement clear and concise processes that reduce wait times, improve order accuracy, and enhance customer service. Additionally, leaders can identify opportunities for cost-saving measures, such as optimizing inventory management and reducing waste. All these elements contribute to improved profitability, which is often the ultimate measure of a restaurant's success.</p>
<h3>The Role of Leadership in Adaptation and Innovation</h3>
<p>The restaurant industry is ever-evolving, with changing consumer preferences, technological advancements, and economic shifts. Effective leadership is not only about maintaining the status quo but also about guiding the restaurant through periods of change and fostering innovation.</p>
<p>In today's digital age, for instance, leaders who embrace technology can enhance the customer experience through online ordering systems, reservation platforms, and data analytics. Moreover, effective leaders encourage their teams to embrace innovation in the kitchen, experimenting with new ingredients, culinary techniques, and menu offerings to stay ahead of the competition.</p>
<h3>Leading Through Challenges</h3>
<p>In the unpredictable world of restaurants, challenges are bound to arise. Whether it's a sudden staff shortage, a negative online review, or unforeseen disruptions, how leadership responds can make or break the establishment. Resilient leadership is vital in navigating these challenges.</p>
<p>Effective leaders remain calm under pressure, make informed decisions, and communicate transparently with their teams. They seek solutions rather than dwelling on problems, and they use challenges as opportunities for growth and improvement. When employees see their leaders tackling adversity with poise and determination, it fosters a sense of confidence and unity that can overcome even the toughest obstacles.</p>
<h3>The Role of Training and Development</h3>
<p>Effective leadership doesn't happen in a vacuum; it's cultivated and nurtured through training and development programs. Restaurant leaders, whether they are seasoned professionals or rising stars, benefit immensely from ongoing education and skill enhancement. Training programs tailored to the unique demands of the restaurant industry can sharpen leadership skills, improve decision-making abilities, and enhance communication with team members.</p>
<p>By investing in leadership training, restaurant owners and managers can equip themselves with the tools and knowledge necessary to excel in their roles. They learn to navigate the intricacies of the industry, adapt to changing trends, and respond effectively to unforeseen challenges. Moreover, these programs foster a sense of continuous improvement and innovation, which can have a profound impact on the restaurant's long-term success.</p>
<h3>The Journey Toward Excellence</h3>
<p>In the competitive world of restaurants, the journey towards excellence is a continuous one. Effective leadership is not a static achievement but an ongoing commitment to growth and improvement. It involves staying attuned to the evolving needs and preferences of customers, embracing emerging technologies, and consistently seeking opportunities to enhance the dining experience.</p>
<p>The triumph of a dining establishment, guided by impactful guidance, isn't solely evaluated through financial gains; it's appraised by the enduring impact it leaves on its clientele. It revolves around crafting unforgettable experiences, nurturing devoted patrons, and constructing a standing that stretches beyond the eating area. As you set off on this quest for distinction, keep in mind that Tallman Academy stands as your unwavering ally. Our proficiency in consulting, fostering growth, and tailor-made print solutions is at your disposal, ready to propel your establishment to unprecedented accomplishments.</p>
<h3>Conclusion</h3>
<p>The influence of impactful guidance on the prosperity of any establishment is undeniable. It acts as the foundation upon which a flourishing business is constructed, fostering a favorable work environment, optimizing operations, sparking creativity, and navigating hurdles. To ensure your enterprise reaches its utmost potential and consistently delivers exceptional experiences, invest in the nurturing and cultivation of sound direction. At Tallman Academy, we excel in development and consulting services that are customized to meet the distinctive requirements of your industry. <a href="/contact-us#message_request"><strong>Reach out to us</strong></a> today to embark on a journey toward success through effective guidance. Together, we can elevate your establishment to new horizons.</p>
    </div>
  </div>
</article>
<section class="related">
  <div class="container">
    <h3>Related</h3>
    <div class="blog-grid"><a class="blog-card" href="/blog/elevating-the-guest-experience-be-the-reason-they-choose-you">
        <h3>Elevating the Guest Experience: Be the Reason They Choose You</h3>
        <div class="img" style="background-image:url('/assets/images/blog-elevating-the-guest-experience.jpg')"></div>
        <p>In today&#x27;s highly competitive hospitality industry, guests have endless choices when it comes to where they stay or dine. With numerous hotels, restaurants, and entertainment options available, standing out and attracting guests can be a challenge. However, it is not impossible. By focusing on elevating the guest experience, we can be the reason the guest chooses us over other options. In this blog post, we will discuss the importance of providing elevated guest experiences and how it can set us apart from our competitors. Let&#x27;s delve into the world of hospitality and discover how we can make a lasting impression on our guests.</p>
        <span class="pill-btn">Read more ...</span>
      </a><a class="blog-card" href="/blog/unlocking-your-team-s-potential-with-the-right-culture">
        <h3>Unlocking Your Team&#x27;s Potential with the Right Culture</h3>
        <div class="img" style="background-image:url('/assets/images/blog-unlocking-your-teams-potential.jpg')"></div>
        <p>Creating a positive and empowering workplace culture is crucial for achieving great results in any business. A strong and supportive culture not only boosts employee satisfaction and retention, but it also unlocks the potential of your team to drive success. In today&#x27;s competitive market, having a great workplace culture is more important than ever. It can make the difference between a stagnant, unproductive team and a dynamic, high-performing one. In this blog post, we&#x27;ll explore why a great culture in your business matters and how it can empower your team to achieve outstanding results.</p>
        <span class="pill-btn">Read more ...</span>
      </a><a class="blog-card" href="/blog/becoming-a-trusted-servant-leader-3-ways-to-engage-and-retain-your-people">
        <h3>Becoming a Trusted Servant Leader – 3 Ways to Engage and Retain Your People</h3>
        <div class="img" style="background-image:url('/assets/images/blog-trusted-servant-leader.jpg')"></div>
        <p>If this scenario is familiar to you, you’re in good company. Many organizations and their leaders are struggling to develop engaged employees who will stick around for the long haul. The causes of low engagement and high turnover are many—and the impact on organizations is tremendous. Consider these data points in the new report from Gallup:</p>
        <span class="pill-btn">Read more ...</span>
      </a></div>
  </div>
</section>
{{CONTACT_SECTION}}
```

### 9.8 Contact: `/contact-us`

```html
{{CONTACT_SECTION}}
```

### 9.9 Meet Billy: `/meet-billy-tallman`

```html
<section>
  <div class="band"><div class="container"><h2>Meet Billy Tallman</h2></div></div>
  <div class="container meet-body">
    <a class="person-card" href="/meet-billy-tallman/billy-tallman">
      <div class="title">Founder, Experience Specialist</div>
      <div class="photo" style="background-image:url('/assets/images/billy-tallman.jpg')" role="img" aria-label="Billy Tallman"></div>
      <div class="name">Billy Tallman</div>
    </a>
  </div>
</section>
{{CONTACT_SECTION}}
```

### 9.10 Bio: `/meet-billy-tallman/billy-tallman`

```html
<section>
  <div class="band"><div class="container"><h1>Founder, Experience Specialist</h1></div></div>
  <div class="container bio-body">
    <div class="photo" style="background-image:url('/assets/images/billy-tallman.jpg')" role="img" aria-label="Billy Tallman"></div>
    <div>
      <div class="name">Billy Tallman</div>
      <div class="prose">
<p>As the Operating Partner of Chick-fil-A Maple Grove, Billy leads a team of talented people to serve the community. With over 25 years of hospitality experience with brands such as McDonald's, Arby's and Church's Chicken, Billy has trained and developed thousands of people into servant leaders, along with empowering teams to success. As a Cherokee Nation citizen, Billy worked in the hospitality side of the casino business and led teams to serve the tribe before joining Chick-fil-A. Billy's sense of purpose has led him to create different systems and approaches tailored to meet the needs of individual employees along with large teams, while exceeding guest expectations.</p>
<p>As a servant leader, Billy has encouraged many people over the years and challenged them to the brink of uncomfortable learning. This stage of development is where many have found who they really are as a leader. This style of development has empowered many to reach goals of multi-unit leadership, director level leadership, business owners, and community leaders.</p>
      </div>
    </div>
  </div>
</section>
{{CONTACT_SECTION}}
```

### 9.11 About 1: `/about-us/be-the-leader-in-customer-excellence-6474675`

```html
<article class="about-detail">
  <div class="band"><div class="container"><h2>About Us</h2></div></div>
  <div class="container detail-body">
    <figure class="float-media" style="margin-top:0"><img src="/assets/images/about-customer-excellence.jpg" alt=""></figure>
    <h1>Be the leader in customer excellence</h1>
    <div class="prose">
<p>Welcome to Tallman Academy, your trusted partner in business consulting, leadership development, and guest experience. We are dedicated to helping businesses like yours thrive by enhancing workplace culture, empowering your team, and teaching the "why" behind customer experience. With a deep understanding of the challenges faced today, we have crafted innovative approaches born out of years of hands-on experience, resulting in customers choosing you over the competitor.<br>Our journey began with a simple yet powerful thought—how can we provide elevated experiences consistently that customers can't live without. Tallman Academy was founded with this in mind and provides training and development to enhance your customer experience to a level of excellence.</p>
<p>We are dedicated to bringing teams together through dynamic leadership approaches. Our core services, speaking engagements and workshops, are tailored to revolutionize your business culture, maximize profits, and deliver unparalleled results. We understand that each business is unique, and our solutions are individually designed to meet your specific needs and goals.</p>
<p><a href="/contact-us#message_request"><strong>Get in touch with us</strong></a> today to learn more about how Tallman Academy can elevate your business's success, and let us be your partner on the path to the future.</p>
    </div>
  </div>
</article>
{{CONTACT_SECTION}}
```

### 9.12 About 2: `/about-us/empowering-excellence-every-step-of-the-way-6474676`

```html
<article class="about-detail">
  <div class="band"><div class="container"><h2>About Us</h2></div></div>
  <div class="container detail-body">
    <figure class="float-media" style="margin-top:0"><img src="/assets/images/about-empowering-excellence.png" alt=""></figure>
    <h1>Empowering Excellence, Every Step of the Way</h1>
    <div class="prose">
<p>We are your strategic partner for business consulting, guiding you toward a brighter and more profitable future. Our expert team specializes in enhancing workplace culture, fostering employee empowerment, and streamlining operational efficiency. We understand that in today's world, hospitality can be fast-paced and highly competitive, which is why we offer tailored solutions to address your unique challenges.</p>
<p>At Tallman Academy, we believe that strong leadership is the cornerstone of a successful business. Our speaking engagements are designed to equip your team with the skills and knowledge they need to excel in their roles. Whether you're a seasoned owner or a rising star in the industry, our services will help you unlock your leadership potential.</p>
<p>Ready to elevate your business's success? Contact us today to explore how Tallman Academy's expert services can transform your business and lead you toward a brighter future.</p>
    </div>
  </div>
</article>
{{CONTACT_SECTION}}
```

### 9.13 Service 1: `/services/business-support-services/speaking-engagements-150397738`

```html
<article class="service-detail">
  <div class="band"><div class="container"><h2>Business Support Services</h2></div></div>
  <div class="container detail-body">
    <figure class="float-media" style="margin-top:0"><img src="/assets/images/service-speaking-engagements.jpg" alt=""></figure>
    <h1>Speaking Engagements</h1>
    <div class="prose">
<p>Discover the transformative power of our speaking engagements, meticulously designed to cultivate a culture of care within your workplace. At the heart of our approach is the core principle of employee empowerment, where every member of your team becomes an active participant in fostering a positive and nurturing work environment. Our expert speakers specialize in workplace culture, delivering insightful and inspiring sessions that leave a lasting impact.</p>
<p>Our speaking engagements are carefully crafted to resonate with your organization's unique needs and goals. We understand that each workplace has its own distinct challenges and aspirations. That's why we tailor our presentations to address your specific issues, helping you unlock the full potential of your workforce. By choosing our services, you're taking the first step towards creating a workplace culture that not only attracts top talent but also retains and empowers your existing team members.</p>
<p>Elevate your workplace culture, boost employee morale, and drive productivity with our speaking engagements. Let us guide you on the path to a more caring and empowered work environment that yields long-lasting success.</p>
    </div>
  </div>
</article>
<section class="related related--services">
  <div class="container">
    <h3>More Services</h3>
    <div class="service-card">
        <a href="/services/business-support-services/consulting-150407341"><div class="img" style="background-image:url('/assets/images/service-consulting.jpg')"></div></a>
        <h4><a href="/services/business-support-services/consulting-150407341">Consulting</a></h4>
        <div class="desc">We partner with companies and small businesses to identify obstacles they face in reaching their goals. We determine out-of-the-box strategies to help companies overcome their challenges.  A needs assessment begins the process, working with you to determine the desired outcome.&amp;nbsp;&amp;nbsp;</div>
        <a class="more" href="/services/business-support-services/consulting-150407341">Read More</a>
      </div>
  </div>
</section>
{{CONTACT_SECTION}}
```

### 9.14 Service 2: `/services/business-support-services/consulting-150407341`

```html
<article class="service-detail">
  <div class="band"><div class="container"><h2>Business Support Services</h2></div></div>
  <div class="container detail-body">
    <figure class="float-media" style="margin-top:0"><img src="/assets/images/service-consulting.jpg" alt=""></figure>
    <h1>Consulting</h1>
    <div class="prose">
<p>We partner with companies and small businesses to identify obstacles they face in reaching their goals. We determine out-of-the-box strategies to help companies overcome their challenges. A needs assessment begins the process, working with you to determine the desired outcome. </p>
<p>Because our focus is leadership consulting, the results delivered allow your leadership team to grow and achieve consistent, sustainable results.</p>
<p>Learn what a different perspective can do for your team and your business. We can navigate you to a workplace that delivers what you and your customers desire most.</p>
    </div>
  </div>
</article>
<section class="related related--services">
  <div class="container">
    <h3>More Services</h3>
    <div class="service-card">
        <a href="/services/business-support-services/speaking-engagements-150397738"><div class="img" style="background-image:url('/assets/images/service-speaking-engagements.jpg')"></div></a>
        <h4><a href="/services/business-support-services/speaking-engagements-150397738">Speaking Engagements</a></h4>
        <div class="desc">Discover the transformative power of our speaking engagements, meticulously designed to cultivate a culture of care within your workplace. At the heart of our approach is the core principle of employee empowerment, where every member of your team becomes an active participant in fostering a positive and nurturing work environment. Our expert speakers specialize in workplace culture, delivering insightful and inspiring sessions that leave a lasting impact.</div>
        <a class="more" href="/services/business-support-services/speaking-engagements-150397738">Read More</a>
      </div>
  </div>
</section>
{{CONTACT_SECTION}}
```

### 9.15 Merchant policies: `/merchant-policies`

```html
<section><div class="band"><div class="container"><h2>Merchant Policies</h2></div></div><div class="container policy-body"><div class="merchant">
<div class="merchant-row"><div class="k">Delivery methods</div><div><strong>Collection</strong><div>Free</div></div></div>
<div class="merchant-row"><div class="k">Payment options</div><div><strong>Payment methods accepted</strong><img src="/assets/images/payment-cash.svg" alt="Cash" width="48" height="32" style="margin-top:8px"></div></div>
<div class="merchant-links"><a href="/terms-and-conditions">Terms &amp; Conditions</a><a href="/privacy-policy">Privacy Policy</a><a href="/return-and-refund-policy">Refund Policy</a></div>
</div></div></section>
```

### 9.16 Legal notice: `/legal-notice`

```html
<section><div class="band"><div class="container"><h2>Legal Notice</h2></div></div><div class="container policy-body"><dl>
<div class="legal-row"><dt>Business Name</dt><dd>Tallman Academy</dd></div>
<div class="legal-row"><dt>Registered Company Name</dt><dd>Tallman Academy</dd></div>
<div class="legal-row"><dt>Registered Office Address</dt><dd>Minneapolis</dd></div>
</dl></div></section>
```

### 9.17 Terms: `/terms-and-conditions`

```html
<section><div class="band"><div class="container"><h2>Terms and Conditions</h2></div></div><div class="container policy-body"><p>Please contact us for our full Terms &amp; Conditions.</p></div></section>
```

### 9.18 Privacy: `/privacy-policy`

```html
<section><div class="band"><div class="container"><h2>Privacy Policy</h2></div></div><div class="container policy-body"><p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from this website (the “Site”).</p>
<p>PERSONAL INFORMATION WE COLLECT</p>
<p>When you visit the Site, we may collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
<p>Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Browsing Information”.</p>
<p>We collect Browsing Information using the following technologies:</p>
<p>– “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" rel="noopener">http://www.allaboutcookies.org</a>.</p>
<p>– “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</p>
<p>– “Web beacons”, “tags”, and “pixels” are electronic files used to record information about how you browse the Site.</p>
<p>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number). We refer to this information as “Purchase Information”.</p>
<p>When we talk about “Your Personal Information” in this Privacy Policy, we are talking both about Browsing Information and Purchase Information.</p>
<p>HOW DO WE USE YOUR PERSONAL INFORMATION?</p>
<p>We use the Purchase Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Purchase Information to:</p>
<p>– Communicate with you;</p>
<p>– Screen our orders for potential risk or fraud; and</p>
<p>– When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>
<p>We use the Browsing Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>
<p>SHARING YOUR PERSONAL INFORMATION</p>
<p>We may share Your Personal Information with third parties to help us use Your Personal Information, as described above. For example, we may use Google Analytics to help us understand how our customers use the Site — you can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy" rel="noopener">https://www.google.com/intl/en/policies/privacy</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener">https://tools.google.com/dlpage/gaoptout</a>.</p>
<p>Finally, we may also share Your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
<p>BEHAVIOURAL ADVERTISING</p>
<p>As described above, we use Your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" rel="noopener">http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a> .</p>
<p>You can opt out of targeted advertising by using the links below:</p>
<p>– Facebook: <a href="https://www.facebook.com/settings/?tab=ads" rel="noopener">https://www.facebook.com/settings/?tab=ads</a></p>
<p>– Google: <a href="https://www.google.com/settings/ads/anonymous" rel="noopener">https://www.google.com/settings/ads/anonymous</a></p>
<p>– Bing: <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" rel="noopener">https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a></p>
<p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: <a href="http://optout.aboutads.info" rel="noopener">http://optout.aboutads.info</a>.</p>
<p>DO NOT TRACK<br>Please note that we presently do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</p>
<p>YOUR RIGHTS</p>
<p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
<p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information may be transferred outside of Europe, including to Canada and the United States.</p>
<p>DATA RETENTION</p>
<p>When you place an order through the Site, we will maintain your Purchase Information for our records unless and until you ask us to delete this information.</p>
<p>CHANGES</p>
<p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
<p>MINORS<br>The Site is not intended for individuals under the age of 18.</p>
<p>CONTACT US<br>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e‑mail at the email address provided in the Contact section of the Site</p></div></section>
```

### 9.19 Refund: `/return-and-refund-policy`

```html
<section><div class="band"><div class="container"><h2>Refund Policy</h2></div></div><div class="container policy-body"><p>Please contact us for our full Refunds &amp; Returns Policy.</p></div></section>
```

## 10. Verification Targets

Measure with Playwright (`element.getBoundingClientRect()` plus scroll offset) at the given viewport width. Values are from the ORIGINAL site. Allow ±5px.

### 10.1 Home, desktop (1440 wide)

| Element | x, y, width x height |
|---|---|
| Hero | 0, 0, 1440x817 |
| Hero title | 238, 371, 964x80 |
| Hero subtitle | 238, 500, 964x93 |
| Hero mail button | 690, 653, 60x60 |
| Logo | 208, 102, 140x140 |
| About section (bar + 2 cards) | 0, 817, 1440x1128 |
| About card 1 | 208, 877, 1024x502 |
| About card 2 | 208, 1443, 1024x502 |
| Ready section | 0, 1945, 1440x337 |
| Ready card | 208, 2005, 1024x217 |
| Chips section | 0, 2281, 1440x281 |
| First chip | 228, 2341, 297x60 |
| Contact section | 0, 2563, 1440x325 |
| Location item | 208, 2715 |
| Testimonials section | 0, 2888, 1440x850 |
| First visible testimonial photo | 306, 3008, 247x270 |
| Carousel dots | y=3675 |
| Footer | 0, 3738, 1440x77 |

### 10.2 Home, mobile (375 wide)

| Element | x, y, width x height |
|---|---|
| Logo | 128, 5, 120x120 |
| Hero | 0, 0, 375x574 |
| Hero title | 18, 160, 338x113 |
| Hero subtitle | 18, 337, 338x143 |
| Hero mail button | 307, 577, 52x52 |
| About photo 1 | 0, 634, 375x326 |
| About heading 1 | 16, 1000 |
| Ready card | 16, 2158, 343x593 |
| First chip | 16, 2831, 343x60 |
| Contact bar | y=3354 |
| Testimonials bar | y=3736 |
| First testimonial card | 16, 3836, 283 wide (photo 283x283) |
| Floating mail button | centered, 48x48, 58px above the bottom of the screen |

### 10.3 Inner pages, desktop (1440 wide)

| Page | Element | x, y, width x height |
|---|---|---|
| All inner | Header | 0, 0, 1440x65 (logo 208, 14, 37x37) |
| All inner | First bar | 0, 65, 1440x60 |
| Services | "Business Support Services" title | y=179 |
| Services | Service images | 397, 265, 307x220 and 736, 265, 307x220 |
| Services | "The Big 6 Culture" | y=781; first labels at y=852 |
| Services | Contact section | 0, 1151, 1440x856; form card 612, 1271, 620 wide |
| Services | Footer | y=2007 |
| Blog | Cards | 208/560/912, 185, 320x632; 4th card 208, 847 |
| Post 1 | Image | 208, 130, 512x288; first paragraph y=160 |
| Post 1 | "Related" heading | y=3022 |
| About 1 | Image | 208, 125, 543x362 |
| Service 1 | Image | 208, 125, 512x341; "More Services" y=847 |
| Meet Billy | Card | 560, 185, 320x522; photo 590, 282, 260x260 |
| Bio | Photo | 208, 157, 330x330; name 613, 157; first paragraph y=245 |
| Legal notice | First row | 208, 185, 1024 wide |

### 10.4 Mobile spot checks (375 wide)

| Page | Element | Value |
|---|---|---|
| All inner | Header | 54px tall, logo 44x44 centered |
| Blog | First card | 16, 154, 343x622 |
| Post 1 | Bar | 0, 54, 375x123 (title wraps to 4 lines); image 16, 177, 343x193; first paragraph y=390 |
| Service 1 | Image | 16, 115, 343x229; title y=344 (Cinzel 27.63) |
| About 1 | Image | 88, 114, 199x133; title y=276 |
| Meet Billy | Card | 16, 154, 343 wide; photo 240x240 |
| Bio | Name | y=391; first paragraph y=455 |
| Any page with form | Form card | 343 wide, padding 28px 16px |

## 11. Verification Checklist

1. Serve the site locally (`python3 -m http.server 8080` in the project root).
2. With Playwright, take full page screenshots of all 19 URLs at 1440x900 and 375x812.
3. Compare each desktop screenshot side by side with `reference/screenshots/desktop/<page>.png` (file names: index, offerings, blog, contact-us, meet-billy-tallman, billy-tallman, about-be-the-leader, about-empowering-excellence, service-speaking-engagements, service-consulting, blog-elevating-the-guest-experience, blog-unlocking-your-teams-potential, blog-trusted-servant-leader, blog-effective-leadership, merchant-policies, legal-notice, terms-and-conditions, privacy-policy, return-and-refund-policy).
4. Check the numbers in Section 10.
5. Click through: every nav link, every "Read More"/"Learn More", the hero mail button (lands on the contact form), the carousel arrows, dots and swipe, a testimonial "Read more" (opens the full quote in a dialog; Esc or the × closes it), the mobile hamburger menu, and a test form submission (arrives at billy@tallmanacademy.com).
6. Confirm every old URL in Section 3 loads (no 404s) and `www.tallmanacademy.com` redirects to `tallmanacademy.com`.

Known, intentional differences from the old site: no UENI badge, no cookie banner, no GTM tracking, consent text points to Tallman Academy's own policy pages, mobile section titles wrap instead of being cut off (the old Services page cut off "Empowering Hospitality Excellence" on phones), and the old site's 1 to 2px rounding differences.

## 12. Content Notes

* All text on the pages is in Section 9 exactly as it appears on the live site, including the original capitalization ("Be the leader in customer excellence") and the testimonial typos.
* Blog post 3 ("Becoming a Trusted Servant Leader") originally ended with an empty "About the Author" box; it is omitted because it had no content.
* The about card teasers and the testimonial quotes on the home page are shortened exactly as on the live site ("..." text endings for about cards; a 3 line CSS clamp for quotes). Full texts open on the detail pages and in the testimonial dialog.
* Blog card excerpts are the first paragraph of each post, clamped to 5 lines by CSS (the original also showed about 5 lines ending in "...").

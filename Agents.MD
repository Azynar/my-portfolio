AZYNAR Website Upgrade Specification
Purpose: Source-of-truth brief for updating the existing AZYNAR portfolio into a multi-page, conversion-focused website with clear service copy, case studies, SEO foundations, and maintainable TypeScript.
Current site: https://azynardev.vercel.app
Brand: AZYNAR
Current positioning: Web Developer & Digital Solutions Builder
Long-term direction: Full-stack engineering, with room to specialize later

> This is a project specification, not a file that automatically changes the live website. Use it alongside the actual website repository and implement it in reviewed stages.

---

1. Project goals
   Upgrade the site so that it:
   Explains the business problems AZYNAR solves.
   Presents services clearly and accurately.
   Demonstrates capability through truthful project case studies.
   Makes it easy for qualified prospects to discuss a project.
   Establishes sound technical SEO foundations for Nigerian and international prospects.
   Supports progression toward full-stack engineering without prematurely claiming senior-level expertise.
   Uses TypeScript and reusable patterns so the site can grow without becoming hard to maintain.
   Primary audiences
   Small and medium-sized businesses that need a professional website or a clearer way to receive enquiries.
   Service businesses that need booking, registration, lead capture, or customer-contact workflows.
   Startups and founders who need a website or an initial web product.
   Agencies and professionals who may need a development collaborator.
   Recruiters and engineering peers reviewing the portfolio.
   Primary conversion goal
   Get qualified prospects to discuss a website, web application, or business-system project.
   Secondary goals are to help visitors review relevant work, understand the process, and assess professional credibility.

---

2. Positioning and messaging
   Recommended positioning
   Web Developer & Digital Solutions Builder
   AZYNAR builds websites, web applications, and business systems that help companies serve customers, manage operations, and turn ideas into working digital products.
   Core message
   > I build websites, web applications, and business systems that help companies serve customers, manage operations, and bring ideas to life.
   > Supporting message
   > A digital solution should fit its users and purpose. That may mean a public website, an e-commerce experience, a web application, an internal tool, or an integration between existing systems.
   > Service architecture: one brand, three pillars
   > Keep the public brand broad, but make the service menu easy to understand. The three pillars are:
   > Websites & Digital Experiences — business/corporate websites, service-company websites, landing pages, marketing websites, portfolios, product catalogues, and e-commerce where supported.
   > Web Applications & Custom Software — customer portals, admin dashboards, booking applications, inventory/order tools, shipment-management tools, and MVPs, provided the requirements and delivery capacity are appropriate.
   > Business Systems & Integrations — internal tools, workflow automation, API/third-party integrations, enquiry management, reporting, and operational workflows.
   > Booking, lead capture, and automation are often features or use cases rather than separate headline service pillars. Organize them under the relevant solution based on what the client actually needs. A logistics-company website must not be presented as equivalent to a production-grade fleet or shipment-management platform.
   > Messaging principles
   > Lead with business outcomes before technology lists.
   > Emphasize the business problem first, then the appropriate solution: a website, web application, internal tool, or integration.
   > Explain that the process begins by understanding requirements.
   > Mention React, Next.js, TypeScript, APIs, databases, and automation where relevant—not as a substitute for explaining value.
   > Be transparent about the use of AI-assisted development and continue to demonstrate engineering judgment.
   > Do not publish unverified claims
   > Do not use claims such as “3+ years shipping code,” “100% client satisfaction,” “sub-second loading,” “95+ Lighthouse score,” “48-hour sprint response,” or specific client/project counts unless they are true, measurable, and defensible. Do not present planned or incomplete functionality as finished. Clearly distinguish client work, personal projects, prototypes, concepts, and in-progress work.
   > Do not claim to be a senior full-stack engineer or software architect until experience and evidence support those titles.

---

3. Site architecture
   Build the core pages first. Add detailed service pages and articles when there is enough useful content to support them.
   Core routes
   Page Route Purpose
   Home `/` Explain the value proposition and direct visitors to services, work, and contact
   Services `/services` Overview of services and use cases
   Projects `/projects` Browse selected work
   Project case study `/projects/[slug]` Explain context, decisions, implementation, and verified results
   About `/about` Explain who AZYNAR is, working approach, and engineering direction
   Contact `/contact` Make project enquiries straightforward
   Service detail routes
   Page Route Purpose
   Websites & digital experiences `/services/websites-digital-experiences` Business, corporate, marketing, and service-company websites
   E-commerce websites `/services/ecommerce-websites` Online stores and product catalogues, when this is a real offer
   Web applications & custom software `/services/web-applications` Portals, dashboards, booking apps, and scoped web products
   Business systems & integrations `/services/business-systems-integrations` Internal tools, API integrations, and operational workflows
   Optional future route
   Page Route Purpose
   Insights `/insights` Useful articles answering prospective clients’ questions
   Do not create thin pages simply to increase page count. Every route should have a distinct purpose and genuinely useful content.
   Main navigation
   Home
   Services
   Projects
   About
   Contact
   Use one prominent navigation CTA: Discuss a Project.
   Ensure the mobile menu is keyboard-accessible and straightforward to open, close, and navigate.

---

4. Page copy
   Use the following as a draft. Confirm that each claim matches actual services, skills, and project evidence before publishing.
   4.1 Home page (`/`)
   Title: `AZYNAR | Web Development & Digital Solutions`
   Meta description: `AZYNAR builds websites, web applications, and business systems for businesses and startups, from digital experiences to practical operational tools and integrations.`
   Hero
   Eyebrow: `Web Development & Digital Solutions`
   H1: `Digital solutions for the way your business works.`
   Supporting copy:
   > I build websites, web applications, and business systems that help companies serve customers, manage operations, and turn ideas into working digital products.
   > Primary CTA: `Discuss Your Project` → `/contact`
   > Secondary CTA: `View Selected Work` → `/projects`
   > Avoid promising guaranteed leads, rankings, or revenue. Outcomes depend on the offer, traffic, sales process, and other factors.
   > Problem section
   > Heading: `Your online presence should do more than exist.`
   > Potential customers need to understand what you offer, trust your business, and know what to do next. If your information is scattered across social profiles and messages, it can be harder for people to take action and harder for you to manage enquiries consistently.
   >
   > AZYNAR helps bring the important pieces together in a clear, practical digital experience.
   > Potential problem cards:
   > Customers cannot quickly find service information.
   > Enquiries arrive through disconnected channels.
   > Booking or registration requires too much manual coordination.
   > A business needs a more credible destination for potential customers.
   > Only show problem cards relevant to services actually offered.
   > Services section
   > Heading: `Practical digital solutions for growing businesses`
   > Intro:
   > Start with the problem you need to solve. The right solution may be a public-facing website, a web application, or a business system connected to existing tools.
   > Websites & digital experiences
   > Business, corporate, e-commerce, and marketing websites that communicate clearly, build credibility, and help users take the next step.
   > CTA: `Explore Websites` → `/services/websites-digital-experiences`
   > Web applications & custom software
   > Web-based products such as customer portals, admin dashboards, booking applications, and MVPs, scoped around real user and operational requirements.
   > CTA: `Explore Web Applications` → `/services/web-applications`
   > Business systems & integrations
   > Internal tools, workflow improvements, and API or third-party integrations that help connect business processes and reduce avoidable manual work.
   > CTA: `Explore Business Systems` → `/services/business-systems-integrations`
   > Do not imply that every integration is included in every package. Confirm requirements and scope before quoting.
   > Selected work section
   > Heading: `Selected work`
   > A selection of websites, web applications, prototypes, and digital experiences that show how I approach requirements, implementation, and practical problem-solving.
   > Each card should show:
   > Project name and type
   > One-sentence summary
   > Verified technologies or tools
   > Status: live, prototype, concept, or in progress
   > Case-study link
   > Live demo link, if available and safe to share
   > Do not present a planned dashboard, booking feature, automation, or other unfinished functionality as completed.
   > Process section
   > Heading: `A clear process from requirements to launch`
   > Understand — Discuss the business, users, goals, and constraints.
   > Define — Agree on scope, deliverables, timeline, and cost.
   > Build — Implement the agreed experience and functionality.
   > Review — Test the site and review it with the client.
   > Launch and hand over — Deploy the agreed work and provide the agreed handover.
   > Do not promise maintenance, copywriting, hosting, domain fees, or ongoing support unless included in the proposal.
   > About preview
   > Heading: `Built around useful outcomes—and better engineering`
   > I'm Abdulazeem, the developer behind AZYNAR. I build websites, web applications, and business systems for companies while steadily deepening my skills in software engineering. My approach is to understand the problem first, define the requirements, choose tools that fit, and build something useful and maintainable.
   > CTA: `More About AZYNAR` → `/about`
   > Final CTA
   > Heading: `Have a project in mind?`
   > Tell me what your business or product needs to achieve, what users need to do, and what constraints matter. We can work out whether a website, web application, or connected business system is the right fit.
   > CTA: `Discuss Your Project` → `/contact`

---

4.2 Services page (`/services`)
Title: `Web Development & Digital Solutions | AZYNAR`
Meta description: `Explore AZYNAR's website development, custom web applications, and business systems and integrations for businesses and startups.`
H1: `Websites, web applications, and business systems`

> Different problems need different solutions. A company may need a public-facing website, an online store, a customer portal, an internal dashboard, or a workflow that connects existing tools. I start by understanding the users, requirements, constraints, and desired outcome before defining the scope.
> Show three cards linking to the three service pillars: Websites & Digital Experiences; Web Applications & Custom Software; Business Systems & Integrations. Individual offerings such as e-commerce, booking, lead capture, and automation can sit beneath the relevant pillar.
> What a project may include
> Depending on the agreed scope:
> Responsive page layouts
> Service and company information
> Responsive website pages and navigation
> Product catalogues or e-commerce features, if scoped
> Contact, booking, or registration workflows
> Customer portals or internal dashboards, if scoped
> API and third-party integrations
> Basic technical SEO for public-facing websites
> Analytics setup, if agreed
> Deployment and handover
> Add this scope note:
> Features, integrations, third-party fees, content entry, maintenance, and ongoing support are confirmed in the project proposal. A feature is not included merely because it appears in this general list.
> Explain the discovery, scope, proposal, build, review, launch, and handover process.

## CTA: `Tell Me About Your Project` → `/contact`

4.3 Websites & digital experiences (`/services/websites-digital-experiences`)
Title: `Website Development | AZYNAR`
Meta description: `Build a responsive business or marketing website that presents your offer clearly, supports credibility, and guides visitors toward the next step.`
H1: `Websites designed around a clear purpose`

> A website should fit the purpose it needs to serve. I build responsive business, corporate, service-company, and marketing websites that organize information, communicate the offer clearly, and guide visitors toward a relevant next step.
> Possible deliverables, depending on scope:
> Homepage and service pages
> About and contact pages
> Mobile-friendly layouts
> Contact forms or WhatsApp links
> Basic on-page SEO
> Performance and accessibility checks
> Deployment and handover
> Suitable for businesses that need a credible public presence, companies with scattered service information, teams directing campaign traffic to a clear destination, and startups that need a marketing website. E-commerce stores and product catalogues should be scoped against their catalogue, checkout, payment, fulfilment, and content-management requirements.
> Do not imply that domain registration, paid hosting, email hosting, premium assets, or ongoing maintenance are automatically included.

## CTA: `Discuss a Website Project` → `/contact`

4.4 E-commerce websites (`/services/ecommerce-websites`)
Title: `E-commerce Website Development | AZYNAR`
Meta description: `Plan an online store or product catalogue around your products, customer journey, payment needs, and fulfilment process.`
H1: `An online store built around how you sell`

> An e-commerce project is more than a product grid. Scope depends on catalogue size, product variants, checkout, payment provider, delivery or fulfilment, inventory, order notifications, and who will maintain product information. I clarify these requirements before recommending an implementation.
> Potential scope, only when agreed:
> Product catalogue and category pages
> Product detail pages and responsive layouts
> Cart and checkout using a suitable supported provider
> Payment-provider integration, subject to availability and fees
> Order notifications and basic order workflows
> Content and product-management approach
> Deployment, testing, and handover
> Do not claim payment, inventory, shipping, tax, refund, or admin features unless implemented and tested. Confirm all provider fees, compliance requirements, and operational responsibilities before quoting.

## CTA: `Discuss an E-commerce Project` → `/contact`

4.5 Web applications & custom software (`/services/web-applications`)
Title: `Custom Web Application Development | AZYNAR`
Meta description: `Discuss a scoped web application, customer portal, dashboard, booking tool, or MVP built around actual user and business requirements.`
H1: `Web applications built around real requirements`

> When a public website is not enough, a web application can support more involved interactions for customers or staff. Examples include portals, dashboards, booking applications, and early-stage product MVPs. The right scope depends on user roles, data, permissions, integrations, and operational risk.
> Possible project types:
> Customer or partner portals
> Admin dashboards and internal interfaces
> Booking or reservation applications
> Inventory, order, or shipment-management tools
> Startup MVPs and proof-of-concept products
> Scope and readiness note: A demo or prototype is not automatically production-ready. Systems involving accounts, personal or business-sensitive data, payments, permissions, audit trails, backups, uptime requirements, or operational decisions need appropriate architecture, security controls, testing, monitoring, and maintenance planning. Complex requirements may need a larger team or a phased delivery plan.

## CTA: `Discuss a Web Application` → `/contact`

4.6 Business systems & integrations (`/services/business-systems-integrations`)
Title: `Business Systems & Integrations | AZYNAR`
Meta description: `Explore internal tools, workflow improvements, and integrations that connect websites and business tools around practical operational needs.`
H1: `Connect the tools and workflows your business relies on`

> Useful systems should reduce friction rather than add complexity. I help assess workflows and scope practical internal tools or integrations that connect a website, form, API, email platform, database, or existing business application where supported.
> Potential use cases:
> Lead and enquiry collection with structured handoff
> Form submissions routed to email or an approved workspace
> Internal tools for staff or teams
> Reporting interfaces and operational dashboards
> API and third-party service integrations
> Workflow automation that reduces repetitive data entry
> Before confirming an integration, check API access, platform limits, permissions, data protection, reliability, and ongoing fees. Do not promise real-time tracking, complex fleet management, or other production-critical capabilities merely because a marketing website for that industry has been built.

## CTA: `Discuss a Business System` → `/contact`

4.7 Booking, lead capture, and automation as use cases
Booking requests, enquiry forms, event registrations, and business systems and integrations are features or use cases, not automatically separate top-level service pillars. Place each under the pillar that best describes the main solution:
A form on a public website usually belongs under Websites & Digital Experiences.
A custom booking application with availability, user accounts, or operational dashboards belongs under Web Applications & Custom Software.
Routing submissions between tools, notifying staff, or reducing manual processing belongs under Business Systems & Integrations.
For low-budget requirements, an embedded third-party form or Google Form may be more appropriate than a custom backend. Explain trade-offs and confirm where submissions are stored, who can access them, what notifications are sent, and whether third-party fees apply.

---

4.6 Projects (`/projects`)
Title: `Web Development Projects & Case Studies | AZYNAR`
Meta description: `Explore AZYNAR's web projects, prototypes, and digital solutions, including the problem, implementation approach, and verified project status.`
H1: `Projects and practical experiments`

> I use projects to explore real requirements, improve my engineering skills, and demonstrate how design and implementation decisions come together. Each case study explains the context, what was built, and what is complete.
> Project card data
> Each project should include:
> `title`
> `slug`
> `summary`
> `projectType`
> `status`
> `role`
> `problem`
> `solution`
> `features`
> `technologies`
> `liveUrl` (optional)
> `repositoryUrl` (optional)
> `coverImage`
> `altText`
> `outcome` (only if measured or verifiable)
> Case-study structure
> Overview — What the project is and who it serves.
> The problem — What needed to be improved or demonstrated.
> Requirements — Functional and non-functional requirements.
> Approach — Important design and engineering decisions.
> Implementation — What was actually built.
> Challenges and trade-offs — What was difficult and why an approach was chosen.
> Status and limitations — State what is complete, incomplete, or mocked.
> Outcome — Use measured results where available; otherwise describe the verified deliverable without inventing business impact.
> Next steps — What could improve with more time or production requirements.

## Obtain permission before publishing confidential client information, private data, internal dashboards, or unpublished designs.

4.7 About (`/about`)
Title: `About AZYNAR | Web Developer & Digital Solutions Builder`
Meta description: `Learn about Abdulazeem, the developer behind AZYNAR, and his approach to building useful websites, web applications, and business systems while developing deeper software engineering skills.`
H1: `Building useful digital solutions—and becoming a stronger engineer`

> I'm Abdulazeem, the developer behind AZYNAR. I work on websites, web applications, and business systems that help people understand services, make enquiries, request bookings, and interact with businesses more easily.
>
> I approach projects by first understanding the problem and the people who need to use the solution. From there, I define the scope, choose suitable tools, build the agreed functionality, and test the experience before launch.
>
> Alongside client work, I'm strengthening my foundations in JavaScript, TypeScript, React, backend development, databases, testing, and software engineering practices. My longer-term direction is full-stack engineering, with room to specialize as I gain deeper experience and learn which technical problems I can contribute to most effectively.
>
> AZYNAR is where I bring together practical client work, continued learning, and a commitment to building digital products that are useful and maintainable.
> Working principles
> Understand requirements before choosing tools.
> Keep scope and expectations explicit.
> Prefer the simplest solution that meets the real requirement.
> Be honest about what is complete, tested, and supported.
> Continue improving the engineering behind the work.

## CTA: `Start a Conversation` → `/contact`

4.8 Contact (`/contact`)
Title: `Contact AZYNAR | Discuss Your Project`
Meta description: `Contact AZYNAR to discuss a website, web application, or business-system integration.`
H1: `Tell me what you need to build`

> Share a little about your business, the problem you want to solve, and what you would like customers or staff to be able to do. I'll review the details and respond with the next step.
> Recommended form fields
> Name (required)
> Email address or preferred contact method (require at least one)
> Business or project name (optional)
> What do you need? (Website or e-commerce, Web application or custom software, Business system or integration, Other)
> Project details (required)
> Approximate budget (optional)
> Desired timeline (optional)
> Form requirements
> Use a real, tested form handler or clearly label a third-party form.
> Validate input on the client and server where a server exists.
> Add suitable spam protection.
> Show success and error states.
> Do not show success until the submission is actually accepted.
> Collect only information the business needs.
> Explain where submissions go and who can access them.
> Disclose relevant third-party privacy and retention details.
> If no form backend is configured, provide functional email or WhatsApp contact options rather than a fake form.

## Use real contact details and correct international formatting. Do not publish placeholders.

5. SEO implementation plan
   SEO is a foundation, not a promise of immediate rankings. Focus on useful pages, clear intent, crawlability, performance, and credible evidence.
   Page-level checklist
   For every indexable page:
   Unique title tag.
   Useful meta description.
   One clear H1 and logical heading hierarchy.
   Descriptive URL.
   Canonical URL.
   Open Graph title, description, and image.
   Relevant internal links.
   Descriptive alt text for meaningful images.
   Compressed, correctly sized images.
   No accidental `noindex` on pages intended for search.
   Content that is genuinely distinct from other pages.
   Personal-brand SEO: AZYNAR and Badmus Abdulazeem Babatunde
   A specific objective is to help people find the official portfolio when searching for either AZYNAR or Badmus Abdulazeem Babatunde. Treat these as two related search intents: the brand query and the person's full-name query. Do not assume this guarantees a first-place result; Google controls indexing and ranking.
   Homepage metadata
   Recommended title: `AZYNAR | Badmus Abdulazeem Babatunde — Web Developer`
   Recommended meta description: `Official portfolio of Badmus Abdulazeem Babatunde, the developer behind AZYNAR. Explore websites, web applications, business systems, and selected projects.`
   Keep the visible homepage H1 focused on the service value proposition: `Digital solutions for the way your business works.`
   Make the connection between the brand and person visible in normal page content, for example: `AZYNAR is the digital solutions brand of Badmus Abdulazeem Babatunde.` Use this wording only if it accurately reflects the business arrangement.
   About page
   Recommended title: `Badmus Abdulazeem Babatunde (AZYNAR) | About`
   Include the full name naturally in the page's main heading and opening paragraph.
   Explain the person's role, services, professional direction, and selected work using factual, first-hand information.
   Link to the portfolio from the person's public professional profiles, and link those profiles back to the portfolio where appropriate.
   Structured data and identity consistency
   Add accurate `WebSite` structured data on the homepage with `name: AZYNAR`, `alternateName: Azynar` if useful, and the canonical production URL. Google may use this information when determining the site's displayed name, but it is not a ranking guarantee.
   Add accurate `Person` structured data for Badmus Abdulazeem Babatunde, connected to the official website and only verified professional profile URLs. Use `sameAs` only for accounts that genuinely belong to the person. Do not invent profile URLs or add personal information that should remain private.
   Keep the brand spelling, full name, role, canonical URL, and profile links consistent across the site and public professional profiles.
   Do not repeat the full name unnaturally across every page, hide keywords, or stuff titles with repeated variants.
   Indexing and verification
   Use Google Search Console to verify the production domain or URL prefix.
   Check the homepage and About page with URL Inspection. Confirm they are crawlable, return a successful response, and are not blocked by `noindex` or `robots.txt`.
   Submit the XML sitemap and request indexing for the homepage and About page after deployment.
   Search Google for `site:YOUR-DOMAIN` and the exact full name to help diagnose visibility; these searches are rough checks, not a complete or definitive index report.
   Monitor Search Console's indexing and performance reports. Allow time for Google to crawl and process updates; do not promise an exact timeline or ranking position.
   If `azynardev.vercel.app` is only a temporary address, consider using a custom domain you can retain long term. Choose one canonical domain, redirect alternate versions where applicable, and use that canonical URL consistently in metadata, structured data, and the sitemap.
   Initial keyword themes
   These are hypotheses to validate with Search Console, Keyword Planner, or another keyword tool—not verified search-volume data.
   Business website intent
   business website developer
   small business website development
   business website design
   website developer for service businesses
   website development in Nigeria
   Web application and business-system intent
   custom web application development
   dashboard development
   customer portal development
   e-commerce website development
   booking application development
   business workflow integration
   Market-specific intent
   web developer in Nigeria
   business website developer in Ibadan
   website development for UK small businesses
   Create a location-specific page only when it provides genuine, relevant information for that market. Do not create many near-identical city pages.
   Technical SEO tasks
   Confirm the production domain and HTTPS canonical host.
   Verify the site in Google Search Console.
   Generate and submit an XML sitemap.
   Configure `robots.txt` correctly.
   Ensure public pages can be crawled and rendered.
   Add per-page metadata and canonical URLs.
   Add Open Graph metadata for sharing.
   Use semantic HTML and accessible links.
   Optimize images and fonts.
   Check mobile layout and performance.
   Add structured data only when accurate and appropriate. Never add fake reviews, ratings, office addresses, or business facts.
   Monitor indexing, queries, and errors in Search Console after launch.
   Future article ideas
   How Much Does a Business Website Cost in Nigeria?
   Does a Small Business Need a Website if It Already Uses Instagram?
   When Does a Business Need a Web Application Instead of a Website?
   How to Scope a Dashboard or Customer Portal Before Development
   When a Third-Party Integration Is Better Than Custom Software
   How to Collect Event Registrations Without Building a Custom Platform
   What Makes a Business Website Easier to Use?
   How I Built [Project Name]: Requirements, Decisions, and Lessons
   Publish only when you can provide useful, specific information and original experience. Avoid generic content that adds no value.
   Local and international SEO
   Keep brand and service information consistent.
   State service markets honestly; do not imply a local office where one does not exist.
   Use a Google Business Profile only if eligible and accurate.
   Build authority through genuine case studies, relevant collaborations, profile links, and useful contributions.
   Do not buy bulk backlinks or publish doorway pages.

---

6. TypeScript and scalable implementation
   Recommended baseline
   If the current site already uses Next.js, keep it unless there is a concrete technical reason to migrate. If it uses JavaScript, introduce TypeScript incrementally where practical rather than rewriting everything without need.
   For a new implementation, use:
   Next.js App Router
   TypeScript with strict mode
   React
   The existing styling system if it is working well
   Small, reusable components
   Typed content models for projects and services
   Use stable versions compatible with the repository. Check official framework guidance before major upgrades.
   Suggested structure
   Adapt this structure to the existing repository rather than replacing files blindly.

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    services/
      page.tsx
      websites-digital-experiences/page.tsx
      ecommerce-websites/page.tsx
      web-applications/page.tsx
      business-systems-integrations/page.tsx
    projects/
      page.tsx
      [slug]/page.tsx
    about/page.tsx
    contact/page.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
      SiteHeader.tsx
      SiteFooter.tsx
      MobileNavigation.tsx
    ui/
      Button.tsx
      Container.tsx
      SectionHeading.tsx
    home/
      Hero.tsx
      ServiceCard.tsx
      ProjectCard.tsx
      ProcessSteps.tsx
      ContactCTA.tsx
  content/
    projects.ts
    services.ts
  lib/
    metadata.ts
    urls.ts
    validation.ts
  types/
    project.ts
    service.ts
public/
  images/
  icons/
```

This is a suggested organization, not a requirement to create every file immediately. Extend a sound existing structure consistently.
TypeScript rules
Enable `"strict": true` in `tsconfig.json` where practical.
Prefer explicit data types for project and service content.
Avoid `any`; use `unknown` for untrusted or not-yet-understood inputs, then validate or narrow it.
Type component props, form data, and API responses.
Validate external input at runtime; TypeScript does not validate user submissions or API payloads by itself.
Reuse components when they reduce duplication, not merely to abstract every element.
Keep components focused and avoid making every component client-side by default.
In Next.js App Router, prefer Server Components unless client interactivity is needed.
Add client directives only where state, event handlers, or browser APIs are required.
Use environment variables for secrets. Never commit API keys, private tokens, or credentials.
Do not expose server-only secrets through `NEXT_PUBLIC_` variables.
Keep dependencies modest and remove unused packages.
Example project type

```ts
export type ProjectStatus = "live" | "prototype" | "concept" | "in-progress";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  projectType: string;
  status: ProjectStatus;
  role: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  coverImage: string;
  altText: string;
  liveUrl?: string;
  repositoryUrl?: string;
  outcome?: string;
}
```

Example typed content

```ts
import type { Project } from "@/types/project";

export const projects = [
  {
    slug: "example-project",
    title: "Example Project",
    summary: "A short, factual summary of the project.",
    projectType: "Business website",
    status: "prototype",
    role: "Design and development",
    problem: "Describe the real problem or learning objective.",
    solution: "Describe what was actually implemented.",
    features: ["Responsive layout", "Clear contact CTA"],
    technologies: ["Next.js", "TypeScript"],
    coverImage: "/images/example-project.webp",
    altText: "Screenshot of the example project homepage",
  },
] satisfies Project[];
```

Replace the example with real project data before publishing. Do not leave example content live.
Metadata helper
Create a helper for shared metadata defaults, while giving each route its own title and description. Adapt this to the installed Next.js version and current setup.

```ts
import type { Metadata } from "next";

const siteUrl = "https://azynardev.vercel.app";

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const canonicalPath = path
    ? `/${path.replace(/^\\/+|\\/+$/g, "")}`
    : "";

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${canonicalPath || "/"}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${canonicalPath || "/"}`,
      siteName: "AZYNAR",
      type: "website",
    },
  };
}
```

Before using it, confirm the production domain, the installed Next.js metadata API, and whether the helper's URL handling matches the project. Add a real Open Graph image. Canonical URLs must not point to preview deployments. Keep the base URL centralized so a domain change is easy to apply.
Dynamic project pages
For a `/projects/[slug]` route:
Find the project by slug.
Return `notFound()` for an unknown slug.
Generate metadata from the project data.
Publish only projects approved for public display.
Consider static params for known projects if suitable for the deployment approach.
Forms and runtime validation
For forms submitting to a backend:
Define a TypeScript type for the expected payload.
Validate required fields and formats at runtime.
Validate on the server even if client-side validation also exists.
Return clear error messages.
Avoid logging sensitive form content unnecessarily.
Add rate limiting or spam protection where appropriate.
Test success, validation failure, network failure, and spam scenarios.
For a simple low-budget client project, a well-configured third-party form or Google Form may be more appropriate than a custom backend. Choose based on actual requirements and explain trade-offs.
Testing and quality checks
At minimum:
Run the linter.
Run `tsc --noEmit` if the project supports it.
Run the production build.
Test navigation and every CTA.
Test form success and error states.
Test mobile, tablet, and desktop widths.
Check keyboard navigation and visible focus.
Check image alt text, contrast, and heading structure.
Inspect browser console and network errors.
Check metadata and canonical URLs on each public route.
Test the deployed site, not only the local preview.
Add unit or integration tests for meaningful logic such as validation, dynamic routing, and non-trivial interactions. Do not add a large test framework just for appearances.

---

7. Design and user experience
   Visual direction
   Minimal, professional, modern.
   Neutral base palette with a restrained accent color.
   Strong typography and spacing.
   Clear hierarchy and readable line lengths.
   Consistent buttons, cards, borders, and section spacing.
   Use real project screenshots or carefully chosen visuals.
   Avoid decorative effects that reduce readability or performance.
   Components to standardize
   Site header and footer
   Desktop and mobile navigation
   Container and section wrappers
   Buttons and text links
   Service cards
   Project cards
   Process steps
   Contact CTA
   Form fields and feedback states
   Accessibility
   Use semantic landmarks: `header`, `nav`, `main`, `footer`.
   Ensure links and buttons have descriptive names.
   Ensure interactive controls work by keyboard.
   Show visible focus styles.
   Label form controls.
   Use sufficient text/background contrast.
   Provide useful alt text for meaningful images; use empty alt text for purely decorative images.
   Respect reduced-motion preferences if animations are used.
   Do not communicate status by color alone.
   Performance
   Use optimized image formats and appropriate dimensions.
   Avoid shipping large client-side JavaScript for static content.
   Load third-party scripts only when needed.
   Avoid unnecessary animation libraries.
   Use appropriate font loading.
   Measure Core Web Vitals with real tools; do not promise a score before measuring.

---

8. Business and trust requirements
   Show real, working contact channels.
   Use accurate project statuses and capabilities.
   State what is and is not included in each service engagement.
   Make no guaranteed revenue, lead, or ranking promises.
   Do not publish client logos, testimonials, or screenshots without permission.
   Do not invent testimonials, reviews, awards, metrics, or client outcomes.
   Make domain, hosting, email, third-party fees, maintenance, and support terms explicit in proposals.
   Distinguish a prototype from a production-ready system.
   Include a privacy notice if personal data is collected; adapt it to the actual tools and applicable jurisdiction rather than copying a generic policy blindly.

---

9. Implementation sequence
   Work in small, verifiable stages. Avoid redesigning everything at once.
   Phase 1 — Audit and protect the current site
   [ ] Inspect the repository and identify framework, routes, styling system, and existing components.
   [ ] Review claims, project descriptions, contact links, and metrics.
   [ ] Back up the current version or create a Git branch.
   [ ] Identify incomplete content or functionality.
   [ ] Record deployment and domain configuration.
   Complete when: there is an inventory of what exists, what is accurate, and what needs to change.
   Phase 2 — Define foundations
   [ ] Confirm positioning and final copy.
   [ ] Confirm routes and navigation.
   [ ] Decide which projects can be shown publicly.
   [ ] Define visual tokens and reusable components.
   [ ] Check TypeScript configuration and strict mode.
   [ ] Confirm the production canonical domain.
   Complete when: structure and implementation approach are agreed before major coding begins.
   Phase 3 — Build shared layout
   [ ] Header and desktop navigation.
   [ ] Mobile navigation.
   [ ] Footer and contact links.
   [ ] Container, buttons, headings, and card components.
   [ ] Responsive design tokens.
   [ ] Global typography and spacing.
   Complete when: shared components work on mobile and desktop and are used consistently.
   Phase 4 — Build core pages
   Recommended order:
   Home
   Services
   Projects
   One or two strong case studies
   About
   Contact
   Do not create empty case studies to fill the menu. One strong, accurate case study is better than several thin or misleading ones.
   Phase 5 — Add service detail pages
   [ ] Websites & digital experiences
   [ ] E-commerce websites (only if this is an active offer)
   [ ] Web applications & custom software
   [ ] Business systems & integrations
   Each page needs distinct useful content, a relevant CTA, and accurate scope boundaries.
   Phase 6 — SEO and technical checks
   [ ] Unique metadata and canonical URL for each route.
   [ ] Open Graph tags and image.
   [ ] Sitemap and robots configuration.
   [ ] Search Console verification.
   [ ] Image optimization.
   [ ] Mobile and accessibility checks.
   [ ] Broken-link and form testing.
   [ ] Production build and TypeScript checks.
   Phase 7 — Launch and measure
   [ ] Deploy to a preview first.
   [ ] Review the preview on mobile and desktop.
   [ ] Test every navigation item and CTA.
   [ ] Submit a test contact form and verify delivery.
   [ ] Check canonical URLs use the production domain.
   [ ] Deploy to production.
   [ ] Verify the live deployment.
   [ ] Submit sitemap in Search Console.
   [ ] Track enquiries and relevant search queries.

---

10. Definition of done
    [ ] Core routes exist and have distinct, useful content.
    [ ] Homepage clearly communicates who AZYNAR helps and what it builds.
    [ ] Services are explained in business language.
    [ ] Case studies distinguish completed work from prototypes.
    [ ] Contact methods work and form behavior is verified.
    [ ] Layout works on mobile, tablet, and desktop.
    [ ] TypeScript checks and production build pass.
    [ ] No broken internal links or placeholder content remain.
    [ ] Page titles, descriptions, canonical URLs, and social metadata are configured.
    [ ] The homepage and About page clearly connect AZYNAR with Badmus Abdulazeem Babatunde using natural, factual copy.
    [ ] Accurate `WebSite` and `Person` structured data are validated, with only verified professional profile links.
    [ ] Google Search Console is configured, the sitemap is submitted, and indexing has been checked for the homepage and About page.
    [ ] Sitemap and robots configuration are checked.
    [ ] No unverified performance, client, or outcome claims remain.
    [ ] The deployed site has been tested.
    [ ] A project can be added without duplicating large amounts of page code.

---

11. How to use this Markdown file
    This document is a project brief and implementation checklist. It does not update the live website by itself.
    Recommended workflow with an AI coding assistant
    Put the file in the repository. Save it as `AZYNAR_WEBSITE_UPGRADE.md` in the root of the website project, next to `package.json`.
    Open the actual codebase. Use the repository that deploys to `azynardev.vercel.app`, not a separate empty folder.
    Ask for an audit first. Provide the Markdown file and ask the coding assistant to inspect the existing project. Tell it not to edit files yet.
    Review the audit. Confirm framework, routes, styling, content accuracy, TypeScript status, deployment, and risks.
    Implement one phase at a time. Start with Phase 1, then proceed through the sequence. Ask for a summary of changed files and checks after each phase.
    Review the diff. Do not accept a broad rewrite without understanding which files changed. Keep the site deployable.
    Run checks. At minimum, run the project's lint, TypeScript, and production build commands. Use the scripts in `package.json`; command names vary by project.
    Test a preview deployment. Check pages, links, mobile navigation, contact forms, SEO metadata, and project content.
    Deploy only after verification. Keep the prior deployment or a clean Git commit available for rollback.
    Update this file as decisions change. It is the reference brief, but implementation details may differ from the suggested structure.
    Prompt 1 — Audit only; do not edit files
    Copy this prompt into your coding assistant after opening the existing repository:
    > Read `AZYNAR_WEBSITE_UPGRADE.md` completely. Audit the existing repository against the specification. Do not edit or create any files yet.
    >
    > Report:
    >
    > 1. The framework, routing approach, styling system, package manager, and current project structure.
    > 2. Whether TypeScript is configured and whether strict mode is enabled.
    > 3. Existing routes and components that can be reused.
    > 4. Content claims, metrics, project features, links, and contact details that need verification.
    > 5. SEO, accessibility, responsive design, performance, and form-handling gaps.
    > 6. A phased implementation plan that preserves working functionality.
    > 7. Decisions you need from me before implementation.
    >
    > Do not invent project details. Mark unknowns as unknown. Do not replace the framework or rewrite the whole site unless there is a concrete reason.
    > Prompt 2 — Implement one phase
    > After approving the audit, use a prompt like this:
    > Implement **Phase [number and name]** from `AZYNAR_WEBSITE_UPGRADE.md` only.
    >
    > Follow the existing repository conventions where they are sound. Use TypeScript with strict typing where applicable. Do not invent project results, client testimonials, contact details, or features. Do not remove working functionality without explaining why.
    >
    > Before finishing:
    >
    > - Run the relevant lint, TypeScript, and build checks available in this repository.
    > - Fix errors caused by your changes.
    > - List every changed or created file and explain why it changed.
    > - Report checks you could not run and why.
    > - Identify content or configuration that still requires my input.
    >
    > Stop after this phase. Do not proceed to the next phase until I review it.
    > Prompt 3 — Final pre-launch review
    > Review the implementation against `AZYNAR_WEBSITE_UPGRADE.md` and the definition of done. Do not make sweeping changes automatically.
    >
    > Check route coverage, responsive behavior, navigation, working CTAs, form delivery, metadata, canonical URLs, sitemap, robots configuration, accessibility, TypeScript errors, build output, and factual accuracy of project claims.
    >
    > Return a checklist with pass/fail/needs-review status and evidence for each item. Fix only clear, low-risk issues within the agreed scope. Flag anything requiring my decision.
    > If using ChatGPT rather than an IDE coding agent
    > Attach this Markdown file and provide the website repository files or connect the repository through a supported coding workflow. A text-only conversation cannot safely modify the deployed site just because the specification exists. Ask for the repository audit first, then work through the phases.
    > Implementation discipline
    > Do not paste the whole document into a code file.
    > Do not ask an AI assistant to “build everything” in one unreviewed operation.
    > Do not allow it to invent content to fill missing case studies.
    > Do not migrate frameworks or replace styling systems without a reason.
    > Do not treat TypeScript as a substitute for runtime validation, testing, security, or sound architecture.
    > Commit or back up working code before each substantial phase.

---

12. Decisions to confirm before implementation
    [ ] Is `azynardev.vercel.app` the permanent public domain, or will a custom domain be used?
    [ ] Which contact method should be the primary CTA: email, WhatsApp, or a form?
    [ ] Which projects are complete and approved for public display?
    [ ] Which of the three service pillars can be credibly offered now, and which should remain a future-facing capability?
    [ ] Is e-commerce an active service offer, or should its page wait until there is a suitable implementation and delivery process?
    [ ] Which technologies and features are confirmed for each project?
    [ ] Is the current website already using TypeScript?
    [ ] Is there an existing form handler, analytics tool, or Search Console property?
    [ ] Will service prices be published, or quoted after discovery?
    [ ] Are client names, screenshots, or testimonials approved for publication?
    If an item is unknown, leave it out of public copy until verified.

---

Final principle
The website should present AZYNAR as one coherent brand with three clear service pillars, make current capabilities credible, and leave room for progression into full-stack engineering and later specialization. Keep public promises accurate, code maintainable, and the next action for a potential client obvious.

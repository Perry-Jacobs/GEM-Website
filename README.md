# Garden of Eden Ministries — Website Technical Design Document

> **"Growing in Faith, Bearing Fruit for Christ"**
>
> *Building Digital Bridges to Faith*

**Version 2.0 • September 24, 2026**

**Prepared For:** Pastoral Leadership Team, Garden of Eden Ministries
**Prepared By:** Tech Ministry Department

---

## Table of Contents

1. [Introduction & Vision](#1-introduction--vision)
   - 1.1 [Our Mission](#11-our-mission)
   - 1.2 [Statement of Faith](#12-statement-of-faith)
   - 1.3 [Core Ministry Values](#13-core-ministry-values)
   - 1.4 [Project Goals](#14-project-goals)
2. [Site Architecture & Navigation](#2-site-architecture--navigation)
   - 2.1 [Visual Site Map (Hierarchical Table)](#21-visual-site-map-hierarchical-table)
   - 2.2 [Page Classification Matrix](#22-page-classification-matrix)
3. [User Journey Visualizations](#3-user-journey-visualizations)
   - 3.1 [Visitor to Member Journey](#31-visitor-to-member-journey)
   - 3.2 [Member Engagement Funnel](#32-member-engagement-funnel)
4. [Technical Architecture](#4-technical-architecture)
   - 4.1 [Technology Stack](#41-technology-stack)
   - 4.2 [Folder Structure (Verbatim in a Larger Container)](#42-folder-structure-verbatim-in-a-larger-container)
   - 4.3 [Database Schema](#43-database-schema)
   - 4.4 [SEO & Social Media Strategy](#44-seo--social-media-strategy)
5. [Feature Implementation](#5-feature-implementation)
   - 5.1 [Feature Prioritization](#51-feature-prioritization)
   - 5.2 [Development Timeline](#52-development-timeline)
6. [Security & Compliance](#6-security--compliance)
   - 6.1 [Security Architecture](#61-security-architecture)
   - 6.2 [Data Privacy Matrix](#62-data-privacy-matrix)
7. [Implementation Roadmap](#7-implementation-roadmap)
   - 7.1 [User Roles & Permissions (RBAC)](#71-user-roles--permissions-rbac)
   - 7.2 [Immediate Action Items](#72-immediate-action-items)
   - 7.3 [Success Metrics & KPIs](#73-success-metrics--kpis)
   - 7.4 [Final Recommendations](#74-final-recommendations)
8. [Conclusion](#conclusion)
- [Appendix A: Color Reference Guide](#appendix-a-color-reference-guide)
- [Appendix B: Glossary of Technical Terms](#appendix-b-glossary-of-technical-terms)

---

## 1 Introduction & Vision

### 1.1 Our Mission

The Garden of Eden Ministries website exists to:

- **Cultivate Growth:** Nurture spiritual growth through accessible digital content.
- **Extend the Garden:** Welcome newcomers with warmth and clarity.
- **Feed the Flock:** Provide resources for members to deepen their faith.
- **Bear Fruit:** Enable online giving, volunteer signups, and community connection.

### 1.2 Statement of Faith

The website content and design reflect the following core doctrines:

1. **The Trinity:** One God in three persons—Father, Son, and Holy Spirit.
2. **Salvation:** Grace alone through faith alone in Jesus Christ.
3. **Scripture:** The Bible is the inspired and authoritative Word of God.
4. **The Church:** A community of believers called to worship, fellowship, and serve.

### 1.3 Core Ministry Values

1. **Radical Hospitality:** Every page must feel like a warm welcome to God's garden.
2. **Digital Stewardship:** Using technology responsibly to advance the Kingdom.
3. **Accessibility for All:** Ensuring everyone can access content regardless of ability.
4. **Community Building:** Connecting people both online and in-person.
5. **Excellence for God:** Reflecting God's glory through quality design.

### 1.4 Project Goals

| Goal | Description |
|------|-------------|
| Reach | Attract 1,000+ unique visitors monthly |
| Engage | Convert 20% of visitors to regular attendees |
| Grow | Increase online giving by 15% quarterly |
| Connect | Have 30% of members active in small groups via the site |
| Serve | Fill 90% of volunteer slots through online signups |

*Table 1.1: Strategic Project Goals*

---

## 2 Site Architecture & Navigation

### 2.1 Visual Site Map (Hierarchical Table)

*Table 2.1: Complete Site Architecture*

| Level | Page Hierarchy |
|-------|----------------|
| 1 | Home (/) |
| | New Here? (/new) |
| | ● Service Times |
| | ● Location & Map |
| | ● Connection Card |
| 2 | About (/about) |
| | ● Our Story |
| | ● Staff Directory |
| | ● Beliefs |
| 3 | Sermons (/sermons) |
| | ● Archive |
| | ● Live Stream |
| | ● Study Notes |
| 3 | Ministries (/ministries) |
| | ● Children |
| | ● Youth |
| | ● Adults |
| | ● Seniors |
| 2 | Events (/events) |
| | ● Calendar |
| | ● RSVP |
| 3 | Give (/give) |
| 3 | Contact (/contact) |
| 1 | Member Portal (Authenticated) |
| | ● Member Directory |
| | ● Volunteer Portal |
| | ● Prayer Wall |

### 2.2 Page Classification Matrix

*Table 2.2: Page Classification Matrix*

| Page | Access | Primary Audience | Key Action |
|------|--------|------------------|------------|
| Home | Public | Everyone | Discover Church |
| New Here | Public | Visitors | Plan Visit |
| About | Public | Visitors | Build Trust |
| Sermons | Public | Everyone | Watch/Listen |
| Ministries | Public | Targeted | Find Community |
| Events | Public | Everyone | Sign Up |
| Give | Public | Members | Tithe/Donate |
| Contact | Public | Everyone | Get Directions |
| Member Directory | Authenticated | Members | Connect |
| Volunteer Portal | Authenticated | Volunteers | Serve |
| Prayer Wall | Public/Moderated | Everyone | Share Requests |

---

## 3 User Journey Visualizations

### 3.1 Visitor to Member Journey

*Table 3.1: First-Time Visitor Journey*

| Step 1 | Step 2 | Step 3 | Step 4 |
|--------|--------|--------|--------|
| **Goal** | Ad | Homepage | New Here | Sermon | Church Visit |
| **Action** | Clicks Ad | Explores Content | Reads Times | Watches Sermon | Attends In-Person |

### 3.2 Member Engagement Funnel

*Table 3.2: Member Engagement Funnel*

| Stage | Conversion Rate |
|-------|-----------------|
| Website Visit | 100% (Baseline) |
| Sermon Views | 65% |
| Event RSVPs | 25% |
| Volunteer Signups | 10% |

---

## 4 Technical Architecture

### 4.1 Technology Stack

*Table 4.1: Complete Technical Stack*

| Component | Technology |
|-----------|------------|
| Frontend Framework | Next.js 14 (React) with App Router |
| Styling | Tailwind CSS + CSS Modules |
| Headless CMS | Sanity.io for content management |
| Authentication | NextAuth.js / Auth0 |
| Payment Processing | Stripe for tithes and donations |
| Database | PostgreSQL via Supabase |
| Hosting | Vercel (Edge Network) |
| Email Service | SendGrid / Nodemailer |
| Analytics | Google Analytics 4 + Hotjar |
| Monitoring | Sentry for error tracking |

### 4.2 Folder Structure (Verbatim in a Larger Container)

*Table 4.2: Complete Folder Structure*

```
church-website/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── page.js (Home)
│   │   │   ├── new/page.js
│   │   │   ├── about/page.js
│   │   │   └── sermons/
│   │   │       ├── page.js
│   │   │       └── [slug]/page.js
│   │   ├── (dashboard)/
│   │   │   ├── member/profile.js
│   │   │   └── volunteer/schedule.js
│   │   ├── api/
│   │   └── layout.js
│   ├── components/
│   │   ├── common/
│   │   ├── ui/
│   │   └── forms/
│   ├── lib/
│   │   ├── sanity/
│   │   └── stripe/
│   ├── context/
│   └── styles/
├── package.json
├── next.config.js
└── .env.local
```

### 4.3 Database Schema

*Table 4.3: Database Entity Relationship Summary*

| Entity | Primary Key | Foreign Key |
|--------|-------------|-------------|
| Users | user_id | - |
| Members | member_id | user_id |
| Sermons | sermon_id | (links to Users) |
| Events | event_id | (links to Users) |
| Prayer Requests | prayer_id | user_id |
| Donations | donation_id | user_id |

**Relationships:** Users 1:1 Members, Users 1:M Sermons, Users 1:M Events, Users 1:M Prayer Requests, Users 1:M Donations.

### 4.4 SEO & Social Media Strategy

To ensure the website reaches the widest possible audience, the following technical SEO measures will be implemented:

- **Metadata:** Unique meta titles and descriptions for every page.
- **Open Graph Tags:** Customized `og:image` and `og:description` for social media sharing (Facebook, LinkedIn, X).
- **Structured Data:** JSON-LD markup for Sermon series, Events, and Organization schema to enhance Google search results.
- **Sitemap:** An automatically generated `sitemap.xml` submitted to Google Search Console.
- **Performance:** Targeted Lighthouse score of >90 for Performance and Accessibility to boost search ranking.

---

## 5 Feature Implementation

### 5.1 Feature Prioritization

*Table 5.1: Feature Implementation Timeline*

| Feature | Phase 1 | Phase 2 | Phase 3 | Complexity |
|---------|---------|---------|---------|------------|
| Homepage | ✓ | | | Low |
| Service Times | ✓ | | | Low |
| Sermon Archive | | ✓ | | Medium |
| Contact/Map | ✓ | | | Low |
| Live Streaming | | ✓ | | Medium |
| Events Calendar | | ✓ | | Medium |
| Give/Donations | | ✓ | | High |
| Prayer Wall | | ✓ | | Medium |
| Member Directory | | | ✓ | High |
| Volunteer Portal | | | ✓ | High |

### 5.2 Development Timeline

*Table 5.2: Development Timeline (16 Weeks)*

| Phase | Weeks | Key Deliverables |
|-------|-------|------------------|
| Phase 1: Launch | 1–3 | Home, New Here, Sermons, Contact, Live Stream |
| Phase 2: Engagement | 4–8 | Events, Giving, Prayer Wall, Blog |
| Phase 3: Community | 9–16 | Member Directory, Volunteer Portal, Notifications |

---

## 6 Security & Compliance

### 6.1 Security Architecture

*Table 6.1: Security Architecture Stack*

| Layer | Implementation |
|-------|----------------|
| 1. Client | HTTPS / TLS 1.3 (Encrypted Browser Connection) |
| 2. Perimeter | Web Application Firewall, DDoS Protection, Rate Limiting |
| 3. Application | Next.js on Vercel Edge Network (Secure Runtime) |
| 4. Identity | Auth0 / NextAuth.js (Multi-factor Authentication Ready) |
| 5. Data | PostgreSQL Database (Encrypted at Rest with AES-256) |

SOC 2 Compliance standards are followed for data handling and privacy.

### 6.2 Data Privacy Matrix

*Table 6.2: Data Privacy & Compliance Matrix*

| Data Type | Storage | Encryption | Retention |
|-----------|---------|------------|-----------|
| Names & Emails | Database | AES-256 | Active memberships |
| Sermon Videos | CDN | HTTPS | Permanent |
| Donation Records | Database | AES-256 | 7 years (legal) |
| Prayer Requests | Database | Encrypted | 30 days (anon) |
| Analytics Data | Google Analytics | SSL | 26 months |

---

## 7 Implementation Roadmap

### 7.1 User Roles & Permissions (RBAC)

To manage access efficiently, the website will implement four distinct user roles:

*Table 7.1: User Role Access Control Matrix*

| Role | Permissions |
|------|-------------|
| Super Admin | Full access to CMS, user management, theme customization, and server logs. |
| Content Editor | Create/edit/delete Sermons, Blog posts, and Events. Cannot alter design or user data. |
| Volunteer Leader | View volunteer schedules, confirm attendance, message team members. |
| Member | View Directory, submit prayer requests, register for events, view giving history. |

### 7.2 Immediate Action Items

1. **Week 1:** Register domain and set up hosting account (Vercel)
2. **Week 1–2:** Design homepage wireframes and gather content from pastoral team
3. **Week 2–3:** Set up Sanity.io CMS and create content models
4. **Week 3–4:** Build and launch Phase 1 pages
5. **Week 4:** Conduct user testing with 5 congregation members
6. **Week 5:** Launch to the public with announcement in service

### 7.3 Success Metrics & KPIs

*Table 7.2: Key Performance Indicators*

| Metric | Target | Tool |
|--------|--------|------|
| Monthly Unique Visitors | 1,000+ | Google Analytics |
| Sermon View Completion Rate | >50% | YouTube Analytics |
| Connection Card Submissions | 20+/month | CMS Forms |
| Online Tithe Growth | 15% quarterly | Stripe Dashboard |
| Volunteer Signups | 10+/month | Volunteer Portal |

### 7.4 Final Recommendations

- **Start small, iterate fast.** Launch with Phase 1 and gather real user feedback.
- **Prioritize mobile experience.** Over 70% of visitors will use phones.
- **Train volunteers early.** Content editors need to feel confident using the CMS.
- **Measure everything.** Use data to guide Phase 2 and Phase 3 decisions.
- **Celebrate wins.** Share website metrics with the congregation to build excitement.
- **Keep content fresh.** Update the homepage weekly to reflect current series.

---

## Conclusion

The Garden of Eden Ministries website is designed to be more than just an information portal—it is a digital extension of the church's mission to cultivate faith, nurture community, and bear fruit for God's Kingdom. By following this structured approach, the church will have a secure, scalable, and welcoming digital presence that serves both newcomers and long-time members.

Furthermore, this architecture is built to scale. As the church grows, additional features such as a mobile app wrapper, internal financial dashboards for elders, and video conferencing integration for remote small groups can be seamlessly added without rewriting the core structure.

> *"I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit."*
> — **John 15:5 (NIV)**

---

## Appendix A: Color Reference Guide

### Brand Color Palette

The colors selected for the Garden of Eden Ministries website reflect a balance of warmth, trust, and spiritual growth. The following palette is used consistently across all digital assets to ensure brand recognition and visual harmony.

*Table A.1: Expanded Brand Color Palette*

| Color Name | Hex | RGB | Purpose & Usage |
|------------|-----|-----|-----------------|
| Church Gold | #D4AF37 | 212, 175, 55 | **Divine Glory & Accents:** Headers, decorative rules, icon highlights, and call-to-action borders. Represents the glory of God. |
| Church Navy | #192D4B | 25, 45, 75 | **Trust & Stability:** Primary text, main navigation headers, and table headers. Provides a trustworthy, professional foundation. |
| Church Cream | #FAF5EB | 250, 245, 235 | **Warmth & Welcome:** Backgrounds for content cards, sidebars, and alternating table rows. Creates a warm, inviting feel reminiscent of parchment. |
| Church Teal | #009688 | 0, 150, 136 | **Growth & Connection:** Hyperlinks, secondary buttons, and subheadings. Symbolizes growth and living water. |
| Church Coral | #EF5350 | 239, 83, 80 | **Action & Urgency:** Primary Call-to-Action buttons (Give, Register) and notification badges. Draws immediate user attention. |
| Church Green | #2E7D32 | 46, 125, 50 | **The Garden Theme:** Nature elements, decorative icons, and the "Growing in Faith" tagline. Reinforces the Garden of Eden identity. |
| Church Dark Gray | #3C3C3C | 60, 60, 60 | **Body Text & Readability:** Standard paragraph text and footers. Ensures maximum legibility against light backgrounds. |

### Accessibility Considerations

All color pairings meet WCAG 2.1 AA contrast standards for normal text. Navy and Dark Gray text on Cream backgrounds provides a contrast ratio exceeding 4.5:1, ensuring readability for all users.

---

## Appendix B: Glossary of Technical Terms

*Table B.1: Glossary of Technical Terms*

| Acronym | Definition |
|---------|------------|
| CMS | **Content Management System** (Sanity.io)—A tool that allows pastors and editors to update website content without writing code. |
| SSR | **Server-Side Rendering** (Next.js)—Renders pages on the server before sending them to the browser, improving SEO and performance. |
| ISR | **Incremental Static Regeneration**—Allows static pages to be updated without rebuilding the entire site, keeping content fresh. |
| PWA | **Progressive Web App**—Allows the website to be installed on a mobile device as an app-like experience. |
| ChMS | **Church Management System**—Software used to track members, attendance, and small groups (e.g., Planning Center). |
| WCAG | **Web Content Accessibility Guidelines**—International standards for making websites usable by people with disabilities. |
| RBAC | **Role-Based Access Control**—A security system that restricts access based on user roles (Admin, Editor, Member). |
| CDN | **Content Delivery Network**—A distributed network of servers that deliver sermon videos and assets quickly to users worldwide. |
| JWT | **JSON Web Token**—A secure way to transmit authentication information between the client and server. |
| ORM | **Object-Relational Mapping** (Prisma)—A tool that translates database tables into JavaScript objects for easier coding. |
| API | **Application Programming Interface**—Enables the website to communicate with third-party services like Stripe and SendGrid. |

---

## Documentation Index

| Section | Page |
|---------|------|
| 1 Introduction & Vision | 1 |
| 1.1 Our Mission | 1 |
| 1.2 Statement of Faith | 1 |
| 1.3 Core Ministry Values | 1 |
| 1.4 Project Goals | 2 |
| 2 Site Architecture & Navigation | 3 |
| 2.1 Visual Site Map (Hierarchical Table) | 3 |
| 2.2 Page Classification Matrix | 4 |
| 3 User Journey Visualizations | 5 |
| 3.1 Visitor to Member Journey | 5 |
| 3.2 Member Engagement Funnel | 5 |
| 4 Technical Architecture | 6 |
| 4.1 Technology Stack | 6 |
| 4.2 Folder Structure (Verbatim in a Larger Container) | 7 |
| 4.3 Database Schema | 8 |
| 4.4 SEO & Social Media Strategy | 8 |
| 5 Feature Implementation | 9 |
| 5.1 Feature Prioritization | 9 |
| 5.2 Development Timeline | 9 |
| 6 Security & Compliance | 10 |
| 6.1 Security Architecture | 10 |
| 6.2 Data Privacy Matrix | 10 |
| 7 Implementation Roadmap | 11 |
| 7.1 User Roles & Permissions (RBAC) | 11 |
| 7.2 Immediate Action Items | 11 |
| 7.3 Success Metrics & KPIs | 12 |
| 7.4 Final Recommendations | 12 |
| A Color Reference Guide | 14 |
| B Glossary of Technical Terms | 16 |

### Table Index

| Table | Page |
|-------|------|
| 1.1 Strategic Project Goals | 2 |
| 2.1 Complete Site Architecture | 3 |
| 2.2 Page Classification Matrix | 4 |
| 3.1 First-Time Visitor Journey | 5 |
| 3.2 Member Engagement Funnel | 5 |
| 4.1 Complete Technical Stack | 6 |
| 4.2 Complete Folder Structure | 7 |
| 4.3 Database Entity Relationship Summary | 8 |
| 5.1 Feature Implementation Timeline | 9 |
| 5.2 Development Timeline (16 Weeks) | 9 |
| 6.1 Security Architecture Stack | 10 |
| 6.2 Data Privacy & Compliance Matrix | 10 |
| 7.1 User Role Access Control Matrix | 11 |
| 7.2 Key Performance Indicators | 12 |
| A.1 Expanded Brand Color Palette | 15 |
| B.1 Glossary of Technical Terms | 16 |

---

**Built with ❤️ by the Tech Ministry Department**
**Garden of Eden Ministries © 2026**

*End of Document*
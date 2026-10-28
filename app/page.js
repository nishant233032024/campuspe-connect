'use client';

import { useEffect, useState } from "react";

const metrics = [
  { value: "800+", label: "Students", icon: "people", tone: "violet" },
  { value: "130+", label: "colleges", icon: "college", tone: "blue" },
  { value: "100+", label: "jobs & internships", icon: "briefcase", tone: "green" },
  { value: "100%", label: "Safe & Trusted", icon: "shield", tone: "peach" },
];

const partners = [
  { name: "GINSERV", sub: "Nurturing Ventures", tone: "ginserv" },
  { name: "STARTUP", sub: "KARNATAKA", tone: "startup" },
  { name: "", sub: "", tone: "seal" },
  { name: "TALENTSPOTIFY", sub: "", tone: "talent" },
  { name: "Radiant Info", sub: "", tone: "radiant" },
  { name: "Startup India", sub: "", tone: "startupindia" },
];

const paths = [
  {
    id: "college-path",
    status: "Coming Soon",
    title: "College",
    description: "Explore colleges, courses, fees, placements & more.",
    points: ["Search by course, location, fees", "Connect directly with colleges", "Improve student placements"],
    action: "Join Waitlist",
    href: "#colleges",
    style: "college",
    icon: "college",
  },
  {
    id: "jobs-path",
    status: "Available Now",
    title: "I'm Looking for a Job",
    description: "Upload your resume. We'll find jobs that fit you.",
    points: ["Jobs from 1,000+ sources", "AI-powered matching", "WhatsApp & email alerts"],
    action: "Explore Jobs",
    href: "#opportunities",
    style: "student",
    icon: "cap",
  },
  {
    id: "employer-path",
    status: "Coming Soon",
    title: "I'm Hiring",
    description: "Connect with colleges and find candidates — from students to graduates.",
    points: ["Connect directly with colleges", "Find the right candidates", "Simplify your hiring"],
    action: "Join Waitlist",
    href: "#employers",
    style: "employer",
    icon: "briefcase",
  },
];

const opportunities = [
  { title: "IIM Bangalore", kind: "Top College", meta: "MBA  ·  Bengaluru", detail: "India’s premier management institute with global exposure.", badge: "3L+", action: "View Details" },
  { title: "Product Intern", kind: "Internship", meta: "Bengaluru  ·  Hybrid", detail: "Work on real products, learn from top engineers and build your skills.", badge: "35K/mo", action: "Apply Now" },
  { title: "Marketing Gig", kind: "Freelance", meta: "Remote  ·  Freelance", detail: "Create content and help with social media campaigns.", badge: "10K – 25K", action: "View Details" },
];

const collegeFeatures = [
  { label: "Verified Profile", title: "Build your college profile", copy: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.", tags: ["NAAC A++ Ready", "98% Match"], color: "green" },
  { label: "Direct Enroll", title: "Students discover and connect", copy: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.", tags: ["Direct Enquiries", "WhatsApp / Chat"], color: "blue" },
  { label: "Campus Recruiting", title: "Recruiters discover your College", copy: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.", tags: ["500+ Hiring Partners", "Connect Directly"], color: "purple" },
  { label: "Live HUD", title: "Track placements in real time", copy: "Track students, interviews, offers and placements from one centralized dashboard.", tags: ["Live Placements", "Students · Interviews · Offers"], color: "red" },
];

const employerSteps = [
  ["Post a role in minutes", "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network."],
  ["Receive a matched shortlist", "Get candidates matched to your role by skills, experience, location and hiring requirements."],
  ["Connect with candidates directly", "Message, schedule interviews, and move candidates through your pipeline — all in one place."],
  ["Reduce your time-to-hire", "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow."],
];

const navLinks = [
  ["Colleges", "#colleges"],
  ["Employers", "#employers"],
  ["Jobs", "#opportunities"],
  ["Blogs", "#company"],
];

function ArrowIcon({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

const ICON_PATHS = {
  whatsapp: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6a11 11 0 0 1-4.3-3.8c-.3-.5-.8-1.3-.8-2.5s.6-1.8.9-2c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2 1.3 2.3 1.4.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.3.1.2.1.8-.1 1.5Z",
  bolt: "M13 2 4.5 13.5H11L9.5 22l8.5-11.5H12L13 2Z",
  robot: "M12 2a1 1 0 0 1 1 1v1h1a4 4 0 0 1 4 4v5a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V8a4 4 0 0 1 4-4h1V3a1 1 0 0 1 1-1Zm-3 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM5 9a1.5 1.5 0 0 0 0 3v5a3 3 0 0 0 3 3h1",
  people: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 19a6 6 0 0 1 12 0 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm14.5-4.6A5 5 0 0 1 22 19a1 1 0 0 1-1 1h-4.5",
  college: "M12 3 2 8v2h20V8L12 3ZM4 11h2v7H4v-7Zm5 0h2v7H9v-7Zm5 0h2v7h-2v-7Zm5 0h2v7h-2v-7ZM2 20h20v2H2v-2Z",
  briefcase: "M9 4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3V6a2 2 0 0 0-2-2H9Zm0 2h6v2H9V6Zm-3 6v2h12v-2H6Z",
  shield: "M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm-1 13-3-3 1.4-1.4L11 12.2l4.6-4.6L17 9l-6 6Z",
  building: "M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M4 21h16M16 9h2a2 2 0 0 1 2 2v10M8 7h4M8 11h4M8 15h4",
  cap: "M12 3 2 8l10 5 10-5-10-5Zm-7 9.5V16c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.5l-7 3.5-7-3.5Z",
};

function Icon({ name, className = "" }) {
  const filled = ["whatsapp", "bolt", "robot", "people", "college", "cap", "briefcase", "shield"];
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICON_PATHS[name]} fill={filled.includes(name) ? "currentColor" : "none"} />
    </svg>
  );
}

function StatIcon({ tone, name }) {
  return <span className={`stat-icon stat-${tone}`}><Icon name={name} /></span>;
}

function PartnerLogo({ partner }) {
  return (
    <span className={`partner partner-${partner.tone}`}>
      <span className="partner-mark" aria-hidden="true">
        {partner.tone === "ginserv" && <svg viewBox="0 0 40 24"><circle cx="12" cy="12" r="9" /><circle cx="24" cy="12" r="9" /></svg>}
        {partner.tone === "startup" && <svg viewBox="0 0 40 24"><path d="M4 18 16 6l6 6 8-8 6 6v8Z" /></svg>}
        {partner.tone === "seal" && <svg viewBox="0 0 40 24"><circle cx="20" cy="12" r="10" /><circle cx="20" cy="12" r="5" /></svg>}
        {partner.tone === "talent" && <svg viewBox="0 0 40 24"><path d="M20 2v20M10 12h20M13 5l14 14M27 5 13 19" /></svg>}
        {partner.tone === "radiant" && <svg viewBox="0 0 40 24"><path d="M20 2c6 6 9 9 9 13a9 9 0 1 1-18 0c0-4 3-7 9-13Z" /></svg>}
        {partner.tone === "startupindia" && <svg viewBox="0 0 40 24"><path d="M14 20h12M16 20v-6M24 20v-6M13 14h14M20 4l6 6H14l6-6Z" /></svg>}
      </span>
      {partner.name && <span className="partner-text"><b>{partner.name}</b>{partner.sub && <small>{partner.sub}</small>}</span>}
    </span>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header" id="top">
      <div className="header-brand">
        <a className="wordmark" href="#top" aria-label="CampusPe home">
          <span className="wordmark-icon" aria-hidden="true">C<span>p</span></span>
          <span>Campus<span className="wordmark-accent">Pe</span></span>
        </a>
      </div>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span><span></span><span></span>
      </button>
      <nav className={`main-nav${menuOpen ? " is-open" : ""}`} id="primary-navigation" aria-label="Main navigation">
        {navLinks.map(([label, href]) => <a href={href} key={label} onClick={closeMenu}>{label}</a>)}
        <div className="nav-account">
          <a href="mailto:contactus@campuspe.com?subject=CampusPe%20sign-in%20information" onClick={closeMenu}>Sign In</a>
          <a className="button button-small" href="mailto:contactus@campuspe.com?subject=CampusPe%20sign-up" onClick={closeMenu}>Sign Up</a>
        </div>
      </nav>
    </header>
  );
}

function SectionLabel({ number, children }) {
  return <p className="eyebrow"><span>{number}</span><span aria-hidden="true">•</span>{children}</p>;
}

function JourneyCard({ item }) {
  return (
    <article className={`journey-card journey-${item.style}`} id={item.id}>
      <div className="journey-topline"><span className="journey-icon" aria-hidden="true"><Icon name={item.icon} /></span><span className="availability">{item.status}</span></div>
      <h3>{item.title}</h3>
      <p className="journey-description">{item.description}</p>
      <ul>{item.points.map((point) => <li key={point}><span className="check" aria-hidden="true">✓</span>{point}</li>)}</ul>
      <a className={`button journey-button button-${item.style}`} href={item.href}>{item.action}<ArrowIcon /></a>
    </article>
  );
}

function FeedPreview() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"];
  const visible = opportunities.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Colleges") return item.kind === "Top College";
    if (filter === "Jobs") return false;
    if (filter === "Internships") return item.kind === "Internship";
    if (filter === "Freelance") return item.kind === "Freelance";
    return false;
  });

  return (
    <div className="feed-window" aria-label="Preview of the CampusPe opportunity feed">
      <div className="feed-heading"><div><span className="feed-kicker">CampusPe Opportunity Feed</span><h3>Colleges &amp; opportunities matched to you</h3></div><span className="live-count"><i></i>12 new matches today</span></div>
      <div className="feed-filters" aria-label="Filter opportunities">
        {filters.map((name) => <button type="button" key={name} className={filter === name ? "is-selected" : ""} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>)}
      </div>
      <div className="opportunity-list">
        {visible.length ? visible.map((item) => <article className="opportunity-card" key={item.title}>
          <div className="opportunity-mark" aria-hidden="true">{item.kind === "Top College" ? "IIMB" : item.kind === "Internship" ? "↗" : "M"}</div>
          <div className="opportunity-copy"><div className="opportunity-title"><strong>{item.title}</strong><span>{item.kind}</span></div><p className="opportunity-meta">{item.meta}<b>{item.badge}</b></p><p className="opportunity-detail">{item.detail}</p></div>
          <a href="mailto:contactus@campuspe.com?subject=CampusPe%20opportunity%20enquiry" className="text-link">{item.action} <ArrowIcon /></a>
        </article>) : <p className="empty-filter">New {filter.toLowerCase()} matches are on the way.</p>}
      </div>
      <div className="feed-foot"><a href="#get-started">View all matched opportunities <ArrowIcon /></a><span>Curated for you · Updated daily</span></div>
    </div>
  );
}

function ResumeDemo() {
  const [fileName, setFileName] = useState("");

  function acceptFile(file) {
    if (!file) return;
    const allowed = /\.(pdf|doc|docx)$/i.test(file.name);
    if (!allowed) {
      setFileName("Please choose a PDF, DOC, or DOCX file.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setFileName("That file is over the 10MB limit.");
      return;
    }
    setFileName(`${file.name} · ready for the CampusPe demo`);
  }

  return (
    <label className="resume-drop" onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); acceptFile(event.dataTransfer.files[0]); }}>
      <span className="resume-spark" aria-hidden="true">✳</span>
      <span className="resume-card-title">Upload your resume</span>
      <span className="resume-card-copy">PDF, DOC, or DOCX · Up to 10MB</span>
      <span className="resume-upload-button">Choose a file <ArrowIcon /></span>
      <span className="resume-support">or drag and drop your file here</span>
      <input className="visually-hidden" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(event) => acceptFile(event.target.files[0])} aria-label="Upload your resume (local demo only)" />
      <span className={`resume-result${fileName.startsWith("Please") || fileName.startsWith("That") ? " is-error" : ""}`} role="status">{fileName || "Your resume stays on your device — local selection demo only."}</span>
    </label>
  );
}

function CollegeFeature({ feature, index }) {
  return (
    <article className="college-feature">
      <div className="feature-copy"><div className="feature-kicker"><b>{String(index + 1).padStart(2, "0")}</b>{feature.label}</div><h3>{feature.title}</h3><p>{feature.copy}</p></div>
      <div className={`feature-badges badge-${feature.color}`}>{feature.tags.map((tag) => <span key={tag}><i></i>{tag}</span>)}</div>
    </article>
  );
}

function AppShowcase({ horizontal = false }) {
  const panels = [
    { title: "Discover", copy: "Find colleges, internships, and new opportunities that fit your goals.", mark: "✦" },
    { title: "Connect", copy: "Reach campus teams and recruiters directly from one place.", mark: "↗" },
    { title: "Track", copy: "Keep applications, updates and conversations together.", mark: "▤" },
    { title: "Grow", copy: "Make your next step with CampusPe by your side.", mark: "⌂" },
    { title: "Get updates", copy: "See alerts and new matches when opportunities appear.", mark: "◷" },
  ];
  return (
    <div className={`phone-line${horizontal ? " phone-line-horizontal" : ""}`} aria-label="A preview of the CampusPe mobile app">
      <div className="phone-orbit" aria-hidden="true"></div>
      {panels.map((panel, index) => (
        <article className={`phone-frame phone-frame-${index + 1}`} key={panel.title}>
          <span className="phone-notch"></span>
          <span className="phone-mini-brand">Campus<span>Pe</span></span>
          <span className="phone-greeting">Hi, Amit Kumar <b>✦</b></span>
          <span className="phone-mini-search">What are you looking for?</span>
          <span className="phone-mini-card">
            <b>{panel.mark}</b>
            <strong>{panel.title}</strong>
            <small>{panel.copy}</small>
            <i>Explore <ArrowIcon /></i>
          </span>
          <span className="phone-tabs"><i>⌂</i><i>⌕</i><i>▤</i><i>◉</i></span>
        </article>
      ))}
    </div>
  );
}

function Footer() {
  const footerGroups = [
    ["For Students", ["Explore Colleges", "Find Opportunities", "Internships", "Full-time Jobs", "Part-time & Gig", "Application Tracker"]],
    ["For Colleges", ["List Your College", "Admissions", "Fee Collection", "Placements"]],
    ["For Employers", ["Post a Job", "Find Talent", "Campus Hiring"]],
    ["Company", ["About Us", "Contact Us", "Blogs", "Careers"]],
    ["Legal & Policies", ["Privacy Policy", "Terms & Conditions", "Refund & Cancellation Policy", "Cookie Policy", "Grievance Redressal", "Job & Internship Disclaimer"]],
  ];
  return (
    <footer className="site-footer" id="company">
      <div className="footer-callout" id="get-started"><div><span className="footer-mini-label">YOUR NEXT STEP STARTS HERE</span><h2>Ready for what’s next?</h2><p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p></div><div className="footer-cta-group"><a className="button" href="#opportunities">Explore Colleges <ArrowIcon /></a><a className="button button-outline" href="#employers">Post a Job <ArrowIcon /></a></div></div>
      <div className="footer-main"><div className="footer-brand-column"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-icon" aria-hidden="true">C<span>p</span></span><span>Campus<span className="wordmark-accent">Pe</span></span></a><p>From choosing a college to finding your next opportunity, CampusPe connects students, colleges and employers in one place.</p><div className="footer-contact"><a href="mailto:contactus@campuspe.com">contactus@campuspe.com</a><a href="tel:+916362606464">+91 6362606464</a></div><div className="social-links" aria-label="Follow CampusPe">{[["YouTube", "icon-social-a.png"], ["Instagram", "icon-social-b.png"], ["Twitter", "icon-social-c.png"], ["Facebook", "icon-social-d.png"]].map(([name, src]) => <a key={name} href="mailto:contactus@campuspe.com?subject=CampusPe%20social%20links" aria-label={`${name} contact`}><img src={`/assets/${src}`} alt="" width="21" height="21" /></a>)}</div></div>
        {footerGroups.map(([heading, links]) => <div className="footer-link-group" key={heading}><h3>{heading}</h3>{links.map((label) => <a href={heading === "For Students" ? "#opportunities" : heading === "For Colleges" ? "#colleges" : heading === "For Employers" ? "#employers" : heading === "Company" ? "#company" : "mailto:contactus@campuspe.com?subject=CampusPe%20policy%20enquiry"} key={label}>{label}</a>)}</div>)}
      </div>
      <div className="footer-bottom"><span>© 2026 CampusPe Technologies Pvt. Ltd.</span><div><a href="mailto:contactus@campuspe.com?subject=Privacy%20policy">Privacy</a><a href="mailto:contactus@campuspe.com?subject=Terms%20and%20policies">Terms</a><a href="mailto:contactus@campuspe.com?subject=Grievance">Grievance</a></div><span className="footer-audience">Students <i>·</i> Colleges <i>·</i> Employers</span></div>
    </footer>
  );
}

export default function HomePage() {
  const [search, setSearch] = useState("");
  const searchHref = search.trim() ? `mailto:contactus@campuspe.com?subject=${encodeURIComponent(`CampusPe enquiry: ${search.trim()}`)}` : "#opportunities";

  return (
    <>
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-stage">
            <article className="notice-card notice-whatsapp">
              <span className="notice-icon green-icon"><Icon name="whatsapp" /></span>
              <div className="notice-body"><span className="notice-title">WhatsApp Alert</span><strong>Get notified on whatsapp</strong><p>You’ll get all important updates on your whatsapp</p></div>
            </article>

            <article className="notice-card notice-ai"><span className="notice-icon violet-icon"><Icon name="robot" /></span><div className="notice-body"><span className="notice-title">AI-Powered Campus Assistant</span><p>Connect 10X faster. One platform for students, colleges &amp; employers.</p></div></article>

            <article className="notice-card notice-resume">
              <span className="notice-icon violet-icon"><Icon name="bolt" /></span>
              <div className="notice-body"><span className="notice-title">Resume Builder</span><strong>Build Your Resume</strong><p>Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired</p></div>
            </article>

            <h1 className="hero-title" id="hero-title">Connect <span>10X Faster.</span></h1>
            <p className="hero-subtitle">One platform connecting students, colleges &amp; employers — faster.</p>

            <form className={`hero-search${search.trim() ? " has-value" : ""}`} onSubmit={(event) => { event.preventDefault(); window.location.href = searchHref; }}>
              <span className="sparkle" aria-hidden="true">✦</span>
              <label className="visually-hidden" htmlFor="opportunity-search">What are you looking for?</label>
              <input id="opportunity-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="What are you looking for?" />
              <button type="submit" aria-label="Search CampusPe opportunities"><ArrowIcon /></button>
              <span className="sparkle" aria-hidden="true">✦</span>
            </form>

            <div className="hero-status">
              <div className="status-pill">
                <span className="avatar-stack" aria-hidden="true"><i>AK</i><i>PR</i><i>SN</i></span>
                <div><strong><span className="live-dot"></span>142 students matched today</strong><small>Just now • IIT, BITS, VIT</small></div>
              </div>
              <div className="status-pill">
                <span className="status-mark"><Icon name="building" /></span>
                <div><strong><b>Radiant Info</b> shortlisted 8 interns</strong><small><span className="verified">✓</span> Verified recruiter • 2 days ago</small></div>
              </div>
            </div>
          </div>
        </section>

        <div className="journey-grid">{paths.map((item) => <JourneyCard item={item} key={item.id} />)}</div>

        <section className="metrics-band" aria-label="CampusPe at a glance"><div className="metrics-grid">{metrics.map((stat) => <div className="metric" key={stat.label}><StatIcon tone={stat.tone} name={stat.icon} /><div><strong>{stat.value}</strong><span>{stat.label}</span></div></div>)}</div><div className="partner-strip"><p>Trusted by partners across India</p><div className="partner-logos" aria-label="Trusted partner organisations">{partners.map((partner) => <PartnerLogo partner={partner} key={partner.tone} />)}</div></div></section>

        <section className="opportunities section-wrap split-section" id="opportunities"><div className="split-copy"><SectionLabel number="01">Opportunity Discovery</SectionLabel><h2>Stop searching.<br /><span>Start getting matched.</span></h2><p>Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p><ol className="numbered-list"><li><b>01</b><span><strong>Set your preferences</strong><small>Tell us what you’re looking for, from colleges and courses to jobs, internships and gigs.</small></span><i>Smart Profile</i></li><li><b>02</b><span><strong>Discover relevant opportunities</strong><small>Explore colleges and career opportunities matched to your profile, interests and goals.</small></span><i>AI Ranked</i></li><li><b>03</b><span><strong>Get notified when something fits</strong><small>Get notified when a relevant college or new opportunity is found, so you can act early.</small></span><i>Instant Alerts</i></li></ol><a className="text-link" href="#get-started">Explore opportunities <ArrowIcon /></a></div><FeedPreview /></section>

        <section className="resume-section" id="resume"><div className="resume-background-orb"></div><div className="resume-layout section-wrap"><div className="resume-heading"><span className="resume-status"><i></i>Try it live <b>v2.4 AI Engine</b></span><SectionLabel number="02">Your next role starts here</SectionLabel><h2>Upload your resume.<br /><span>Find jobs that fit.</span></h2><p>Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p><div className="resume-metrics"><div><strong>98%</strong><span>Match rate</span></div><div><strong>AI</strong><span>Semantic rank</span></div></div></div><ResumeDemo /></div><div className="resume-trust section-wrap"><span><b>✓</b> Resume analyzed <strong>Ready in 4s</strong></span><span><b>✳</b> Skills matched <strong>Deep taxonomy</strong></span><span><b>✦</b> Experience matched <strong>Contextual seniority</strong></span><span><b>↗</b> 1,000+ sources <strong>searched every day</strong></span></div></section>

        <section className="college-section" id="colleges"><div className="section-wrap college-layout"><div className="section-sticky-copy"><SectionLabel number="02">For Colleges</SectionLabel><h2>Get Discovered<br />by <span>Students and<br />Recruiters.</span></h2><p>Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.</p><a className="button" href="mailto:contactus@campuspe.com?subject=List%20your%20college%20on%20CampusPe">List Your College <ArrowIcon /></a></div><div className="college-features">{collegeFeatures.map((feature, index) => <CollegeFeature feature={feature} index={index} key={feature.label} />)}</div></div></section>

        <section className="employer-section" id="employers"><div className="section-wrap employer-layout"><div className="employer-copy"><SectionLabel number="03">For Employers</SectionLabel><h2>Stop running<br />campus drives.<br /><span>Start hiring the right<br />people.</span></h2><p>Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.</p><div className="employer-proof"><strong>57%</strong><span>Faster hiring<br />with CampusPe</span></div><a className="button" href="mailto:contactus@campuspe.com?subject=Post%20a%20job%20on%20CampusPe">Post a Job <ArrowIcon /></a></div><div className="employer-dashboard"><div className="dashboard-glow"></div>{employerSteps.map(([title, copy], index) => <article className="employer-step" key={title}><b className="step-number">{String(index + 1).padStart(2, "0")}</b><span className="step-indicator">Instant setup</span><h3>{title}</h3><p>{copy}</p><i className={index === 3 ? "step-check step-complete" : "step-check"}>{index === 3 ? "✓" : "↗"}</i></article>)}<div className="employer-tags"><span>5 min deployment</span><span>500+ campus network</span><span>Zero CV clutter</span><span>In-app scheduling</span></div></div></div></section>

        <section className="app-section" id="app"><div className="section-wrap app-content"><div className="app-copy"><SectionLabel number="04">The CampusPe App</SectionLabel><h2>Checkout Our App<br /><span>Interface Look</span></h2>      <p>Experience the power of a unified campus ecosystem right in your pocket. CampusPe offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.</p><a className="button" href="#app-download">Download App Now <ArrowIcon /></a><div className="store-badges" id="app-download"><a href="mailto:contactus@campuspe.com?subject=CampusPe%20app%20availability">▸ <span>GET IT ON<strong>Google Play</strong></span></a><a href="mailto:contactus@campuspe.com?subject=CampusPe%20app%20availability">● <span>Download on the<strong>App Store</strong></span></a></div></div><div className="app-mockups"><AppShowcase horizontal /></div></div></section>

        <section className="support-section" id="support"><div className="section-wrap"><div className="support-card"><img className="support-artwork" src="/assets/cta-support.png" alt="" /><div className="support-copy"><span className="support-eyebrow">CAMPUSPE SUPPORT</span><h2>Still have questions?</h2><p>Our support team is here to help you succeed. Get in touch anytime.</p></div><div className="support-actions"><a className="support-image-link" href="mailto:contactus@campuspe.com?subject=CampusPe%20support%20request" aria-label="Contact Support at contactus@campuspe.com" data-label="Contact Support"></a><a className="support-image-link" href="tel:+916362606464" aria-label="Schedule a call at +91 6362606464" data-label="Schedule a Call"></a></div></div></div></section>
      </main>
      <Footer />
    </>
  );
}

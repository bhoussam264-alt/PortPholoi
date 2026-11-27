import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  X,
} from "lucide-react";

const texts = {
  fr: {
    navHome: "Accueil", navProjects: "Projets", navSkills: "Compétences", navContact: "Contact",
    navCV: "Mon CV", navHire: "Me recruter",
    available: "DISPONIBLE POUR UN STAGE OU UN FREELANCE",
    role: "FULL STACK DEVELOPER · EL JADIDA, MAROC",
    hello: "Bonjour,", iam: "je suis",
    desc: "Je transforme vos idées en applications web complètes, de la conception au déploiement.",
    seeProjects: "Voir mes projets", contactMe: "Me contacter",
    projectsDone: "Projets réalisés", techs: "Technologies", motivation: "Motivation",
    projectsLabel: "01 / PROJETS SÉLECTIONNÉS", myProjects: "Mes", projectsDot: "projets.",
    projectsAside: "DES SOLUTIONS PENSÉES POUR LE MAROC.",
    skillsLabel: "02 / SAVOIR-FAIRE", mySkills: "Mes", skillsDot: "compétences.",
    skillsAside: "15 TECHNOLOGIES & OUTILS",
    filterAll: "Tous", filterFrontend: "Front-End", filterBackend: "Back-End", filterTools: "Outils",
    contactLabel: "DISPONIBLE POUR VOTRE PROCHAIN PROJET", contactNum: "03 / CONTACT",
    workTogether: "Travaillons", together: "ensemble ?",
    contactDesc: "Un projet, une offre de stage ? Parlons-en.",
    name: "Nom", email: "Email", subject: "Sujet", message: "Message",
    namePh: "Votre nom", subjectPh: "Ex: Projet site web", messagePh: "Décrivez votre projet...",
    send: "Envoyer le message", sentMsg: "✅ Merci ! Votre messagerie s'est ouverte, il ne reste qu'à cliquer sur Envoyer.",
    downloadCV: "⬇️ Télécharger mon CV (PDF)",
    footerRights: "TOUS DROITS RÉSERVÉS.",
    findMe: "📬 Retrouvez-moi aussi sur :",
    availableBox: "📍 Azemmour, Maroc — 🟢 Disponible pour stage / freelance",
  },
  en: {
    navHome: "Home", navProjects: "Projects", navSkills: "Skills", navContact: "Contact",
    navCV: "My CV", navHire: "Hire me",
    available: "AVAILABLE FOR INTERNSHIP OR FREELANCE",
    role: "FULL STACK DEVELOPER · EL JADIDA, MOROCCO",
    hello: "Hello,", iam: "I'm",
    desc: "I turn your ideas into complete web applications, from design to deployment.",
    seeProjects: "See my projects", contactMe: "Contact me",
    projectsDone: "Projects done", techs: "Technologies", motivation: "Motivation",
    projectsLabel: "01 / SELECTED PROJECTS", myProjects: "My", projectsDot: "projects.",
    projectsAside: "SOLUTIONS BUILT FOR MOROCCO.",
    skillsLabel: "02 / EXPERTISE", mySkills: "My", skillsDot: "skills.",
    skillsAside: "15 TECHNOLOGIES & TOOLS",
    filterAll: "All", filterFrontend: "Front-End", filterBackend: "Back-End", filterTools: "Tools",
    contactLabel: "AVAILABLE FOR YOUR NEXT PROJECT", contactNum: "03 / CONTACT",
    workTogether: "Let's work", together: "together ?",
    contactDesc: "A project, an internship offer ? Let's talk.",
    name: "Name", email: "Email", subject: "Subject", message: "Message",
    namePh: "Your name", subjectPh: "Ex: Website project", messagePh: "Describe your project...",
    send: "Send message", sentMsg: "✅ Thank you ! Your email app opened, just click Send.",
    downloadCV: "⬇️ Download my CV (PDF)",
    footerRights: "ALL RIGHTS RESERVED.",
    findMe: "📬 Find me also on :",
    availableBox: "📍 Azemmour, Morocco — 🟢 Available for internship / freelance",
  }
};

const projects = [
  { name: "ComptaLink", title: "ComptaLink — Gestion comptable", category: "La comptabilité, en toute clarté.", description: "La gestion des factures, clients et dépenses des petites entreprises marocaines, avec tableaux de bord et exports.", stack: ["React", "Laravel", "MySQL"], href: "https://comptalink-olive.vercel.app", image: "/combtalink.png", type: "finance", index: "01", marker: "🧾", accent: "blue" },
  { name: "CourParcFlow", title: "CourParcFlow — Gestion du parc informatique", category: "Le parc informatique, en toute maîtrise.", description: "La gestion des ordinateurs, employés, affectations, pannes et maintenances de la Cour d'Appel, avec tableau de bord et suivi en temps réel.", stack: ["Base44", "React", "Tailwind CSS"], href: "https://cour-parc-flow.base44.app", image: "/CDbl.png", type: "gestion", index: "02", marker: "💻", accent: "indigo" },
  { name: "Gourmet Express", title: "Gourmet Express — Livraison de repas", category: "Vos envies, livrées chez vous.", description: "Une application de commande et de livraison de repas, avec menu, panier et suivi des commandes en temps réel.", stack: ["React", "PHP", "MySQL"], href: "https://resto-hossam.vercel.app", image: "/Screenshot 2026-11-25 165542.png", type: "food", index: "03", marker: "🍔", accent: "orange" },
  { name: "CoVoyageMaroc", title: "Msafer — Voyage au Maroc", category: "Le Maroc comme prochaine destination.", description: "Une plateforme pour explorer les destinations marocaines et organiser des voyages inoubliables.", stack: ["React", "Laravel", "API"], href: "https://maroc-route-partage.base44.app", image: "/Voiyage.png", type: "travel", index: "04", marker: "✈️", accent: "purple" },
  { name: "StageMaroc", title: "StageMaroc — Trouve ton stage au Maroc", category: "Le stage comme prochaine opportunité.", description: "Une plateforme pour trouver, publier et gérer les stages au Maroc pour étudiants, entreprises et administrateurs.", stack: ["React", "Base44", "API"], href: "https://stage-maroc-go.base44.app/", image: "/StageMaroc.png", type: "stage", index: "05", marker: "🎓", accent: "blue" },
];

const skills = [
  { label: "React", symbol: "⚛", color: "react", category: "frontend", desc: "Création d'interfaces dynamiques et modernes.", tags: ["Front-End", "UI"] },
  { label: "Laravel", symbol: "L", color: "laravel", category: "backend", desc: "Développement Back-End et applications CRUD.", tags: ["Back-End", "PHP"] },
  { label: "JavaScript", symbol: "JS", color: "js", category: "frontend", desc: "Logique interactive et applications web complètes.", tags: ["Front-End", "Web"] },
  { label: "PHP", symbol: "php", color: "php", category: "backend", desc: "Développement Back-End et gestion des données.", tags: ["Back-End", "Web"] },
  { label: "Python", symbol: "🐍", color: "python", category: "backend", desc: "Développement d'applications et scripts avec Python.", tags: ["Back-End", "Script"] },
  { label: "MySQL", symbol: "▤", color: "mysql", category: "backend", desc: "Conception et gestion de bases de données.", tags: ["Base de données"] },
  { label: "API REST", symbol: "{ }", color: "api", category: "backend", desc: "Création et sécurisation d'API REST.", tags: ["API", "Sécurité"] },
  { label: "Tailwind CSS", symbol: "≈", color: "tailwind", category: "frontend", desc: "Design rapide et responsive.", tags: ["Design", "CSS"] },
  { label: "Bootstrap", symbol: "B", color: "bootstrap", category: "frontend", desc: "Mise en page rapide et responsive.", tags: ["Design", "CSS"] },
  { label: "Vite", symbol: "V", color: "vite", category: "tools", desc: "Outil rapide pour les projets React.", tags: ["Outil", "React"] },
  { label: "Git / GitHub", symbol: "GH", color: "github", category: "tools", desc: "Gestion des versions et travail en équipe.", tags: ["Versioning", "Équipe"] },
  { label: "Figma", symbol: "◈", color: "figma", category: "tools", desc: "Maquettes et conception d'interfaces.", tags: ["Design", "UI"] },
  { label: "API Sécurisée", symbol: "🔒", color: "laravel", category: "backend", desc: "API protégée et bonnes pratiques.", tags: ["Sécurité", "API"] },
  { label: "Déploiement", symbol: "🚀", color: "vite", category: "tools", desc: "Déploiement sur serveur ou machine virtuelle.", tags: ["Serveur", "VM"] },
  { label: "Travail en équipe", symbol: "👥", color: "github", category: "tools", desc: "Communication professionnelle et collaboration.", tags: ["Soft Skill"] },
];

function ProjectPreview({ type, image, name }) {
  if (image) return (<div className="preview-window custom-image-window"><img src={image} alt={name} className="custom-project-img" /></div>);
  if (type === "finance") return (<div className="preview-window finance-window"><div className="mock-sidebar"><span className="mock-logo"><span>c.</span> comptalink</span><span className="mock-side-active">▦ Tableau de bord</span><span>▤ Factures</span><span>↔ Dépenses</span><span>◷ Rapports</span></div><div className="mock-main finance-main"><div className="mock-heading">Bonjour, Hossam <span>☀</span></div><div className="mock-kpis"><div><small>Chiffre d&apos;affaires</small><strong>24 680 DH</strong><i className="kpi-line line-one" /></div><div><small>À encaisser</small><strong>3 240 DH</strong><i className="kpi-line line-two" /></div></div><div className="mock-chart"><span className="chart-bar h45" /><span className="chart-bar h65" /><span className="chart-bar h50" /><span className="chart-bar h85" /><span className="chart-bar h60" /><span className="chart-bar h100" /><span className="chart-bar h72" /><span className="chart-bar h90" /></div></div></div>);
  if (type === "travel") return (<div className="preview-window travel-window"><div className="travel-nav"><span>m<span>●</span>safer</span><span>Explorer Destinations <b>Mes voyages</b></span><i>H</i></div><div className="travel-image"><span>✳ LE MAROC VOUS ATTEND</span><strong>Le voyage<br />commence ici.</strong><span className="travel-search">⌕ Où souhaitez-vous partir ? <b>Explorer ↗</b></span></div><div className="travel-caption"><span>DESTINATIONS À DÉCOUVRIR</span><b>Voir les destinations ↗</b></div></div>);
  if (type === "stay") return (<div className="preview-window stay-window"><div className="stay-nav"><span>dar<span>✳</span>booking</span><span>Logements Séjours À propos</span><b>♡ Connexion</b></div><div className="stay-photo"><span className="stay-pill">VOTRE PROCHAIN SÉJOUR</span><strong>Le Maroc,<br />comme chez vous.</strong><span className="stay-search"><span>⌖ Où partir ?</span><span>▦ Dates</span><b>⌕</b></span></div><div className="stay-caption"><span>DES LOGEMENTS SÉLECTIONNÉS</span><b>Voir les logements ↗</b></div></div>);
  return (<div className="preview-window food-window"><div className="food-nav"><span><i>g</i> gourmet<span>express</span></span><b>Découvrir Menu À propos</b><i className="food-cart">◒</i></div><div className="food-body"><div className="food-copy"><span className="food-overline">FRAIS, PRÉPARÉ AVEC SOIN</span><strong>Bon goût.<br />Bonne humeur.</strong><span>Vos plats préférés, livrés chez vous.</span><b>Commander ↗</b></div><div className="food-art"><span>✳</span><i>✿</i><b>BON<br />GOÛT</b><small>PRÉPARÉ SUR PLACE</small></div></div><div className="food-footer"><span>✳ Produits frais</span><span>↗ Livraison rapide</span><span>♡ Fait avec soin</span></div></div>);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("fr");
  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState("all");
  const t = texts[lang];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();
    const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:bhoussam264@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSent(true);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV-Hossam-Bakkar.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closeMenu();
  };

  // FIX: kay-3awed y-khdem mli filter kay-tbeddel
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { revealItems.forEach((item) => item.classList.add("is-visible")); return undefined; }
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }); }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [filter]);

  const closeMenu = () => setMenuOpen(false);
  const inputStyle = { padding: "14px", borderRadius: "12px", border: "1px solid #e5e0d5", background: dark ? "#222" : "#fff", color: dark ? "#fff" : "#111", outline: "none", width: "100%", boxSizing: "border-box" };
  const linkStyle = { display: "flex", alignItems: "center", gap: "12px", padding: "13px 16px", background: dark ? "#222" : "#fff", border: "1px solid #e5e0d5", borderRadius: "14px", textDecoration: "none", color: dark ? "#fff" : "#111", fontWeight: "600" };
  const linkSmall = { marginLeft: "auto", fontWeight: "400", fontSize: "12px", opacity: 0.6, wordBreak: "break-all", textAlign: "right" };

  const cardStyle = {
    border: dark ? "1px solid #333" : "1px solid #e5e0d5",
    borderRadius: "16px",
    background: dark ? "#1a1a1a" : "#fff",
    overflow: "hidden",
  };

  const filteredSkills = filter === "all" ? skills : skills.filter((s) => s.category === filter);
  const filterBtn = (value) => ({
    padding: "9px 18px",
    borderRadius: "20px",
    border: "1px solid #e5e0d5",
    background: filter === value ? "#00a878" : dark ? "#222" : "#fff",
    color: filter === value ? "#fff" : dark ? "#fff" : "#111",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "14px",
  });

  return (
    <main className={dark ? "min-h-screen dark-mode" : "min-h-screen light-mode"}>
      <header className="site-header">
        <nav className="nav-shell">
          <a className="brand" href="#home" onClick={closeMenu}><span className="brand-monogram">HB<span>.</span></span></a>
          <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen((o) => !o)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          <div className={`nav-content${menuOpen ? " nav-content-open" : ""}`}>
            <div className="nav-links">
              <a href="#home" onClick={closeMenu}>{t.navHome}</a>
              <a href="#projects" onClick={closeMenu}>{t.navProjects}</a>
              <a href="#skills" onClick={closeMenu}>{t.navSkills}</a>
              <a href="#contact" onClick={closeMenu}>{t.navContact}</a>
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
              <button className="lang-btn" onClick={() => setLang(lang === "fr" ? "en" : "fr")} style={{ padding: "8px 14px", borderRadius: "20px", border: "1px solid #ddd", background: "#fff", color: "#111", cursor: "pointer", fontWeight: "bold" }}>
                {lang === "fr" ? "🇫🇷 FR | EN" : "🇬🇧 EN | FR"}
              </button>
              <button onClick={() => setDark(!dark)} style={{ padding: "8px 12px", borderRadius: "50%", border: "1px solid #ddd", background: dark ? "#fff" : "#111", color: dark ? "#111" : "#fff", cursor: "pointer", display: "flex", alignItems: "center" }}>
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button className="nav-cv" onClick={handleDownloadCV} style={{ cursor: "pointer", border: "none", color: "#fff" }}>{t.navCV} <ArrowDownRight size={15} /></button>
              <a className="nav-cv" href="#contact" onClick={closeMenu} style={{ background: "#22c55e", color: "#fff" }}>{t.navHire} <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner hero-with-photo">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> {t.available}</div>
            <p className="hero-role">{t.role}</p>
            <h1>{t.hello}<br />{t.iam} <span>Hossam Bakkar.</span></h1>
            <p className="hero-description">{t.desc}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{t.seeProjects} <ArrowRight size={16} /></a>
              <a className="button button-outline" href="mailto:bhoussam264@gmail.com"><Mail size={15} /> {t.contactMe}</a>
              <button className="button button-outline" onClick={handleDownloadCV} style={{ cursor: "pointer" }}>⬇️ {t.navCV}</button>
            </div>
            <div className="stats">
              <div><b>{String(projects.length).padStart(2, "0")}</b><span>{t.projectsDone}</span></div>
              <div><b>10+</b><span>{t.techs}</span></div>
              <div><b>100%</b><span>{t.motivation}</span></div>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img src="/MonBc.jpg" alt="Hossam Bakkar" className="hero-photo" />
            <span className="hero-photo-badge">👋 Disponible</span>
            <span className="hero-photo-glow"></span>
          </div>
        </div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-topline reveal">
          <div><span className="section-number">{t.projectsLabel}</span><h2>{t.myProjects} <span>{t.projectsDot}</span></h2></div>
          <span className="section-aside">{t.projectsAside} <ArrowDownRight size={16} /></span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.name} style={cardStyle}>
              <div className={`project-preview preview-${project.type}`}>
                <ProjectPreview type={project.type} image={project.image} name={project.name} />
                <span className="project-index">{project.index}</span>
                {project.href ? (<a className="project-open" href={project.href} target="_blank" rel="noreferrer"><ArrowUpRight size={18} /></a>) : (<span className="project-open project-private"><ArrowUpRight size={18} /></span>)}
              </div>
              <div className="project-info">
                <div className="project-title-row"><h3><span className={`project-marker marker-${project.accent}`}>{project.marker}</span>{project.title}</h3><span className="project-category">{project.category}</span></div>
                <p>{project.description}</p>
                {project.detail && <p className="project-detail">{project.detail} <span>(commission de 10 %)</span></p>}
                <div className="project-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}{project.href && <a href={project.href} target="_blank" rel="noreferrer"><ArrowUpRight size={14} /></a>}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section section-shell" id="skills">
        <div className="section-topline reveal">
          <div><span className="section-number">{t.skillsLabel}</span><h2>{t.mySkills} <span>{t.skillsDot}</span></h2></div>
          <span className="section-aside">{t.skillsAside} <Layers3 size={16} /></span>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "20px 0 25px" }}>
          <button style={filterBtn("all")} onClick={() => setFilter("all")}>{t.filterAll}</button>
          <button style={filterBtn("frontend")} onClick={() => setFilter("frontend")}>{t.filterFrontend}</button>
          <button style={filterBtn("backend")} onClick={() => setFilter("backend")}>{t.filterBackend}</button>
          <button style={filterBtn("tools")} onClick={() => setFilter("tools")}>{t.filterTools}</button>
        </div>

        {/* FIX: 7ayedt "reveal" men hna bach filter y-khdem */}
        <div className="project-grid" key={filter}>
          {filteredSkills.map((skill) => (
            <article className="project-card" key={skill.label} style={cardStyle}>
              <div style={{ height: "120px", display: "flex", alignItems: "center", justifyContent: "center", background: dark ? "#222" : "#f8f8f8", fontSize: "48px" }}>
                <span className={`skill-symbol skill-${skill.color}`} style={{ fontSize: "48px" }}>{skill.symbol}</span>
              </div>
              <div className="project-info">
                <div className="project-title-row"><h3>{skill.label}</h3></div>
                <p>{skill.desc}</p>
                <div className="project-tags">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="contact-section section-shell" id="contact">
        <div className="contact-panel reveal">
          <div className="contact-ornament contact-ornament-one" />
          <div className="contact-ornament contact-ornament-two" />
          <div className="contact-content" style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}>
            <div className="contact-label"><span className="status-dot" /> {t.contactLabel}</div>
            <span className="section-number">{t.contactNum}</span>
            <h2>{t.workTogether}<br /><span>{t.together}</span></h2>
            <p>{t.contactDesc}</p>
            <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "25px", marginTop: "25px", alignItems: "start" }}>
              <form onSubmit={handleContact} style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "left", minWidth: 0 }}>
                <label>{t.name}</label>
                <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={t.namePh} style={inputStyle} />
                <label>{t.email}</label>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" style={inputStyle} />
                <label>{t.subject}</label>
                <input required value={subject} onChange={(e) => setSubject(e.target.value)} placeholder={t.subjectPh} style={inputStyle} />
                <label>{t.message}</label>
                <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t.messagePh} style={{ ...inputStyle, resize: "vertical" }} />
                <button type="submit" className="button button-primary" style={{ justifyContent: "center", marginTop: "6px" }}>{t.send} <ArrowUpRight size={16} /></button>
                {sent && <p style={{ color: "green", fontSize: "14px" }}>{t.sentMsg}</p>}
              </form>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", minWidth: 0 }}>
                <h3 style={{ fontSize: "16px", marginBottom: "4px" }}>{t.findMe}</h3>
                <a href="mailto:bhoussam264@gmail.com" style={linkStyle}><span style={{ background: "#fee2e2", padding: "8px", borderRadius: "10px", display: "flex", flexShrink: 0 }}><Mail size={18} color="#e11d48" /></span>Email <span style={linkSmall}>bhoussam264@gmail.com ↗</span></a>
                <a href="https://wa.me/212635065313" target="_blank" rel="noreferrer" style={linkStyle}><span style={{ background: "#dcfce7", padding: "8px", borderRadius: "10px", display: "flex", flexShrink: 0 }}><MessageCircle size={18} color="#16a34a" /></span>WhatsApp <span style={linkSmall}>0635065313 ↗</span></a>
                <a href="https://github.com/HossamBakkar" target="_blank" rel="noreferrer" style={linkStyle}><span style={{ background: "#f3f4f6", padding: "8px", borderRadius: "10px", display: "flex", flexShrink: 0 }}><Github size={18} color="#000" /></span>GitHub <span style={linkSmall}>@HossamBakkar ↗</span></a>
                <a href="https://instagram.com/hossam.bakkar" target="_blank" rel="noreferrer" style={linkStyle}><span style={{ background: "#fce7f3", padding: "8px", borderRadius: "10px", display: "flex", flexShrink: 0 }}><Instagram size={18} color="#db2777" /></span>Instagram <span style={linkSmall}>@hossam.bakkar ↗</span></a>
                <a href="https://linkedin.com/in/hossambakkar" target="_blank" rel="noreferrer" style={linkStyle}><span style={{ background: "#dbeafe", padding: "8px", borderRadius: "10px", display: "flex", flexShrink: 0 }}><Linkedin size={18} color="#2563eb" /></span>LinkedIn <span style={linkSmall}>Hossam Bakkar ↗</span></a>
                <div style={{ background: "#111", color: "#fff", padding: "14px", borderRadius: "14px", fontSize: "13px", textAlign: "center" }}>{t.availableBox}</div>
                <button onClick={handleDownloadCV} style={{ padding: "14px", borderRadius: "14px", border: "none", background: "#00a878", color: "#fff", fontWeight: "bold", cursor: "pointer", fontSize: "14px" }}>{t.downloadCV}</button>
              </div>
            </div>
          </div>
          <span className="contact-big-arrow"><ArrowUpRight /></span>
          <span className="contact-watermark">&lt;/&gt;</span>
        </div>
        <div className="footer-bottom">
          <a className="brand footer-brand" href="#home"><span className="brand-monogram">HB<span>.</span></span></a>
          <span>© {new Date().getFullYear()} HOSSAM BAKKAR. {t.footerRights}</span>
          <div className="footer-links"><a href="#home">{t.navHome.toUpperCase()} <ArrowUpRight size={13} /></a><a href="#projects">{t.navProjects.toUpperCase()} <ArrowUpRight size={13} /></a><a href="#contact">{t.navContact.toUpperCase()} <ArrowUpRight size={13} /></a></div>
        </div>
      </footer>
    </main>
  );
}

export default App;
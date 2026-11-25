import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Layers3,
  Mail,
  Menu,
  X,
} from "lucide-react";

const projects = [
  {
    name: "ComptaLink",
    title: "ComptaLink — Gestion comptable",
    category: "La comptabilité, en toute clarté.",
    description:
      "La gestion des factures, clients et dépenses des petites entreprises marocaines, avec tableaux de bord et exports.",
    stack: ["React", "Laravel", "MySQL"],
    href: "https://comptalink-olive.vercel.app",
    image: "/combtalink.png",
    type: "finance",
    index: "01",
    marker: "🧾",
    accent: "blue",
  },
  {
    name: "DarBooking",
    title: "DarBooking — Réservation de logements",
    category: "Des séjours, en toute simplicité.",
    description:
      "Une plateforme marocaine de réservation avec recherche par ville et dates, réservation en deux clics et messagerie intégrée.",
    stack: ["React", "Laravel", "MySQL"],
    detail: "5 nuits × 400 DH = 2 000 DH · Propriétaire : 1 800 DH",
    href: "",
    type: "stay",
    index: "02",
    marker: "🏠",
    accent: "green",
  },
  {
    name: "Gourmet Express",
    title: "Gourmet Express — Livraison de repas",
    category: "Vos envies, livrées chez vous.",
    description:
      "Une application de commande et de livraison de repas, avec menu, panier et suivi des commandes en temps réel.",
    stack: ["React", "PHP", "MySQL"],
    href: "https://resto-hossam.vercel.app",
    image: "/Screenshot 2026-11-25 165542.png",
    type: "food",
    index: "03",
    marker: "🍔",
    accent: "orange",
  },
  {
    name: "CoVoyageMaroc",
    title: "Msafer — Voyage au Maroc",
    category: "Le Maroc comme prochaine destination.",
    description:
      "Une plateforme pour explorer les destinations marocaines et organiser des voyages inoubliables.",
    stack: ["React", "Laravel", "API"],
    href: "https://maroc-route-partage.base44.app",
    image: "/Voiyage.png",
    type: "travel",
    index: "04",
    marker: "✈️",
    accent: "purple",
  },
];

const skills = [
  { label: "React", symbol: "⚛", color: "react" },
  { label: "Vite", symbol: "V", color: "vite" },
  { label: "Tailwind CSS", symbol: "≈", color: "tailwind" },
  { label: "JavaScript", symbol: "JS", color: "js" },
  { label: "Laravel", symbol: "L", color: "laravel" },
  { label: "PHP", symbol: "php", color: "php" },
  { label: "MySQL", symbol: "▤", color: "mysql" },
  { label: "API REST", symbol: "{ }", color: "api" },
  { label: "Bootstrap", symbol: "B", color: "bootstrap" },
  { label: "Git / GitHub", symbol: "GH", color: "github" },
  { label: "Figma", symbol: "◈", color: "figma" },
];

function ProjectPreview({ type, image, name }) {
  if (image) {
    return (
      <div className="preview-window custom-image-window">
        <img src={image} alt={name} className="custom-project-img" />
      </div>
    );
  }
  if (type === "finance") {
    return (
      <div className="preview-window finance-window">
        <div className="mock-sidebar">
          <span className="mock-logo"><span>c.</span> comptalink</span>
          <span className="mock-side-active">▦ &nbsp; Tableau de bord</span>
          <span>▤ &nbsp; Factures</span>
          <span>↔ &nbsp; Dépenses</span>
          <span>◷ &nbsp; Rapports</span>
        </div>
        <div className="mock-main finance-main">
          <div className="mock-heading">Bonjour, Hossam <span>☀</span></div>
          <div className="mock-kpis">
            <div><small>Chiffre d&apos;affaires</small><strong>24 680 DH</strong><i className="kpi-line line-one" /></div>
            <div><small>À encaisser</small><strong>3 240 DH</strong><i className="kpi-line line-two" /></div>
          </div>
          <div className="mock-chart">
            <span className="chart-bar h45" /><span className="chart-bar h65" />
            <span className="chart-bar h50" /><span className="chart-bar h85" />
            <span className="chart-bar h60" /><span className="chart-bar h100" />
            <span className="chart-bar h72" /><span className="chart-bar h90" />
          </div>
        </div>
      </div>
    );
  }
  if (type === "travel") {
    return (
      <div className="preview-window travel-window">
        <div className="travel-nav"><span>m<span>●</span>safer</span><span>Explorer &nbsp; Destinations &nbsp; <b>Mes voyages</b></span><i>H</i></div>
        <div className="travel-image">
          <span>✳ &nbsp; LE MAROC VOUS ATTEND</span>
          <strong>Le voyage<br />commence ici.</strong>
          <span className="travel-search">⌕ &nbsp; Où souhaitez-vous partir ? <b>Explorer ↗</b></span>
        </div>
        <div className="travel-caption"><span>DESTINATIONS À DÉCOUVRIR</span><b>Voir les destinations &nbsp; ↗</b></div>
      </div>
    );
  }
  if (type === "stay") {
    return (
      <div className="preview-window stay-window">
        <div className="stay-nav"><span>dar<span>✳</span>booking</span><span>Logements &nbsp; Séjours &nbsp; À propos</span><b>♡ &nbsp; Connexion</b></div>
        <div className="stay-photo">
          <span className="stay-pill">VOTRE PROCHAIN SÉJOUR</span>
          <strong>Le Maroc,<br />comme chez vous.</strong>
          <span className="stay-search"><span>⌖ &nbsp; Où partir ?</span><span>▦ &nbsp; Dates</span><b>⌕</b></span>
        </div>
        <div className="stay-caption"><span>DES LOGEMENTS SÉLECTIONNÉS</span><b>Voir les logements &nbsp; ↗</b></div>
      </div>
    );
  }
  return (
    <div className="preview-window food-window">
      <div className="food-nav"><span><i>g</i> gourmet<span>express</span></span><b>Découvrir &nbsp; Menu &nbsp; À propos</b><i className="food-cart">◒</i></div>
      <div className="food-body">
        <div className="food-copy">
          <span className="food-overline">FRAIS, PRÉPARÉ AVEC SOIN</span>
          <strong>Bon goût.<br />Bonne humeur.</strong>
          <span>Vos plats préférés, livrés chez vous.</span>
          <b>Commander &nbsp; ↗</b>
        </div>
        <div className="food-art"><span>✳</span><i>✿</i><b>BON<br />GOÛT</b><small>PRÉPARÉ SUR PLACE</small></div>
      </div>
      <div className="food-footer"><span>✳ &nbsp; Produits frais</span><span>↗ &nbsp; Livraison rapide</span><span>♡ &nbsp; Fait avec soin</span></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen">
      <header className="site-header">
        <nav className="nav-shell" aria-label="Navigation principale">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Accueil — Hossam Bakkar">
            <span className="brand-monogram">HB<span>.</span></span>
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className={`nav-content${menuOpen ? " nav-content-open" : ""}`}>
            <div className="nav-links">
              <a href="#home" onClick={closeMenu}>Accueil</a>
              <a href="#projects" onClick={closeMenu}>Projets</a>
              <a href="#skills" onClick={closeMenu}>Compétences</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>
            <a className="nav-cv" href="#contact" onClick={closeMenu}>Me recruter <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner hero-with-photo">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> DISPONIBLE POUR UN STAGE OU UN FREELANCE</div>
            <p className="hero-role">FULL STACK DEVELOPER · EL JADIDA, MAROC</p>
            <h1>Bonjour,<br />je suis <span>Hossam Bakkar.</span></h1>
            <p className="hero-description">
              Je transforme vos idées en applications web complètes, de la conception au déploiement.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Voir mes projets <ArrowRight size={16} />
              </a>
              <a className="button button-outline" href="mailto:bhoussam264@gmail.com">
                <Mail size={15} /> Me contacter
              </a>
            </div>
            <div className="stats">
              <div><b>{String(projects.length).padStart(2, "0")}</b><span>Projets réalisés</span></div>
              <div><b>10+</b><span>Technologies</span></div>
              <div><b>100%</b><span>Motivation</span></div>
            </div>
          </div>

          {/* ===== TA PHOTO DE PROFIL ===== */}
          <div className="hero-photo-wrap">
            <img src="/Monimg.png" alt="Hossam Bakkar" className="hero-photo" />
            <span className="hero-photo-badge">👋 Disponible</span>
            <span className="hero-photo-glow"></span>
          </div>

        </div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-topline reveal">
          <div><span className="section-number">01 / PROJETS SÉLECTIONNÉS</span><h2>Mes <span>projets.</span></h2></div>
          <span className="section-aside">DES SOLUTIONS PENSÉES POUR LE MAROC. <ArrowDownRight size={16} /></span>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.name}>
              <div className={`project-preview preview-${project.type}`}>
                <ProjectPreview type={project.type} image={project.image} name={project.name} />
                <span className="project-index">{project.index}</span>
                {project.href ? (
                  <a className="project-open" href={project.href} target="_blank" rel="noreferrer" aria-label={`Voir le projet ${project.name} dans un nouvel onglet`}><ArrowUpRight size={18} /></a>
                ) : (
                  <span className="project-open project-private" title="Aucun lien de démonstration fourni" aria-label="Aucun lien de démonstration fourni"><ArrowUpRight size={18} /></span>
                )}
              </div>
              <div className="project-info">
                <div className="project-title-row">
                  <h3><span className={`project-marker marker-${project.accent}`} aria-hidden="true">{project.marker}</span>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p>{project.description}</p>
                {project.detail && <p className="project-detail">{project.detail} <span>(commission de 10 %)</span></p>}
                <div className="project-tags">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                  {project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Voir ${project.name}`}><ArrowUpRight size={14} /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section section-shell" id="skills">
        <div className="section-topline reveal">
          <div><span className="section-number">02 / SAVOIR-FAIRE</span><h2>Mes <span>compétences.</span></h2></div>
          <span className="section-aside">11 TECHNOLOGIES &amp; OUTILS <Layers3 size={16} /></span>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-item" key={skill.label}>
              <span className={`skill-symbol skill-${skill.color}`}>{skill.symbol}</span>
              <span className="skill-label">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="contact-section section-shell" id="contact">
        <div className="contact-panel reveal">
          <div className="contact-ornament contact-ornament-one" />
          <div className="contact-ornament contact-ornament-two" />
          <div className="contact-content">
            <div className="contact-label"><span className="status-dot" /> DISPONIBLE POUR VOTRE PROCHAIN PROJET</div>
            <span className="section-number">03 / CONTACT</span>
            <h2>Travaillons<br /><span>ensemble ?</span></h2>
            <p>Un projet, une offre de stage ? Parlons-en.</p>
            <a className="button contact-button" href="mailto:bhoussam264@gmail.com?subject=Parlons%20de%20votre%20projet">
              <Mail size={15} /> bhoussam264@gmail.com <ArrowUpRight size={16} />
            </a>
            <div className="contact-details">
              <a href="https://wa.me/212635065313" target="_blank" rel="noreferrer">WhatsApp&nbsp; : 0635065313</a>
              <span>El Jadida, Maroc</span>
            </div>
          </div>
          <span className="contact-big-arrow"><ArrowUpRight /></span>
          <span className="contact-watermark">&lt;/&gt;</span>
        </div>
        <div className="footer-bottom">
          <a className="brand footer-brand" href="#home"><span className="brand-monogram">HB<span>.</span></span></a>
          <span>© {new Date().getFullYear()} HOSSAM BAKKAR. TOUS DROITS RÉSERVÉS.</span>
          <div className="footer-links">
            <a href="#home">ACCUEIL <ArrowUpRight size={13} /></a>
            <a href="#projects">PROJETS <ArrowUpRight size={13} /></a>
            <a href="#contact">CONTACT <ArrowUpRight size={13} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
import { useState, useEffect } from "react";
import "./Portfolio.css";

// ── DATA ──────────────────────────────────────────────────────
const NAV_LINKS = ["about", "skills", "projects", "education", "contact"];

const INFO_ITEMS = [
  { icon: "📍", label: "Location", value: "New Jersey, NJ 07306" },
  { icon: "📧", label: "Email", value: "meesalasaikhush2002@gmail.com" },
  { icon: "📞", label: "Phone", value: "+1 973-573-7778" },
  { icon: "🔗", label: "LinkedIn", value: "linkedin.com/in/mskhush" },
  { icon: "🎓", label: "Education", value: "M.S. Computer Science, Pace University" },
];

const SKILLS = [
  {
    icon: "</>",
    color: "#00d4ff",
    category: "Frontend Development",
    tags: ["HTML5", "CSS3", "JavaScript", "Next.js", "React", "TypeScript", "Tailwind CSS", "Bootstrap", "Responsive Web Design"],
  },
  {
    icon: "🗄",
    color: "#a78bfa",
    category: "Backend Development",
    tags: ["Python (FastAPI, Flask, Django)", "Node.js", "Java (OOP, APIs)", "C", "C++", "C#", "PHP", "REST APIs", "Progress OpenEdge ABL"],
  },
  {
    icon: "🧠",
    color: "#f472b6",
    category: "AI & ML Technologies",
    tags: ["Scikit-learn", "Pandas", "NumPy", "NLP", "Sentiment Analysis", "LLMs (Mistral, ChatGPT)", "Generative AI", "TensorFlow", "XGBoost", "Time Series Forecasting"],
  },
  {
    icon: "🗃",
    color: "#60a5fa",
    category: "Data & Visualization",
    tags: ["SQL", "MySQL", "PostgreSQL", "Jupyter", "Google Colab", "Power BI", "Tableau", "Google Suite", "MS 365"],
  },
  {
    icon: "⚙",
    color: "#fb923c",
    category: "Dev Tools & Workflow",
    tags: ["Git & GitHub", "TortoiseSVN", "VS Code", "Postman", "Linux/Unix", "Agile", "Scrum", "Docker"],
  },
  {
    icon: "🚀",
    color: "#facc15",
    category: "Deployment & Platforms",
    tags: ["Firebase", "AWS & EC2", "Vercel", "Unity (Game Dev)", "Anaconda", "Visual Studio", "Canva", "Adobe Photoshop"],
  },
];

const PROJECTS = [
  {
    number: "01",
    name: "Walleto — Budget Management App",
    bullets: [
      "Full-stack financial management system for budgets, expenses, and transactions.",
      "Secure authentication with OTP and 2FA, integrating RESTful APIs for real-time updates.",
      "Deployed on AWS using Docker and CI/CD pipelines for scalability.",
      "Agile delivery of Dashboard, Transaction, and Category Management modules.",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "AWS", "Docker", "Tailwind CSS"],
  },
  {
    number: "02",
    name: "Skill Roulette",
    bullets: [
      "Interactive skill-roulette web app with a dynamic spin wheel for personal development tasks.",
      "Skill Progress Page with charts showing spin frequency, usage trends, and practice streaks.",
      "Firebase Auth and Firestore for secure user login and real-time data storage.",
      "Deployed as a Progressive Web App (PWA) with mobile-first design for iOS and Android.",
    ],
    tech: ["React", "Ionic", "Firebase", "Firestore", "PWA"],
  },
];

const EDUCATION = [
  {
    degree: "Master of Science — Computer Science",
    school: "Pace University, Seidenberg School of CS & IS · New York",
    grade: "GPA 3.9",
    period: "Jan 2024 – Dec 2025",
  },
  {
    degree: "Bachelor of Technology — Computer Science",
    school: "Raghu Institute of Technology · India",
    grade: "CGPA 9.34",
    period: "Aug 2019 – Apr 2023",
  },
];

const CONTACT_LINKS = [
  { icon: "📧", label: "meesalasaikhush2002@gmail.com", href: "mailto:meesalasaikhush2002@gmail.com" },
  { icon: "📞", label: "+1 973-573-7778", href: "tel:+19735737778" },
  { icon: "🔗", label: "linkedin.com/in/mskhush", href: "https://linkedin.com/in/mskhush" },
  { icon: "📍", label: "New Jersey, NJ 07306", href: "#" },
];

const PHOTOS = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
];

// ── SCROLL HELPER ─────────────────────────────────────────────
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function Portfolio() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") === "light"
  );

  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Auto-advance slideshow every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % PHOTOS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Apply light class to BOTH html (for body/bg) and kept in state for root div
  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  // Scroll-triggered card animations
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(
      ".skill-card, .project-card, .edu-card, .info-card"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.animation =
              `fadeUp 0.5s ease ${i * 0.06}s both`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach((c) => { c.style.opacity = "0"; observer.observe(c); });
    return () => observer.disconnect();
  }, []);

  // Root class: "portfolio-root" always + "light" when light mode
  const rootClass = `portfolio-root${isLight ? " light" : ""}`;

  return (
    <div className={rootClass}>

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <div className="nav-logo">MSK</div>
        <div className="nav-right">
          <ul className="nav-links">
            {NAV_LINKS.map((id) => (
              <li key={id}>
                <button className="nav-btn" onClick={() => scrollTo(id)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <button className="theme-toggle" onClick={() => setIsLight(!isLight)} aria-label="Toggle theme">
            <div className="toggle-icons"><span>🌙</span><span>☀️</span></div>
            <div className={`toggle-thumb ${isLight ? "toggle-thumb--light" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-inner">
          <div className="hero-tag">Available for opportunities</div>
          <h1>Sai Khush<br /><span className="accent-line">Kumar Meesala</span></h1>
          <p className="hero-desc">
            Software Developer with a Master's in Computer Science (GPA 3.9) specializing in
            full-stack web applications — React, Node.js, Next.js, and AWS.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              View Projects
            </button>
            <a href="mailto:meesalasaikhush2002@gmail.com" className="btn-outline">📬 Get In Touch</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">3<span>.</span>9</div>
              <div className="stat-label">Master's GPA</div>
            </div>
            <div>
              <div className="stat-num">10<span>+</span></div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="surface-section">
        <div className="section-inner">
          <div className="section-label">Who I Am</div>
          <div className="section-title">About Me</div>
          <div className="about-grid">
            <div className="about-text">
              <p>I'm a <strong>full-stack Software Developer</strong> with a Master's in Computer Science from <strong>Pace University</strong> (GPA 3.9, Dec 2025) and a strong foundation in building responsive, performant web applications.</p>
              <p>My passion lies in crafting <strong>user-focused solutions</strong> that are clean, scalable, and built on modern cloud infrastructure. From ideation to deployment, I care about every layer of the stack.</p>
              <p>I'm experienced in <strong>Agile environments</strong>, collaborating closely with clients and teams to deliver high-quality solutions on time — whether integrating REST APIs, designing schemas, or deploying on AWS with Docker.</p>

              <div className="info-cards-row">
                {INFO_ITEMS.map((item) => (
                  <div className="info-card" key={item.label}>
                    <div className="info-icon">{item.icon}</div>
                    <div>
                      <div className="info-label">{item.label}</div>
                      <div className="info-value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slideshow */}
            <div className="slideshow">
              <div className="slideshow-frame">
                {PHOTOS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Sai photo ${i + 1}`}
                    className={`slide-img ${i === currentPhoto ? "slide-active" : ""}`}
                  />
                ))}
                {/* Dots */}
                <div className="slide-dots">
                  {PHOTOS.map((_, i) => (
                    <button
                      key={i}
                      className={`slide-dot ${i === currentPhoto ? "slide-dot--active" : ""}`}
                      onClick={() => setCurrentPhoto(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills">
        <div className="section-inner">
          <div className="section-label">What I Know</div>
          <div className="section-title">Technical Skills</div>
          <div className="skills-grid">
            {SKILLS.map((group) => (
              <div className="skill-card" key={group.category}>
                <div className="skill-cat" style={{ color: group.color }}>
                  <span className="skill-icon">{group.icon}</span>
                  {group.category}
                </div>
                <div className="skill-tags">
                  {group.tags.map((tag) => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="surface-section">
        <div className="section-inner">
          <div className="section-label">What I've Built</div>
          <div className="section-title">Projects</div>
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <div className="project-card" key={p.number}>
                <div className="project-number">{p.number}</div>
                <div className="project-name">{p.name}</div>
                <ul className="project-desc">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="project-tech">
                  {p.tech.map((t) => <span className="tech-pill" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="surface-section">
        <div className="section-inner">
          <div className="section-label">Academic Background</div>
          <div className="section-title">Education</div>
          <div className="edu-grid">
            {EDUCATION.map((edu) => (
              <div className="edu-card" key={edu.degree}>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-school">{edu.school}</div>
                <div className="edu-meta">
                  <span className="edu-badge">{edu.grade}</span>
                  <span className="edu-badge edu-badge--purple">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div>
              <div className="section-label">Let's Talk</div>
              <div className="contact-heading">Get In Touch</div>
              <p className="contact-sub">I'm open to new opportunities, freelance work, or just a good conversation about tech. Feel free to reach out!</p>
              <div className="contact-links">
                {CONTACT_LINKS.map((link) => (
                  <a key={link.label} href={link.href} className="contact-link"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                    <div className="contact-link-icon">{link.icon}</div>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-form">
              <div className="form-title">Send a Message</div>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell me about your project or opportunity..." />
              </div>
              <button className="form-submit"
                onClick={() => alert("Thanks for reaching out! Connect a backend to make this live.")}>
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>Designed & Built by <span className="footer-name">Sai Khush Kumar Meesala</span> · 2025</p>
      </footer>

    </div>
  );
}

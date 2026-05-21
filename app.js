const translations = {
  en: {
    nav_projects: "Projects",
    nav_labs: "Security Labs",
    nav_skills: "Skills",
    nav_cv: "CV",
    nav_contact: "Contact",
    hero_eyebrow: "Cybersecurity Developer / Blue-Team Builder / Creative Technologist",
    hero_title_a: "Mustafa Uğur Erkan",
    hero_title_b: "builds security tools people can actually use.",
    hero_lede: "Known online as MegaZegan, I combine programming, IT support, design, and cybersecurity practice into portfolio projects that show how I think, build, test, and communicate.",
    hero_cta_projects: "View security projects",
    hero_cta_cv: "Open CV",
    identity_caption: "Defensive tooling, code, and creative systems.",
    availability_title: "Open to cybersecurity and developer roles",
    availability_text: "Istanbul based. Native Turkish, upper-intermediate English. Ready to learn fast and contribute in real teams.",
    proof_security_repos: "published cybersecurity repositories",
    proof_domains: "security domains shown on this site",
    proof_ci: "tests and GitHub Actions on portfolio tools",
    proof_languages: "Turkish native, upper-intermediate English",
    about_eyebrow: "Profile",
    about_title: "A developer moving deliberately into cybersecurity.",
    about_intro: "My background mixes computer programming, database work, web development, social media operations, creative tools, and hands-on IT problem solving. That combination helps me build security tools that are technical, readable, and presentable.",
    about_story_title: "Working style",
    about_story_1: "I adapt quickly to new environments, learn the toolchain, and take ownership of practical problems. I like fixing broken systems, documenting what happened, and turning one-off solutions into reusable tools.",
    about_story_2: "For hiring teams, this portfolio is designed to show more than keywords: code, UI thinking, defensive security examples, documentation, and the ability to ship.",
    facts_title: "Snapshot",
    fact_location: "Location",
    fact_education: "Education",
    fact_education_val: "Computer Programming, Beykent University",
    fact_background: "Background",
    fact_background_val: "Database programming, web operations, design, IT support",
    fact_languages: "Languages",
    fact_languages_val: "Turkish, English",
    projects_eyebrow: "Portfolio Evidence",
    projects_title: "Security projects organized like a hiring manager wants to scan them.",
    projects_intro: "The strongest projects are published on GitHub. Additional labs show the categories I am actively building toward: SOC, cloud, AppSec, network analysis, threat intelligence, and secure web.",
    filter_all: "All",
    filter_cloud: "Cloud",
    filter_network: "Network",
    project_vaultwatch: "Fallout/Pip-Boy inspired terminal tool that analyzes local telemetry and turns suspicious activity into a retro vault dashboard.",
    project_vaultwatch_1: "Detects suspicious auth, DNS, outbound transfers, privilege changes, beacon timing, and secret-shaped values.",
    project_vaultwatch_2: "Exports JSON and Markdown reports with safe local-only sample data.",
    project_sentinel: "Defensive SOC analytics toolkit that normalizes logs, applies detection rules, scores risk, and generates HTML reports for analyst review.",
    project_sentinel_1: "Brute force, impossible travel, privilege escalation, IOC, probing, and exfiltration detections.",
    project_sentinel_2: "Python CLI, pytest coverage, sample telemetry, report generator.",
    project_tracelens: "Defensive log triage CLI for suspicious authentication, firewall, DNS, and outbound traffic patterns.",
    project_tracelens_1: "Analyzes local CSV/JSONL telemetry without touching live targets.",
    project_tracelens_2: "Shows practical SOC thinking through clean Python modules and tests.",
    project_cloud: "IAM-style cloud policy linter for risky permissions, public principals, unbounded PassRole, broad NotAction, and missing guardrails.",
    project_cloud_1: "Turns policy risk into explainable findings with remediation guidance.",
    project_cloud_2: "Good fit for pull request reviews and least-privilege conversations.",
    project_secret: "Local defensive secret scanner with regex checks, entropy scoring, masked findings, allowlist comments, JSON, and SARIF output.",
    project_secret_1: "Designed to catch secrets before they reach production.",
    project_secret_2: "SARIF output makes it CI and code-scanning friendly.",
    project_packet: "Network traffic triage concept for turning flow logs into suspicious-behavior summaries: unusual ports, volume spikes, beacon-like timing, and risky destinations.",
    project_packet_1: "Shows how I would approach network telemetry from a defender point of view.",
    project_packet_2: "Expandable into a Python CLI using CSV/Zeek-style logs.",
    project_ioc: "Safe browser-based indicator checker that demonstrates normalization, matching, severity scoring, and analyst notes without touching live targets.",
    project_ioc_1: "IP/domain/hash style matching with simple risk context.",
    project_ioc_2: "Useful for explaining alert enrichment in interviews.",
    project_web: "This website itself is a project: responsive UI, multilingual content, accessibility, safe client-side security demos, and GitHub Pages deployment.",
    project_web_1: "Shows frontend polish plus technical storytelling.",
    project_web_2: "Built as a static site for speed, simplicity, and free hosting.",
    project_pipboy: "Fallout-inspired interactive Pip-Boy interface with retro terminal UI, themes, inventory, map, and radio panels.",
    project_pipboy_1: "Shows creative UI recreation, animation, and responsive frontend work.",
    project_pipboy_2: "Published as a GitHub Pages demo.",
    project_algokit: "Small Python algorithms and data-structure toolkit with CLI demos and tests.",
    project_algokit_1: "Includes sorting, searching, graph algorithms, LRU cache, and text utilities.",
    project_algokit_2: "Shows core software engineering skill outside security tooling.",
    project_pixelforge: "Local-first pixel art editor with canvas tools, frame preview, mirror drawing, project saves, and PNG export.",
    project_pixelforge_1: "Shows pointer input, flood fill, animation frames, and browser persistence.",
    project_pixelforge_2: "Published as an interactive GitHub Pages app.",
    project_beatgrid: "Browser drum sequencer with synthesized percussion, pattern editing, tempo, swing, mixer controls, and local saves.",
    project_beatgrid_1: "Shows Web Audio timing, interactive state, and canvas visualization.",
    project_beatgrid_2: "Built as a music tool that can be played immediately.",
    project_try_lab: "Try the browser lab below",
    labs_eyebrow: "Safe Cybersecurity Examples",
    labs_title: "Interactive labs that explain how I think.",
    labs_intro: "These examples run only in the browser. They are defensive demonstrations: no scanning real targets, no exploitation, no credential testing.",
    lab_password_title: "Password Risk Triage",
    lab_password_intro: "A quick estimator that checks length, variety, repetition, and common weak terms.",
    lab_password_label: "Test a sample password",
    lab_ioc_title: "IOC Matcher",
    lab_ioc_intro: "Paste indicators and see safe local matches against a tiny demo watchlist.",
    lab_ioc_button: "Analyze indicators",
    lab_log_title: "SOC Log Triage Simulator",
    lab_log_intro: "A miniature version of alert reasoning: failed logins, suspicious geography, and risky admin activity become a ranked finding.",
    lab_log_button: "Run triage",
    skills_eyebrow: "Capabilities",
    skills_title: "Code, security, systems, and creative execution.",
    skill_programming: "Programming",
    skill_security: "Cybersecurity",
    skill_web: "Web & Product",
    skill_creative: "Creative Tools",
    timeline_eyebrow: "Path",
    timeline_title: "A practical technical background.",
    timeline_lise_title: "Computer database programming foundation",
    timeline_lise_text: "Studied database programming in high school, building an early base in structured data, systems thinking, and software logic.",
    timeline_yildiz_title: "Yıldız Holding / Bizim Market internship",
    timeline_yildiz_text: "Nine months of real workplace learning, including SQL/XML systems exposure and practical IT growth.",
    timeline_textile_title: "Web, social media, and design operations",
    timeline_textile_text: "Worked across social media management, website direction, graphic editing, product system updates, and customer-facing support.",
    timeline_beykent_title: "Beykent University / Computer Programming",
    timeline_beykent_text: "Continuing formal programming education while building cybersecurity-focused portfolio tools.",
    cv_eyebrow: "CV",
    cv_title: "Readable summary plus original PDF.",
    cv_intro: "The website gives hiring teams the fast scan. The PDF keeps the original full CV available for download or review.",
    cv_open: "Open PDF CV",
    cv_email: "Email me",
    cmd_cv: "Build CV",
    cmd_projects: "List Projects",
    cmd_skills: "Show Skills",
    cmd_hire: "Why Hire?",
    cv_role: "Computer programming student, developer, designer, and cybersecurity-focused builder.",
    cv_contact: "Contact",
    cv_education: "Education",
    cv_education_val: "Beykent University, Computer Programming",
    cv_experience: "Experience",
    cv_experience_val: "Web operations, social media, SQL/XML exposure, IT support, design.",
    cv_languages: "Languages",
    cv_languages_val: "Turkish native, English upper-intermediate.",
    contact_eyebrow: "Contact",
    contact_title: "Hiring, internship, freelance, or collaboration?",
    contact_intro: "The best roles for me combine coding, security, practical problem solving, and room to keep learning.",
    contact_cv: "CV PDF",
    contact_cv_text: "Download / open resume",
    footer_text: "Built with static HTML, CSS, JavaScript, and GitHub Pages."
  },
  tr: {
    nav_projects: "Projeler",
    nav_labs: "Güvenlik Labları",
    nav_skills: "Yetenekler",
    nav_cv: "CV",
    nav_contact: "İletişim",
    hero_eyebrow: "Siber Güvenlik Geliştiricisi / Blue-Team Araçları / Yaratıcı Teknoloji",
    hero_title_a: "Mustafa Uğur Erkan",
    hero_title_b: "insanların gerçekten kullanabileceği güvenlik araçları geliştirir.",
    hero_lede: "İnternette MegaZegan olarak biliniyorum. Programlama, IT desteği, tasarım ve siber güvenlik pratiğini; düşünme, geliştirme, test etme ve anlatma biçimimi gösteren projelerde birleştiriyorum.",
    hero_cta_projects: "Güvenlik projelerini gör",
    hero_cta_cv: "CV'yi aç",
    identity_caption: "Savunma araçları, kod ve yaratıcı sistemler.",
    availability_title: "Siber güvenlik ve yazılım rolleri için müsait",
    availability_text: "İstanbul merkezli. Ana dil Türkçe, üst-orta seviye İngilizce. Hızlı öğrenmeye ve gerçek ekiplerde katkı vermeye hazırım.",
    proof_security_repos: "yayınlanmış siber güvenlik reposu",
    proof_domains: "bu sitede gösterilen güvenlik alanı",
    proof_ci: "portföy araçlarında testler ve GitHub Actions",
    proof_languages: "Türkçe ana dil, üst-orta İngilizce",
    about_eyebrow: "Profil",
    about_title: "Siber güvenliğe bilinçli şekilde ilerleyen bir geliştirici.",
    about_intro: "Arka planım bilgisayar programcılığı, veritabanı, web geliştirme, sosyal medya operasyonları, yaratıcı araçlar ve pratik IT problem çözümünü birleştiriyor. Bu karışım teknik, okunabilir ve sunulabilir güvenlik araçları geliştirmeme yardımcı oluyor.",
    about_story_title: "Çalışma tarzı",
    about_story_1: "Yeni ortamlara hızlı uyum sağlarım, araç zincirini öğrenirim ve pratik problemlerin sorumluluğunu alırım. Bozuk sistemleri düzeltmeyi, ne olduğunu belgelemeyi ve tek seferlik çözümleri tekrar kullanılabilir araçlara çevirmeyi severim.",
    about_story_2: "Bu portföy işe alım ekiplerine sadece anahtar kelimeleri değil; kodu, UI düşüncesini, savunma odaklı güvenlik örneklerini, dokümantasyonu ve işi bitirme becerisini göstermek için tasarlandı.",
    facts_title: "Özet",
    fact_location: "Konum",
    fact_education: "Eğitim",
    fact_education_val: "Bilgisayar Programcılığı, Beykent Üniversitesi",
    fact_background: "Geçmiş",
    fact_background_val: "Veritabanı programlama, web operasyonları, tasarım, IT destek",
    fact_languages: "Diller",
    fact_languages_val: "Türkçe, İngilizce",
    projects_eyebrow: "Portföy Kanıtı",
    projects_title: "İşe alımcıların hızlıca tarayabileceği şekilde düzenlenmiş güvenlik projeleri.",
    projects_intro: "En güçlü projeler GitHub'da yayınlandı. Ek lablar aktif olarak geliştirdiğim alanları gösteriyor: SOC, cloud, AppSec, ağ analizi, tehdit istihbaratı ve güvenli web.",
    filter_all: "Tümü",
    filter_cloud: "Cloud",
    filter_network: "Ağ",
    project_vaultwatch: "Fallout/Pip-Boy esintili terminal aracı; yerel telemetriyi analiz edip şüpheli aktiviteleri retro vault paneline dönüştürür.",
    project_vaultwatch_1: "Şüpheli auth, DNS, dış transfer, yetki değişimi, beacon zamanlaması ve secret biçimli değerleri tespit eder.",
    project_vaultwatch_2: "Güvenli yerel örnek verilerle JSON ve Markdown raporları üretir.",
    project_tracelens: "Şüpheli kimlik doğrulama, firewall, DNS ve dış trafik desenleri için savunma odaklı log triyaj CLI aracı.",
    project_tracelens_1: "Canlı hedeflere dokunmadan yerel CSV/JSONL telemetriyi analiz eder.",
    project_tracelens_2: "Temiz Python modülleri ve testlerle pratik SOC düşüncesini gösterir.",
    project_pipboy: "Retro terminal UI, temalar, envanter, harita ve radyo panelleri içeren Fallout esintili interaktif Pip-Boy arayüzü.",
    project_pipboy_1: "Yaratıcı UI yeniden üretimi, animasyon ve responsive front-end çalışmasını gösterir.",
    project_pipboy_2: "GitHub Pages demosu olarak yayınlandı.",
    project_algokit: "CLI demoları ve testleri olan küçük Python algoritma ve veri yapısı araç seti.",
    project_algokit_1: "Sıralama, arama, graph algoritmaları, LRU cache ve text utilities içerir.",
    project_algokit_2: "Güvenlik araçları dışında temel yazılım mühendisliği becerilerini gösterir.",
    project_pixelforge: "Canvas araçları, frame önizleme, mirror çizim, proje kaydı ve PNG export sunan yerel odaklı pixel art editörü.",
    project_pixelforge_1: "Pointer input, flood fill, animasyon frameleri ve tarayıcıda kalıcılık gösterir.",
    project_pixelforge_2: "İnteraktif GitHub Pages uygulaması olarak yayınlandı.",
    project_beatgrid: "Sentezlenmiş perküsyon, pattern düzenleme, tempo, swing, mixer kontrolleri ve yerel kayıt içeren tarayıcı drum sequencer aracı.",
    project_beatgrid_1: "Web Audio zamanlaması, interaktif state ve canvas görselleştirmesi gösterir.",
    project_beatgrid_2: "Hemen çalınabilen bir müzik aracı olarak geliştirildi.",
    labs_eyebrow: "Güvenli Siber Güvenlik Örnekleri",
    labs_title: "Nasıl düşündüğümü gösteren interaktif lablar.",
    labs_intro: "Bu örnekler sadece tarayıcıda çalışır. Savunma odaklıdır: gerçek hedef taraması, exploit veya kimlik bilgisi testi yoktur.",
    skills_eyebrow: "Kabiliyetler",
    skills_title: "Kod, güvenlik, sistemler ve yaratıcı uygulama.",
    skill_programming: "Programlama",
    skill_security: "Siber Güvenlik",
    skill_web: "Web ve Ürün",
    skill_creative: "Yaratıcı Araçlar",
    cv_title: "Okunabilir özet ve orijinal PDF.",
    cmd_cv: "CV Oluştur",
    cmd_projects: "Projeleri Listele",
    cmd_skills: "Yetenekleri Göster",
    cmd_hire: "Neden İşe Almalı?",
    contact_title: "İşe alım, staj, freelance veya iş birliği?",
    footer_text: "Statik HTML, CSS, JavaScript ve GitHub Pages ile geliştirildi."
  },
  de: {
    nav_projects: "Projekte",
    nav_labs: "Security Labs",
    nav_skills: "Skills",
    nav_cv: "Lebenslauf",
    nav_contact: "Kontakt",
    hero_eyebrow: "Cybersecurity Developer / Blue-Team Builder / Creative Technologist",
    hero_title_a: "Mustafa Uğur Erkan",
    hero_title_b: "entwickelt Sicherheitswerkzeuge, die Menschen wirklich nutzen können.",
    hero_lede: "Online bekannt als MegaZegan. Ich verbinde Programmierung, IT-Support, Design und Cybersecurity-Praxis in Projekten, die Denken, Bauen, Testen und Kommunikation zeigen.",
    hero_cta_projects: "Security-Projekte ansehen",
    hero_cta_cv: "CV öffnen",
    identity_caption: "Defensive Tools, Code und kreative Systeme.",
    cmd_cv: "CV bauen",
    cmd_projects: "Projekte listen",
    cmd_skills: "Skills zeigen",
    cmd_hire: "Warum einstellen?",
    availability_title: "Offen für Cybersecurity- und Entwicklerrollen",
    availability_text: "Standort Istanbul. Türkisch muttersprachlich, Englisch obere Mittelstufe. Bereit, schnell zu lernen und in echten Teams beizutragen.",
    projects_title: "Security-Projekte, die schnell und klar bewertet werden können.",
    labs_title: "Interaktive Labs, die meine Denkweise erklären.",
    skills_title: "Code, Security, Systeme und kreative Umsetzung.",
    contact_title: "Hiring, Praktikum, Freelance oder Zusammenarbeit?",
    footer_text: "Gebaut mit statischem HTML, CSS, JavaScript und GitHub Pages."
  },
  es: {
    nav_projects: "Proyectos",
    nav_labs: "Labs de seguridad",
    nav_skills: "Habilidades",
    nav_cv: "CV",
    nav_contact: "Contacto",
    hero_eyebrow: "Desarrollador de ciberseguridad / Blue Team / Tecnología creativa",
    hero_title_a: "Mustafa Uğur Erkan",
    hero_title_b: "crea herramientas de seguridad que la gente puede usar.",
    hero_lede: "Conocido en internet como MegaZegan. Combino programación, soporte IT, diseño y práctica de ciberseguridad en proyectos que muestran cómo pienso, construyo, pruebo y comunico.",
    hero_cta_projects: "Ver proyectos",
    hero_cta_cv: "Abrir CV",
    identity_caption: "Herramientas defensivas, código y sistemas creativos.",
    cmd_cv: "Crear CV",
    cmd_projects: "Listar proyectos",
    cmd_skills: "Ver habilidades",
    cmd_hire: "Por qué contratar?",
    availability_title: "Disponible para roles de ciberseguridad y desarrollo",
    availability_text: "Basado en Estambul. Turco nativo, inglés intermedio alto. Listo para aprender rápido y aportar en equipos reales.",
    projects_title: "Proyectos de seguridad organizados para una revisión rápida.",
    labs_title: "Labs interactivos que explican cómo pienso.",
    skills_title: "Código, seguridad, sistemas y ejecución creativa.",
    contact_title: "Contratación, prácticas, freelance o colaboración?",
    footer_text: "Creado con HTML, CSS, JavaScript y GitHub Pages."
  },
  fr: {
    nav_projects: "Projets",
    nav_labs: "Labs sécurité",
    nav_skills: "Compétences",
    nav_cv: "CV",
    nav_contact: "Contact",
    hero_eyebrow: "Développeur cybersécurité / Blue Team / Technologie créative",
    hero_title_a: "Mustafa Uğur Erkan",
    hero_title_b: "crée des outils de sécurité réellement utilisables.",
    hero_lede: "Connu en ligne sous le nom MegaZegan. Je combine programmation, support IT, design et pratique cybersécurité dans des projets qui montrent ma façon de penser, construire, tester et communiquer.",
    hero_cta_projects: "Voir les projets",
    hero_cta_cv: "Ouvrir le CV",
    identity_caption: "Outils défensifs, code et systèmes créatifs.",
    cmd_cv: "Créer le CV",
    cmd_projects: "Lister projets",
    cmd_skills: "Voir compétences",
    cmd_hire: "Pourquoi recruter ?",
    availability_title: "Ouvert aux rôles cybersécurité et développeur",
    availability_text: "Basé à Istanbul. Turc natif, anglais niveau intermédiaire supérieur. Prêt à apprendre vite et contribuer dans de vraies équipes.",
    projects_title: "Projets sécurité organisés pour une lecture rapide.",
    labs_title: "Labs interactifs qui expliquent ma méthode.",
    skills_title: "Code, sécurité, systèmes et exécution créative.",
    contact_title: "Recrutement, stage, freelance ou collaboration ?",
    footer_text: "Construit avec HTML, CSS, JavaScript et GitHub Pages."
  }
};

const fallbackLang = "en";
const languageSelect = document.querySelector("#languageSelect");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const progress = document.querySelector("#progress");
const matrixCanvas = document.querySelector("#matrixCanvas");
const matrixCtx = matrixCanvas.getContext("2d");
const clockEl = document.querySelector("#istanbulClock strong");
const cvTerminalOutput = document.querySelector("#cvTerminalOutput");

function applyLanguage(lang) {
  const dict = { ...translations[fallbackLang], ...(translations[lang] || {}) };
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });
  localStorage.setItem("mz-lang", lang);
}

languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));

const savedLanguage = localStorage.getItem("mz-lang") || (navigator.language || "en").slice(0, 2);
languageSelect.value = translations[savedLanguage] ? savedLanguage : fallbackLang;
applyLanguage(languageSelect.value);

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : "0%";
});

let matrixDrops = [];
function resizeMatrix() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  matrixCanvas.width = Math.floor(window.innerWidth * ratio);
  matrixCanvas.height = Math.floor(window.innerHeight * ratio);
  matrixCanvas.style.width = `${window.innerWidth}px`;
  matrixCanvas.style.height = `${window.innerHeight}px`;
  matrixCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
  matrixDrops = Array.from({ length: Math.ceil(window.innerWidth / 18) }, () => Math.random() * window.innerHeight);
}

function drawMatrix() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(pointer: coarse)").matches) return;
  matrixCtx.fillStyle = "rgba(12, 5, 4, 0.075)";
  matrixCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  matrixCtx.font = "13px JetBrains Mono, Consolas, monospace";
  matrixCtx.fillStyle = "rgba(255, 122, 26, 0.12)";
  const chars = "01ABCDEF{}[]<>/\\#$SOCIAM";
  matrixDrops.forEach((y, index) => {
    const x = index * 18;
    const char = chars[Math.floor(Math.random() * chars.length)];
    matrixCtx.fillText(char, x, y);
    matrixDrops[index] = y > window.innerHeight + 40 && Math.random() > 0.975 ? 0 : y + 18;
  });
}

resizeMatrix();
window.addEventListener("resize", resizeMatrix);
setInterval(drawMatrix, 70);

let trailParticles = [];
document.addEventListener("mousemove", (event) => {
  if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (trailParticles.length > 18) {
    const oldDot = trailParticles.shift();
    oldDot.remove();
  }
  const dot = document.createElement("span");
  const size = Math.random() * 4 + 3;
  dot.className = "cursor-dot";
  dot.style.left = `${event.clientX}px`;
  dot.style.top = `${event.clientY}px`;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  document.body.appendChild(dot);
  trailParticles.push(dot);
  setTimeout(() => {
    dot.remove();
    trailParticles = trailParticles.filter((item) => item !== dot);
  }, 800);
});

function updateIstanbulClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(now);
  clockEl.textContent = time;
}

updateIstanbulClock();
setInterval(updateIstanbulClock, 1000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

document.querySelectorAll(".filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

const terminalCommands = {
  cv: [
    "$ build-cv --source pdf --mode recruiter",
    "name: Mustafa Uğur Erkan",
    "alias: MegaZegan",
    "location: Istanbul, Türkiye",
    "education: Computer Programming / Beykent University",
    "languages: Turkish native, English upper-intermediate",
    "output: assets/Mustafa-Ugur-Erkan-CV.pdf"
  ],
  projects: [
    "$ list-projects --security --published",
    "VaultWatch-Terminal: Fallout-inspired SOC terminal for local telemetry triage",
    "SentinelForge: SOC analytics, detections, risk scoring, HTML reports",
    "TraceLens: local log triage for suspicious auth, DNS, firewall, and outbound traffic",
    "CloudPolicyLens: IAM policy review and least-privilege guardrails",
    "SecretHawk: local secret scanning, entropy checks, SARIF output",
    "PipBoy-3000-Interface: creative GitHub Pages frontend demo",
    "AlgoKit-Lite: Python algorithms and data-structure CLI with tests",
    "PixelForge Studio: canvas pixel editor with frames and PNG export",
    "BeatGrid Lab: Web Audio drum sequencer with pattern controls",
    "Secure Portfolio Engine: multilingual GitHub Pages site with safe labs"
  ],
  skills: [
    "$ show-skills --grouped",
    "code: Python, C++, C#, Java, Flutter/Dart, SQL, JavaScript",
    "security: SOC concepts, detection logic, cloud IAM, secret scanning",
    "systems: Linux, Cisco networking, SQL Server, open-source tools",
    "creative: Adobe CC, 3ds Max, animation, UI presentation"
  ],
  hire: [
    "$ explain --why-hire-me",
    "I connect code, security, design, and documentation.",
    "I can turn messy problems into tools that teams can understand.",
    "I learn fast, ship visibly, and keep the work safe to demo."
  ]
};

function renderTerminalCommand(command) {
  const lines = terminalCommands[command] || terminalCommands.cv;
  cvTerminalOutput.innerHTML = "";
  lines.forEach((line, index) => {
    const p = document.createElement("p");
    if (line.startsWith("$")) p.className = "terminal-command";
    else if (index > 0) p.className = "terminal-value";
    p.textContent = line;
    cvTerminalOutput.appendChild(p);
  });
  const hint = document.createElement("p");
  hint.className = "terminal-muted";
  hint.textContent = "Tip: use the buttons below like terminal shortcuts.";
  cvTerminalOutput.appendChild(hint);
}

document.querySelectorAll(".terminal-action").forEach((button) => {
  button.addEventListener("click", () => renderTerminalCommand(button.dataset.command));
});

renderTerminalCommand("cv");

function scorePassword(value) {
  let score = 0;
  if (value.length >= 12) score += 25;
  if (value.length >= 16) score += 15;
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score += 15;
  if (/\d/.test(value)) score += 15;
  if (/[^A-Za-z0-9]/.test(value)) score += 15;
  if (!/(password|admin|qwerty|1234|mustafa|megazegan)/i.test(value)) score += 10;
  if (!/(.)\1{2,}/.test(value)) score += 5;
  return Math.min(score, 100);
}

function updatePassword() {
  const input = document.querySelector("#passwordInput");
  const meter = document.querySelector("#passwordMeter");
  const output = document.querySelector("#passwordOutput");
  const score = scorePassword(input.value);
  meter.style.width = `${score}%`;
  meter.style.background = score > 80 ? "var(--green)" : score > 55 ? "var(--amber)" : "var(--red)";
  const label = score > 80 ? "strong" : score > 55 ? "medium" : "weak";
  output.textContent = `Risk score: ${score}/100. Assessment: ${label}. Use long unique passphrases and a password manager.`;
}

document.querySelector("#passwordInput").addEventListener("input", updatePassword);
updatePassword();

const watchlist = {
  "203.0.113.66": "High - demo brute force source",
  "198.51.100.44": "High - demo web probing source",
  "dropbox-sync.example": "Medium - demo unusual data destination",
  "command.example": "High - demo command-and-control style domain"
};

document.querySelector("#iocButton").addEventListener("click", () => {
  const values = document.querySelector("#iocInput").value
    .split(/\s+/)
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
  const lines = values.map((item) => {
    const hit = watchlist[item];
    return hit ? `[MATCH] ${item} -> ${hit}` : `[clear] ${item} -> no local demo match`;
  });
  document.querySelector("#iocOutput").textContent = lines.join("\n");
});

const logs = [
  ["08:00", "alice", "login_failed", "203.0.113.66", "RU"],
  ["08:01", "alice", "login_failed", "203.0.113.66", "RU"],
  ["08:02", "alice", "login_failed", "203.0.113.66", "RU"],
  ["08:05", "alice", "login_success", "203.0.113.66", "RU"],
  ["09:00", "marta", "login_success", "198.51.100.23", "TR"],
  ["09:23", "marta", "login_success", "192.0.2.88", "US"],
  ["09:31", "alice", "role_assigned", "203.0.113.66", "RU"]
];

const logRows = document.querySelector("#logRows");
logs.forEach((row) => {
  const tr = document.createElement("tr");
  tr.innerHTML = row.map((cell) => `<td>${cell}</td>`).join("");
  logRows.appendChild(tr);
});

document.querySelector("#triageButton").addEventListener("click", () => {
  const output = [
    "[HIGH] Brute force followed by success",
    "Evidence: alice had repeated failed logins from 203.0.113.66, then a success.",
    "Next action: reset password, revoke sessions, review MFA, block/challenge source.",
    "",
    "[MEDIUM] Impossible travel pattern",
    "Evidence: marta logged in from TR and US within 23 minutes.",
    "Next action: validate with user and inspect device/session details.",
    "",
    "[HIGH] Administrative privilege change",
    "Evidence: alice role_assigned after suspicious authentication sequence.",
    "Next action: confirm change ticket and remove privilege if unauthorized."
  ];
  document.querySelector("#triageOutput").textContent = output.join("\n");
});

document.querySelector("#iocButton").click();
document.querySelector("#triageButton").click();

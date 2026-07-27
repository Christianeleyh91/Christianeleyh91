(() => {
  "use strict";
  if (window.__christianSiteStarted) return;
  window.__christianSiteStarted = true;

  const root = document.documentElement;
  const translations = {
    fa: {
      navAbout: "درباره من",
      navProjects: "پروژه‌ها",
      eyebrow: "پیانیست × توسعه‌دهنده خلاق",
      hello: "سلام، من",
      heroIntro:
        "بین سکوت کلیدهای پیانو و هیجان خطوط کد، دنیای خودم را می‌سازم؛ جایی که منطق با خلاقیت هم‌صدا می‌شود.",
      viewProjects: "مشاهده پروژه‌ها",
      knowMe: "بیشتر من را بشناس",
      yearsPiano: "سال همراه پیانو",
      coreSkills: "مهارت اصلی کدنویسی",
      mouseHint: "حرکت کن؛ نگاهت می‌کنم",
      scroll: "اسکرول",
      aboutEyebrow: "کمی نزدیک‌تر",
      aboutTitle: "داستان من، بین نت و کد.",
      aboutLead:
        "من کریستیان ایلیه بابرودی هستم؛ متولد ۲۳ مرداد ۱۳۹۱ در تهران و اصالتاً اهل ارومیه.",
      aboutBody:
        "هفت سال است پیانو بخشی از زندگی من شده؛ تمرینی برای شنیدن، صبر و ساختن جزئیات. در کنار موسیقی، برنامه‌نویسی با Python، C++، HTML و CSS راه دیگری است برای تبدیل ایده‌هایم به چیزی واقعی، دقیق و زنده.",
      pianoTitle: "گاهی یک نت، شروع یک ایده است.",
      pianoBody:
        "روی کلیدها بزن؛ این بخش کوچک، نقطه تلاقی موسیقی و کد من است.",
      projectsEyebrow: "در حال ساخت",
      projectsTitle: "پروژه‌ها، زنده از GitHub.",
      githubProfile: "پروفایل گیت‌هاب",
      projectsNote:
        "هر پروژه عمومی جدیدی که در GitHub منتشر کنم، خودکار اینجا ظاهر می‌شود.",
      footerMade: "ساخته‌شده با ریتم، منطق و کنجکاوی.",
      repoFallback: "پروژه‌ای از مسیر یادگیری و تجربه‌های برنامه‌نویسی من.",
      repoEmpty:
        "اولین پروژه عمومی به‌زودی اینجا ظاهر می‌شود. فعلاً می‌توانید پروفایل GitHub من را ببینید.",
      repoError:
        "اتصال زنده به GitHub موقتاً برقرار نشد؛ پروژه‌ها را مستقیماً در پروفایل من ببینید.",
    },
    en: {
      navAbout: "About",
      navProjects: "Projects",
      eyebrow: "PIANIST × CREATIVE DEVELOPER",
      hello: "Hi, I’m",
      heroIntro:
        "Between the quiet of piano keys and the spark of code, I build my own world — where logic and creativity move in rhythm.",
      viewProjects: "View projects",
      knowMe: "Get to know me",
      yearsPiano: "years with the piano",
      coreSkills: "core coding skills",
      mouseHint: "Move around — I’m watching",
      scroll: "SCROLL",
      aboutEyebrow: "A LITTLE CLOSER",
      aboutTitle: "My story, between notes and code.",
      aboutLead:
        "I’m Christian Eleyh Babrudy, born in Tehran on August 13, 2012, with roots in Urmia.",
      aboutBody:
        "For seven years, the piano has taught me how to listen, stay patient, and shape the smallest details. Alongside music, Python, C++, HTML, and CSS give me another way to turn ideas into something real, precise, and alive.",
      pianoTitle: "Sometimes one note starts an idea.",
      pianoBody:
        "Tap the keys — this little space is where music and code meet.",
      projectsEyebrow: "CURRENTLY BUILDING",
      projectsTitle: "Projects, live from GitHub.",
      githubProfile: "GitHub profile",
      projectsNote:
        "Every new public project I publish on GitHub automatically appears here.",
      footerMade: "Made with rhythm, logic, and curiosity.",
      repoFallback: "A project from my ongoing journey through code and creative experiments.",
      repoEmpty:
        "My first public project will appear here soon. Until then, you can explore my GitHub profile.",
      repoError:
        "The live GitHub connection is temporarily unavailable. You can view my projects directly on my profile.",
    },
  };

  let currentLanguage = localStorage.getItem("christian-language") || "fa";
  let cachedRepos = null;
  let repoLoadFailed = false;
  let audioContext = null;

  const query = (selector, context = document) => context.querySelector(selector);
  const queryAll = (selector, context = document) => [
    ...context.querySelectorAll(selector),
  ];

  function applyLanguage(language) {
    currentLanguage = language;
    const copy = translations[language];
    root.lang = language;
    root.dir = language === "fa" ? "rtl" : "ltr";

    queryAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (copy[key]) element.textContent = copy[key];
    });

    const toggle = query("#langToggle");
    if (toggle) toggle.textContent = language === "fa" ? "EN" : "فا";
    localStorage.setItem("christian-language", language);
    if (cachedRepos) renderRepositories(cachedRepos);
    else if (repoLoadFailed) renderRepositoryError();
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("christian-theme", theme);
    const button = query("#themeToggle");
    if (button) {
      button.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
      );
    }
  }

  function setupTheme() {
    const saved = localStorage.getItem("christian-theme");
    const preferred = matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    applyTheme(saved || preferred);
    query("#themeToggle")?.addEventListener("click", () => {
      applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }

  function setupLanguage() {
    applyLanguage(currentLanguage);
    query("#langToggle")?.addEventListener("click", () => {
      applyLanguage(currentLanguage === "fa" ? "en" : "fa");
    });
  }

  function setupBootAndReveal() {
    const boot = query("#bootScreen");
    const finishBoot = () => {
      window.setTimeout(() => boot?.classList.add("is-hidden"), 450);
    };
    if (document.readyState === "complete") finishBoot();
    else window.addEventListener("load", finishBoot, { once: true });

    const reveals = queryAll(".reveal");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveals.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.13, rootMargin: "0px 0px -40px" },
    );
    reveals.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
      observer.observe(item);
    });
  }

  function setupHeader() {
    const header = query(".site-header");
    const update = () => header?.classList.toggle("is-scrolled", scrollY > 24);
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  function setupCursor() {
    if (!matchMedia("(pointer: fine)").matches) return;
    const dot = query("#cursorDot");
    const ring = query("#cursorRing");
    if (!dot || !ring) return;

    let mouseX = innerWidth / 2;
    let mouseY = innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener(
      "pointermove",
      (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      },
      { passive: true },
    );

    const loop = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();

    queryAll("a, button").forEach((element) => {
      element.addEventListener("mouseenter", () =>
        ring.classList.add("is-hovering"),
      );
      element.addEventListener("mouseleave", () =>
        ring.classList.remove("is-hovering"),
      );
    });
  }

  function setupMagneticElements() {
    if (!matchMedia("(pointer: fine)").matches) return;
    queryAll(".magnetic").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const bounds = element.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.16;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.16;
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
      element.addEventListener("pointerleave", () => {
        element.style.transform = "";
      });
    });
  }

  function setupPortrait() {
    const stage = query("#portraitStage");
    const card = query("#portraitCard");
    const image = query("#portraitImage");
    if (!stage || !card || !image) return;

    const reset = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
      image.style.transform = "scale(1.015) translate(0, 0)";
    };

    stage.addEventListener("pointermove", (event) => {
      if (!matchMedia("(pointer: fine)").matches) return;
      const bounds = stage.getBoundingClientRect();
      const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;
      const rotateY = normalizedX * 10;
      const rotateX = normalizedY * -8;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      image.style.transform = `scale(1.035) translate(${normalizedX * -7}px, ${normalizedY * -5}px)`;
    });
    stage.addEventListener("pointerleave", reset);
  }

  function setupPiano() {
    const keys = queryAll(".piano-key");

    const playNote = (frequency, key) => {
      audioContext ||= new (
        window.AudioContext || window.webkitAudioContext
      )();
      if (audioContext.state === "suspended") audioContext.resume();

      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const now = audioContext.currentTime;
      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(Number(frequency), now);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.19, now + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.1);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(now);
      oscillator.stop(now + 1.15);
      key.classList.add("is-playing");
      window.setTimeout(() => key.classList.remove("is-playing"), 160);
    };

    keys.forEach((key) => {
      key.addEventListener("pointerdown", () => {
        playNote(key.dataset.frequency, key);
      });
    });
  }

  function escapeHtml(value = "") {
    return String(value).replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[character],
    );
  }

  function languageColor(language) {
    const colors = {
      Python: "#7fb2ff",
      "C++": "#d9e7ff",
      HTML: "#ff9d7f",
      CSS: "#b7a5ff",
      JavaScript: "#f2d66b",
      TypeScript: "#68a9ee",
    };
    return colors[language] || "#80adff";
  }

  function renderRepositories(repositories) {
    const grid = query("#repoGrid");
    if (!grid) return;
    const copy = translations[currentLanguage];

    if (!repositories.length) {
      grid.innerHTML = `<div class="repo-empty">${escapeHtml(copy.repoEmpty)}</div>`;
      return;
    }

    grid.innerHTML = repositories
      .slice(0, 6)
      .map((repo, index) => {
        const description = repo.description || copy.repoFallback;
        const language = repo.language || "Code";
        return `
          <a class="repo-card" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(repo.name)} on GitHub">
            <div class="repo-card-top">
              <span class="repo-index">PROJECT / ${String(index + 1).padStart(2, "0")}</span>
              <span class="repo-arrow" aria-hidden="true">↗</span>
            </div>
            <h3>${escapeHtml(repo.name.replaceAll("-", " "))}</h3>
            <p>${escapeHtml(description)}</p>
            <div class="repo-meta">
              <span><i style="background:${languageColor(repo.language)}"></i>${escapeHtml(language)}</span>
              <span>★ ${Number(repo.stargazers_count || 0)}</span>
              <span>⑂ ${Number(repo.forks_count || 0)}</span>
            </div>
          </a>
        `;
      })
      .join("");
  }

  function renderRepositoryError() {
    const grid = query("#repoGrid");
    if (!grid) return;
    grid.innerHTML = `<div class="repo-empty">${escapeHtml(
      translations[currentLanguage].repoError,
    )}</div>`;
  }

  async function loadRepositories() {
    const grid = query("#repoGrid");
    if (!grid) return;
    try {
      const response = await fetch(
        "https://api.github.com/users/Christianeleyh91/repos?sort=updated&per_page=6",
        { headers: { Accept: "application/vnd.github+json" } },
      );
      if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
      const repositories = await response.json();
      cachedRepos = repositories.filter((repo) => !repo.fork);
      repoLoadFailed = false;
      renderRepositories(cachedRepos);
    } catch {
      cachedRepos = null;
      repoLoadFailed = true;
      renderRepositoryError();
    }
  }

  function setupCanvas() {
    const canvas = query("#ambientCanvas");
    if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let particles = [];
    const pointer = { x: -9999, y: -9999 };

    const resize = () => {
      const ratio = Math.min(devicePixelRatio || 1, 2);
      width = innerWidth;
      height = innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particles = Array.from(
        { length: Math.min(52, Math.max(24, Math.floor(width / 26))) },
        () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          radius: Math.random() * 1.1 + 0.35,
          alpha: Math.random() * 0.32 + 0.08,
        }),
      );
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener(
      "pointermove",
      (event) => {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
      },
      { passive: true },
    );
    resize();

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const isLight = root.dataset.theme === "light";
      particles.forEach((particle) => {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 120 && distance > 0) {
          particle.x += (dx / distance) * 0.28;
          particle.y += (dy / distance) * 0.28;
        }
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;

        context.beginPath();
        context.fillStyle = isLight
          ? `rgba(24,58,110,${particle.alpha})`
          : `rgba(190,216,255,${particle.alpha})`;
        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2,
        );
        context.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();
  }

  setupTheme();
  setupLanguage();
  setupBootAndReveal();
  setupHeader();
  setupCursor();
  setupMagneticElements();
  setupPortrait();
  setupPiano();
  setupCanvas();
  loadRepositories();
})();

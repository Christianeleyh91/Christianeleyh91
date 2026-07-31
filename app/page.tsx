import { ClientBoot } from "./ClientBoot";

const socials = [
  {
    label: "Instagram",
    icon: "/icons/instagram.svg",
    href: "https://www.instagram.com/christianeleyh91",
  },
  {
    label: "Telegram",
    icon: "/icons/telegram.svg",
    href: "https://t.me/Christianeleyh",
  },
  {
    label: "YouTube",
    icon: "/icons/youtube.svg",
    href: "https://youtube.com/@christianeleyh",
  },
  {
    label: "X",
    icon: "/icons/x.svg",
    href: "https://x.com/Christianeleyh",
  },
  {
    label: "GitHub",
    icon: "/icons/github.svg",
    href: "https://github.com/Christianeleyh91",
  },
  {
    label: "Quera",
    icon: "https://www.google.com/s2/favicons?domain=quera.org&sz=64",
    href: "https://quera.org/profile/tvctpp",
    brandIcon: true,
  },
  {
    label: "Codeforces",
    icon: "https://codeforces.com/favicon.ico",
    href: "https://codeforces.com/profile/Christianeleyh91",
    brandIcon: true,
  },
  {
    label: "Gmail",
    icon: "https://ssl.gstatic.com/ui/v1/icons/mail/logo_loading_2x.png",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=christian.eleyh1391%40gmail.com",
    brandIcon: true,
  },
];

export default function Home() {
  return (
    <>
      <div className="boot-screen" id="bootScreen" aria-hidden="true">
        <div className="boot-mark">CE</div>
        <div className="boot-line">
          <span />
        </div>
        <p>CODE / KEYS / CURIOSITY</p>
      </div>

      <div className="cursor-dot" id="cursorDot" aria-hidden="true" />
      <div className="cursor-ring" id="cursorRing" aria-hidden="true" />
      <canvas id="ambientCanvas" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <a className="brand magnetic" href="#home" aria-label="Christian Eleyh">
          <span className="brand-mark">CE</span>
          <span className="brand-name">
            CHRISTIAN <i>ELEYH</i>
          </span>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#about" data-i18n="navAbout">
            درباره من
          </a>
          <a href="#projects" data-i18n="navProjects">
            پروژه‌ها
          </a>
        </nav>

        <div className="header-actions">
          <a
            className="icon-button magnetic"
            id="spotifyLink"
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Spotify"
            title="Spotify"
          >
            <span aria-hidden="true">♫</span>
          </a>
          <button
            className="text-button magnetic"
            id="langToggle"
            type="button"
            aria-label="Switch language"
          >
            EN
          </button>
          <button
            className="icon-button theme-toggle magnetic"
            id="themeToggle"
            type="button"
            aria-label="Switch color theme"
          >
            <span className="theme-sun" aria-hidden="true">☀</span>
            <span className="theme-moon" aria-hidden="true">☾</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow reveal">
              <span className="eyebrow-line" />
              <span data-i18n="eyebrow">پیانیست × توسعه‌دهنده خلاق</span>
            </p>

            <h1 className="hero-title reveal">
              <span className="title-kicker" data-i18n="hello">
                سلام، من
              </span>
              <span className="title-main">Christian</span>
              <span className="title-outline">Eleyh</span>
            </h1>

            <p className="hero-intro reveal" data-i18n="heroIntro">
              بین سکوت کلیدهای پیانو و هیجان خطوط کد، دنیای خودم را می‌سازم؛
              جایی که منطق با خلاقیت هم‌صدا می‌شود.
            </p>

            <div className="hero-actions reveal">
              <a className="primary-button magnetic" href="#projects">
                <span data-i18n="viewProjects">مشاهده پروژه‌ها</span>
                <b aria-hidden="true">↙</b>
              </a>
              <a className="ghost-button magnetic" href="#about">
                <span data-i18n="knowMe">بیشتر من را بشناس</span>
              </a>
            </div>

            <div className="quick-facts reveal" aria-label="Quick facts">
              <div>
                <strong>07</strong>
                <span data-i18n="yearsPiano">سال همراه پیانو</span>
              </div>
              <div>
                <strong>04</strong>
                <span data-i18n="coreSkills">مهارت اصلی کدنویسی</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal" id="portraitStage">
            <div className="portrait-orbit orbit-one" aria-hidden="true">
              <i className="orbit-dot" />
              <i className="orbit-dot" />
              <i className="orbit-dot" />
              <i className="orbit-dot" />
            </div>
            <div className="portrait-orbit orbit-two" aria-hidden="true" />
            <div className="portrait-glow" aria-hidden="true" />
            <div className="portrait-card" id="portraitCard">
              <div className="portrait-frame">
                <img
                  src="/assets/christian-avatar.png"
                  alt="کاراکتر سه‌بعدی کریستیان ایلیه"
                  id="portraitImage"
                />
              </div>
              <div className="portrait-label label-code" aria-hidden="true">
                <span>&lt;/&gt;</span>
                <small>CREATIVE DEV</small>
              </div>
              <div className="portrait-label label-piano" aria-hidden="true">
                <span>♬</span>
                <small>PIANIST</small>
              </div>
            </div>
            <p className="mouse-note" data-i18n="mouseHint">
              حرکت کن؛ نگاهت می‌کنم
            </p>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <span data-i18n="scroll">اسکرول</span>
            <i />
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-number" aria-hidden="true">01</div>
          <div className="section-heading reveal">
            <p data-i18n="aboutEyebrow">کمی نزدیک‌تر</p>
            <h2 data-i18n="aboutTitle">داستان من، بین نت و کد.</h2>
          </div>

          <div className="about-grid">
            <article className="about-story glass-card reveal">
              <p className="lead" data-i18n="aboutLead">
                من کریستیان ایلیه بابرودی هستم؛ متولد ۲۳ مرداد ۱۳۹۱ در تهران
                و اصالتاً اهل ارومیه.
              </p>
              <p data-i18n="aboutBody">
                هفت سال است پیانو بخشی از زندگی من شده؛ تمرینی برای شنیدن،
                صبر و ساختن جزئیات. در کنار موسیقی، برنامه‌نویسی با Python،
                {"\u2066C++\u2069"}، HTML و CSS راه دیگری است برای تبدیل ایده‌هایم به چیزی
                واقعی، دقیق و زنده.
              </p>
              <div className="skill-list">
                {["Python", "C++", "HTML", "CSS"].map((skill, index) => (
                  <span key={skill}>
                    <i>0{index + 1}</i>
                    <bdi className="skill-name" dir="ltr">{skill}</bdi>
                  </span>
                ))}
              </div>
            </article>

            <div className="piano-lab glass-card reveal">
              <div className="piano-copy">
                <p className="mini-label">PLAY A NOTE</p>
                <h3 data-i18n="pianoTitle">گاهی یک نت، شروع یک ایده است.</h3>
                <p data-i18n="pianoBody">
                  روی کلیدها بزن؛ این بخش کوچک، نقطه تلاقی موسیقی و کد من است.
                </p>
              </div>
              <div className="piano" role="group" aria-label="Interactive piano">
                {[261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88].map(
                  (frequency, index) => (
                    <button
                      className="piano-key"
                      type="button"
                      data-frequency={frequency}
                      aria-label={`Piano note ${index + 1}`}
                      key={frequency}
                    >
                      <span>{["C", "D", "E", "F", "G", "A", "B"][index]}</span>
                    </button>
                  ),
                )}
                <button
                  className="piano-key black key-cs"
                  type="button"
                  data-frequency="277.18"
                  aria-label="Piano note C sharp"
                />
                <button
                  className="piano-key black key-ds"
                  type="button"
                  data-frequency="311.13"
                  aria-label="Piano note D sharp"
                />
                <button
                  className="piano-key black key-fs"
                  type="button"
                  data-frequency="369.99"
                  aria-label="Piano note F sharp"
                />
                <button
                  className="piano-key black key-gs"
                  type="button"
                  data-frequency="415.3"
                  aria-label="Piano note G sharp"
                />
                <button
                  className="piano-key black key-as"
                  type="button"
                  data-frequency="466.16"
                  aria-label="Piano note A sharp"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="projects section-shell" id="projects">
          <div className="section-number" aria-hidden="true">02</div>
          <div className="projects-top">
            <div className="section-heading reveal">
              <p data-i18n="projectsEyebrow">در حال ساخت</p>
              <h2 data-i18n="projectsTitle">پروژه‌ها، زنده از GitHub.</h2>
            </div>
            <a
              className="github-profile magnetic reveal"
              href="https://github.com/Christianeleyh91"
              target="_blank"
              rel="noreferrer"
            >
              <span className="github-profile-icon" aria-hidden="true">
                <img src="/icons/github.svg" alt="" />
              </span>
              <b data-i18n="githubProfile">پروفایل گیت‌هاب</b>
              <i aria-hidden="true">↗</i>
            </a>
          </div>

          <div className="repo-grid" id="repoGrid" aria-live="polite">
            {[1, 2, 3].map((item) => (
              <article className="repo-card repo-skeleton" key={item}>
                <div className="skeleton-line wide" />
                <div className="skeleton-line" />
                <div className="skeleton-line short" />
              </article>
            ))}
          </div>

          <p className="projects-note reveal" data-i18n="projectsNote">
            هر پروژه عمومی جدیدی که در GitHub منتشر کنم، خودکار اینجا ظاهر
            می‌شود.
          </p>
        </section>
      </main>

      <aside className="social-rail" aria-label="Social links">
        {socials.map((social) => (
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
            className="magnetic"
            key={social.label}
          >
            <img
              src={social.icon}
              alt=""
              aria-hidden="true"
              className={social.brandIcon ? "social-brand-icon" : undefined}
            />
            <span>{social.label}</span>
          </a>
        ))}
      </aside>

      <footer>
        <p>
          <span>© 2026 Christian Eleyh</span>
          <i>—</i>
          <span data-i18n="footerMade">ساخته‌شده با ریتم، منطق و کنجکاوی.</span>
        </p>
        <a href="#home" aria-label="Back to top">↑</a>
      </footer>

      <ClientBoot />
    </>
  );
}
import { ClientBoot } from "./ClientBoot";

const socials = [
  {
    label: "Instagram",
    icon: "/icons/instagram.svg",
    href: "https://www.instagram.com/christianeleyh91",
  },
  {
    label: "Telegram",
    icon: "/icons/telegram.svg",
    href: "https://t.me/Christianeleyh",
  },
  {
    label: "YouTube",
    icon: "/icons/youtube.svg",
    href: "https://youtube.com/@christianeleyh",
  },
  {
    label: "X",
    icon: "/icons/x.svg",
    href: "https://x.com/Christianeleyh",
  },
  {
    label: "GitHub",
    icon: "/icons/github.svg",
    href: "https://github.com/Christianeleyh91",
  },
  {
    label: "Quera",
    icon: "https://quera.org/favicon.ico",
    href: "https://quera.org/profile/tvctpp",
    brandIcon: true,
  },
  {
    label: "Codeforces",
    icon: "https://codeforces.com/favicon.ico",
    href: "https://codeforces.com/profile/Christianeleyh91",
    brandIcon: true,
  },
  {
    label: "Gmail",
    icon: "https://ssl.gstatic.com/ui/v1/icons/mail/logo_loading_2x.png",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=christian.eleyh1391%40gmail.com",
    brandIcon: true,
  },
];

export default function Home() {
  return (
    <>
      <div className="boot-screen" id="bootScreen" aria-hidden="true">
        <div className="boot-mark">CE</div>
        <div className="boot-line">
          <span />
        </div>
        <p>CODE / KEYS / CURIOSITY</p>
      </div>

      <div className="cursor-dot" id="cursorDot" aria-hidden="true" />
      <div className="cursor-ring" id="cursorRing" aria-hidden="true" />
      <canvas id="ambientCanvas" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <header className="site-header">
        <a className="brand magnetic" href="#home" aria-label="Christian Eleyh">
          <span className="brand-mark">CE</span>
          <span className="brand-name">
            CHRISTIAN <i>ELEYH</i>
          </span>
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#about" data-i18n="navAbout">
            درباره من
          </a>
          <a href="#projects" data-i18n="navProjects">
            پروژه‌ها
          </a>
        </nav>

        <div className="header-actions">
          <a
            className="icon-button magnetic"
            id="spotifyLink"
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Spotify"
            title="Spotify"
          >
            <span aria-hidden="true">♫</span>
          </a>
          <button
            className="text-button magnetic"
            id="langToggle"
            type="button"
            aria-label="Switch language"
          >
            EN
          </button>
          <button
            className="icon-button theme-toggle magnetic"
            id="themeToggle"
            type="button"
            aria-label="Switch color theme"
          >
            <span className="theme-sun" aria-hidden="true">☀</span>
            <span className="theme-moon" aria-hidden="true">☾</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow reveal">
              <span className="eyebrow-line" />
              <span data-i18n="eyebrow">پیانیست × توسعه‌دهنده خلاق</span>
            </p>

            <h1 className="hero-title reveal">
              <span className="title-kicker" data-i18n="hello">
                سلام، من
              </span>
              <span className="title-main">Christian</span>
              <span className="title-outline">Eleyh</span>
            </h1>

            <p className="hero-intro reveal" data-i18n="heroIntro">
              بین سکوت کلیدهای پیانو و هیجان خطوط کد، دنیای خودم را می‌سازم؛
              جایی که منطق با خلاقیت هم‌صدا می‌شود.
            </p>

            <div className="hero-actions reveal">
              <a className="primary-button magnetic" href="#projects">
                <span data-i18n="viewProjects">مشاهده پروژه‌ها</span>
                <b aria-hidden="true">↙</b>
              </a>
              <a className="ghost-button magnetic" href="#about">
                <span data-i18n="knowMe">بیشتر من را بشناس</span>
              </a>
            </div>

            <div className="quick-facts reveal" aria-label="Quick facts">
              <div>
                <strong>07</strong>
                <span data-i18n="yearsPiano">سال همراه پیانو</span>
              </div>
              <div>
                <strong>04</strong>
                <span data-i18n="coreSkills">مهارت اصلی کدنویسی</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal" id="portraitStage">
            <div className="portrait-orbit orbit-one" aria-hidden="true">
              <i className="orbit-dot" />
              <i className="orbit-dot" />
              <i className="orbit-dot" />
              <i className="orbit-dot" />
            </div>
            <div className="portrait-orbit orbit-two" aria-hidden="true" />
            <div className="portrait-glow" aria-hidden="true" />
            <div className="portrait-card" id="portraitCard">
              <div className="portrait-frame">
                <img
                  src="/assets/christian-avatar.png"
                  alt="کاراکتر سه‌بعدی کریستیان ایلیه"
                  id="portraitImage"
                />
              </div>
              <div className="portrait-label label-code" aria-hidden="true">
                <span>&lt;/&gt;</span>
                <small>CREATIVE DEV</small>
              </div>
              <div className="portrait-label label-piano" aria-hidden="true">
                <span>♬</span>
                <small>PIANIST</small>
              </div>
            </div>
            <p className="mouse-note" data-i18n="mouseHint">
              حرکت کن؛ نگاهت می‌کنم
            </p>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <span data-i18n="scroll">اسکرول</span>
            <i />
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-number" aria-hidden="true">01</div>
          <div className="section-heading reveal">
            <p data-i18n="aboutEyebrow">کمی نزدیک‌تر</p>
            <h2 data-i18n="aboutTitle">داستان من، بین نت و کد.</h2>
          </div>

          <div className="about-grid">
            <article className="about-story glass-card reveal">
              <p className="lead" data-i18n="aboutLead">
                من کریستیان ایلیه بابرودی هستم؛ متولد ۲۳ مرداد ۱۳۹۱ در تهران
                و اصالتاً اهل ارومیه.
              </p>
              <p data-i18n="aboutBody">
                هفت سال است پیانو بخشی از زندگی من شده؛ تمرینی برای شنیدن،
                صبر و ساختن جزئیات. در کنار موسیقی، برنامه‌نویسی با Python،
                {"\u2066C++\u2069"}، HTML و CSS راه دیگری است برای تبدیل ایده‌هایم به چیزی
                واقعی، دقیق و زنده.
              </p>
              <div className="skill-list">
                {["Python", "C++", "HTML", "CSS"].map((skill, index) => (
                  <span key={skill}>
                    <i>0{index + 1}</i>
                    <bdi className="skill-name" dir="ltr">{skill}</bdi>
                  </span>
                ))}
              </div>
            </article>

            <div className="piano-lab glass-card reveal">
              <div className="piano-copy">
                <p className="mini-label">PLAY A NOTE</p>
                <h3 data-i18n="pianoTitle">گاهی یک نت، شروع یک ایده است.</h3>
                <p data-i18n="pianoBody">
                  روی کلیدها بزن؛ این بخش کوچک، نقطه تلاقی موسیقی و کد من است.
                </p>
              </div>
              <div className="piano" role="group" aria-label="Interactive piano">
                {[261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88].map(
                  (frequency, index) => (
                    <button
                      className="piano-key"
                      type="button"
                      data-frequency={frequency}
                      aria-label={`Piano note ${index + 1}`}
                      key={frequency}
                    >
                      <span>{["C", "D", "E", "F", "G", "A", "B"][index]}</span>
                    </button>
                  ),
                )}
                <button
                  className="piano-key black key-cs"
                  type="button"
                  data-frequency="277.18"
                  aria-label="Piano note C sharp"
                />
                <button
                  className="piano-key black key-ds"
                  type="button"
                  data-frequency="311.13"
                  aria-label="Piano note D sharp"
                />
                <button
                  className="piano-key black key-fs"
                  type="button"
                  data-frequency="369.99"
                  aria-label="Piano note F sharp"
                />
                <button
                  className="piano-key black key-gs"
                  type="button"
                  data-frequency="415.3"
                  aria-label="Piano note G sharp"
                />
                <button
                  className="piano-key black key-as"
                  type="button"
                  data-frequency="466.16"
                  aria-label="Piano note A sharp"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="projects section-shell" id="projects">
          <div className="section-number" aria-hidden="true">02</div>
          <div className="projects-top">
            <div className="section-heading reveal">
              <p data-i18n="projectsEyebrow">در حال ساخت</p>
              <h2 data-i18n="projectsTitle">پروژه‌ها، زنده از GitHub.</h2>
            </div>
            <a
              className="github-profile magnetic reveal"
              href="https://github.com/Christianeleyh91"
              target="_blank"
              rel="noreferrer"
            >
              <span className="github-profile-icon" aria-hidden="true">
                <img src="/icons/github.svg" alt="" />
              </span>
              <b data-i18n="githubProfile">پروفایل گیت‌هاب</b>
              <i aria-hidden="true">↗</i>
            </a>
          </div>

          <div className="repo-grid" id="repoGrid" aria-live="polite">
            {[1, 2, 3].map((item) => (
              <article className="repo-card repo-skeleton" key={item}>
                <div className="skeleton-line wide" />
                <div className="skeleton-line" />
                <div className="skeleton-line short" />
              </article>
            ))}
          </div>

          <p className="projects-note reveal" data-i18n="projectsNote">
            هر پروژه عمومی جدیدی که در GitHub منتشر کنم، خودکار اینجا ظاهر
            می‌شود.
          </p>
        </section>
      </main>

      <aside className="social-rail" aria-label="Social links">
        {socials.map((social) => (
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
            className="magnetic"
            key={social.label}
          >
            <img
              src={social.icon}
              alt=""
              aria-hidden="true"
              className={social.brandIcon ? "social-brand-icon" : undefined}
            />
            <span>{social.label}</span>
          </a>
        ))}
      </aside>

      <footer>
        <p>
          <span>© 2026 Christian Eleyh</span>
          <i>—</i>
          <span data-i18n="footerMade">ساخته‌شده با ریتم، منطق و کنجکاوی.</span>
        </p>
        <a href="#home" aria-label="Back to top">↑</a>
      </footer>

      <ClientBoot />
    </>
  );
}

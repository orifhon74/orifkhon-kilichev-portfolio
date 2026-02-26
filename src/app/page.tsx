// app/page.tsx

const projects = [
  {
    title: "FormForge",
    tagline: "Full-stack form builder with templates, submissions, analytics, ranking, and RBAC.",
    highlights: [
      "Normalized MySQL schema + Sequelize ORM",
      "Aggregation + ranking logic (top/latest) without JOIN+LIMIT pitfalls",
      "JWT auth + role-based access (user/owner/admin)",
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "Sequelize", "JWT", "Vercel", "Railway"],
    links: {
      live: "https://customizable-forms-xi.vercel.app",
      github: "https://github.com/orifhon74/formforge",
    },
    badge: "Live",
  },
  {
    title: "Transcripto",
    tagline: "Media transcription pipeline with async jobs, diarization (beta), translation, and PDF reports.",
    highlights: [
      "faster-whisper local inference + YouTube ingestion (yt-dlp)",
      "Async job system for long tasks + downloadable outputs (.txt, .srt, PDF)",
      "Optional diarization pipeline (PyAnnote) + segment translation",
    ],
    stack: ["Python", "Flask", "faster-whisper", "PyAnnote", "ReportLab", "Bootstrap", "Railway"],
    links: {
      live: "https://transcripto.up.railway.app",
      github: "https://github.com/orifhon74/transcripto",
    },
    badge: "Live",
  },
  {
    title: "Prayer Time Telegram Bot",
    tagline: "Timezone-aware prayer notifications with per-user scheduling and crash-safe deployment.",
    highlights: [
      "Timezone-aware APScheduler jobs (per-user next-prayer scheduling)",
      "Async SQLAlchemy persistence + daily refresh at local midnight",
      "systemd-managed 24/7 service on Hetzner with auto-restart",
    ],
    stack: ["Python", "aiogram", "APScheduler", "SQLAlchemy (async)", "SQLite", "systemd", "Hetzner"],
    links: {
      bot: "https://t.me/prayer_time74_bot",
      github: "https://github.com/orifhon74/prayer-time-bot",
    },
    badge: "Public Bot",
  },
  {
    title: "USPS Live Bid Route Alert Bot",
    tagline: "Instant Telegram route alerts using user-defined origin/destination filters (invite-only).",
    highlights: [
      "Listens to Telegram channel posts and parses route data",
      "Matches routes against per-user filter rules, sends immediate alerts",
      "Dockerized VPS deployment + persistent SQLite storage + private access control",
    ],
    stack: ["Python", "Telethon / python-telegram-bot", "SQLite", "Docker", "VPS"],
    links: {
      github: "https://github.com/orifhon74/usps-load-alert-bot",
    },
    badge: "Running 24/7",
  },
];

const socials = {
  github: "https://github.com/orifhon74",
  linkedin: "https://www.linkedin.com/in/orifkhon-kilichev-0b118b26a",
  email: "mailto:orifhon717@gmail.com",
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function Card({
                title,
                badge,
                tagline,
                highlights,
                stack,
                links,
              }: {
  title: string;
  badge?: string;
  tagline: string;
  highlights: string[];
  stack: string[];
  links: Record<string, string>;
}) {
  const linkEntries = Object.entries(links);
  return (
      <div className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:-translate-y-1 hover:bg-white/[0.06]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/75">{tagline}</p>
          </div>
          {badge ? <Pill>{badge}</Pill> : null}
        </div>

        <ul className="mt-4 space-y-2 text-sm text-white/80">
          {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/50" />
                <span>{h}</span>
              </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((s) => (
              <span key={s} className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-white/70">
            {s}
          </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {linkEntries.map(([key, url]) => (
              <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
              >
                {key === "github" ? "GitHub" : key === "live" ? "Live Demo" : key === "bot" ? "Open Bot" : key}
              </a>
          ))}
        </div>
      </div>
  );
}

export default function Page() {
  return (
      <main className="min-h-screen bg-[#070A12] text-white">
        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-[-120px] h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-[-160px] right-[-120px] h-[380px] w-[520px] rounded-full bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-14">
          {/* Header */}
          <header className="flex items-center justify-between gap-4">
            <div className="text-sm text-white/70">
              <span className="text-white/80">Orifkhon Kilichev</span>
              <span className="mx-2 text-white/30">•</span>
              <span>Tashkent, Uzbekistan</span>
            </div>
            <nav className="flex items-center gap-3 text-sm">
              <a className="text-white/75 hover:text-white" href={socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="text-white/75 hover:text-white" href={socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="text-white/75 hover:text-white" href={socials.email}>
                Email
              </a>
            </nav>
          </header>

          {/* Hero */}
          <section className="mt-14">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400/80" />
                Live production systems
              </p>

              <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">
                Orifkhon Kilichev
              </h1>

              <p className="mt-3 text-xl text-white/80 sm:text-2xl">
                Backend-Focused Full-Stack Engineer building production automation & AI systems.
              </p>

              <p className="mt-5 text-base text-white/75">
                I build backend services, Telegram automation systems, and AI-powered media pipelines,
                with a strong focus on reliability and production-ready architecture.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                    href="#projects"
                    className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  View Projects
                </a>
                <a
                    href="#contact"
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Contact
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                <Pill>Python</Pill>
                <Pill>Node/Express</Pill>
                <Pill>SQL</Pill>
                <Pill>Async + Scheduling</Pill>
                <Pill>Docker + VPS</Pill>
                <Pill>AI Pipelines</Pill>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="mt-16">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-semibold">Featured Projects</h2>
              <p className="text-sm text-white/60">4 projects • all live or running on server</p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {projects.map((p) => (
                  <Card key={p.title} {...p} />
              ))}
            </div>
          </section>

          {/* About */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-4 max-w-3xl text-white/75">
              I’m a backend-focused full-stack engineer (B.S. Computer Science - Pennsylvania State University) who likes building systems that
              keep working after the laptop closes. Recently I’ve been shipping production bots and media-processing
              pipelines with strong attention to reliability, data modeling, and maintainability. I’m currently open to
              backend or full-stack roles.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="mt-16">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="mt-2 text-white/75">Want to talk about backend systems, automation, or AI pipelines? Let’s
                connect.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                    href={socials.email}
                    className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  Email Me
                </a>
                <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
              <p className="mt-3 text-sm text-white/60">
                orifhon717@gmail.com
              </p>
            </div>
          </section>

          <footer className="mt-14 text-sm text-white/45">
            © {new Date().getFullYear()} Orifkhon Kilichev • Built with Next.js + Tailwind
          </footer>
        </div>
      </main>
  );
}
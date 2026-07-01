const contactLinks = [
  {
    label: "lilainiea@gmail.com",
    href: "mailto:lilainiea@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lilainie",
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Social Media Stats",
    href: "https://app.trainingground.ai/mk/Lilainie",
    external: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const availability = [
  { label: "Program Coordination", bg: "bg-lavender-tint", fg: "text-lavender-deep" },
  { label: "Partnerships", bg: "bg-terracotta-tint", fg: "text-terracotta" },
  { label: "Data & Evaluation", bg: "bg-teal-tint", fg: "text-teal" },
  { label: "AI & Digital Tools", bg: "bg-ink/5", fg: "text-ink/60" },
  { label: "Creative Strategy and Production", bg: "bg-lavender-tint", fg: "text-lavender-deep" },
];

export default function Contact() {
  return (
    <>
      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
          <p className="font-script text-2xl text-ink mb-4">Let&apos;s talk</p>
          <h1
            className="font-display uppercase text-terracotta leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
          >
            CONTACT
          </h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-lg md:text-xl leading-relaxed mb-10 text-ink/80 max-w-md">
              Interested in partnerships, programming, or just want to
              connect? Reach out below.
            </p>

            <div className="flex flex-col gap-2.5">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  download={link.download}
                  className="flex items-center gap-3 px-4 py-3.5 bg-white/70 border border-border rounded-md text-sm font-body font-medium hover:border-border-strong transition-colors text-ink/50 [&>svg]:shrink-0"
                >
                  {link.icon}
                  <span className="text-ink">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/70 border border-border rounded-md p-7">
            <p className="font-body text-xs uppercase tracking-[0.15em] text-ink-hint mb-4">
              Currently open to
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {availability.map((chip) => (
                <span
                  key={chip.label}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full ${chip.bg} ${chip.fg}`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
            <p className="text-sm text-ink-muted">
              <span className="font-bold text-ink">Toronto-based</span>{" "}
              &middot; open to hybrid &amp; remote
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

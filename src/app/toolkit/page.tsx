import Image from "next/image";
import { software, certifications } from "@/data/toolkit";

const tileAccents = [
  { bg: "bg-terracotta-tint", fg: "text-terracotta" },
  { bg: "bg-lavender-tint", fg: "text-lavender-deep" },
  { bg: "bg-teal-tint", fg: "text-teal" },
];

export default function Toolkit() {
  return (
    <>
      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
          <p className="font-script text-2xl text-ink mb-4">What I work with</p>
          <h1
            className="font-display uppercase text-terracotta leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
          >
            TOOLKIT
          </h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 space-y-20">
          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-ink-hint mb-6">
              Software
            </p>

            {software.length === 0 ? (
              <div className="border border-dashed border-border-strong rounded-md py-16 text-center">
                <p className="text-ink-muted">Software list coming soon.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {software.map((tool, i) => {
                  const accent = tileAccents[i % tileAccents.length];
                  const Wrapper = tool.url ? "a" : "div";
                  return (
                    <Wrapper
                      key={tool.name}
                      {...(tool.url
                        ? { href: tool.url, target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex flex-col items-center justify-center gap-3 p-6 border border-border rounded-md bg-white/60 hover:border-border-strong hover:-translate-y-1 transition-all duration-200"
                    >
                      {tool.logo ? (
                        <div className="relative w-12 h-12">
                          <Image
                            src={tool.logo}
                            alt={tool.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-12 h-12 rounded-sm flex items-center justify-center font-display text-lg ${accent.bg} ${accent.fg} group-hover:scale-110 transition-transform duration-200`}
                        >
                          {tool.name.charAt(0)}
                        </div>
                      )}
                      <p className={`font-body text-sm font-bold text-center ${accent.fg}`}>
                        {tool.name}
                      </p>
                    </Wrapper>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.15em] text-ink-hint mb-6">
              Certifications
            </p>

            {certifications.length === 0 ? (
              <div className="border border-dashed border-border-strong rounded-md py-16 text-center">
                <p className="text-ink-muted">Certifications coming soon.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {certifications.map((cert) => {
                  const Wrapper = cert.url ? "a" : "div";
                  return (
                    <Wrapper
                      key={cert.name}
                      {...(cert.url
                        ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="flex items-center justify-between gap-4 p-4 border border-border rounded-md bg-white/60 hover:border-border-strong transition-colors"
                    >
                      <div>
                        <p className="font-body font-bold text-sm mb-1">
                          {cert.name}
                        </p>
                        <p className="text-sm text-ink-muted">{cert.issuer}</p>
                      </div>
                      {cert.year && (
                        <span className="font-body text-xs uppercase tracking-wide text-ink-hint shrink-0">
                          {cert.year}
                        </span>
                      )}
                    </Wrapper>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

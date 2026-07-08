"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FadeUp from "@/components/FadeUp";
import FadeIn from "@/components/FadeIn";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function PinnedHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const words = gsap.utils.toArray<HTMLElement>(".hero-word");
          const descs = gsap.utils.toArray<HTMLElement>(".hero-desc");

          // word 1 is active at rest so the landing view isn't fully dimmed
          gsap.set(words, { opacity: (i) => (i === 0 ? 1 : 0.25) });
          gsap.set(descs, { opacity: (i) => (i === 0 ? 1 : 0), y: (i) => (i === 0 ? 0 : 14) });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=1600",
              pin: true,
              scrub: 0.5,
            },
          });

          words.forEach((word, i) => {
            const pos = i * 2; // 2 timeline-seconds per word segment
            if (i > 0) {
              tl.to(word, { opacity: 1, duration: 0.5 }, pos);
              tl.to(descs[i], { opacity: 1, y: 0, duration: 0.5 }, pos);
            }
            if (i < words.length - 1) {
              tl.to(word, { opacity: 0.25, duration: 0.5 }, pos + 1.5);
              tl.to(descs[i], { opacity: 0, y: -14, duration: 0.5 }, pos + 1.5);
            }
          });
          // release with all three words at full strength and no lingering description
          tl.to(words, { opacity: 1, duration: 0.5 }, words.length * 2);
          tl.to(descs[descs.length - 1], { opacity: 0, y: -14, duration: 0.5 }, words.length * 2);
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative bg-lavender overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <FadeUp delay={0}>
          <p className="font-body font-bold tracking-[0.3em] text-sm uppercase mb-6">
            Lilainie Adjei-Addo
          </p>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-ink/60 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            Behavioural Science &middot; Creativity &middot; Partnerships &middot; Implementation
          </div>
        </FadeUp>

        <div className="relative">
          <FadeUp delay={0.22}>
            <h1
              className="font-display uppercase leading-[1.05] text-terracotta select-none"
              style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}
            >
              <span className="hero-word block">PEOPLE.</span>
              <span className="hero-word block">SYSTEMS.</span>
              <span className="hero-word block">IMPACT.</span>
            </h1>
          </FadeUp>

          {/* Photo, overlapping the type like the inspiration image */}
          <div className="relative md:absolute md:top-0 md:right-0 md:translate-x-[10%] w-full md:w-[40%] aspect-[3/4] mt-8 md:mt-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] aspect-square"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                <circle
                  cx="50"
                  cy="50"
                  r="48.5"
                  fill="none"
                  pathLength={96}
                  stroke="var(--terracotta)"
                  strokeWidth="1.5"
                  strokeDasharray="10 6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <FadeIn delay={0.35} className="relative z-10 w-full h-full rounded-sm overflow-hidden border-2 border-ink/20">
              <div className="absolute" style={{ top: "-30%", left: "-30%", width: "160%", height: "160%" }}>
                <Image
                  src="/images/portrait-v2.jpg"
                  alt="Lilainie Adjei-Addo"
                  fill
                  priority
                  sizes="(min-width: 768px) 60vw, 160vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 25%" }}
                />
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="hero-descs relative mt-6 h-20 md:h-16 max-w-md" aria-hidden="true">
          <p className="hero-desc absolute inset-x-0 top-0 opacity-0 font-body text-base md:text-lg leading-relaxed text-ink/80">
            Connection starts with understanding how people actually behave, not how they&apos;re assumed to.
          </p>
          <p className="hero-desc absolute inset-x-0 top-0 opacity-0 font-body text-base md:text-lg leading-relaxed text-ink/80">
            Programs are only as good as the structure holding them up, so I build structures that hold.
          </p>
          <p className="hero-desc absolute inset-x-0 top-0 opacity-0 font-body text-base md:text-lg leading-relaxed text-ink/80">
            Research means nothing until it becomes something someone can actually use.
          </p>
        </div>

        <FadeUp delay={0.45}>
          <p className="font-script text-2xl md:text-3xl text-ink mt-8 max-w-md">
            A connector at heart, a strategist by skill.
          </p>
        </FadeUp>

        <FadeUp delay={0.55}>
          <div className="flex flex-wrap gap-3 mt-8 font-body">
            <Link
              href="/projects"
              className="inline-block bg-ink text-cream font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-sm hover:opacity-80 transition-opacity"
            >
              View my work
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

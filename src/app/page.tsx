import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PinnedHero from "@/components/PinnedHero";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <PinnedHero />

      <Marquee />

      {/* INTRO STATEMENT */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <FadeUp>
            <p className="font-display text-3xl md:text-5xl uppercase leading-tight mb-8">
              Behavioural science meets implementation.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl leading-relaxed text-ink/80">
              Behavioural science taught me to notice patterns. Growing up
              moving through systems like healthcare, education, and community
              networks that worked, I saw firsthand what happens to people when
              those same systems don&apos;t exist or don&apos;t reach them. That
              contrast stayed with me, and I&apos;ve been spotting the same
              pattern everywhere since, in classrooms, in workplaces, in
              programs meant to help people that quietly weren&apos;t built to.
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="font-script text-2xl text-ink mt-6">
              Glad you&apos;re here, getting to know me.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-block font-body font-bold uppercase tracking-wide text-sm border-b-2 border-terracotta pb-1 hover:text-terracotta transition-colors"
              >
                More about me &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA TO CONTACT */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <FadeUp>
            <h2 className="font-display uppercase text-4xl md:text-6xl leading-tight">
              Let&apos;s
              <br />
              connect.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <Link
              href="/contact"
              className="inline-block bg-terracotta text-cream font-body font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-sm hover:bg-terracotta-deep transition-colors"
            >
              Get In Touch
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

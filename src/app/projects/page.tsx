import type { Metadata } from "next";
import { projects } from "@/data/projects";
import AnimatedProjectGrid from "@/components/AnimatedProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work across program coordination, partnerships, and implementation — from youth STEAM programming to dementia-care initiatives.",
};

export default function Projects() {
  return (
    <>
      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
          <p className="font-script text-2xl text-ink mb-4">Selected work</p>
          <h1
            className="font-display uppercase text-terracotta leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
          >
            PROJECTS
          </h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <AnimatedProjectGrid projects={projects} />
        </div>
      </section>
    </>
  );
}

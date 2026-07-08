const KEYWORDS = [
  "Behavioural Science",
  "Partnerships",
  "Implementation",
  "Creativity",
  "Systems Thinking",
  "Community Impact",
];

function MarqueeGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="inline-flex items-center gap-x-10 md:gap-x-16 pr-10 md:pr-16"
      aria-hidden={ariaHidden}
    >
      {KEYWORDS.map((word) => (
        <span key={word} className="inline-flex items-center gap-x-10 md:gap-x-16">
          {word}
          <span className="text-terracotta">&bull;</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="bg-ink text-cream overflow-hidden">
      <span className="sr-only">
        Behavioural Science, Partnerships, Implementation, Creativity, Systems
        Thinking, Community Impact.
      </span>
      <div
        className="flex w-max py-5 md:py-6 animate-marquee font-display uppercase text-2xl md:text-4xl whitespace-nowrap"
        aria-hidden="true"
      >
        <MarqueeGroup />
        <MarqueeGroup ariaHidden />
      </div>
    </div>
  );
}

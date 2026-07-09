"use client";

import { useRef, useState } from "react";

interface PillarRowProps {
  children: React.ReactNode;
  count: number;
}

export default function PillarRow({ children, count }: PillarRowProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setActive(max > 0 ? Math.round((el.scrollLeft / max) * (count - 1)) : 0);
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-pl-6 -mx-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:pb-0 md:flex-col md:overflow-visible"
      >
        {children}
      </div>
      <div className="mt-2 flex justify-center gap-1.5 md:hidden" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === active ? "bg-terracotta" : "bg-ink/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

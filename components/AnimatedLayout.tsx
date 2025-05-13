// components/AnimatedLayout.tsx
'use client';

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 3, ease: "power2.out" }
      );
    }
  }, [pathname]);

  return <div ref={containerRef}>{children}</div>;
}

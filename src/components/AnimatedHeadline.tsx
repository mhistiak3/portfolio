"use client";
import { useEffect, useState } from "react";

export default function AnimatedHeadline({
  headlines,
}: {
  headlines: string[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 4500); // Change every 4.5 seconds

    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <p className="font-light">
      <span className="relative inline-block min-w-[200px] text-sm">
        <span
          key={index}
          className="inline-block relative pb-3 after:rounded-full after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-linear-to-r after:from-secondary after:to-primary after:animate-[borderExpand_4.5s_ease-in-out]"
        >
          {headlines[index]}
        </span>
      </span>
    </p>
  );
}

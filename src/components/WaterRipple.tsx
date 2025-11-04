"use client";
import { useEffect, useRef } from "react";

interface WaterRippleProps {
  children: React.ReactNode;
  className?: string;
}

export default function WaterRipple({
  children,
  className = "",
}: WaterRippleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isHoveringRef = useRef(false);
  const lastRippleTime = useRef<number>(0);
  const ripplesRef = useRef<
    Array<{
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      alpha: number;
    }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      return { width, height };
    };

    let { width, height } = updateSize();

    const addRipple = (x: number, y: number) => {
      // Limit ripples on mousemove to prevent lag
      const now = Date.now();
      if (now - lastRippleTime.current < 200) return;
      lastRippleTime.current = now;

      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: 250,
        speed: 0.8,
        alpha: 0.4,
      });

      // Limit total ripples to prevent memory issues
      if (ripplesRef.current.length > 12) {
        ripplesRef.current.splice(0, ripplesRef.current.length - 12);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = ripplesRef.current.length - 1; i >= 0; i--) {
        const ripple = ripplesRef.current[i];
        ripple.radius += ripple.speed;
        ripple.alpha -= 0.0015;

        if (ripple.alpha <= 0 || ripple.radius > ripple.maxRadius) {
          ripplesRef.current.splice(i, 1);
          continue;
        }

        // Outer ripple with blur effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(77, 121, 246, ${ripple.alpha * 0.5})`;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(77, 121, 246, ${ripple.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Inner ripple for depth
        if (ripple.radius > 15) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(184, 82, 96, ${ripple.alpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius * 0.65, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(184, 82, 96, ${ripple.alpha * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Auto ripples - only when not hovering
    const autoRipple = setInterval(() => {
      if (!isHoveringRef.current && ripplesRef.current.length < 5) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        addRipple(x, y);
      }
    }, 3000);

    const handleMouseEnter = () => {
      isHoveringRef.current = true;
    };

    const handleMouseLeave = () => {
      isHoveringRef.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only add ripple if within bounds
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        addRipple(x, y);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        // Add larger ripple on click
        ripplesRef.current.push({
          x,
          y,
          radius: 0,
          maxRadius: 300,
          speed: 1,
          alpha: 0.6,
        });
      }
    };

    const handleResize = () => {
      const size = updateSize();
      width = size.width;
      height = size.height;
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("click", handleClick);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(autoRipple);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        style={{ mixBlendMode: "screen" }}
      />
      <div className="relative z-20 pointer-events-auto">{children}</div>
    </div>
  );
}

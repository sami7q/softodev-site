// components/ui/mouse-particles.tsx
"use client";

import { useEffect, useRef } from "react";

type MouseParticlesProps = {
  className?: string;
  dotColor?: string;
  // ✅ رجّعنا الـ prop هذا
  backgroundAlpha?: number;
};

export function MouseParticles({
  className,
  dotColor = "rgba(37, 99, 235, 0.7)",
  // ✅ استقبلناها مع قيمة افتراضية (حتى لو ما استخدمناها تحت)
  backgroundAlpha = 0.16,
}: MouseParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const context = ctx;

    let animationId: number;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
    }[] = [];

    let width = canvas.clientWidth || window.innerWidth;
    let height = canvas.clientHeight || 400;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(dpr, dpr);

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: 220,
    };

    let targetMouseX = mouse.x;
    let targetMouseY = mouse.y;

    function initParticles() {
      const count = Math.min(
        260,
        Math.max(90, Math.floor((width * height) / 5000)),
      );

      particles = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;

        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        });
      }
    }

    function handleResize() {
      if (!canvas) return;

      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || 400;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);

      mouse.x = width / 2;
      mouse.y = height / 2;
      targetMouseX = mouse.x;
      targetMouseY = mouse.y;

      initParticles();
    }

    function handleMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      targetMouseX = width / 2;
      targetMouseY = height / 2;
    }

    function draw() {
      // ✅ نستخدم clearRect عشان ما تبقى الخطوط/الـ trails
      context.clearRect(0, 0, width, height);

      // لو حبيت مستقبلاً تستخدم backgroundAlpha، تقدر تبني خلفية خفيفة هنا
      // مثلاً:
      // context.fillStyle = `rgba(250, 250, 250, ${backgroundAlpha})`;
      // context.fillRect(0, 0, width, height);

      mouse.x += (targetMouseX - mouse.x) * 0.18;
      mouse.y += (targetMouseY - mouse.y) * 0.18;

      context.fillStyle = dotColor;

      for (const p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angleX = dx / dist;
          const angleY = dy / dist;

          p.vx += angleX * force * 0.25;
          p.vy += angleY * force * 0.25;
        } else {
          const toBaseX = p.baseX - p.x;
          const toBaseY = p.baseY - p.y;
          p.vx += toBaseX * 0.001;
          p.vy += toBaseY * 0.001;
        }

        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;

        p.vx *= 0.9;
        p.vy *= 0.9;

        p.x += p.vx;
        p.y += p.vy;

        context.beginPath();
        context.arc(p.x, p.y, 1.7, 0, Math.PI * 2);
        context.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    initParticles();
    draw();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [dotColor, backgroundAlpha]);

  return (
    <canvas
      ref={canvasRef}
      className={
        className ??
        "absolute inset-0 -z-10 h-full w-full pointer-events-none"
      }
    />
  );
}

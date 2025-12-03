"use client";

import { useEffect, useRef } from "react";

type MouseParticlesProps = {
  className?: string;
  dotColor?: string;
  /** 1 = عادي، >1 = نقاط أكثر، <1 = أقل */
  density?: number;
};

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  floatStrength: number;
  offset: number;
};

export function MouseParticles({
  className,
  dotColor = "rgba(37, 99, 235, 0.9)",
  density = 1.7, // 👈 كثافة أعلى من قبل
}: MouseParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const context = ctx;

    let animationId: number;
    let particles: Particle[] = [];
    let time = 0;

    let width = canvas.clientWidth || window.innerWidth;
    let height = canvas.clientHeight || 400;

    const setupCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
    };

    setupCanvasSize();

    const mouse = {
      x: width / 2,
      y: height / 2,
      radius: Math.min(width, height) * 0.35,
    };
    let targetMouseX = mouse.x;
    let targetMouseY = mouse.y;

    function initParticles() {
      // 👇 زودنا العدد الأساسي + ضربناه بالكثافة
      const baseCount = Math.floor((width * height) / 5000); // كان 6500
      const count = Math.min(
        420, // كان 260
        Math.max(140, Math.floor(baseCount * density)),
      );

      particles = [];

      const maxRadius = Math.min(width, height) * 0.7;

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.sqrt(Math.random()) * maxRadius;
        const baseX = width / 2 + Math.cos(angle) * radius;
        const baseY = height / 2 + Math.sin(angle) * radius;

        const size = 0.8 + Math.random() * 1.5;
        const floatStrength = 0.3 + Math.random() * 1.0;

        particles.push({
          x: baseX,
          y: baseY,
          baseX,
          baseY,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size,
          floatStrength,
          offset: Math.random() * Math.PI * 2,
        });
      }
    }

    function handleResize() {
      if (!canvas) return;

      width = canvas.clientWidth || window.innerWidth;
      height = canvas.clientHeight || 400;

      setupCanvasSize();

      mouse.x = width / 2;
      mouse.y = height / 2;
      targetMouseX = mouse.x;
      targetMouseY = mouse.y;
      mouse.radius = Math.min(width, height) * 0.35;

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
      time += 0.016;

      context.clearRect(0, 0, width, height);

      mouse.x += (targetMouseX - mouse.x) * 0.18;
      mouse.y += (targetMouseY - mouse.y) * 0.18;

      for (const p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angleX = dx / dist;
          const angleY = dy / dist;
          p.vx += angleX * force * 0.2;
          p.vy += angleY * force * 0.2;
        } else {
          const toBaseX = p.baseX - p.x;
          const toBaseY = p.baseY - p.y;
          p.vx += toBaseX * 0.0009;
          p.vy += toBaseY * 0.0009;
        }

        p.vx += (Math.random() - 0.5) * 0.01;
        p.vy += (Math.random() - 0.5) * 0.01;

        p.vx *= 0.9;
        p.vy *= 0.9;

        p.x += p.vx;
        p.y += p.vy;

        const floatOffset =
          Math.sin(time * 1.1 + p.offset) * p.floatStrength * 1.6;

        const drawX = p.x;
        const drawY = p.y + floatOffset;

        // glow
        context.save();
        context.globalAlpha = 0.45;
        context.fillStyle = dotColor;
        context.beginPath();
        context.arc(drawX, drawY, p.size * 2.3, 0, Math.PI * 2);
        context.fill();
        context.restore();

        // core dot
        context.save();
        context.globalAlpha = 1;
        context.fillStyle = dotColor;
        context.beginPath();
        context.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }

      animationId = requestAnimationFrame(draw);
    }

    initParticles();
    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dotColor, density]);

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

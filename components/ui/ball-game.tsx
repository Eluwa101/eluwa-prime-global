"use client";

import { useEffect, useRef, useState } from "react";

const R = 11;
const GRAVITY = 0.18;
const DAMPING = 0.72;
const FRICTION = 0.988;
const SPEED_MAX = 14;
const TRAIL_LEN = 18;
const LIGHTNING_DELAY = 5 * 60 * 1000;
const LIGHTNING_DURATION = 3800;

const OBSTACLE_SELECTORS = [
  ".service-card",
  ".testimonial-card",
  ".stat-card",
  ".benefit-card",
  ".project-card",
  ".focus-card",
  ".faq-item",
  ".team-quote-card",
  ".hero-section__floating-card",
  ".team-member-card",
  ".work-phase-card",
].join(", ");

interface Vec2 { x: number; y: number; }
interface Rect { x: number; y: number; w: number; h: number; }

function rRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

function makeBolt(x1: number, y1: number, x2: number, y2: number, roughness: number): Vec2[] {
  if (roughness < 6) return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const offset = (Math.random() - 0.5) * roughness;
  const mx = (x1 + x2) / 2 + (-dy / len) * offset;
  const my = (y1 + y2) / 2 + (dx / len) * offset;
  return [
    ...makeBolt(x1, y1, mx, my, roughness / 2),
    ...makeBolt(mx, my, x2, y2, roughness / 2).slice(1),
  ];
}

function drawMjolnir(ctx: CanvasRenderingContext2D, pulse: number) {
  const HW = 28, HH = 20;   // head dimensions
  const HaW = 10, HaH = 22; // handle dimensions
  const cy = (HH + HaH) / 2;
  const headY = -cy;
  const handleY = headY + HH;

  // Electric aura
  const auraAlpha = 0.14 + Math.sin(pulse) * 0.07;
  const aura = ctx.createRadialGradient(0, headY + HH / 2, 2, 0, headY + HH / 2, HW * 1.5);
  aura.addColorStop(0, `rgba(130, 200, 255, ${auraAlpha * 2.2})`);
  aura.addColorStop(1, "rgba(80, 140, 255, 0)");
  ctx.fillStyle = aura;
  ctx.beginPath();
  ctx.ellipse(0, headY + HH / 2, HW * 1.5, HH * 1.8, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head body
  const headGrad = ctx.createLinearGradient(-HW / 2, headY, HW / 2, headY + HH);
  headGrad.addColorStop(0, "#e0e0e0");
  headGrad.addColorStop(0.28, "#9c9c9c");
  headGrad.addColorStop(0.65, "#5a5a5a");
  headGrad.addColorStop(1, "#1a1a1a");
  ctx.fillStyle = headGrad;
  rRect(ctx, -HW / 2, headY, HW, HH, 3);
  ctx.fill();

  // Head rim highlight
  ctx.strokeStyle = "rgba(255,255,255,0.38)";
  ctx.lineWidth = 0.9;
  rRect(ctx, -HW / 2, headY, HW, HH, 3);
  ctx.stroke();

  // Rune markings (glowing)
  const runeAlpha = 0.5 + Math.sin(pulse * 1.4) * 0.3;
  ctx.strokeStyle = `rgba(150, 210, 255, ${runeAlpha})`;
  ctx.lineWidth = 1.1;
  ctx.beginPath();
  // Left rune stroke
  ctx.moveTo(-HW / 2 + 5, headY + HH * 0.3);
  ctx.lineTo(-HW / 2 + 5, headY + HH * 0.72);
  // Crossbar
  ctx.moveTo(-HW / 2 + 5, headY + HH * 0.5);
  ctx.lineTo(HW / 2 - 5, headY + HH * 0.5);
  // Right rune stroke
  ctx.moveTo(HW / 2 - 5, headY + HH * 0.3);
  ctx.lineTo(HW / 2 - 5, headY + HH * 0.72);
  ctx.stroke();

  // Handle
  const handleGrad = ctx.createLinearGradient(-HaW / 2, 0, HaW / 2, 0);
  handleGrad.addColorStop(0, "#2e1604");
  handleGrad.addColorStop(0.35, "#b07c18");
  handleGrad.addColorStop(0.65, "#c89030");
  handleGrad.addColorStop(1, "#2e1604");
  ctx.fillStyle = handleGrad;
  ctx.fillRect(-HaW / 2, handleY, HaW, HaH);

  // Leather wrap bands
  ctx.fillStyle = "rgba(0,0,0,0.32)";
  const bands = 4;
  for (let i = 0; i < bands; i++) {
    ctx.fillRect(-HaW / 2, handleY + (i * HaH) / bands + 2, HaW, 2.2);
  }

  // Handle endcap
  const capGrad = ctx.createLinearGradient(-HaW / 2 - 2, 0, HaW / 2 + 2, 0);
  capGrad.addColorStop(0, "#141414");
  capGrad.addColorStop(0.5, "#585858");
  capGrad.addColorStop(1, "#141414");
  ctx.fillStyle = capGrad;
  rRect(ctx, -HaW / 2 - 2, handleY + HaH - 4, HaW + 4, 6, 2);
  ctx.fill();
}

export function BallGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const pos: Vec2 = { x: W * 0.55, y: 90 };
    const vel: Vec2 = { x: 5, y: 1 };
    const trail: Vec2[] = [];
    let target: Vec2 | null = null;
    let obstacles: Rect[] = [];
    let scrollTimer = 0;
    let raf: number;

    let hammerAngle = 0;
    let pulse = 0;

    const sessionStart = Date.now();
    let lightningStart = -1;
    let bolts: Vec2[][] = [];
    let flickerTick = 0;

    const refreshObstacles = () => {
      const els = document.querySelectorAll(OBSTACLE_SELECTORS);
      obstacles = Array.from(els).map((el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left - 4, y: r.top - 4, w: r.width + 8, h: r.height + 8 };
      });
    };

    const regenerateBolts = () => {
      bolts = [];
      // Full-height vertical bolts
      for (let i = 0; i < 5; i++) {
        const sx = Math.random() * W;
        const ex = sx + (Math.random() - 0.5) * W * 0.35;
        bolts.push(makeBolt(sx, 0, ex, H, Math.min(W, H) * 0.28));
      }
      // Bolts radiating outward from hammer position
      for (let i = 0; i < 4; i++) {
        const a = (i * Math.PI * 2) / 4 + Math.random() * 0.6;
        const ex = pos.x + Math.cos(a) * W;
        const ey = pos.y + Math.sin(a) * H;
        bolts.push(makeBolt(pos.x, pos.y, ex, ey, Math.min(W, H) * 0.22));
      }
    };

    let frame = 0;
    const tick = () => {
      frame++;
      pulse += 0.055;
      if (frame % 24 === 0) refreshObstacles();

      if (lightningStart < 0 && Date.now() - sessionStart >= LIGHTNING_DELAY) {
        lightningStart = Date.now();
        regenerateBolts();
      }

      if (target) {
        const dx = target.x - pos.x;
        const dy = target.y - pos.y;
        const d = Math.hypot(dx, dy);
        if (d > 6) {
          vel.x += (dx / d) * 1.1;
          vel.y += (dy / d) * 1.1;
        } else {
          target = null;
        }
      }

      vel.y += GRAVITY;
      vel.x *= FRICTION;

      const spd = Math.hypot(vel.x, vel.y);
      if (spd > SPEED_MAX) {
        vel.x = (vel.x / spd) * SPEED_MAX;
        vel.y = (vel.y / spd) * SPEED_MAX;
      }

      pos.x += vel.x;
      pos.y += vel.y;

      if (pos.x - R < 0)  { pos.x = R;     vel.x =  Math.abs(vel.x) * DAMPING; }
      if (pos.x + R > W)  { pos.x = W - R; vel.x = -Math.abs(vel.x) * DAMPING; }
      if (pos.y - R < 0)  { pos.y = R;     vel.y =  Math.abs(vel.y) * DAMPING; }
      if (pos.y + R > H)  { pos.y = H - R; vel.y = -Math.abs(vel.y) * DAMPING; vel.x *= 0.97; }

      for (const o of obstacles) {
        if (
          pos.x + R > o.x && pos.x - R < o.x + o.w &&
          pos.y + R > o.y && pos.y - R < o.y + o.h
        ) {
          const ol = pos.x + R - o.x;
          const or_ = o.x + o.w - (pos.x - R);
          const ot = pos.y + R - o.y;
          const ob = o.y + o.h - (pos.y - R);
          const m = Math.min(ol, or_, ot, ob);
          if (m === ol)       { pos.x = o.x - R;         vel.x = -Math.abs(vel.x) * DAMPING; }
          else if (m === or_) { pos.x = o.x + o.w + R;   vel.x =  Math.abs(vel.x) * DAMPING; }
          else if (m === ot)  { pos.y = o.y - R;          vel.y = -Math.abs(vel.y) * DAMPING; }
          else                { pos.y = o.y + o.h + R;    vel.y =  Math.abs(vel.y) * DAMPING; }
        }
      }

      hammerAngle += spd * 0.044;

      trail.push({ x: pos.x, y: pos.y });
      if (trail.length > TRAIL_LEN) trail.shift();

      ctx.clearRect(0, 0, W, H);

      // ── Lightning discharge ────────────────────────────────────────
      if (lightningStart > 0) {
        const elapsed = Date.now() - lightningStart;
        if (elapsed < LIGHTNING_DURATION) {
          flickerTick++;
          if (flickerTick % 3 === 0) regenerateBolts();

          const t = elapsed / LIGHTNING_DURATION;
          const alpha = t < 0.12 ? t / 0.12 : Math.max(0, 1 - (t - 0.12) / 0.88);

          // Screen-wide flash
          ctx.fillStyle = `rgba(190, 220, 255, ${alpha * 0.2})`;
          ctx.fillRect(0, 0, W, H);

          for (const bolt of bolts) {
            if (bolt.length < 2) continue;
            ctx.beginPath();
            ctx.moveTo(bolt[0].x, bolt[0].y);
            for (let i = 1; i < bolt.length; i++) ctx.lineTo(bolt[i].x, bolt[i].y);

            // Wide glow layer
            ctx.shadowColor = "rgba(100, 170, 255, 0.9)";
            ctx.shadowBlur = 24;
            ctx.strokeStyle = `rgba(170, 220, 255, ${alpha * 0.55})`;
            ctx.lineWidth = 7;
            ctx.stroke();

            // Bright core
            ctx.shadowBlur = 6;
            ctx.strokeStyle = `rgba(245, 252, 255, ${alpha * 0.95})`;
            ctx.lineWidth = 1.6;
            ctx.stroke();
          }

          ctx.shadowBlur = 0;
          ctx.shadowColor = "transparent";
        } else {
          lightningStart = -1;
          flickerTick = 0;
          bolts = [];
        }
      }

      // ── Electric trail ─────────────────────────────────────────────
      for (let i = 0; i < trail.length; i++) {
        const t = i / trail.length;
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, R * t * 0.55, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(130, 195, 255, ${t * 0.2})`;
        ctx.fill();
      }

      // ── Mjolnir ────────────────────────────────────────────────────
      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(hammerAngle);
      drawMjolnir(ctx, pulse);
      ctx.restore();

      raf = requestAnimationFrame(tick);
    };

    refreshObstacles();
    tick();

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      refreshObstacles();
    };

    const onClick = (e: MouseEvent) => { target = { x: e.clientX, y: e.clientY }; };
    const onScroll = () => {
      clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(refreshObstacles, 60);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(scrollTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 40,
        }}
      />
      <button
        onClick={() => setVisible(false)}
        style={{
          position: "fixed",
          bottom: "1.4rem",
          right: "1.4rem",
          display: "flex",
          alignItems: "center",
          gap: "0.45rem",
          padding: "0.45rem 0.9rem",
          background: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(12px)",
          borderRadius: "999px",
          border: "1px solid rgba(19,55,72,0.12)",
          fontSize: "0.75rem",
          color: "#4f6772",
          fontWeight: 600,
          cursor: "pointer",
          zIndex: 41,
          boxShadow: "0 4px 14px rgba(10,45,59,0.1)",
        }}
        aria-label="Dismiss Mjolnir"
      >
        <span style={{ fontSize: "0.9rem" }}>🔨</span>
        Click anywhere to guide · ✕ dismiss
      </button>
    </>
  );
}

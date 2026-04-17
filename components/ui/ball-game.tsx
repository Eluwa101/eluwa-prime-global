"use client";

import { useEffect, useRef, useState } from "react";

const R = 11;           // ball radius
const GRAVITY = 0.18;
const DAMPING = 0.72;
const FRICTION = 0.988;
const SPEED_MAX = 14;
const TRAIL_LEN = 22;
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

    // ── State ────────────────────────────────────────────────────────
    const pos: Vec2 = { x: W * 0.55, y: 90 };
    const vel: Vec2 = { x: 5, y: 1 };
    const trail: Vec2[] = [];
    let target: Vec2 | null = null;
    let obstacles: Rect[] = [];
    let scrollTimer = 0;
    let raf: number;

    // ── Helpers ──────────────────────────────────────────────────────
    const refreshObstacles = () => {
      const els = document.querySelectorAll(OBSTACLE_SELECTORS);
      obstacles = Array.from(els).map((el) => {
        const r = el.getBoundingClientRect();
        return { x: r.left - 4, y: r.top - 4, w: r.width + 8, h: r.height + 8 };
      });
    };

    // ── Physics tick ─────────────────────────────────────────────────
    let frame = 0;
    const tick = () => {
      frame++;
      if (frame % 24 === 0) refreshObstacles();

      // Attract toward click target
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

      // Gravity + friction
      vel.y += GRAVITY;
      vel.x *= FRICTION;

      // Speed cap
      const spd = Math.hypot(vel.x, vel.y);
      if (spd > SPEED_MAX) {
        vel.x = (vel.x / spd) * SPEED_MAX;
        vel.y = (vel.y / spd) * SPEED_MAX;
      }

      pos.x += vel.x;
      pos.y += vel.y;

      // Viewport walls
      if (pos.x - R < 0)  { pos.x = R;     vel.x =  Math.abs(vel.x) * DAMPING; }
      if (pos.x + R > W)  { pos.x = W - R; vel.x = -Math.abs(vel.x) * DAMPING; }
      if (pos.y - R < 0)  { pos.y = R;     vel.y =  Math.abs(vel.y) * DAMPING; }
      if (pos.y + R > H)  { pos.y = H - R; vel.y = -Math.abs(vel.y) * DAMPING; vel.x *= 0.97; }

      // Obstacle collisions (AABB)
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
          if (m === ol) { pos.x = o.x - R;         vel.x = -Math.abs(vel.x) * DAMPING; }
          else if (m === or_) { pos.x = o.x + o.w + R; vel.x =  Math.abs(vel.x) * DAMPING; }
          else if (m === ot) { pos.y = o.y - R;         vel.y = -Math.abs(vel.y) * DAMPING; }
          else               { pos.y = o.y + o.h + R;   vel.y =  Math.abs(vel.y) * DAMPING; }
        }
      }

      // Trail
      trail.push({ x: pos.x, y: pos.y });
      if (trail.length > TRAIL_LEN) trail.shift();

      // ── Draw ─────────────────────────────────────────────────────
      ctx.clearRect(0, 0, W, H);

      // Trail
      for (let i = 0; i < trail.length; i++) {
        const t = i / trail.length;
        ctx.beginPath();
        ctx.arc(trail[i].x, trail[i].y, R * t * 0.65, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 158, 203, ${t * 0.28})`;
        ctx.fill();
      }

      // Outer glow
      const glow = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, R * 3);
      glow.addColorStop(0, "rgba(15,158,203,0.22)");
      glow.addColorStop(1, "rgba(15,158,203,0)");
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, R * 3, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Ball body
      const grad = ctx.createRadialGradient(
        pos.x - R * 0.32, pos.y - R * 0.32, R * 0.08,
        pos.x, pos.y, R
      );
      grad.addColorStop(0, "#b2e8f5");
      grad.addColorStop(0.45, "#0f9ecb");
      grad.addColorStop(1, "#0b2430");
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, R, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Specular highlight
      ctx.beginPath();
      ctx.arc(pos.x - R * 0.3, pos.y - R * 0.3, R * 0.28, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.fill();

      raf = requestAnimationFrame(tick);
    };

    refreshObstacles();
    tick();

    // ── Events ───────────────────────────────────────────────────────
    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      refreshObstacles();
    };

    const onClick = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY };
    };

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
        aria-label="Dismiss ball game"
      >
        <span style={{ fontSize: "0.9rem" }}>🎱</span>
        Click anywhere to guide · ✕ dismiss
      </button>
    </>
  );
}

import { useEffect, useRef } from "react";

interface DriftNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  glyph: string;
  amber: boolean;
}

const GLYPHS = ["+", "::", "0x", "∇", "∂", "∑", "λ", "[]", "<>", "·"];

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId = 0;

    const createNodes = (w: number, h: number): DriftNode[] => {
      const count = Math.min(28, Math.max(12, Math.floor((w * h) / 55000)));
      return Array.from({ length: count }, (_, idx) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        glyph: GLYPHS[idx % GLYPHS.length],
        amber: idx % 5 === 0,
      }));
    };

    let nodes: DriftNode[] = createNodes(width, height);

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = createNodes(width, height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const drawGrid = () => {
      const step = 48;
      ctx.strokeStyle = "rgba(46, 248, 103, 0.045)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += step) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
      }
      for (let y = 0; y <= height; y += step) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
      }
      ctx.stroke();

      // Subtle crosshair ticks at intersections
      ctx.fillStyle = "rgba(46, 248, 103, 0.09)";
      for (let x = step; x < width; x += step * 2) {
        for (let y = step; y < height; y += step * 2) {
          ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      }
    };

    const renderFrame = (animate: boolean) => {
      // Clear completely every frame — no smudged trails
      ctx.clearRect(0, 0, width, height);
      drawGrid();

      // Subtle topological graph edges between nearby nodes
      const maxDist = 170;
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.09;
            ctx.strokeStyle = `rgba(46, 248, 103, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw crisp ASCII/math glyphs
      ctx.font = "12px 'IBM Plex Mono', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const node of nodes) {
        ctx.fillStyle = node.amber ? "rgba(255, 176, 0, 0.16)" : "rgba(46, 248, 103, 0.16)";
        ctx.fillText(node.glyph, node.x, node.y);

        if (animate) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < -20) node.x = width + 20;
          if (node.x > width + 20) node.x = -20;
          if (node.y < -20) node.y = height + 20;
          if (node.y > height + 20) node.y = -20;
        }
      }

      if (animate) {
        animationFrameId = requestAnimationFrame(() => renderFrame(true));
      }
    };

    renderFrame(!prefersReducedMotion);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />;
};

export default MatrixBackground;

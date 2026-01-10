import { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters - mix of code and math symbols
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンαβγδϵθλμπσφψω∇∂∫∑∏√∞±×÷≤≥≠≈∈∉⊂⊃∪∩∧∨→←↑↓∀∃∅";
    const charArray = chars.split("");

    // Math equations to display
    const equations = [
      "∇·F = 0",
      "∫ f(x)dx",
      "∑(i=1 to n)",
      "∂f/∂x",
      "e^(iπ) + 1 = 0",
      "f(x) = Σ aₙxⁿ",
      "∇²φ = 0",
      "lim(x→∞)",
      "det(A) = 0",
      "P(A|B) = P(B|A)P(A)/P(B)",
    ];

    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    const equationPositions: Array<{ x: number; y: number; text: string; opacity: number; speed: number }> = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Initialize floating equations
    for (let i = 0; i < 8; i++) {
      equationPositions.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: equations[Math.floor(Math.random() * equations.length)],
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;

    const draw = () => {
      // Semi-transparent black background for trail effect
      ctx.fillStyle = "rgba(13, 17, 23, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw matrix rain
      ctx.fillStyle = "rgba(34, 197, 94, 0.15)"; // accent-cyber color with low opacity
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset drop to top with random delay
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      // Draw floating math equations
      ctx.font = `${16}px 'JetBrains Mono', monospace`;
      equationPositions.forEach((eq) => {
        ctx.fillStyle = `rgba(168, 85, 247, ${eq.opacity})`; // accent-neon color
        ctx.fillText(eq.text, eq.x, eq.y);

        // Move equations slowly
        eq.y -= eq.speed;
        if (eq.y < -50) {
          eq.y = canvas.height + 50;
          eq.x = Math.random() * canvas.width;
          eq.text = equations[Math.floor(Math.random() * equations.length)];
        }

        // Subtle horizontal drift
        eq.x += Math.sin(eq.y * 0.01) * 0.3;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default MatrixBackground;


// Zero-dependency PDF 1.4 generator for Pankhil Gawade's CV.
// If a custom static PDF is placed at /public/Pankhil_Gawade_CV.pdf, it downloads that file directly;
// otherwise it generates and downloads a clean, multi-page PDF on the fly.

type PdfFont = "F1" | "F2" | "F3"; // Helvetica, Helvetica-Bold, Courier

interface PdfLine {
  text: string;
  font: PdfFont;
  size: number;
  indent?: number;
  spaceBefore?: number;
  spaceAfter?: number;
  rule?: boolean;
}

const sanitizeAscii = (input: string): string =>
  input
    .replace(/[—–]/g, "-")
    .replace(/[•·]/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/ø/g, "o")
    .replace(/Ø/g, "O")
    .replace(/[^\x20-\x7E]/g, "");

const escapePdfText = (input: string): string =>
  sanitizeAscii(input).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

const wrapText = (text: string, maxChars: number): string[] => {
  const clean = sanitizeAscii(text).trim();
  if (!clean) return [""];
  const words = clean.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    if (!current) {
      current = word;
    } else if (current.length + 1 + word.length <= maxChars) {
      current += ` ${word}`;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
};

const buildCvLines = (): PdfLine[] => {
  const lines: PdfLine[] = [];

  const addWrapped = (
    text: string,
    font: PdfFont,
    size: number,
    maxChars: number,
    indent = 0,
    spaceAfter = 2,
  ) => {
    const wrapped = wrapText(text, maxChars);
    wrapped.forEach((line, idx) => {
      lines.push({
        text: line,
        font,
        size,
        indent,
        spaceAfter: idx === wrapped.length - 1 ? spaceAfter : 1.5,
      });
    });
  };

  const addSection = (title: string) => {
    lines.push({
      text: title.toUpperCase(),
      font: "F2",
      size: 11,
      spaceBefore: 10,
      spaceAfter: 4,
      rule: true,
    });
  };

  // Header
  lines.push({ text: "PANKHIL GAWADE", font: "F2", size: 20, spaceAfter: 4 });
  lines.push({
    text: "Doctoral Researcher | Helmholtz Munich & TUM | ELLIS, MCML, ELIZA",
    font: "F1",
    size: 10,
    spaceAfter: 3,
  });
  lines.push({
    text: "Munich, Germany  |  pankhilgawade2001@gmail.com  |  github.com/Pankhil07",
    font: "F3",
    size: 8.5,
    spaceAfter: 2,
  });
  lines.push({
    text: "Portfolio: pankhil07.github.io  |  Google Scholar: scholar.google.com/citations?user=e2kHnzsAAAAJ",
    font: "F3",
    size: 8.5,
    spaceAfter: 6,
  });

  // Research Profile
  addSection("Research Focus & Affiliations");
  addWrapped(
    "Doctoral researcher specializing in topology-aware generative AI, drug discovery, and antimicrobial peptide (AMP) design under Dr. Ewa Szczurek, Dr. Bastian Rieck, and Dr. Guy Wolf at Helmholtz Munich and TUM. Affiliated with ELLIS (European Laboratory for Learning and Intelligent Systems), MCML (Munich Center for Machine Learning), and ELIZA (Konrad Zuse School of Excellence in Learning and Intelligent Systems).",
    "F1",
    9.5,
    94,
    0,
    4,
  );

  // Education
  addSection("Education");
  lines.push({
    text: "Doctoral Researcher  (October 2025 - Present)",
    font: "F2",
    size: 10,
    spaceAfter: 2,
  });
  lines.push({
    text: "Helmholtz Munich & TUM School of Computation, Information and Technology (ELLIS, MCML, ELIZA)",
    font: "F3",
    size: 8.8,
    spaceAfter: 2,
  });
  addWrapped(
    "Research focus on topology-aware generative AI for drug discovery and geometry-aware transformers for antimicrobial peptide design.",
    "F1",
    9.5,
    92,
    0,
    4,
  );

  // Publications
  addSection("Peer-Reviewed Publications");
  const publications = [
    "[1] Pankhil Gawade, Kirsten Fischer, Guy Wolf, Ewa Szczurek. A Closed Form Depth-Width Law for Neural Collapse in Deep Linear Networks. NeurIPS 2026 - AXIOM Workshop, 2026.",
    "[2] Diogo Soares, Pankhil Gawade, Andrea Dittadi, Ewa Szczurek. Scalable and Interpretable Representation Alignment with Ordinal Similarity. ICML, 2026 (arXiv:2606.16379).",
    "[3] Serra Korkmaz, Adam Izdebski, Jonathan Pirnay, Rasmus Moller-Larsen, Michal Kmicikiewicz, Pankhil Gawade, Maksim Pavlov, Dominik G. Grimm, Ewa Szczurek. Sample Efficient Generative Molecular Optimization with Joint Self-Improvement. NeurIPS 2026 & ICLR 2026 AI4MAT Workshop (arXiv:2602.10984).",
    "[4] Adam Izdebski, Jan Olszewski, Pankhil Gawade, Krzysztof Koras, Serra Korkmaz, Valentin Rauscher, Jakub M. Tomczak, Ewa Szczurek. Synergistic Benefits of Joint Molecule Generation and Property Prediction. TMLR, 2026 (arXiv:2504.16559).",
    "[5] Pankhil Gawade, Adam Izdebski, Myriam Lizotte, Kevin R. Moon, Jake Slater Rhodes, Guy Wolf, Ewa Szczurek. Freeze, Diffuse, Decode: Task-Aware Adaptation of Transformer Embeddings for Antimicrobial Peptide Design. TAG-DS 2026, PMLR Vol. 334, pp. 216-236, 2026.",
    "[6] Rasmus Moller-Larsen, Adam Izdebski, Jan Olszewski, Pankhil Gawade, Michal Kmicikiewicz, Wojciech Zarzecki, Ewa Szczurek. seqme: a Python library for evaluating biological sequence design from generative models. Bioinformatics Advances (Oxford University Press), Vol. 6, Issue 1, vbag212, 2026.",
  ];

  publications.forEach((pub) => {
    addWrapped(pub, "F1", 9, 94, 0, 4);
  });

  // Talks
  addSection("Talks");
  addWrapped(
    "- AMPFormer: A Peptide Foundation Model for Antimicrobial Discovery. Helmholtz AI Conference (HAICON26), Session 3a - Foundation Models for Science, June 10, 2026. Video: https://www.youtube.com/watch?v=H0zLf_LyL0U",
    "F1",
    9.2,
    92,
    4,
    4,
  );

  // Academic Service
  addSection("Academic Service");
  addWrapped(
    "- Peer Reviewer: International Conference on Artificial Intelligence and Statistics (AISTATS).",
    "F1",
    9.2,
    92,
    4,
    4,
  );

  // Experience
  addSection("Research Experience");
  const experience = [
    {
      role: "Scientific Assistant",
      org: "Helmholtz Munich - AI for Health (Szczurek Lab)",
      period: "May 2025 - Present",
      desc: "Continuing research on antimicrobial peptides generation and property prediction.",
    },
    {
      role: "Master's Thesis Student",
      org: "Helmholtz Munich - AI for Health (Szczurek Lab)",
      period: "December 2024 - May 2025",
      desc: "Geometry-aware transformers for Antimicrobial Peptides design. Created state-of-the-art model for AMP generation. All 25 generated peptides tested active against clinically relevant bacteria.",
    },
    {
      role: "Student Researcher",
      org: "Max Planck Institute of Innovation and Competition (Net Zero Lab)",
      period: "January 2025 - April 2025",
      desc: "Investigating effects of governmental policies on Green investments with focus on the EU.",
    },
    {
      role: "Student Researcher",
      org: "Helmholtz Munich - AI for Health (Szczurek Lab)",
      period: "May 2024 - November 2024",
      desc: "Extended Jointformer for AMP generation and property prediction. Reimplemented various models including GPT-type and BERT for benchmarking.",
    },
    {
      role: "Student Researcher",
      org: "Bavarian AI Chair for Mathematical Foundations of AI",
      period: "September 2023 - February 2024",
      desc: "Extended ParFam symbolic regression method. Implemented RNNs, LSTMs, Transformers, and Set-Transformers from scratch using PyTorch.",
    },
    {
      role: "Student Researcher",
      org: "Max Planck Institute of Extraterrestrial Physics",
      period: "January 2023 - July 2023",
      desc: "XMM-Newton Observations of Supernova 1987A. Traced flux and spectral decline using eROSITA satellite data. Presented findings at conference.",
    },
  ];

  experience.forEach((exp) => {
    lines.push({
      text: `${exp.role}  (${exp.period})`,
      font: "F2",
      size: 9.8,
      spaceBefore: 3,
      spaceAfter: 1.5,
    });
    lines.push({ text: exp.org, font: "F3", size: 8.8, spaceAfter: 1.5 });
    addWrapped(`- ${exp.desc}`, "F1", 9.2, 92, 8, 3);
  });

  // Awards
  addSection("Awards & Scholarships");
  addWrapped(
    "- Deutschlandstipendium: Scholarship for particularly talented and committed students with excellent academic performance.",
    "F1",
    9.2,
    92,
    4,
    3,
  );
  addWrapped(
    "- INSPIRE SHE Scholarship: Scholarship for Higher Education under Innovation in Science Pursuit for Inspired Research by DST, India.",
    "F1",
    9.2,
    92,
    4,
    4,
  );

  // Skills
  addSection("Skills & Technologies");
  addWrapped("Programming: Python, Pascal, Linux, R, Git, SQL", "F1", 9.2, 94, 0, 2);
  addWrapped("ML & AI: PyTorch, TensorFlow, Machine Learning, Deep Learning", "F1", 9.2, 94, 0, 2);
  addWrapped("Tools: Excel, Tableau, Power BI, LaTeX, Microsoft Office", "F1", 9.2, 94, 0, 2);
  addWrapped("Languages: English (C1), German (A2)", "F1", 9.2, 94, 0, 2);

  return lines;
};

const createPdfBlob = (): Blob => {
  const pageWidth = 595; // A4 width in pt
  const pageHeight = 842; // A4 height in pt
  const marginX = 48;
  const topY = pageHeight - 48;
  const bottomY = 52;

  const lines = buildCvLines();
  const pages: string[][] = [[]];
  let currentPage = pages[0];
  let y = topY;

  for (const line of lines) {
    const needed = (line.spaceBefore ?? 0) + line.size + (line.rule ? 6 : 0) + (line.spaceAfter ?? 2);
    if (y - needed < bottomY) {
      currentPage = [];
      pages.push(currentPage);
      y = topY;
    }

    y -= line.spaceBefore ?? 0;
    const x = marginX + (line.indent ?? 0);
    currentPage.push(
      `BT /${line.font} ${line.size} Tf 1 0 0 1 ${x.toFixed(1)} ${y.toFixed(1)} Tm (${escapePdfText(line.text)}) Tj ET`,
    );

    if (line.rule) {
      const ruleY = y - 3;
      currentPage.push(
        `0.6 w 0.2 0.2 0.2 RG ${marginX} ${ruleY.toFixed(1)} m ${pageWidth - marginX} ${ruleY.toFixed(1)} l S`,
      );
      y -= 5;
    }

    y -= line.size * 1.15 + (line.spaceAfter ?? 2);
  }

  const objects: string[] = [];
  const pageObjIds: number[] = [];

  pages.forEach((_, idx) => {
    pageObjIds.push(6 + idx * 2);
  });

  objects.push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  objects.push(
    `2 0 obj\n<< /Type /Pages /Kids [${pageObjIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pages.length} >>\nendobj\n`,
  );
  objects.push("3 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n");
  objects.push("4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n");
  objects.push("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>\nendobj\n");

  pages.forEach((cmds, idx) => {
    const pageId = 6 + idx * 2;
    const contentId = 7 + idx * 2;
    const stream = cmds.join("\n") + "\n";

    objects.push(
      `${pageId} 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents ${contentId} 0 R >>\nendobj\n`,
    );
    objects.push(
      `${contentId} 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}endstream\nendobj\n`,
    );
  });

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];

  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += obj;
  }

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return new Blob([pdf], { type: "application/pdf" });
};

export const downloadCvPdf = async (): Promise<"static" | "generated"> => {
  const staticPath = "/Pankhil_Gawade_CV.pdf";
  try {
    const res = await fetch(staticPath, { method: "HEAD" });
    const contentType = res.headers.get("content-type") ?? "";
    if (res.ok && contentType.toLowerCase().includes("pdf")) {
      const link = document.createElement("a");
      link.href = staticPath;
      link.download = "Pankhil_Gawade_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return "static";
    }
  } catch {
    // Fall back to generated PDF
  }

  const blob = createPdfBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Pankhil_Gawade_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 5000);
  return "generated";
};

"use client";

import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { FaCss3Alt, FaDatabase, FaPalette, FaPenNib } from "react-icons/fa";
import { PiCursorClickFill } from "react-icons/pi";
import {
  SiDart, SiFigma, SiFlutter, SiJavascript, SiNextdotjs,
  SiNumpy, SiOpencv, SiPandas, SiPostgresql, SiPrisma, SiPython, SiReact,
  SiScikitlearn, SiTailwindcss, SiTensorflow, SiTypescript,
} from "react-icons/si";

const GITHUB = "https://github.com/Brenda116";
const LINKEDIN = "https://linkedin.com/in/brenda-anastasya16/";
const EMAIL = "anastasyabrenda16@gmail.com";
const CV = "/Brenda_Anastasya_CV.pdf";
const PHOTO = "/profile.jpeg";

type Project = {
  id: string; file: string; title: string; date: string; role: string;
  blurb: string; desc: string; did: string[]; stack: string[];
  tone: keyof typeof TONE; sticker?: string;
  repo?: string; demo?: string; paper?: string; shots: string[];
  metric?: string; metricLabel?: string;
};

const TONE = {
  butter: "bg-[#fbeab0] text-[#4a3a2a]",
  blue: "bg-[#c4dcf3] text-[#2f3f5c]",
  lavender: "bg-[#e3d8f4] text-[#3d3358]",
  sage: "bg-[#d3e5d0] text-[#34493a]",
} as const;

const ROT = ["-rotate-1 lg:-rotate-3", "rotate-1 lg:rotate-2", "rotate-1 lg:-rotate-2", "-rotate-1 lg:rotate-3"];
const OFF = ["lg:mt-6", "lg:mt-0", "lg:mt-10", "lg:mt-2"];

const projects: Project[] = [
  {
    id: "ml",
    file: "hog_svm_vs_cnn/",
    title: "Candidate Confidence Classification",
    date: "Jun 2026",
    role: "Author",
    blurb: "HOG + SVM against a CNN on 2,366 interview frames. The simpler model won.",
    desc: "Judging how confident a candidate looks in an interview is subjective. This study automates it from facial expression images and compares two approaches: HOG features with an SVM, and an end-to-end CNN.",
    did: [
      "Cleaned the public Mendeley dataset from 4,754 frames to 2,366 labeled images (1,469 unconfident, 897 confident).",
      "Extracted 8,100 HOG features per 128×128 image and tested Linear, RBF and Polynomial SVM kernels.",
      "Built a CNN with 3 convolutional blocks and 2 dense layers as the deep learning baseline.",
      "Evaluated both with 5 repeated stratified 80:20 splits. Polynomial SVM reached 74.18% accuracy against 71.94% for the CNN, and trained in about 22 s versus about 1,067 s (roughly 40x faster).",
    ],
    stack: ["Python", "TensorFlow", "OpenCV", "scikit-learn"],
    tone: "butter",
    sticker: "research ✿",
    paper: "/candidate-confidence-paper.pdf",
    shots: ["/projects/ml-1.png", "/projects/ml-2.png"],
    metric: "74.18%",
    metricLabel: "accuracy",
  },
  {
    id: "inventix",
    file: "inventix-fe/",
    title: "Inventix: Stock & Inventory",
    date: "Mar - Jun 2026",
    role: "Frontend developer & UI designer",
    blurb: "Inventory app for multi-business owners, built with a local café.",
    desc: "A stock and inventory management web app built with a local café, FOMO, and designed to serve more than one business.",
    did: [
      "Led the frontend and UI development.",
      "Delivered stock and supplier management and expense reports.",
      "Built automated low-stock and expiry alerts.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    tone: "blue",
    sticker: "real client ♡",
    repo: "https://github.com/Brenda116/inventix-fe",
    demo: "", // isi URL Inventix
    shots: ["/projects/inventix-1.png", "/projects/inventix-2.png", "/projects/inventix-3.png"],
  },
  {
    id: "azzura",
    file: "azzura-rewards-mobile/",
    title: "Azzura Rewards",
    date: "Oct - Dec 2025",
    role: "Frontend developer & UI/UX designer",
    blurb: "Loyalty app with daily streaks and gamified rewards.",
    desc: "A customer loyalty mobile app. I co-developed the frontend and the UI/UX in Flutter.",
    did: [
      "Built the interface in Flutter and Dart, with Provider for state.",
      "Implemented real-time profile management.",
      "Implemented daily check-in streaks and gamified reward mechanics.",
    ],
    stack: ["Flutter", "Dart", "Provider"],
    tone: "lavender",
    sticker: "mobile app ✦",
    repo: "https://github.com/Brenda116/azzura-rewards-mobile",
    shots: ["/projects/azzura-1.png", "/projects/azzura-2.png", "/projects/azzura-3.png"],
  },
  {
    id: "notte",
    file: "notte_azzura_website/",
    title: "Notte Azzura Pizza",
    date: "Nov - Dec 2025",
    role: "Frontend developer & UI/UX designer",
    blurb: "Restaurant website with custom landing animations.",
    desc: "A responsive web app for a pizza restaurant, co-developed with Next.js and TypeScript.",
    did: [
      "Built 5 informational pages.",
      "Designed custom landing animations and interactive hover states.",
      "Set up the database layer with Prisma and PostgreSQL.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    tone: "sage",
    sticker: "website ✿",
    repo: "https://github.com/Brenda116/notte_azzura_website",
    demo: "https://notte-azzura.vercel.app/login",
    shots: ["/projects/notte-1.png", "/projects/notte-2.png", "/projects/notte-3.png"],
  },
];

const stackGroups: Record<string, string[]> = {
  "Machine learning and data": ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "OpenCV", "SQL"],
  "Web and mobile": ["Next.js", "React.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Flutter", "Dart", "PostgreSQL", "Prisma"],
  Design: ["Figma", "Adobe Tools", "Canva"],
};
/* ---------------------------------------------------- */

const ICONS: Record<string, IconType> = {
  Python: SiPython, TensorFlow: SiTensorflow, OpenCV: SiOpencv,
  "scikit-learn": SiScikitlearn, Pandas: SiPandas, NumPy: SiNumpy,
  SQL: FaDatabase, "Next.js": SiNextdotjs, "React.js": SiReact,
  TypeScript: SiTypescript, JavaScript: SiJavascript, "HTML/CSS": FaCss3Alt,
  "Tailwind CSS": SiTailwindcss, Flutter: SiFlutter, Dart: SiDart,
  Provider: SiFlutter, PostgreSQL: SiPostgresql, Prisma: SiPrisma,
  Figma: SiFigma, "Adobe Tools": FaPalette, Canva: FaPenNib,
};

const BOW = {
  rose: ["#f08aa6", "#c9506f"],
  blue: ["#a9c9ee", "#5b82b5"],
  lilac: ["#cdb9ee", "#8467b8"],
} as const;

function Bow({ className = "", tone = "rose" }: { className?: string; tone?: keyof typeof BOW }) {
  const [fill, stroke] = BOW[tone];
  return (
    <svg viewBox="0 0 64 40" aria-hidden className={className}>
      <g fill={fill} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round">
        <path d="M32 20C20 4 2 2 4 18c1 14 16 16 28 2Z" />
        <path d="M32 20C44 4 62 2 60 18c-1 14-16 16-28 2Z" />
        <path d="M31 22c-3 8-7 12-11 16l8-2 5-12Z" />
        <path d="M33 22c3 8 7 12 11 16l-8-2-5-12Z" />
        <circle cx="32" cy="20" r="5" />
      </g>
    </svg>
  );
}

function Cherry({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className}>
      <path d="M24 6C21 14 17 21 14 26M24 6C27 13 32 19 36 24" fill="none" stroke="#5f8f66" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 6c6-4 12-2 14 2-6 0-11 0-14-2Z" fill="#7fb287" stroke="#5f8f66" strokeWidth="1.2" />
      <circle cx="13" cy="35" r="9" fill="#e5546f" />
      <circle cx="37" cy="33" r="9" fill="#e5546f" />
      <circle cx="10" cy="32" r="2.2" fill="#fff" opacity=".7" />
      <circle cx="34" cy="30" r="2.2" fill="#fff" opacity=".7" />
    </svg>
  );
}

function ComingSoon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative rounded-2xl border-2 border-dashed border-[#b7cde8] bg-[#fffdf7] p-5 text-center ${className}`}>
      <span aria-hidden className="twinkle text-2xl text-[#e8c75a]">✦</span>
      <p className="serif mt-1 text-3xl">To be added</p>
      <p className="mono mt-2 text-[12px] leading-5 text-[#74687a]">More projects are on the way. Check back soon ♡</p>
      <Bow tone="lilac" className="mx-auto mt-3 h-8 w-12" />
    </div>
  );
}

function Pearls() {
  return (
    <div aria-hidden className="mt-16 flex justify-center gap-2">
      {Array.from({ length: 11 }).map((_, i) => (
        <span key={i} className="h-2.5 w-2.5 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff,#e6e0f0_70%)] shadow-sm shadow-[#9a8fb5]/50" />
      ))}
    </div>
  );
}

function Tech({ name }: { name: string }) {
  const Icon = ICONS[name];
  return (
    <span className="mono inline-flex items-center gap-1.5 rounded-full border border-current/30 px-2.5 py-1 text-[11px]">
      {Icon ? <Icon aria-hidden className="text-sm" /> : null}
      {name}
    </span>
  );
}

function Shot({ src, alt, fallback, fit = "cover" }: { src: string; alt: string; fallback?: React.ReactNode; fit?: "cover" | "contain" }) {  const [bad, setBad] = useState(false);
  if (bad) {
    return (
      fallback ?? (
        <div className="mono flex h-full min-h-40 w-full items-center justify-center bg-[#e9f0f8] p-4 text-center text-[11px] text-[#74687a]">
          Tambahkan gambar: public{src}
        </div>
      )
    );
  }
  return <img src={src} alt={alt} onError={() => setBad(true)} className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`} />;
}

function CaseFile({ p, onClose }: { p: Project; onClose: () => void }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const btn = "mono rounded-full px-5 py-2 text-xs font-medium";
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#43343f]/55 p-3 backdrop-blur-sm sm:p-6" onClick={onClose}>
      <div
        role="dialog" aria-modal="true" aria-label={p.title}
        onClick={(e) => e.stopPropagation()}
        className="case-in grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-[#c9dcc6] bg-[#fffbf2] md:grid-cols-[1.1fr_1fr]"
      >
        <div className="bg-[#f1f6ef] p-4 sm:p-5">
          <div className="aspect-[16/10] overflow-hidden rounded-md border border-[#c9dcc6]">
            <a
              href={p.shots[i]} target="_blank" rel="noreferrer" title="Open full size"
              className="block aspect-[16/10] cursor-zoom-in overflow-hidden rounded-md border border-[#c9dcc6] bg-white"
            >
              <Shot key={p.shots[i]} src={p.shots[i]} alt={`${p.title} screenshot ${i + 1}`} fit="contain" />
            </a>
            <p className="mono mt-2 text-[11px] text-[#74687a]">Click the image to open it full size</p>
          </div>
          <div className="mt-3 flex gap-2">
            {p.shots.map((s, n) => (
              <button
                key={s} onClick={() => setI(n)} aria-label={`Screenshot ${n + 1}`}
                className={`h-14 w-24 overflow-hidden rounded border ${n === i ? "border-[#b9a5de]" : "border-[#c9dcc6] opacity-60 hover:opacity-100"}`}
              >
                <Shot src={s} alt="" fallback={<div className="h-full w-full bg-[#e9f0f8]" />} />
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <p className="mono text-xs text-[#74687a]">{p.file} · {p.date}</p>
            <button onClick={onClose} autoFocus className="mono text-xs text-[#74687a] hover:text-[#4f7a5a]">Close (Esc)</button>
          </div>
          <h2 className="serif mt-3 text-4xl leading-[1.05]">{p.title}</h2>
          <p className="mono mt-2 text-xs text-[#4f7a5a]">{p.role}</p>
          <p className="mt-5 text-[13px] leading-6 text-[#4f3f4d]">{p.desc}</p>
          <ul className="mt-4 space-y-2 text-[13px] leading-6 text-[#4f3f4d]">
            {p.did.map((d) => (
              <li key={d} className="flex gap-2"><span className="text-[#e07a9a]">♡</span><span>{d}</span></li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2 text-[#4f3f4d]">
            {p.stack.map((s) => <Tech key={s} name={s} />)}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {p.demo ? <a href={p.demo} target="_blank" rel="noreferrer" className={`${btn} bg-[#4f7a5a] hover:bg-[#436b4e] text-white`}>Live demo</a> : null}
            {p.paper ? <a href={p.paper} target="_blank" rel="noreferrer" className={`${btn} bg-[#4f7a5a] hover:bg-[#436b4e] text-white`}>Read the paper (PDF, Indonesian)</a> : null}
            {p.repo ? <a href={p.repo} target="_blank" rel="noreferrer" className={`${btn} border border-[#b7cde8] hover:border-[#4f7a5a]`}>Source code</a> : null}
          </div>
          {!p.demo && !p.paper ? (
            <p className="mono mt-4 text-[11px] text-[#74687a]">No live demo for this project. Screenshots are on the left.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <main className="mx-auto max-w-[1240px] p-3 sm:p-6">
      <div className="rounded-[2rem] border-2 border-dashed border-[#c9dcc6] bg-[#fffbf2] px-5 pb-16 sm:px-10">
        {/* nav */}
        <header className="flex items-center justify-between py-6">
          <a href="#top" aria-label="Home" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b7cde8] bg-white"><Bow tone="blue" className="h-6 w-8" /></a>
          <nav className="mono hidden gap-8 text-xs text-[#74687a] sm:flex">
            <a href="#cases" className="hover:text-[#4f7a5a]">Projects</a>
            <a href="#stack" className="hover:text-[#4f7a5a]">Stack</a>
            <a href="#contact" className="hover:text-[#4f7a5a]">Contact</a>
          </nav>
          <a href={CV} target="_blank" rel="noreferrer" className="mono rounded-full bg-[#4f7a5a] hover:bg-[#436b4e] px-5 py-2 text-xs font-medium text-white">Download CV</a>
        </header>

        {/* hero */}
        <section id="top" className="relative pt-10 sm:pt-16">
          <span aria-hidden className="twinkle pointer-events-none absolute right-[8%] top-2 hidden text-4xl text-[#e8c75a] sm:block">✦</span>
          <span aria-hidden className="twinkle pointer-events-none absolute right-[18%] top-9 hidden text-2xl text-[#8fb2dc] sm:block" style={{ animationDelay: "1s" }}>✧</span>
          <span aria-hidden className="twinkle pointer-events-none absolute right-[28%] top-3 hidden text-3xl text-[#e07a9a] sm:block" style={{ animationDelay: "2s" }}>♡</span>
          <span aria-hidden className="twinkle pointer-events-none absolute right-[38%] top-8 hidden text-2xl text-[#b9a5de] sm:block" style={{ animationDelay: "1.5s" }}>✿</span>
          <p className="serif text-3xl text-[#74687a]">Hi, I&apos;m ♡</p>
          <h1 className="script text-[clamp(4rem,11vw,9rem)] leading-[1.15] text-[#4f7a5a]">Brenda Anastasya</h1>
          <div className="mt-8 grid gap-8 text-[13px] leading-6 text-[#5c4a57] md:grid-cols-[1fr_1fr_220px]">
            <ul className="serif flex flex-wrap gap-2 text-xl leading-none">
              <li className="rounded-full border-2 border-[#43343f] px-4 py-2 text-[#43343f]">
                Informatics Engineering Student
              </li>
              <li className="rounded-full border-2 border-[#7a62a8] bg-[#e3d8f4]/50 px-4 py-2 text-[#7a62a8]">
                Data Analytics &amp; Machine Learning
              </li>
              <li className="rounded-full border-2 border-[#4f7a5a] bg-[#d3e5d0]/50 px-4 py-2 text-[#4f7a5a]">
                Web Developer
              </li>
              <li className="rounded-full border-2 border-[#d0476f] bg-[#f9c9d5]/40 px-4 py-2 text-[#d0476f]">
                Graphic Design
              </li>
            </ul>
            <p>
              I&apos;m an Informatics Engineering student at Universitas
              Tarumanagara. I work across data, web engineering, and design whether that&apos;s 
              training ML models in Python and TensorFlow, building responsive web apps with Next.js 
              and Laravel, or prototyping UI/UX in Figma. Feel free to explore my selected projects below!
            </p>
            <dl className="mono space-y-1 text-[11px] text-[#74687a] md:text-right">
              <dt className="sr-only">GPA</dt><dd>GPA 3.93 / 4.00</dd>
              <dt className="sr-only">Location</dt><dd>Jakarta, Indonesia</dd>
              <dt className="sr-only">Status</dt><dd className="text-[#4f7a5a]">I&apos;m Open to internships! ♡</dd>
            </dl>
          </div>
        </section>

        {/* collage */}
        <section id="cases" className="scroll-mt-6 pt-14">
          <h2 className="sr-only">Projects</h2>
          <p className="mb-12 flex items-start justify-center gap-2 sm:justify-start">
          <span className="serif wobble inline-flex items-center gap-3 rounded-full border-2 border-[#43343f] bg-[#fbeab0] px-5 py-2.5 text-xl text-[#43343f] shadow-[3px_3px_0_#43343f]">
            <PiCursorClickFill aria-hidden className="poke text-2xl text-[#d0476f]" />
            Click any card to open its case file
            <span aria-hidden className="twinkle text-[#e07a9a]">♡</span>
          </span>
          <svg
            aria-hidden viewBox="0 0 60 40"
            className="hidden h-10 w-14 text-[#43343f] sm:block"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M4 6C22 0 42 10 46 30" />
            <path d="M36 25l10 6 3-12" />
          </svg>
        </p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:items-start lg:gap-x-10 lg:gap-y-14">
            <figure className="relative z-10 rounded-lg bg-white p-3 pb-4 text-[#43343f] shadow-2xl shadow-[#9a8fb5]/35 sm:col-span-2 sm:mx-auto sm:w-72 lg:order-2 lg:col-span-1 lg:mx-0 lg:w-full lg:rotate-2">
              <Bow className="absolute -top-7 left-1/2 h-12 w-[4.5rem] -translate-x-1/2 -rotate-6" />
              <div className="aspect-[4/5] overflow-hidden bg-[#e9f0f8]">
                <Shot
                  src={PHOTO} alt="Portrait of Brenda Anastasya"
                  fallback={<div className="serif flex h-full items-center justify-center text-7xl text-[#4f7a5a]/40">BA</div>}
                />
              </div>
              <figcaption className="mono mt-3 text-[11px]">Brenda Anastasya</figcaption>
            </figure>

            {projects.map((p, i) => (
              <button
                key={p.id} onClick={() => setOpen(p)}
                className={`group relative z-0 rounded-2xl p-5 text-left shadow-2xl shadow-[#9a8fb5]/35 transition duration-300 hover:z-20 hover:-translate-y-2 hover:rotate-0 lg:hover:rotate-0 ${TONE[p.tone]} ${ROT[i % 4]} ${OFF[i % 4]} ${i === 0 ? "lg:order-1" : "lg:order-3"}`}
              >
                <span aria-hidden className="absolute right-4 top-4 text-lg opacity-60">♡</span>
                <span className="mono block pr-7 text-[11px] opacity-70">{p.file} · {p.date}</span>
                <span className="serif mt-2 block text-3xl leading-[1.05]">{p.title}</span>
                {p.metric ? (
                  <span className="serif mt-4 block text-6xl leading-none">
                    {p.metric}<span className="mono ml-2 text-[11px]">{p.metricLabel}</span>
                  </span>
                ) : null}
                <span className="mono mt-3 block text-[12px] leading-5 opacity-80">{p.blurb}</span>
                <span className="mt-4 flex gap-3 text-xl" aria-label={p.stack.join(", ")}>
                  {p.stack.map((s) => { const Icon = ICONS[s]; return Icon ? <Icon key={s} aria-hidden /> : null; })}
                </span>
                <span className="mono mt-4 inline-block text-[11px] underline underline-offset-4">Open case file</span>
                {p.sticker ? (
                  <span className="mono absolute -bottom-3 -right-2 rotate-6 rounded-full bg-white px-3 py-1 text-[11px] text-[#43343f] shadow-md shadow-[#9a8fb5]/30">{p.sticker}</span>
                ) : null}
              </button>
            ))}

            <ComingSoon className={`${ROT[projects.length % 4]} ${OFF[projects.length % 4]} lg:order-3`} />
          </div>
        </section>

        <Pearls />

        {/* stack */}
        <section id="stack" className="scroll-mt-6 pt-20">
          <h2 className="script text-6xl leading-[1.15] text-[#7a62a8]">Stack</h2>
          <div className="mt-8 space-y-8">
            {Object.entries(stackGroups).map(([group, items]) => (
              <div key={group}>
                <h3 className="mono text-xs text-[#74687a]">{group}</h3>
                <ul className="mt-3 flex flex-wrap gap-3">
                  {items.map((s) => {
                    const Icon = ICONS[s];
                    return (
                      <li key={s} className="flex w-[104px] flex-col items-center gap-2 rounded-2xl border border-[#c9dcc6] bg-[#ffffff] py-4 transition hover:border-[#b9a5de]">
                        {Icon ? <Icon aria-hidden className="text-3xl" /> : null}
                        <span className="mono text-[11px] text-[#74687a]">{s}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Pearls />

        {/* contact */}
        <section id="contact" className="scroll-mt-6 pt-20">
          <h2 className="script text-6xl leading-[1.15] text-[#d0476f] sm:text-8xl">Open to internships. <Cherry className="inline-block h-10 w-10 align-middle sm:h-16 sm:w-16" /></h2>
          <p className="mt-5 max-w-xl text-[13px] leading-6 text-[#5c4a57]">
            Machine learning, data analytics, or frontend. Before this I interned as a social media intern at Kompas Gramedia Radio Network (SmartFM, Jul - Sep 2023), producing reels and posts and assisting live video shoots.
          </p>
          <div className="mono mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <a href={`mailto:${EMAIL}`} className="underline decoration-[#b7cde8] underline-offset-4 hover:decoration-[#b9a5de]">{EMAIL}</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="underline decoration-[#b7cde8] underline-offset-4 hover:decoration-[#b9a5de]">LinkedIn</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="underline decoration-[#b7cde8] underline-offset-4 hover:decoration-[#b9a5de]">GitHub</a>
          </div>
        </section>

        <footer className="mono mt-20 border-t border-[#c9dcc6] pt-6 text-[11px] text-[#9a8f9d]">
          Built with Next.js, TypeScript, and Tailwind CSS.
        </footer>
      </div>

      {open ? <CaseFile key={open.id} p={open} onClose={() => setOpen(null)} /> : null}
    </main>
  );
}

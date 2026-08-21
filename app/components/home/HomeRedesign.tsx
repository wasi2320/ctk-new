"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { homepageFaqItems } from "@/lib/structured-data";

const SERVICES = [
  {
    icon: "cloud",
    title: "AWS architecture and migration",
    description:
      "Design landing zones, networks, data services, backups, and tested cutover plans for secure AWS adoption.",
    href: "/cloud-service",
  },
  {
    icon: "dev",
    title: "DevOps and CI/CD",
    description:
      "Automate build, test, release, rollback, and infrastructure workflows with CI/CD, Terraform, and GitOps.",
    href: "/devops",
  },
  {
    icon: "k8s",
    title: "Kubernetes and Amazon EKS",
    description:
      "Design, migrate, secure, and operate EKS with Helm, ArgoCD, autoscaling, observability, and cost controls.",
    href: "/kubernetes",
  },
  {
    icon: "shield",
    title: "Security and compliance",
    description:
      "Implement IAM, encryption, logging, segmentation, monitoring, and evidence for regulated workloads.",
    href: "/security-and-compliance",
  },
  {
    icon: "fin",
    title: "AWS FinOps",
    description:
      "Make cloud spend visible and accountable through tagging, rightsizing, commitments, and cost-aware architecture.",
    href: "/finops",
  },
  {
    icon: "ai",
    title: "AI workflows on AWS",
    description:
      "Build secure AI applications and automations around a defined business use case, trusted data, and measurable outcomes.",
    href: "/ai",
  },
] as const;

const PIPELINE = [
  { icon: "commit", title: "Commit", detail: "reviewed change" },
  { icon: "build", title: "Build", detail: "signed image" },
  { icon: "test", title: "Test", detail: "quality gates" },
  { icon: "deploy", title: "Deploy", detail: "GitOps sync" },
  { icon: "observe", title: "Observe", detail: "logs and metrics" },
] as const;

const PROBLEMS = [
  ["Rising AWS spend", "Find waste, assign ownership, and protect reliability while reducing cost."],
  ["Fragile releases", "Replace manual deployment steps with tested pipelines and safe rollback paths."],
  ["Complex Kubernetes", "Make EKS secure, observable, scalable, and easier for your team to operate."],
  ["An approaching audit", "Close infrastructure control gaps and make technical evidence easier to produce."],
  ["A high-risk migration", "Map dependencies, test the move, and rehearse cutover before production changes."],
] as const;

function DiagramIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {name === "cloud" && <path {...common} d="M7 18h9a4 4 0 0 0 .5-7.97A6 6 0 0 0 5 9.5 3.5 3.5 0 0 0 6 18Z" />}
      {name === "dev" && <><path {...common} d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" /></>}
      {name === "k8s" && <><path {...common} d="M12 3l7 4v8l-7 4-7-4V7z" /><circle {...common} cx="12" cy="12" r="2.4" /></>}
      {name === "shield" && <><path {...common} d="M12 3l7 3v6c0 4.2-3 7-7 9-4-2-7-4.8-7-9V6z" /><path {...common} d="M9 12l2 2 4-4" /></>}
      {name === "ai" && <><circle {...common} cx="12" cy="12" r="3" /><path {...common} d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" /></>}
      {name === "fin" && <path {...common} d="M4 19V5M4 15l5-5 4 3 7-8" />}
      {name === "commit" && <path {...common} d="M12 3v10m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 6v4a3 3 0 0 0 3 3h1" />}
      {name === "build" && <path {...common} d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2zM4 6.5L12 11l8-4.5M12 11v9" />}
      {name === "test" && <path {...common} d="M5 12l4 4L19 6" />}
      {name === "deploy" && <path {...common} d="M12 3v12m0-12l-4 4m4-4l4 4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />}
      {name === "observe" && <><path {...common} d="M4 13a8 8 0 0 1 16 0M12 13l3-3M9 20h6" /><circle cx="12" cy="13" r="1.6" fill="currentColor" /></>}
    </svg>
  );
}

/**
 * Redesigned homepage, self-contained, AWS-aligned dark-terminal / light theme.
 * Styles are scoped under `.home-rd` so they never leak into the rest of the site.
 * All canvas/interaction engines run in one effect with full cleanup.
 */
const CSS = `
.home-rd{
  --bg:#f4f7fb; --bg-2:#e8eff7; --surface:#ffffff;
  --ink:#16212e; --ink-2:#2b3a4d; --mist:#5a6b81; --dim:#93a3b8;
  --line:rgba(22,45,80,.09); --line-2:rgba(22,45,80,.16);
  --teal:#0972d3; --teal-2:#2b8fe8; --indigo:#146eb4; --violet:#0b5cad; --signal:#ff9900; --orange:#ff9900; --navy:#16212e;
  --grad:linear-gradient(105deg,#0972d3 0%,#2b8fe8 52%,#57b1f5 100%);
  --r:18px; --r-lg:26px; --maxw:1200px;
  --fd:var(--font-sora),"Sora",system-ui,sans-serif;
  --fb:var(--font-inter),"Inter",system-ui,sans-serif;
  --fm:var(--font-jbmono),"JetBrains Mono",ui-monospace,Menlo,monospace;
  position:relative; background:var(--bg); color:var(--ink); font-family:var(--fb); font-size:17px; line-height:1.6; overflow-x:hidden; min-height:100vh; -webkit-font-smoothing:antialiased;
}
.home-rd *{box-sizing:border-box;}
.home-rd a{color:inherit;text-decoration:none;}
.home-rd img{max-width:100%;display:block;}
.home-rd ::selection{background:rgba(9,114,211,.2);}
.home-rd :focus-visible{outline:2px solid var(--indigo);outline-offset:3px;border-radius:6px;}
.home-rd h1,.home-rd h2,.home-rd h3{font-family:var(--fd);font-weight:700;text-wrap:balance;margin:0;line-height:1.04;color:var(--ink);}
.home-rd p{margin:0;}
.home-rd .wrap{width:100%;max-width:var(--maxw);margin-inline:auto;padding-inline:24px;}
.home-rd section{position:relative;z-index:1;}
.home-rd .bg-grid{position:absolute;inset:0;z-index:0;pointer-events:none;background-image:linear-gradient(rgba(18,28,55,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(18,28,55,.03) 1px,transparent 1px);background-size:60px 60px;mask-image:radial-gradient(120% 90% at 50% 0%,#000 42%,transparent 80%);height:100vh;}
.home-rd .cur-dot,.home-rd .cur-ring{position:fixed;top:0;left:0;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);}
.home-rd .cur-dot{width:7px;height:7px;background:var(--indigo);box-shadow:0 0 10px rgba(9,114,211,.6);}
.home-rd .cur-ring{width:34px;height:34px;border:1.5px solid rgba(9,114,211,.45);transition:width .25s,height .25s,border-color .25s,background .25s;}
.home-rd .cur-ring.big{width:60px;height:60px;border-color:rgba(9,114,211,.8);background:rgba(9,114,211,.06);}
@media(hover:none){.home-rd .cur-dot,.home-rd .cur-ring{display:none;}}
.home-rd .eyebrow{font-family:var(--fm);font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--teal);display:inline-flex;align-items:center;gap:9px;font-weight:500;}
.home-rd .eyebrow::before{content:"//";color:var(--dim);}
.home-rd .grad{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;}
.home-rd .btn{font-family:var(--fd);font-weight:600;font-size:15.5px;display:inline-flex;align-items:center;gap:10px;padding:14px 24px;border-radius:999px;border:1px solid transparent;cursor:pointer;transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .3s;will-change:transform;}
.home-rd .btn-primary{background:var(--orange);color:#16212e;box-shadow:0 14px 34px -12px rgba(255,153,0,.6);}
.home-rd .btn-primary:hover{transform:translateY(-2px);box-shadow:0 22px 48px -14px rgba(255,153,0,.85);}
.home-rd .btn-ghost{background:var(--surface);color:var(--ink);border:1px solid var(--line-2);}
.home-rd .btn-ghost:hover{border-color:var(--indigo);color:var(--indigo);transform:translateY(-2px);}
.home-rd .btn .arw{transition:transform .25s;} .home-rd .btn:hover .arw{transform:translateX(4px);}
.home-rd .nav{position:sticky;top:0;z-index:60;backdrop-filter:blur(16px) saturate(1.4);background:rgba(244,247,251,.8);border-bottom:1px solid var(--line);}
.home-rd .nav-in{display:flex;align-items:center;justify-content:space-between;height:70px;}
.home-rd .brand{display:flex;align-items:center;gap:11px;font-family:var(--fd);font-weight:800;font-size:19px;letter-spacing:-.01em;}
.home-rd .brand .mark{width:30px;height:30px;border-radius:9px;position:relative;background:var(--grad);box-shadow:0 8px 18px -6px rgba(9,114,211,.6);}
.home-rd .brand .mark::after{content:"";position:absolute;inset:8px;border-radius:4px;border:1.5px solid rgba(255,255,255,.7);}
.home-rd .brand .k{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;}
.home-rd .nav-links{display:flex;gap:30px;}
.home-rd .nav-links a{font-size:14.5px;color:var(--mist);font-weight:500;transition:color .2s;position:relative;}
.home-rd .nav-links a:hover{color:var(--ink);}
.home-rd .nav-links a::after{content:"";position:absolute;left:0;bottom:-6px;height:2px;width:0;background:var(--grad);border-radius:2px;transition:width .25s;}
.home-rd .nav-links a:hover::after{width:100%;}
.home-rd .nav .btn{padding:10px 18px;font-size:14px;}
@media(max-width:900px){.home-rd .nav-links{display:none;}}
.home-rd .hero{position:relative;min-height:92vh;display:flex;align-items:center;padding:70px 0 60px;overflow:hidden;}
.home-rd #aurora{position:absolute;inset:0;width:100%;height:100%;z-index:0;}
.home-rd .hero-fade{position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(90deg,rgba(244,247,251,.6) 0%,rgba(244,247,251,.12) 32%,transparent 52%),linear-gradient(180deg,rgba(244,247,251,.45) 0%,transparent 16%,transparent 60%,var(--bg) 100%);}
.home-rd .hero-in{position:relative;z-index:2;display:grid;grid-template-columns:1.12fr .88fr;gap:48px;align-items:center;width:100%;}
@media(max-width:1000px){.home-rd .hero-in{grid-template-columns:1fr;gap:44px;}}
.home-rd .hero h1{font-size:clamp(40px,5.5vw,64px);font-weight:800;letter-spacing:-.035em;margin:22px 0 22px;}
.home-rd .hero .sub{color:var(--mist);font-size:clamp(16px,2vw,19px);max-width:48ch;}
.home-rd .cta-row{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px;}
.home-rd .trust{margin-top:26px;display:flex;align-items:center;gap:12px;font-size:13.5px;color:var(--mist);font-family:var(--fm);flex-wrap:wrap;}
.home-rd .stars{color:var(--signal);letter-spacing:2px;} .home-rd .sep{color:var(--dim);}
.home-rd .kin span{display:inline-block;opacity:0;transform:translateY(.5em) rotateX(-40deg);filter:blur(6px);transition:opacity .5s,transform .5s,filter .5s;}
.home-rd .kin.go span{opacity:1;transform:none;filter:none;}
.home-rd .term{position:relative;border-radius:16px;background:linear-gradient(180deg,#0d1526,#0a1120);border:1px solid rgba(18,28,55,.2);box-shadow:0 50px 100px -46px rgba(30,40,90,.55),0 0 0 1px rgba(9,114,211,.08);overflow:hidden;font-family:var(--fm);}
.home-rd .term::before{content:"";position:absolute;inset:-1px;border-radius:inherit;padding:1px;background:linear-gradient(140deg,rgba(43,143,232,.6),transparent 45%,rgba(11,92,173,.5));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none;}
.home-rd .term-bar{display:flex;align-items:center;gap:8px;padding:13px 16px;border-bottom:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.02);}
.home-rd .tl{width:11px;height:11px;border-radius:50%;} .home-rd .tl.r{background:#ff5f57;}.home-rd .tl.y{background:#febc2e;}.home-rd .tl.g{background:#28c840;}
.home-rd .term-title{margin-left:8px;font-size:12px;color:#6b7690;letter-spacing:.03em;}
.home-rd .term-body{padding:18px;font-size:13.5px;line-height:1.7;min-height:340px;color:#c9d3e6;}
.home-rd .term-body .ln{white-space:pre-wrap;word-break:break-word;}
.home-rd .t-prompt{color:#4ea3f0;} .home-rd .t-cmd{color:#eaf0fb;} .home-rd .t-dim{color:#6b7690;}
.home-rd .t-ok{color:#34d399;} .home-rd .t-info{color:#8fb4e0;} .home-rd .t-warn{color:#ff9900;}
.home-rd .t-cursor{display:inline-block;width:8px;height:15px;background:#4ea3f0;vertical-align:-2px;margin-left:2px;animation:hrblink 1s steps(1) infinite;box-shadow:0 0 8px #4ea3f0;}
@keyframes hrblink{50%{opacity:0;}}
.home-rd .term-foot{display:flex;align-items:center;justify-content:space-between;padding:11px 16px;border-top:1px solid rgba(255,255,255,.06);font-size:11.5px;color:#6b7690;letter-spacing:.04em;}
.home-rd .term-foot .live{display:inline-flex;align-items:center;gap:7px;color:#ff9900;}
.home-rd .term-foot .pip{width:7px;height:7px;border-radius:50%;background:#ff9900;box-shadow:0 0 0 0 rgba(255,153,0,.5);animation:hrpulse 2s infinite;}
@keyframes hrpulse{0%{box-shadow:0 0 0 0 rgba(255,153,0,.5);}70%{box-shadow:0 0 0 8px rgba(255,153,0,0);}100%{box-shadow:0 0 0 0 rgba(255,153,0,0);}}
.home-rd .trust-strip{background:var(--surface);border-block:1px solid var(--line);padding:26px 0;}
.home-rd .trust-in{display:flex;align-items:center;justify-content:center;gap:26px 34px;flex-wrap:wrap;}
.home-rd .ts-item{display:flex;align-items:center;gap:13px;}
.home-rd .ts-item img.awsb{height:52px;width:auto;}
.home-rd .ts-txt b{display:block;font-family:var(--fd);font-weight:700;font-size:15px;color:var(--ink);line-height:1.15;}
.home-rd .ts-txt span{font-family:var(--fm);font-size:11.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--mist);}
.home-rd .ts-sep{width:1px;height:40px;background:var(--line2);}
@media(max-width:640px){.home-rd .ts-sep{display:none;}}
.home-rd a.clutch{transition:transform .22s;}
.home-rd a.clutch:hover{transform:translateY(-2px);}
.home-rd .cl-logo{font-family:var(--fd);font-weight:800;font-size:19px;letter-spacing:-.02em;color:#ff3d2e;}
.home-rd .ts-txt .stars{color:var(--signal);letter-spacing:1px;font-size:13px;}
.home-rd .ts-badges{display:flex;gap:8px;}
.home-rd .ts-badges .b{font-family:var(--fm);font-weight:700;font-size:12.5px;letter-spacing:.04em;border:1px solid var(--line2);border-radius:9px;padding:8px 12px;background:var(--bg);color:var(--ink-2);}
.home-rd .answer-sec{padding:76px 0 54px;background:var(--surface);}
.home-rd .answer-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:42px;align-items:start;}
@media(max-width:840px){.home-rd .answer-grid{grid-template-columns:1fr;}}
.home-rd .answer-copy h2{font-size:clamp(29px,4vw,44px);margin:15px 0 18px;letter-spacing:-.025em;}
.home-rd .answer-copy p{font-size:18px;color:var(--ink-2);max-width:68ch;}
.home-rd .answer-copy p+p{margin-top:14px;color:var(--mist);font-size:16px;}
.home-rd .answer-facts{display:grid;gap:12px;}
.home-rd .answer-fact{padding:17px 18px;border:1px solid var(--line);border-radius:14px;background:var(--bg);}
.home-rd .answer-fact b{display:block;font-family:var(--fd);font-size:14px;color:var(--ink);margin-bottom:3px;}
.home-rd .answer-fact span{display:block;color:var(--mist);font-size:14px;}
.home-rd .problem-sec{padding:64px 0 92px;background:var(--surface);}
.home-rd .problem-head{display:flex;justify-content:space-between;align-items:end;gap:28px;margin-bottom:30px;}
.home-rd .problem-head h2{font-size:clamp(28px,3.7vw,42px);max-width:18ch;margin-top:14px;}
.home-rd .problem-head p{max-width:43ch;color:var(--mist);}
@media(max-width:760px){.home-rd .problem-head{align-items:start;flex-direction:column;}}
.home-rd .problem-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;}
@media(max-width:980px){.home-rd .problem-grid{grid-template-columns:repeat(2,1fr);}}
@media(max-width:560px){.home-rd .problem-grid{grid-template-columns:1fr;}}
.home-rd .problem-card{min-height:180px;padding:22px;border:1px solid var(--line);border-radius:16px;background:linear-gradient(155deg,#fff,var(--bg));}
.home-rd .problem-card .num{font-family:var(--fm);color:var(--teal);font-size:12px;letter-spacing:.08em;}
.home-rd .problem-card h3{font-size:17px;margin:24px 0 9px;line-height:1.2;}
.home-rd .problem-card p{color:var(--mist);font-size:14px;line-height:1.5;}
.home-rd .mq-band{padding:44px 0;background:linear-gradient(180deg,var(--surface),var(--bg-2));border-block:1px solid var(--line);}
.home-rd .mq-label{text-align:center;font-family:var(--fm);font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--mist);margin-bottom:26px;}
.home-rd .mq-wrap{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);}
.home-rd .mq-wrap+.mq-wrap{margin-top:14px;}
.home-rd .mq{display:flex;gap:14px;width:max-content;animation:hrslideL 40s linear infinite;}
.home-rd .mq.rev{animation:hrslideR 34s linear infinite;}
@keyframes hrslideL{to{transform:translateX(-50%);}}
@keyframes hrslideR{from{transform:translateX(-50%);}to{transform:translateX(0);}}
.home-rd .mq-wrap:hover .mq{animation-play-state:paused;}
.home-rd .chip{display:inline-flex;align-items:center;gap:10px;padding:11px 18px;border-radius:13px;background:var(--surface);border:1px solid var(--line);box-shadow:0 8px 20px -14px rgba(20,30,70,.5);font-family:var(--fm);font-size:14px;color:var(--ink-2);font-weight:500;white-space:nowrap;transition:transform .25s,box-shadow .25s,border-color .25s;}
.home-rd .chip:hover{transform:translateY(-3px);box-shadow:0 16px 30px -14px rgba(9,114,211,.45);border-color:var(--line-2);}
.home-rd .chip .d{width:9px;height:9px;border-radius:3px;background:var(--grad);flex:none;}
.home-rd .sec{padding:104px 0;}
.home-rd .sec-head{max-width:680px;margin-bottom:56px;}
.home-rd .sec-head h2{font-size:clamp(28px,4.2vw,46px);font-weight:700;letter-spacing:-.02em;margin:16px 0 14px;}
.home-rd .sec-head p{color:var(--mist);font-size:17px;}
.home-rd .pipe{position:relative;display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:20px;}
@media(max-width:820px){.home-rd .pipe{grid-template-columns:1fr;}}
.home-rd .pipe-line{position:absolute;top:34px;left:6%;right:6%;height:2px;background:var(--line-2);z-index:0;border-radius:2px;}
@media(max-width:820px){.home-rd .pipe-line{display:none;}}
.home-rd .pipe-line .fill{position:absolute;inset:0;width:0;background:var(--grad);box-shadow:0 0 14px rgba(9,114,211,.5);transition:width 2.4s cubic-bezier(.4,.1,.2,1);border-radius:2px;}
.home-rd .stage{position:relative;z-index:1;text-align:center;}
.home-rd .stage .node{width:70px;height:70px;margin:0 auto 18px;border-radius:18px;display:grid;place-items:center;background:var(--surface);border:1px solid var(--line-2);color:var(--dim);transition:.5s;box-shadow:0 10px 24px -18px rgba(20,30,70,.5);}
.home-rd .stage .node svg{width:28px;height:28px;}
.home-rd .stage.on .node{border-color:transparent;color:#fff;background:var(--grad);box-shadow:0 16px 34px -12px rgba(9,114,211,.6);transform:translateY(-4px);}
.home-rd .stage h4{font-family:var(--fd);font-size:16px;margin:0 0 6px;transition:.4s;color:var(--mist);}
.home-rd .stage.on h4{color:var(--ink);}
.home-rd .stage p{font-family:var(--fm);font-size:12px;color:var(--dim);}
.home-rd .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;border-block:1px solid var(--line);padding:46px 0;}
@media(max-width:760px){.home-rd .stats{grid-template-columns:repeat(2,1fr);gap:34px 24px;}}
.home-rd .stat .n{font-family:var(--fd);font-weight:800;font-size:clamp(34px,5vw,52px);letter-spacing:-.03em;font-variant-numeric:tabular-nums;line-height:1;color:var(--ink);}
.home-rd .stat .n span{font-size:.55em;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;}
.home-rd .stat .l{margin-top:10px;font-family:var(--fm);font-size:12.5px;color:var(--mist);letter-spacing:.04em;text-transform:uppercase;}
.home-rd .stat .source{display:block;margin-top:7px;color:var(--dim);font-size:12px;line-height:1.4;}
.home-rd .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;perspective:1300px;}
@media(max-width:940px){.home-rd .cards{grid-template-columns:repeat(2,1fr);}}
@media(max-width:600px){.home-rd .cards{grid-template-columns:1fr;}}
.home-rd .card{--mx:50%;--my:0%;position:relative;border-radius:var(--r);padding:28px 26px 30px;background:var(--surface);border:1px solid var(--line);box-shadow:0 20px 50px -36px rgba(20,30,70,.4);overflow:hidden;transform-style:preserve-3d;transition:transform .16s ease-out,border-color .3s,box-shadow .3s;}
.home-rd .card::before{content:"";position:absolute;inset:0;border-radius:inherit;background:radial-gradient(340px circle at var(--mx) var(--my),rgba(9,114,211,.1),transparent 60%);opacity:0;transition:opacity .3s;}
.home-rd .card:hover::before{opacity:1;}
.home-rd .card:hover{border-color:transparent;box-shadow:0 40px 70px -40px rgba(9,114,211,.45);}
.home-rd .card>*{position:relative;transform:translateZ(30px);}
.home-rd .card .ic{width:48px;height:48px;border-radius:13px;display:grid;place-items:center;margin-bottom:20px;background:linear-gradient(140deg,rgba(43,143,232,.14),rgba(9,114,211,.14));border:1px solid rgba(9,114,211,.2);color:var(--indigo);}
.home-rd .card .ic svg{width:23px;height:23px;}
.home-rd .card h3{font-size:20px;font-weight:700;margin-bottom:9px;}
.home-rd .card p{color:var(--mist);font-size:15px;}
.home-rd .card .more{margin-top:18px;font-family:var(--fm);font-size:13px;color:var(--indigo);display:inline-flex;gap:7px;opacity:0;transform:translateZ(30px) translateY(4px);transition:.3s;}
.home-rd .card:hover .more{opacity:1;transform:translateZ(30px) translateY(0);}
.home-rd .globe-sec{overflow:hidden;background:linear-gradient(180deg,var(--bg),var(--bg-2));}
.home-rd .globe-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;}
@media(max-width:920px){.home-rd .globe-grid{grid-template-columns:1fr;}}
.home-rd .globe-hold{position:relative;aspect-ratio:1;max-width:520px;margin-inline:auto;width:100%;}
.home-rd #globe{width:100%;height:100%;display:block;}
.home-rd .region-list{display:flex;flex-direction:column;gap:14px;margin-top:26px;}
.home-rd .region{display:flex;align-items:center;gap:12px;font-family:var(--fm);font-size:13.5px;color:var(--mist);}
.home-rd .region .d{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 10px rgba(9,114,211,.6);}
.home-rd .region b{color:var(--ink);font-weight:600;}
.home-rd .arch-card{border-radius:var(--r-lg);padding:26px;background:#0b1424;border:1px solid rgba(255,255,255,.1);box-shadow:0 38px 80px -46px rgba(10,30,70,.7);color:#dce7f8;}
.home-rd .arch-label{font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.11em;color:#7fbdf0;margin-bottom:12px;}
.home-rd .arch-flow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr auto 1.2fr;align-items:center;gap:9px;}
@media(max-width:700px){.home-rd .arch-flow{grid-template-columns:1fr;}.home-rd .arch-arrow{transform:rotate(90deg);justify-self:center;}}
.home-rd .arch-node{min-height:76px;padding:13px 12px;border-radius:13px;border:1px solid rgba(127,189,240,.2);background:rgba(255,255,255,.055);display:flex;flex-direction:column;justify-content:center;}
.home-rd .arch-node strong{font-family:var(--fd);font-size:13px;color:#fff;line-height:1.25;}
.home-rd .arch-node span{font-family:var(--fm);font-size:10.5px;color:#91a4bd;margin-top:3px;}
.home-rd .arch-node.accent{border-color:rgba(255,153,0,.55);background:rgba(255,153,0,.1);}
.home-rd .arch-arrow{font-family:var(--fm);color:#4ea3f0;font-size:19px;}
.home-rd .arch-rails{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px;}
@media(max-width:560px){.home-rd .arch-rails{grid-template-columns:1fr;}}
.home-rd .arch-rail{border-radius:12px;padding:13px 14px;background:rgba(78,163,240,.07);border:1px solid rgba(78,163,240,.13);font-size:12px;color:#9fb1c9;}
.home-rd .arch-rail b{color:#dce7f8;font-weight:600;}
.home-rd .arch-note{margin-top:15px;font-size:11.5px;color:#7588a2;font-family:var(--fm);}
.home-rd .proof{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
@media(max-width:860px){.home-rd .proof{grid-template-columns:1fr;}}
.home-rd .pcard{border:1px solid var(--line);border-radius:var(--r);padding:26px;background:var(--surface);box-shadow:0 20px 50px -38px rgba(20,30,70,.4);transition:transform .3s,box-shadow .3s;}
.home-rd .pcard:hover{transform:translateY(-5px);box-shadow:0 34px 60px -34px rgba(9,114,211,.4);}
.home-rd .pcard .tag{font-family:var(--fm);font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--violet);}
.home-rd .pcard h3{font-size:19px;margin:12px 0 10px;font-weight:700;}
.home-rd .pcard p{color:var(--mist);font-size:14.5px;margin-bottom:18px;}
.home-rd .metrics{display:flex;flex-wrap:wrap;gap:8px;}
.home-rd .metric{font-family:var(--fm);font-size:12.5px;color:var(--teal);background:rgba(43,143,232,.09);border:1px solid rgba(43,143,232,.24);border-radius:999px;padding:5px 11px;font-variant-numeric:tabular-nums;}
.home-rd .comply{border:1px solid var(--line);border-radius:var(--r-lg);padding:42px;display:flex;align-items:center;justify-content:space-between;gap:30px;flex-wrap:wrap;background:var(--surface);box-shadow:0 26px 60px -40px rgba(20,30,70,.35);position:relative;overflow:hidden;}
.home-rd .comply::after{content:"";position:absolute;top:-40%;right:-8%;width:340px;height:340px;background:radial-gradient(circle,rgba(11,92,173,.14),transparent 70%);}
.home-rd .badges{display:flex;gap:12px;flex-wrap:wrap;position:relative;}
.home-rd .badge{font-family:var(--fm);font-weight:700;font-size:15px;letter-spacing:.06em;border:1px solid var(--line-2);border-radius:12px;padding:12px 18px;background:var(--bg);color:var(--ink);}
.home-rd .comply .t{max-width:42ch;position:relative;}
.home-rd .comply .t h3{font-size:24px;margin-bottom:8px;} .home-rd .comply .t p{color:var(--mist);font-size:15px;}
.home-rd .process{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;counter-reset:step;}
@media(max-width:820px){.home-rd .process{grid-template-columns:repeat(2,1fr);}}
@media(max-width:520px){.home-rd .process{grid-template-columns:1fr;}}
.home-rd .process-step{counter-increment:step;padding:24px;border:1px solid var(--line);border-radius:16px;background:var(--surface);}
.home-rd .process-step::before{content:"0" counter(step);font-family:var(--fm);font-size:12px;color:var(--teal);letter-spacing:.08em;}
.home-rd .process-step h3{font-size:18px;margin:19px 0 8px;}
.home-rd .process-step p{font-size:14px;color:var(--mist);}
.home-rd .faq-list{display:grid;gap:12px;max-width:900px;}
.home-rd .faq-list details{border:1px solid var(--line);border-radius:15px;background:var(--surface);padding:0 20px;}
.home-rd .faq-list summary{cursor:pointer;list-style:none;font-family:var(--fd);font-weight:600;font-size:17px;padding:20px 34px 20px 0;position:relative;}
.home-rd .faq-list summary::-webkit-details-marker{display:none;}
.home-rd .faq-list summary::after{content:"+";position:absolute;right:2px;top:17px;font-family:var(--fm);font-size:22px;color:var(--teal);}
.home-rd .faq-list details[open] summary::after{content:"−";}
.home-rd .faq-list details p{color:var(--mist);font-size:15px;padding:0 34px 20px 0;max-width:78ch;}
.home-rd .cta{padding:120px 0;}
.home-rd .cta .panel{position:relative;border-radius:32px;overflow:hidden;text-align:center;padding:96px 32px;background:linear-gradient(125deg,#16212e 0%,#0d5cad 55%,#2b8fe8 100%);box-shadow:0 50px 120px -50px rgba(13,92,173,.6);}
.home-rd #ctagrid{position:absolute;inset:0;z-index:0;opacity:.6;}
.home-rd .cta .in{position:relative;z-index:1;max-width:720px;margin-inline:auto;}
.home-rd .cta .in .eyebrow{color:rgba(255,255,255,.85);} .home-rd .cta .in .eyebrow::before{color:rgba(255,255,255,.5);}
.home-rd .cta h2{color:#fff;font-size:clamp(34px,5.6vw,60px);font-weight:800;letter-spacing:-.03em;}
.home-rd .cta p{color:rgba(255,255,255,.9);font-size:18px;margin:20px 0 34px;}
.home-rd .cta .btn-primary{background:var(--orange);color:#16212e;box-shadow:0 20px 44px -16px rgba(255,153,0,.55);}
.home-rd .ft{border-top:1px solid var(--line);padding:42px 0 48px;}
.home-rd .ft-in{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;}
.home-rd .ft .meta{font-family:var(--fm);font-size:12.5px;color:var(--mist);letter-spacing:.03em;}
.home-rd .ft a.meta:hover{color:var(--indigo);}
.home-rd .rv{opacity:0;transform:translateY(28px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1);}
.home-rd .rv.in{opacity:1;transform:none;}
.home-rd .rv.d1{transition-delay:.08s;}.home-rd .rv.d2{transition-delay:.16s;}.home-rd .rv.d3{transition-delay:.24s;}
@media(prefers-reduced-motion:reduce){
  .home-rd .rv{opacity:1!important;transform:none!important;transition:none!important;}
  .home-rd .kin span{opacity:1!important;transform:none!important;filter:none!important;}
  .home-rd .mq,.home-rd .t-cursor,.home-rd .term-foot .pip{animation:none!important;}
}
`;

export default function HomeRedesign() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    let killed = false;
    const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const hoverable = matchMedia("(hover:hover)").matches;
    const winL: Array<{ t: string; f: EventListenerOrEventListenerObject }> = [];
    const onWin = (t: string, f: EventListenerOrEventListenerObject, o?: AddEventListenerOptions) => { window.addEventListener(t, f, o); winL.push({ t, f }); };
    const observers: IntersectionObserver[] = [];
    const $ = (s: string) => root.querySelector(s) as HTMLElement | null;
    const $$ = (s: string) => Array.from(root.querySelectorAll(s)) as HTMLElement[];

    /* cursor */
    if (hoverable && !reduce) {
      const dot = $(".cur-dot")!, ring = $(".cur-ring")!;
      let rx = 0, ry = 0, mxp = 0, myp = 0;
      onWin("mousemove", (e: Event) => { const m = e as MouseEvent; mxp = m.clientX; myp = m.clientY; dot.style.left = mxp + "px"; dot.style.top = myp + "px"; }, { passive: true } as AddEventListenerOptions);
      const tick = () => { if (killed) return; rx += (mxp - rx) * .18; ry += (myp - ry) * .18; ring.style.left = rx + "px"; ring.style.top = ry + "px"; requestAnimationFrame(tick); };
      tick();
      onWin("mouseover", (e: Event) => { if ((e.target as HTMLElement).closest("a,button,.card,.pcard,.term")) ring.classList.add("big"); });
      onWin("mouseout", (e: Event) => { if ((e.target as HTMLElement).closest("a,button,.card,.pcard,.term")) ring.classList.remove("big"); });
    } else { $(".cur-dot")?.remove(); $(".cur-ring")?.remove(); }

    /* kinetic headline */
    $$(".kin").forEach((el) => {
      const txt = el.getAttribute("data-text") || el.textContent || "", grad = "Kubernetes";
      let out = "", wi = 0;
      txt.split(/(\s+)/).forEach((w) => {
        if (/^\s+$/.test(w)) { out += w; return; }
        const isG = w.indexOf(grad) === 0;
        out += "<span" + (isG ? ' class="grad"' : "") + " style=\"display:inline-block;transition-delay:" + (0.25 + wi * 0.075).toFixed(3) + "s\">" + w.replace(/&/g, "&amp;").replace(/</g, "&lt;") + "</span>";
        wi++;
      });
      el.innerHTML = out;
      requestAnimationFrame(() => { setTimeout(() => { if (!killed) el.classList.add("go"); }, 60); });
    });

    /* marquee */
    const setA = ["AWS", "Amazon EKS", "Terraform", "Docker", "ArgoCD", "Kubernetes"];
    const setB = ["Helm", "Prometheus", "Grafana", "GitHub Actions", "CloudFormation", "Datadog"];
    const fillMq = (id: string, arr: string[]) => { const el = $(id); if (!el) return; const r = arr.map((t) => '<span class="chip"><span class="d"></span>' + t + "</span>").join(""); el.innerHTML = r + r; };
    fillMq("#mq1", setA.concat(setB)); fillMq("#mq2", setB.concat(setA));

    if (hoverable && !reduce) {
      onWin("mousemove", (e: Event) => { const m = e as MouseEvent; const c = (m.target as HTMLElement).closest(".card") as HTMLElement | null; if (!c || !root.contains(c)) return; const r = c.getBoundingClientRect(), px = (m.clientX - r.left) / r.width, py = (m.clientY - r.top) / r.height; c.style.setProperty("--mx", px * 100 + "%"); c.style.setProperty("--my", py * 100 + "%"); c.style.transform = "rotateY(" + (px - .5) * 12 + "deg) rotateX(" + (.5 - py) * 12 + "deg) translateZ(8px)"; });
      onWin("mouseout", (e: Event) => { const m = e as MouseEvent; const c = (m.target as HTMLElement).closest(".card") as HTMLElement | null; if (c && (!m.relatedTarget || !c.contains(m.relatedTarget as Node))) c.style.transform = ""; });
    }

    /* reveal */
    const rvs = $$(".rv:not(.in)");
    if (!reduce) { const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .14, rootMargin: "0px 0px -8% 0px" }); rvs.forEach((el) => io.observe(el)); observers.push(io); }
    else rvs.forEach((el) => el.classList.add("in"));

    /* count-up */
    const up = (el: HTMLElement) => { const t = parseFloat(el.getAttribute("data-count") || "0"), sf = el.getAttribute("data-suffix") || "", dec = t % 1 !== 0 ? 2 : 0; let s: number | null = null; const st = (ts: number) => { if (killed) return; if (s === null) s = ts; const p = Math.min((ts - s) / 1400, 1), e = 1 - Math.pow(1 - p, 3); el.textContent = (t * e).toFixed(dec) + sf; if (p < 1) requestAnimationFrame(st); else el.textContent = t.toFixed(dec) + sf; }; requestAnimationFrame(st); };
    if (!reduce) { const io2 = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { up(e.target as HTMLElement); io2.unobserve(e.target); } }), { threshold: .6 }); $$("[data-count]").forEach((el) => io2.observe(el)); observers.push(io2); }

    /* pipeline */
    const pipe = $("#pipe");
    if (pipe) {
      const stages = $$("#pipe .stage"), fill = $("#pipefill");
      const runPipe = () => { if (fill) fill.style.width = "100%"; stages.forEach((st, i) => setTimeout(() => { if (!killed) st.classList.add("on"); }, 300 + i * 430)); };
      if (!reduce) { const io3 = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { runPipe(); io3.disconnect(); } }), { threshold: .4 }); io3.observe(pipe); observers.push(io3); }
      else { stages.forEach((s) => s.classList.add("on")); if (fill) { fill.style.transition = "none"; fill.style.width = "100%"; } }
    }

    /* 3D helpers */
    type V = { x: number; y: number; z: number };
    const rY = (p: V, a: number): V => { const c = Math.cos(a), s = Math.sin(a); return { x: p.x * c - p.z * s, y: p.y, z: p.x * s + p.z * c }; };
    const rX = (p: V, a: number): V => { const c = Math.cos(a), s = Math.sin(a); return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c }; };
    const glowSprite = (col: string) => { const s = 64, cn = document.createElement("canvas"); cn.width = cn.height = s; const x = cn.getContext("2d")!; const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); g.addColorStop(0, "rgba(" + col + ",1)"); g.addColorStop(.4, "rgba(" + col + ",.4)"); g.addColorStop(1, "rgba(" + col + ",0)"); x.fillStyle = g; x.fillRect(0, 0, s, s); return cn; };
    const gDeep = glowSprite("9,114,211"), gAmber = glowSprite("255,153,0");

    /* aurora */
    (() => {
      const cv = $("#aurora") as HTMLCanvasElement | null; if (!cv) return; const ctx = cv.getContext("2d"); if (!ctx) return;
      let W = 0, H = 0, dpr = 1; const t0 = performance.now();
      const blobs = [{ x: .24, y: .3, r: .6, col: "43,143,232", a: .3, sp: .00012, ph: 0 }, { x: .7, y: .36, r: .62, col: "9,114,211", a: .3, sp: .00016, ph: 2 }, { x: .5, y: .7, r: .55, col: "255,153,0", a: .15, sp: .0001, ph: 4 }, { x: .86, y: .72, r: .46, col: "87,177,245", a: .24, sp: .00014, ph: 1 }];
      const resize = () => { dpr = Math.min(devicePixelRatio || 1, 1.6); W = cv.clientWidth || cv.offsetWidth || innerWidth; H = cv.clientHeight || cv.offsetHeight || innerHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
      const fr = (now: number) => { if (killed) return; if (!W || !H || cv.width < 4) resize(); ctx.clearRect(0, 0, W, H); const t = now - t0; for (const b of blobs) { const cx = (b.x + Math.sin(t * b.sp + b.ph) * .09) * W, cy = (b.y + Math.cos(t * b.sp * 1.2 + b.ph) * .09) * H, rad = b.r * Math.min(W, H) * (.9 + .12 * Math.sin(t * b.sp * 2 + b.ph)); const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad); g.addColorStop(0, "rgba(" + b.col + "," + b.a + ")"); g.addColorStop(.55, "rgba(" + b.col + "," + b.a * .32 + ")"); g.addColorStop(1, "rgba(" + b.col + ",0)"); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, rad, 0, 7); ctx.fill(); } if (!reduce) requestAnimationFrame(fr); };
      onWin("resize", resize); resize(); if (reduce) fr(4000); else requestAnimationFrame(fr);
    })();

    /* globe */
    (() => {
      const cv = $("#globe") as HTMLCanvasElement | null; if (!cv) return; const ctx = cv.getContext("2d"); if (!ctx) return;
      let W = 0, H = 0, dpr = 1, R = 0, cx = 0, cy = 0;
      const NP = innerWidth < 700 ? 260 : 440, pts: V[] = [];
      for (let i = 0; i < NP; i++) { const y = 1 - (i / (NP - 1)) * 2, rad = Math.sqrt(Math.max(0, 1 - y * y)), th = i * 2.399963; pts.push({ x: Math.cos(th) * rad, y, z: Math.sin(th) * rad }); }
      const ll = (lat: number, lon: number): V => { const la = lat * Math.PI / 180, lo = lon * Math.PI / 180; return { x: Math.cos(la) * Math.cos(lo), y: Math.sin(la), z: Math.cos(la) * Math.sin(lo) }; };
      const cities = [ll(38, -78), ll(45, -120), ll(53, -8), ll(19, 73), ll(1, 104), ll(-33, 151), ll(50, 8)];
      const arcs = [[0, 2], [0, 6], [2, 3], [0, 1], [3, 4], [4, 5]].map((p) => ({ a: cities[p[0]], b: cities[p[1]], t: 0.1 * p[0], sp: .0022 }));
      const norm = (p: V): V => { const m = Math.hypot(p.x, p.y, p.z) || 1; return { x: p.x / m, y: p.y / m, z: p.z / m }; };
      const slp = (a: V, b: V, t: number) => norm({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, z: a.z + (b.z - a.z) * t });
      let rot = 0, tmx = 0, mxs = 0;
      onWin("mousemove", (e: Event) => { tmx = (e as MouseEvent).clientX / innerWidth - .5; });
      const resize = () => { dpr = Math.min(devicePixelRatio || 1, 2); W = cv.clientWidth || cv.offsetWidth || 420; H = cv.clientHeight || cv.offsetHeight || 420; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); R = Math.min(W, H) * .42; cx = W / 2; cy = H / 2; };
      const proj = (p: V) => ({ x: cx + p.x * R, y: cy - p.y * R, z: p.z });
      let inview = false;
      const io = new IntersectionObserver((es) => es.forEach((e) => { inview = e.isIntersecting; if (inview && !reduce) requestAnimationFrame(fr); }), { threshold: .05 }); io.observe(cv); observers.push(io);
      const fr = (now: number) => { if (killed) return; if (!W || !H || cv.width < 4) resize(); mxs += (tmx - mxs) * .05; rot += .0022; const ay = rot + mxs * .5, ax = -.34; ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < NP; i++) { const q = rX(rY(pts[i], ay), ax); if (q.z < -.05) continue; const pr = proj(q), d = (q.z + 1) / 2; ctx.globalAlpha = .14 + d * .5; ctx.fillStyle = "rgba(80,100,150,1)"; ctx.beginPath(); ctx.arc(pr.x, pr.y, .8 + d * 1.1, 0, 7); ctx.fill(); }
        ctx.globalAlpha = 1;
        for (const arc of arcs) { arc.t += arc.sp; if (arc.t > 1) arc.t = 0; const A = rX(rY(arc.a, ay), ax), B = rX(rY(arc.b, ay), ax); ctx.beginPath(); let started = false; const seg = 26; for (let k = 0; k <= seg; k++) { const tt = k / seg, m = slp(A, B, tt), lift = 1 + .28 * Math.sin(Math.PI * tt), p = { x: m.x * lift, y: m.y * lift, z: m.z * lift }, pr = proj(p); if (p.z < -.2) { started = false; continue; } if (!started) { ctx.moveTo(pr.x, pr.y); started = true; } else ctx.lineTo(pr.x, pr.y); } ctx.strokeStyle = "rgba(43,143,232,.5)"; ctx.lineWidth = 1.4; ctx.stroke(); const mt = slp(A, B, arc.t), lf = 1 + .28 * Math.sin(Math.PI * arc.t), tp = { x: mt.x * lf, y: mt.y * lf, z: mt.z * lf }; if (tp.z > -.2) { const pr2 = proj(tp); ctx.globalAlpha = .9; ctx.drawImage(gDeep, pr2.x - 9, pr2.y - 9, 18, 18); ctx.globalAlpha = 1; } }
        for (let c = 0; c < cities.length; c++) { const q = rX(rY(cities[c], ay), ax); if (q.z < -.05) continue; const pr = proj(q), pulse = .5 + .5 * Math.sin(now * .003 + c); ctx.globalAlpha = .8; ctx.drawImage(gAmber, pr.x - 8, pr.y - 8, 16, 16); ctx.globalAlpha = .5 * pulse; ctx.strokeStyle = "rgba(255,153,0,1)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(pr.x, pr.y, 4 + pulse * 7, 0, 7); ctx.stroke(); ctx.globalAlpha = 1; }
        if (inview && !document.hidden && !reduce) requestAnimationFrame(fr); };
      onWin("resize", resize); resize(); if (reduce) fr(1000);
    })();

    /* cta grid */
    (() => {
      const cv = $("#ctagrid") as HTMLCanvasElement | null; if (!cv) return; const ctx = cv.getContext("2d"); if (!ctx) return;
      let W = 0, H = 0, dpr = 1, off = 0, inview = false;
      const resize = () => { dpr = Math.min(devicePixelRatio || 1, 2); W = cv.clientWidth || cv.offsetWidth || innerWidth; H = cv.clientHeight || cv.offsetHeight || 400; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
      const io = new IntersectionObserver((es) => es.forEach((e) => { inview = e.isIntersecting; if (inview && !reduce) requestAnimationFrame(fr); }), { threshold: .05 }); io.observe(cv); observers.push(io);
      const fr = () => { if (killed) return; if (!W || !H || cv.width < 4) resize(); off = (off + .6) % 40; ctx.clearRect(0, 0, W, H); const hz = H * .42, vp = W / 2; ctx.strokeStyle = "rgba(255,255,255,.3)"; ctx.lineWidth = 1; for (let i = 0; i < 26; i++) { const z = i * 40 - off, y = hz + z * .9; if (y > H) continue; const al = Math.max(0, 1 - (y - hz) / (H - hz)); ctx.globalAlpha = al * .5; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); } for (let j = -14; j <= 14; j++) { ctx.globalAlpha = .16; ctx.beginPath(); ctx.moveTo(vp + j * 30, hz); ctx.lineTo(vp + j * 260, H); ctx.stroke(); } ctx.globalAlpha = 1; if (inview && !document.hidden && !reduce) requestAnimationFrame(fr); };
      onWin("resize", resize); resize(); if (reduce) fr();
    })();

    /* terminal */
    (() => {
      const el = $("#term"); if (!el) return;
      const script = [
        { c: "t-prompt", cmd: true, txt: "$ ", cont: "terraform apply -auto-approve" },
        { c: "t-dim", txt: "Plan: 34 to add, 0 to change, 0 to destroy." },
        { c: "t-info", txt: "aws_eks_cluster.main: Creating..." },
        { c: "t-info", txt: "aws_eks_node_group.workers: Creating..." },
        { c: "t-ok", txt: "✓ Apply complete, 34 resources created  (2m14s)" },
        { c: "t-prompt", cmd: true, txt: "$ ", cont: "helm upgrade --install api ./chart" },
        { c: "t-ok", txt: "✓ Release \"api\" upgraded, revision 7" },
        { c: "t-prompt", cmd: true, txt: "$ ", cont: "kubectl rollout status deploy/api" },
        { c: "t-info", txt: "Waiting for rollout: 3 of 3 updated replicas..." },
        { c: "t-ok", txt: "✓ deployment \"api\" successfully rolled out" },
        { c: "t-warn", txt: "→ https://api.codetokloud.com   live · p95 320ms · 99.99% up" },
      ] as Array<{ c: string; txt: string; cmd?: boolean; cont?: string }>;
      const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
      const render = (lines: typeof script, typingLine?: typeof script[0], typed?: string) => { let html = lines.map((l) => '<div class="ln"><span class="' + l.c + '">' + esc(l.txt) + "</span>" + (l.cont ? '<span class="t-cmd">' + esc(l.cont) + "</span>" : "") + "</div>").join(""); if (typingLine) html += '<div class="ln"><span class="' + typingLine.c + '">' + esc(typingLine.txt) + '</span><span class="t-cmd">' + esc(typed || "") + '</span><span class="t-cursor"></span></div>'; el.innerHTML = html; };
      let done: typeof script = [], idx = 0;
      const next = () => { if (killed) return; if (idx >= script.length) { setTimeout(() => { if (!killed) { done = []; idx = 0; next(); } }, 2600); return; } const line = script[idx]; if (line.cmd) { const full = line.cont || ""; let ci = 0; render(done, line, ""); const type = () => { if (killed) return; if (ci <= full.length) { render(done, line, full.slice(0, ci)); ci++; setTimeout(type, 38 + Math.random() * 40); } else { done.push({ c: line.c, txt: line.txt, cont: full }); idx++; render(done); setTimeout(next, 520); } }; type(); } else { done.push(line); render(done); idx++; setTimeout(next, line.c === "t-ok" ? 720 : 420); } };
      if (reduce) render(script.slice());
      else { let started = false; const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting && !started) { started = true; next(); } }), { threshold: .3 }); io.observe(el); observers.push(io); }
    })();

    return () => { killed = true; winL.forEach((l) => window.removeEventListener(l.t, l.f)); observers.forEach((o) => o.disconnect()); };
  }, []);

  return (
    <div className="home-rd" ref={rootRef}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="bg-grid" aria-hidden="true" />
      <div className="cur-ring" aria-hidden="true" />
      <div className="cur-dot" aria-hidden="true" />

      <section className="hero">
        <canvas id="aurora" aria-hidden="true" />
        <div className="hero-fade" aria-hidden="true" />
        <div className="wrap hero-in">
          <div>
            <span className="eyebrow rv in">AWS Advanced Tier Partner, Naperville, IL</span>
            <h1 className="kin" data-text="AWS cloud, DevOps, and Kubernetes consulting.">AWS cloud, DevOps, and Kubernetes consulting.</h1>
            <p className="sub rv in d2">CodetoKloud helps production teams at SaaS, healthcare, fintech, and growing technology companies design, migrate, automate, and secure AWS infrastructure, Amazon EKS, CI/CD, FinOps, and technical controls for regulated workloads.</p>
            <div className="cta-row rv in d3">
              <Link className="btn btn-primary" href="/contact">Book a 30-minute AWS review <span className="arw">→</span></Link>
              <Link className="btn btn-ghost" href="/case-studies">View client results</Link>
            </div>
            <div className="trust rv in d3"><span className="stars">★★★★★</span><span>4.9/5 on Clutch</span><span className="sep">·</span><span>Fit confirmed within one business day</span></div>
          </div>
          <div className="term rv in d2" role="img" aria-label="Live deployment terminal">
            <div className="term-bar"><span className="tl r" /><span className="tl y" /><span className="tl g" /><span className="term-title">deploy.sh, codetokloud</span></div>
            <div className="term-body" id="term">
              <div className="ln"><span className="t-prompt">$ </span><span className="t-cmd">terraform plan</span></div>
              <div className="ln"><span className="t-dim">Plan: 3 to add, 0 to change, 0 to destroy.</span></div>
              <div className="ln"><span className="t-prompt">$ </span><span className="t-cmd">helm upgrade api ./chart</span></div>
              <div className="ln"><span className="t-ok">✓ production rollout ready</span></div>
            </div>
            <div className="term-foot"><span>eks · us-east-1</span><span className="live"><span className="pip" />PRODUCTION</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="wrap trust-in">
          <div className="ts-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="awsb" src="/Images/homepage/aws_badge_.png" alt="AWS Advanced Tier Services Partner" />
            <div className="ts-txt"><b>AWS Advanced Tier</b><span>Services Partner</span></div>
          </div>
          <div className="ts-sep" aria-hidden="true" />
          <a className="clutch ts-item" href="https://clutch.co/profile/codetokloud" target="_blank" rel="noopener noreferrer">
            <div className="cl-logo">Clutch</div>
            <div className="ts-txt"><b><span className="stars">★★★★★</span> 4.9/5</b><span>9 verified reviews</span></div>
          </a>
          <div className="ts-sep" aria-hidden="true" />
          <div className="ts-badges" aria-label="Compliance frameworks">
            <span className="b">SOC 2</span><span className="b">HIPAA</span><span className="b">PCI DSS</span>
          </div>
        </div>
      </section>

      <section className="answer-sec" aria-labelledby="what-codetokloud-does">
        <div className="wrap answer-grid">
          <div className="answer-copy rv">
            <span className="eyebrow">Direct answer</span>
            <h2 id="what-codetokloud-does">What does CodetoKloud do?</h2>
            <p>CodetoKloud is an AWS consulting company based in Naperville, Illinois. We help US businesses modernize cloud infrastructure, automate software delivery, run Kubernetes on Amazon EKS, reduce AWS cost, and implement technical controls for regulated workloads.</p>
            <p>Our work covers architecture and hands-on implementation, with clear documentation, measurable outcomes, and practical handoff to your team.</p>
          </div>
          <div className="answer-facts rv d1" aria-label="CodetoKloud company facts">
            <div className="answer-fact"><b>Primary platform</b><span>Amazon Web Services</span></div>
            <div className="answer-fact"><b>Core expertise</b><span>DevOps, Amazon EKS, migration, FinOps, and cloud security</span></div>
            <div className="answer-fact"><b>Best fit</b><span>SaaS, healthcare, fintech, and growing digital platforms</span></div>
            <div className="answer-fact"><b>Service area</b><span>United States, delivered from Naperville, Illinois</span></div>
          </div>
        </div>
      </section>

      <section className="problem-sec" aria-labelledby="cloud-problems">
        <div className="wrap">
          <div className="problem-head rv">
            <div><span className="eyebrow">When to call us</span><h2 id="cloud-problems">Bring us the cloud problem slowing your team down.</h2></div>
            <p>Start with the constraint that matters most. We connect architecture decisions to reliability, delivery speed, security, and cost.</p>
          </div>
          <div className="problem-grid">
            {PROBLEMS.map(([title, description], index) => (
              <article className={`problem-card rv d${index % 3}`} key={title}>
                <span className="num">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mq-band" aria-hidden="true">
        <div className="wrap">
          <p className="mq-label">Production-grade tooling we build and operate</p>
          <div className="mq-wrap"><div className="mq" id="mq1" /></div>
          <div className="mq-wrap"><div className="mq rev" id="mq2" /></div>
        </div>
      </section>

      <section className="sec" id="pipeline">
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Delivery architecture</span><h2>From commit to production, automated.</h2><p>Every change moves through review, build, security checks, deployment, and observability, with a clear rollback path.</p></div>
          <div className="pipe" id="pipe">
            <div className="pipe-line"><span className="fill" id="pipefill" /></div>
            {PIPELINE.map((stage) => (
              <div className="stage" key={stage.title}>
                <div className="node"><DiagramIcon name={stage.icon} /></div>
                <h4>{stage.title}</h4>
                <p>{stage.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ padding: "40px 0 60px" }}>
        <div className="wrap"><div className="stats">
          <div className="stat rv"><div className="n">~35<span>%</span></div><div className="l">Lower AWS cost</div><span className="source">GoAgalia EKS migration</span></div>
          <div className="stat rv d1"><div className="n">80<span>%</span></div><div className="l">Less manual effort</div><span className="source">ArgoCD and Helm pipeline</span></div>
          <div className="stat rv d2"><div className="n">99.99<span>%</span></div><div className="l">Platform uptime</div><span className="source">SOC 2 healthcare case study</span></div>
          <div className="stat rv d3"><div className="n">4.9<span>/5</span></div><div className="l">Clutch rating</div><span className="source">9 verified reviews</span></div>
        </div></div>
      </section>

      <section className="sec" id="services" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Core services</span><h2>AWS engineering from architecture through operations.</h2><p>Bring in CodetoKloud for a focused project, a modernization program, or ongoing platform support.</p></div>
          <div className="cards" id="cards">
            {SERVICES.map((service, index) => (
              <Link className={`card rv d${index % 3}`} href={service.href} key={service.href}>
                <span className="ic"><DiagramIcon name={service.icon} /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="more">Explore service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec globe-sec" id="global">
        <div className="wrap globe-grid">
          <div className="rv">
            <span className="eyebrow">Reference architecture</span>
            <h2 style={{ fontSize: "clamp(28px,4vw,44px)", margin: "16px 0 14px", letterSpacing: "-.02em" }}>A secure AWS path from user request to production data.</h2>
            <p style={{ color: "var(--mist)" }}>We adapt the pattern to your recovery targets, compliance scope, traffic profile, team, and budget. The result is documented infrastructure your engineers can understand and operate.</p>
            <div className="region-list">
              <div className="region"><span className="d" /><b>Availability</b> Multi-AZ services and tested recovery</div>
              <div className="region"><span className="d" /><b>Security</b> WAF, least privilege, encryption, and private networks</div>
              <div className="region"><span className="d" /><b>Delivery</b> Versioned infrastructure and GitOps deployment</div>
              <div className="region"><span className="d" /><b>Operations</b> Logs, metrics, traces, alerts, and cost visibility</div>
            </div>
          </div>
          <figure className="arch-card rv d1" aria-labelledby="reference-architecture-title">
            <figcaption className="arch-label" id="reference-architecture-title">Example production AWS architecture</figcaption>
            <div className="arch-flow">
              <div className="arch-node"><strong>Users</strong><span>web and mobile</span></div>
              <span className="arch-arrow" aria-hidden="true">›</span>
              <div className="arch-node"><strong>CloudFront + WAF</strong><span>edge and protection</span></div>
              <span className="arch-arrow" aria-hidden="true">›</span>
              <div className="arch-node"><strong>Load balancer</strong><span>TLS and routing</span></div>
              <span className="arch-arrow" aria-hidden="true">›</span>
              <div className="arch-node accent"><strong>Amazon EKS</strong><span>private services across AZs</span></div>
            </div>
            <div className="arch-rails">
              <div className="arch-rail"><b>Data:</b> Amazon RDS Multi-AZ, S3, backups, and encryption</div>
              <div className="arch-rail"><b>Delivery:</b> Git, CI checks, ECR, ArgoCD, and Terraform</div>
              <div className="arch-rail"><b>Security:</b> IAM, secrets, network policies, logging, and scanning</div>
              <div className="arch-rail"><b>Observability:</b> CloudWatch, metrics, traces, alerts, and cost data</div>
            </div>
            <p className="arch-note">Reference pattern only. Final architecture depends on workload requirements.</p>
          </figure>
        </div>
      </section>

      <section className="sec" id="proof">
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Proven in production</span><h2>Real platforms. Real numbers.</h2><p>Outcomes from live client engagements, the proof is in the metrics.</p></div>
          <div className="proof">
            <Link className="pcard rv" href="/goagalia-healthcare-workforce-management"><span className="tag">Healthcare · EKS</span><h3>HIPAA-Compliant Kubernetes on Amazon EKS</h3><p>Migrated a healthcare workforce platform to a private, autoscaling EKS architecture with GitOps and full observability.</p><div className="metrics"><span className="metric">−35% cost</span><span className="metric">850→320 ms</span><span className="metric">99.7% uptime</span></div></Link>
            <Link className="pcard rv d1" href="/soc-2-healthcare-aws-case-study"><span className="tag">Healthcare · SOC 2</span><h3>SOC 2 Multi-AZ Healthcare Platform</h3><p>Rebuilt on AWS with Multi-AZ failover, cross-AZ replication, and audit logging to pass a SOC 2 audit.</p><div className="metrics"><span className="metric">Passed SOC 2</span><span className="metric">99.99% uptime</span></div></Link>
            <Link className="pcard rv d2" href="/hybrid-cloud-kubernetes-case-study"><span className="tag">Media · Hybrid</span><h3>Hybrid On-Prem + Cloud Kubernetes</h3><p>Joined retained on-premise hardware and cloud burst capacity into one Kubernetes platform over an encrypted WireGuard mesh.</p><div className="metrics"><span className="metric">Encrypted mesh</span><span className="metric">Cloud burst capacity</span></div></Link>
          </div>
        </div>
      </section>

      <section className="sec" id="compliance" style={{ paddingTop: "20px" }}>
        <div className="wrap rv"><div className="comply">
          <div className="t"><span className="eyebrow">Compliance engineering</span><h3>Technical controls built into the infrastructure.</h3><p>We implement encryption, least privilege, logging, segmentation, monitoring, and evidence collection to reduce infrastructure gaps before an audit or assessment.</p></div>
          <div className="badges"><span className="badge">SOC 2</span><span className="badge">HIPAA</span><span className="badge">PCI DSS</span></div>
        </div></div>
      </section>

      <section className="sec" aria-labelledby="engagement-process">
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">How we work</span><h2 id="engagement-process">A clear path from problem to production.</h2><p>Each engagement starts with the business constraint, then turns it into a prioritized technical plan with measurable outcomes.</p></div>
          <div className="process">
            <article className="process-step rv"><h3>Discover</h3><p>Clarify the constraint, current environment, stakeholders, risks, and definition of success.</p></article>
            <article className="process-step rv d1"><h3>Review</h3><p>Assess architecture, delivery, security, reliability, and cost against your goals.</p></article>
            <article className="process-step rv d2"><h3>Implement</h3><p>Build the prioritized changes in your environment with versioned, documented work.</p></article>
            <article className="process-step rv d3"><h3>Measure and hand off</h3><p>Verify results, transfer knowledge, and continue with managed support when needed.</p></article>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="homepage-faq" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="sec-head rv"><span className="eyebrow">Frequently asked questions</span><h2 id="homepage-faq">What buyers ask before the first call.</h2><p>Direct answers about CodetoKloud, our focus, and how an engagement starts.</p></div>
          <div className="faq-list">
            {homepageFaqItems.map((item) => (
              <details className="rv" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <div className="wrap"><div className="panel">
          <canvas id="ctagrid" aria-hidden="true" />
          <div className="in rv">
            <span className="eyebrow" style={{ display: "inline-flex" }}>Focused first review</span>
            <h2 style={{ marginTop: "16px" }}>Get three priorities for your AWS environment.</h2>
            <p>Share your biggest cloud, DevOps, Kubernetes, cost, or compliance concern. We will confirm fit within one business day, schedule a focused 30-minute review, and identify three practical next steps.</p>
            <Link className="btn btn-primary" href="/contact" style={{ padding: "16px 30px", fontSize: "16.5px" }}>Book my AWS review <span className="arw">→</span></Link>
          </div>
        </div></div>
      </section>

    </div>
  );
}

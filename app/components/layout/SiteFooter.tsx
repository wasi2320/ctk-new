"use client";

import Link from "next/link";
import Image from "next/image";
import { FOOTER_DATA } from "@/utils/data/footer";

/**
 * Site-wide footer in the AWS-aligned redesign system. Dark navy ground to
 * echo the homepage CTA panel; real white logo + AWS Advanced Tier badge for
 * trust. Scoped under `.ctk-ft`. Renders on every page.
 */
const CSS = `
.ctk-ft{
  --ink:#0d1526; --blue:#2b8fe8; --orange:#ff9900;
  --fd:var(--font-sora),"Sora",system-ui,sans-serif;
  --fb:var(--font-inter),"Inter",system-ui,sans-serif;
  --fm:var(--font-jbmono),"JetBrains Mono",ui-monospace,monospace;
  background:linear-gradient(180deg,#111c2e 0%,#0b1424 100%);color:#c3ccdb;font-family:var(--fb);
}
.ctk-ft *{box-sizing:border-box;}
.ctk-ft a{color:inherit;text-decoration:none;transition:color .18s;}
.ctk-ft a:hover{color:#fff;}
.ctk-ft .in{max-width:1240px;margin-inline:auto;padding:64px 24px 30px;}
.ctk-ft .top{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}
@media(max-width:900px){.ctk-ft .top{grid-template-columns:1fr 1fr;gap:34px;}}
@media(max-width:560px){.ctk-ft .top{grid-template-columns:1fr;}}
.ctk-ft .brandcol .b{display:inline-flex;align-items:center;gap:11px;}
.ctk-ft .brandcol .wm{font-family:var(--fd);font-weight:800;font-size:20px;color:#fff;letter-spacing:-.02em;}
.ctk-ft .brandcol .wm b{color:var(--blue);}
.ctk-ft .brandcol p{font-size:14.5px;line-height:1.65;color:#9aa7ba;margin:16px 0 20px;max-width:34ch;}
.ctk-ft .badge{background:#fff;border-radius:12px;padding:10px 14px;display:inline-flex;align-items:center;gap:10px;}
.ctk-ft .badge img{height:38px;width:auto;display:block;}
.ctk-ft h4{font-family:var(--fd);font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#fff;margin:0 0 16px;}
.ctk-ft ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px;}
.ctk-ft li a{font-size:14.5px;color:#9aa7ba;}
.ctk-ft .addr{font-size:14px;color:#9aa7ba;line-height:1.7;white-space:pre-line;}
.ctk-ft .addr a{color:#cbd5e6;font-weight:500;}
.ctk-ft .rule{height:1px;background:rgba(255,255,255,.09);margin:44px 0 22px;}
.ctk-ft .bot{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;}
.ctk-ft .bot .cp{font-family:var(--fm);font-size:12.5px;color:#7c8aa0;letter-spacing:.02em;}
.ctk-ft .bot .lg{display:flex;gap:20px;flex-wrap:wrap;}
.ctk-ft .bot .lg a{font-size:13px;color:#9aa7ba;}
.ctk-ft .social{display:flex;gap:10px;}
.ctk-ft .social a{width:34px;height:34px;border-radius:9px;background:rgba(255,255,255,.07);display:grid;place-items:center;transition:background .2s,transform .2s;}
.ctk-ft .social a:hover{background:var(--blue);transform:translateY(-2px);}
.ctk-ft .social img{width:15px;height:15px;filter:brightness(0) invert(1);}
`;

const SERVICE_LINKS = [
  { name: "AWS Cloud Infrastructure", link: "/cloud-service" },
  { name: "DevOps and CI/CD", link: "/devops" },
  { name: "Kubernetes and Amazon EKS", link: "/kubernetes" },
  { name: "Security and Compliance", link: "/security-and-compliance" },
  { name: "AWS FinOps", link: "/finops" },
  { name: "AI Automation on AWS", link: "/ai" },
];

const COMPANY_LINKS = [
  { name: "About Us", link: "/aboutus" },
  { name: "Case Studies", link: "/case-studies" },
  { name: "Blog", link: "/blogs" },
  { name: "Careers", link: "/careers" },
  { name: "FAQ", link: "/faq" },
  { name: "Contact", link: "/contact" },
];

export default function SiteFooter() {
  const year = 2026;
  return (
    <footer className="ctk-ft">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="in">
        <div className="top">
          <div className="brandcol">
            <Link href="/" className="b" aria-label="CodetoKloud home">
              <Image src="/Images/logoWhite.svg" alt="CodetoKloud" width={55} height={32} style={{ height: 32, width: "auto" }} />
              <span className="wm">
                Code<b>to</b>Kloud
              </span>
            </Link>
            <p>
              A US-registered IT consulting company and AWS Advanced Tier Partner. We design, automate, and secure production cloud, DevOps, and Kubernetes platforms.
            </p>
            <span className="badge">
              <Image src="/Images/homepage/aws_badge_.png" alt="AWS Advanced Tier Services Partner" width={769} height={376} />
            </span>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {SERVICE_LINKS.map((l) => (
                <li key={l.link}>
                  <Link href={l.link}>{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.name}>
                  <Link href={l.link}>{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <p className="addr">
              {FOOTER_DATA.addressCol.addressOne}
              {"\n\n"}
              <a href="tel:+13095903617">{FOOTER_DATA.addressCol.addressTwo}</a>
              {"\n"}
              <a href="mailto:info@codetokloud.com">info@codetokloud.com</a>
            </p>
          </div>
        </div>

        <div className="rule" />

        <div className="bot">
          <span className="cp">© {year} CodetoKloud Inc. All rights reserved.</span>
          <div className="lg">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/term-condition">Terms &amp; Conditions</Link>
            <Link href="/consent">Consent</Link>
          </div>
          <div className="social">
            {FOOTER_DATA.socialCol.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.ariaLabel}>
                <Image src={s.icon} alt={s.ariaLabel} width={15} height={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

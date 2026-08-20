"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HEADER, type HeaderNavItem } from "@/utils/data/header";

/**
 * Site-wide header in the AWS-aligned redesign system. Renders on every page
 * (home included) so navigation is consistent and every menu link works.
 * Scoped under `.ctk-hd` so styles never leak. Desktop dropdowns open on
 * hover/focus (CSS only); the mobile drawer uses accordion state.
 */
const CSS = `
.ctk-hd{
  --ink:#16212e; --mist:#5a6b81; --dim:#93a3b8;
  --blue:#0972d3; --blue2:#146eb4; --orange:#ff9900;
  --line:rgba(22,45,80,.10); --line2:rgba(22,45,80,.16);
  --grad:linear-gradient(105deg,#0972d3 0%,#2b8fe8 52%,#57b1f5 100%);
  --fd:var(--font-sora),"Sora",system-ui,sans-serif;
  --fb:var(--font-inter),"Inter",system-ui,sans-serif;
  position:sticky;top:0;z-index:70;
  background:rgba(255,255,255,.82);backdrop-filter:blur(16px) saturate(1.4);
  border-bottom:1px solid var(--line);font-family:var(--fb);
}
.ctk-hd *{box-sizing:border-box;}
.ctk-hd a{text-decoration:none;color:inherit;}
.ctk-hd .in{max-width:1240px;margin-inline:auto;padding:0 24px;height:72px;display:flex;align-items:center;justify-content:space-between;gap:18px;}
.ctk-hd .brand{display:flex;align-items:center;gap:11px;flex:none;}
.ctk-hd .brand .wm{font-family:var(--fd);font-weight:800;font-size:20px;letter-spacing:-.02em;color:var(--ink);}
.ctk-hd .brand .wm b{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:800;}
.ctk-hd .nav{display:flex;align-items:center;gap:4px;}
.ctk-hd .navitem{position:relative;}
.ctk-hd .trig{font-family:var(--fb);font-size:15px;font-weight:500;color:var(--ink);background:none;border:0;cursor:pointer;display:inline-flex;align-items:center;gap:5px;padding:9px 13px;border-radius:10px;transition:color .2s,background .2s;white-space:nowrap;}
.ctk-hd a.trig{color:var(--ink);}
.ctk-hd .navitem:hover .trig,.ctk-hd .navitem:focus-within .trig{color:var(--blue);background:rgba(9,114,211,.06);}
.ctk-hd .trig svg{width:14px;height:14px;transition:transform .2s;opacity:.7;}
.ctk-hd .navitem:hover .trig svg,.ctk-hd .navitem:focus-within .trig svg{transform:rotate(180deg);}
.ctk-hd .panel{position:absolute;top:100%;left:0;padding-top:12px;opacity:0;visibility:hidden;transform:translateY(6px);transition:opacity .2s,transform .2s,visibility .2s;z-index:80;}
.ctk-hd .navitem:hover .panel,.ctk-hd .navitem:focus-within .panel{opacity:1;visibility:visible;transform:translateY(0);}
.ctk-hd .panel.right{left:auto;right:0;}
.ctk-hd .card{background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 30px 70px -34px rgba(20,30,70,.4),0 8px 20px -12px rgba(20,30,70,.18);padding:16px;display:flex;gap:26px;}
.ctk-hd .col{display:flex;flex-direction:column;gap:2px;min-width:210px;}
.ctk-hd .col .gh{font-family:var(--fd);font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--blue2);padding:6px 10px 8px;}
.ctk-hd .ln{display:block;font-size:14px;color:var(--mist);padding:8px 10px;border-radius:9px;transition:background .18s,color .18s;white-space:nowrap;}
.ctk-hd .ln:hover{background:rgba(9,114,211,.07);color:var(--ink);}
.ctk-hd .cta{font-family:var(--fd);font-weight:600;font-size:14.5px;color:#16212e;background:var(--orange);padding:11px 20px;border-radius:999px;white-space:nowrap;box-shadow:0 12px 28px -12px rgba(255,153,0,.6);transition:transform .22s,box-shadow .3s;flex:none;}
.ctk-hd .cta:hover{transform:translateY(-2px);box-shadow:0 18px 36px -12px rgba(255,153,0,.8);}
.ctk-hd .burger{display:none;background:none;border:0;cursor:pointer;padding:8px;color:var(--ink);}
.ctk-hd .burger svg{width:26px;height:26px;}
.ctk-hd .callbtn{display:none;align-items:center;justify-content:center;width:40px;height:40px;border-radius:11px;color:var(--blue2);border:1px solid var(--line2);flex:none;}
.ctk-hd .callbtn svg{width:19px;height:19px;}
@media(max-width:1024px){
  .ctk-hd .nav{display:none;}
  .ctk-hd .burger,.ctk-hd .callbtn{display:inline-flex;}
  /* Keep the primary CTA persistent on mobile, just compact. */
  .ctk-hd .in>.cta{padding:9px 15px;font-size:13.5px;}
}
@media(max-width:430px){
  .ctk-hd .in>.cta{padding:8px 12px;font-size:12.5px;}
  .ctk-hd .callbtn{width:38px;height:38px;}
}
/* mobile drawer */
.ctk-hd .scrim{position:fixed;inset:0;background:rgba(10,18,32,.5);opacity:0;visibility:hidden;transition:.28s;z-index:90;}
.ctk-hd .scrim.open{opacity:1;visibility:visible;}
.ctk-hd .drawer{position:fixed;top:0;right:0;height:100%;width:min(340px,86vw);background:#fff;box-shadow:-20px 0 60px -30px rgba(20,30,70,.5);transform:translateX(100%);transition:transform .3s cubic-bezier(.2,.8,.2,1);z-index:91;overflow-y:auto;padding:18px 18px 40px;}
.ctk-hd .drawer.open{transform:none;}
.ctk-hd .drawer .dh{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;}
.ctk-hd .drawer .x{background:none;border:0;cursor:pointer;color:var(--mist);padding:6px;}
.ctk-hd .drawer .x svg{width:24px;height:24px;}
.ctk-hd .macc{border-top:1px solid var(--line);}
.ctk-hd .macc>button,.ctk-hd .macc>a{width:100%;text-align:left;background:none;border:0;cursor:pointer;font-family:var(--fb);font-size:16px;font-weight:600;color:var(--ink);padding:15px 4px;display:flex;align-items:center;justify-content:space-between;}
.ctk-hd .macc>button svg{width:18px;height:18px;transition:transform .2s;color:var(--mist);}
.ctk-hd .macc>button.on svg{transform:rotate(180deg);}
.ctk-hd .msub{display:grid;grid-template-rows:0fr;transition:grid-template-rows .28s ease;}
.ctk-hd .msub.on{grid-template-rows:1fr;}
.ctk-hd .msub .inr{overflow:hidden;}
.ctk-hd .msub .gh{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--blue2);padding:8px 4px 2px;}
.ctk-hd .msub a{display:block;font-size:14.5px;color:var(--mist);padding:9px 4px 9px 14px;}
.ctk-hd .msub a:active{color:var(--blue);}
.ctk-hd .drawer .cta{display:block;text-align:center;margin-top:20px;}
`;

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Split a flat link list into columns of at most `size` for the desktop panel. */
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [acc, setAcc] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setAcc(null);
  };

  const items = HEADER.navItems.filter((i) => i.name !== "Home") as HeaderNavItem[];

  return (
    <header className="ctk-hd">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="in">
        <Link href="/" className="brand" aria-label="CodetoKloud home">
          <Image src="/Images/logo.svg" alt="CodetoKloud" width={55} height={32} style={{ height: 34, width: "auto" }} priority />
          <span className="wm">
            Code<b>to</b>Kloud
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav" aria-label="Primary">
          {items.map((item, i) => {
            // Grouped mega-menu (Case Studies)
            if ("groups" in item) {
              return (
                <div className="navitem" key={i}>
                  <button
                    className="trig"
                    aria-haspopup="true"
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    {item.name} <Chevron />
                  </button>
                  <div className={`panel ${i > items.length - 3 ? "right" : ""}`}>
                    <div className="card">
                      {item.groups.map((g, gi) => (
                        <div className="col" key={gi}>
                          <span className="gh">{g.heading}</span>
                          {g.items.map((l, li) => (
                            <Link className="ln" href={l.link} key={li}>
                              {l.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            // Dropdown list (Services / Industries)
            if (Array.isArray(item.link)) {
              const cols = chunk(item.link, 7);
              return (
                <div className="navitem" key={i}>
                  <button
                    className="trig"
                    aria-haspopup="true"
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    {item.name} <Chevron />
                  </button>
                  <div className="panel">
                    <div className="card">
                      {cols.map((col, ci) => (
                        <div className="col" key={ci}>
                          {col.map((l, li) => (
                            <Link className="ln" href={l.link} key={li}>
                              {l.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            // Simple link
            return (
              <div className="navitem" key={i}>
                <Link className="trig" href={item.link as string}>
                  {item.name}
                </Link>
              </div>
            );
          })}
        </nav>

        <a className="callbtn" href="tel:+13095903617" aria-label="Call CodetoKloud">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.58 3.6a1 1 0 0 1-.24 1z" fill="currentColor" />
          </svg>
        </a>

        <Link href="/contact" className="cta">
          Book a free audit
        </Link>

        <button className="burger" aria-label="Open menu" onClick={() => setOpen(true)}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`scrim ${open ? "open" : ""}`} onClick={close} />
      <div className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="dh">
          <Link href="/" className="brand" onClick={close} aria-label="CodetoKloud home">
            <Image src="/Images/logo.svg" alt="CodetoKloud" width={55} height={32} style={{ height: 30, width: "auto" }} />
            <span className="wm" style={{ fontSize: 18 }}>
              Code<b>to</b>Kloud
            </span>
          </Link>
          <button className="x" aria-label="Close menu" onClick={close}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {items.map((item, i) => {
          const key = item.name;
          const isOpen = acc === key;
          if ("groups" in item) {
            return (
              <div className="macc" key={i}>
                <button className={isOpen ? "on" : ""} onClick={() => setAcc(isOpen ? null : key)}>
                  {item.name} <Chevron />
                </button>
                <div className={`msub ${isOpen ? "on" : ""}`}>
                  <div className="inr">
                    {item.groups.map((g, gi) => (
                      <div key={gi}>
                        <p className="gh">{g.heading}</p>
                        {g.items.map((l, li) => (
                          <Link href={l.link} key={li} onClick={close}>
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
          if (Array.isArray(item.link)) {
            return (
              <div className="macc" key={i}>
                <button className={isOpen ? "on" : ""} onClick={() => setAcc(isOpen ? null : key)}>
                  {item.name} <Chevron />
                </button>
                <div className={`msub ${isOpen ? "on" : ""}`}>
                  <div className="inr">
                    {item.link.map((l, li) => (
                      <Link href={l.link} key={li} onClick={close}>
                        {l.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div className="macc" key={i}>
              <Link href={item.link as string} onClick={close}>
                {item.name}
              </Link>
            </div>
          );
        })}

        <Link href="/contact" className="cta" onClick={close}>
          Book a free audit
        </Link>
      </div>
    </header>
  );
}

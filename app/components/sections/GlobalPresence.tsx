/**
 * "Global presence" section for the About page. Shows CodetoKloud's four
 * countries with SVG flag badges and a connected-network world graphic to
 * convey a distributed team. Self-contained; no external assets.
 */

/* --- Simplified, recognizable SVG flags (rendered inside a circular badge) --- */
function FlagUS() {
  return (
    <svg viewBox="0 0 60 40" className="w-full h-full" aria-hidden="true">
      <rect width="60" height="40" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 40) / 13} width="60" height={40 / 13} fill="#B22234" />
      ))}
      <rect width="26" height={(40 / 13) * 7} fill="#3C3B6E" />
      {[6, 15, 24, 6, 15, 24].map((cx, idx) => (
        <circle key={idx} cx={cx} cy={idx < 3 ? 6 : 15} r="1.5" fill="#fff" />
      ))}
    </svg>
  );
}
function FlagUK() {
  return (
    <svg viewBox="0 0 60 40" className="w-full h-full" aria-hidden="true">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="3" />
      <rect x="24" width="12" height="40" fill="#fff" />
      <rect y="14" width="60" height="12" fill="#fff" />
      <rect x="27" width="6" height="40" fill="#C8102E" />
      <rect y="17" width="60" height="6" fill="#C8102E" />
    </svg>
  );
}
function FlagIndia() {
  return (
    <svg viewBox="0 0 60 40" className="w-full h-full" aria-hidden="true">
      <rect width="60" height="13.34" fill="#FF9933" />
      <rect y="13.33" width="60" height="13.34" fill="#fff" />
      <rect y="26.66" width="60" height="13.34" fill="#138808" />
      <circle cx="30" cy="20" r="5" fill="none" stroke="#000080" strokeWidth="1.2" />
      <circle cx="30" cy="20" r="1" fill="#000080" />
    </svg>
  );
}
function FlagPakistan() {
  return (
    <svg viewBox="0 0 60 40" className="w-full h-full" aria-hidden="true">
      <rect width="60" height="40" fill="#01411C" />
      <rect width="15" height="40" fill="#fff" />
      <circle cx="35" cy="20" r="9" fill="#fff" />
      <circle cx="38.5" cy="20" r="7.5" fill="#01411C" />
      <path
        d="M44 14 l1.2 3.2 3.4 .2 -2.6 2.2 .9 3.3 -2.9 -1.9 -2.9 1.9 .9 -3.3 -2.6 -2.2 3.4 -.2 z"
        fill="#fff"
      />
    </svg>
  );
}

const LOCATIONS = [
  { country: "United States", role: "Headquarters", note: "Naperville, Illinois", Flag: FlagUS },
  { country: "United Kingdom", role: "Delivery & Support", note: "UK & Europe coverage", Flag: FlagUK },
  { country: "India", role: "Engineering", note: "Cloud & DevOps engineering", Flag: FlagIndia },
  { country: "Pakistan", role: "Engineering", note: "Cloud & DevOps engineering", Flag: FlagPakistan },
];

// Marker positions on the network graphic (loosely west-to-east).
const NODES = [
  { x: 150, y: 120, label: "US" },
  { x: 420, y: 92, label: "UK" },
  { x: 640, y: 104, label: "PK" },
  { x: 850, y: 130, label: "IN" },
];

const CSS = `
.ctk-gp .arc{stroke-dasharray:5 7;animation:ctk-dash 3.2s linear infinite;}
.ctk-gp .pulse{transform-origin:center;animation:ctk-pulse 2.6s ease-in-out infinite;}
@keyframes ctk-dash{to{stroke-dashoffset:-48;}}
@keyframes ctk-pulse{0%,100%{opacity:.35;r:14;}50%{opacity:0;r:26;}}
@media (prefers-reduced-motion: reduce){
  .ctk-gp .arc,.ctk-gp .pulse{animation:none;}
}
`;

export default function GlobalPresence() {
  return (
    <section className="ctk-gp py-20 px-4 md:px-36 bg-[#f4f7fb] overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-[#0972d3] mb-3">
            Global team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One team, four countries
          </h2>
          <p className="text-lg text-gray-600">
            CodetoKloud is US-registered, with engineering and delivery across
            the United Kingdom, India, and Pakistan. A distributed team that
            covers more of your day and keeps work moving around the clock.
          </p>
        </div>

        {/* Connected-network graphic */}
        <div className="mb-12">
          <svg
            viewBox="0 0 1000 200"
            className="w-full h-auto max-h-[220px]"
            role="img"
            aria-label="A connected network linking our teams across four countries"
          >
            <defs>
              <radialGradient id="ctk-dot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2b8fe8" />
                <stop offset="100%" stopColor="#0972d3" />
              </radialGradient>
            </defs>
            {/* faint dotted backdrop */}
            {Array.from({ length: 11 }).map((_, r) =>
              Array.from({ length: 40 }).map((_, c) => (
                <circle
                  key={`${r}-${c}`}
                  cx={12 + c * 25}
                  cy={14 + r * 18}
                  r="1"
                  fill="#16212e"
                  opacity="0.06"
                />
              ))
            )}
            {/* connecting dashed arcs */}
            {NODES.slice(0, -1).map((n, i) => {
              const m = NODES[i + 1];
              const midX = (n.x + m.x) / 2;
              const midY = Math.min(n.y, m.y) - 40;
              return (
                <path
                  key={i}
                  className="arc"
                  d={`M${n.x},${n.y} Q${midX},${midY} ${m.x},${m.y}`}
                  fill="none"
                  stroke="#2b8fe8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              );
            })}
            {/* nodes */}
            {NODES.map((n, i) => (
              <g key={i}>
                <circle className="pulse" cx={n.x} cy={n.y} r="14" fill="#0972d3" opacity="0.3" />
                <circle cx={n.x} cy={n.y} r="8" fill="url(#ctk-dot)" />
                <circle cx={n.x} cy={n.y} r="3" fill="#fff" />
                <text
                  x={n.x}
                  y={n.y - 22}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="#16212e"
                  fontFamily="var(--font-sora), sans-serif"
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Flag cards */}
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map(({ country, role, note, Flag }) => (
            <div
              key={country}
              className="rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-[#0972d3] hover:shadow-md hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#0972d3]/10 shadow-sm">
                <Flag />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{country}</h3>
              <p className="text-sm font-semibold text-[#0972d3]">{role}</p>
              <p className="text-xs text-gray-500 mt-1">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

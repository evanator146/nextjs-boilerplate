/**
 * Illustrated, resolution-independent Florida landscape scenes.
 * Rendered as inline SVG so the site ships zero heavy image assets and
 * stays crisp on every screen. Deterministic (seeded) so SSR matches.
 */

export type SceneConfig = {
  sky?: "day" | "golden" | "dusk" | "morning";
  house?: boolean;
  palms?: number[]; // x positions (0–1600)
  stripes?: boolean;
  overgrown?: boolean;
  beds?: boolean;
  hedge?: boolean;
  path?: boolean;
  water?: boolean;
  debris?: boolean;
  horizon?: number; // y of horizon (default 560)
};

const skies = {
  day: ["#7cc4e8", "#bfe4f2", "#eaf7f1"],
  morning: ["#9fd0e6", "#d8ecea", "#fbf3df"],
  golden: ["#f3b46a", "#f8d9a0", "#fdf1d6"],
  dusk: ["#2f4b6e", "#b8738a", "#f5b97a"],
};

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function Palm({ x, base, scale = 1, dark = false, id }: { x: number; base: number; scale?: number; dark?: boolean; id: string }) {
  const trunk = dark ? "#2c2a22" : "#8a7253";
  const frond = dark ? "#173022" : "#2f7a43";
  const frond2 = dark ? "#10251a" : "#225f33";
  const h = 330 * scale;
  const topX = x + 40 * scale;
  const topY = base - h;
  const fronds = [-160, -130, -100, -60, -25, 10, 40, 75, 110];
  return (
    <g>
      <path
        d={`M${x - 9 * scale},${base} C${x - 4 * scale},${base - h * 0.5} ${topX - 10 * scale},${topY + h * 0.25} ${topX - 4 * scale},${topY} L${topX + 6 * scale},${topY} C${topX},${topY + h * 0.25} ${x + 10 * scale},${base - h * 0.5} ${x + 9 * scale},${base} Z`}
        fill={trunk}
      />
      {Array.from({ length: 12 }).map((_, i) => (
        <path
          key={`${id}r${i}`}
          d={`M${x - 8 * scale + (i / 12) * 44 * scale},${base - (i / 12) * h} q${8 * scale},-${4 * scale} ${16 * scale},0`}
          stroke={dark ? "#1d1b16" : "#6d5940"}
          strokeWidth={2 * scale}
          fill="none"
          opacity=".6"
        />
      ))}
      {fronds.map((a, i) => {
        const rad = (a * Math.PI) / 180;
        const len = (150 + (i % 3) * 22) * scale;
        const ex = topX + Math.cos(rad) * len;
        const ey = topY + Math.sin(rad) * len * 0.55 + len * 0.42;
        const cx = topX + Math.cos(rad) * len * 0.55;
        const cy = topY - 40 * scale + Math.sin(rad) * len * 0.2;
        return (
          <path
            key={`${id}f${i}`}
            d={`M${topX},${topY} Q${cx},${cy} ${ex},${ey} Q${cx + 6 * scale},${cy + 26 * scale} ${topX},${topY + 6 * scale} Z`}
            fill={i % 2 ? frond : frond2}
          />
        );
      })}
      <circle cx={topX} cy={topY + 6 * scale} r={9 * scale} fill={dark ? "#1d1b16" : "#5b4a33"} />
    </g>
  );
}

export function LawnScene({
  config = {},
  seed = 7,
  className = "",
  title,
}: {
  config?: SceneConfig;
  seed?: number;
  className?: string;
  title?: string;
}) {
  const {
    sky = "day",
    house = false,
    palms = [],
    stripes = true,
    overgrown = false,
    beds = false,
    hedge = false,
    path = false,
    water = false,
    debris = false,
    horizon = 560,
  } = config;
  const id = `s${seed}${sky}${overgrown ? "o" : ""}`;
  const r = rng(seed);
  const [s1, s2, s3] = skies[sky];
  const dusk = sky === "dusk";
  const golden = sky === "golden";
  const vx = 800;
  const H = horizon;

  const stripeCount = 14;
  const stripePolys = [];
  for (let i = -stripeCount; i < stripeCount; i++) {
    const topA = vx + i * 46;
    const topB = vx + (i + 1) * 46;
    const botA = vx + i * 230;
    const botB = vx + (i + 1) * 230;
    stripePolys.push(
      <polygon
        key={i}
        points={`${topA},${H} ${topB},${H} ${botB},1000 ${botA},1000`}
        fill={i % 2 === 0 ? "#ffffff" : "#000000"}
        opacity={i % 2 === 0 ? 0.07 : 0.06}
      />,
    );
  }

  const tufts = [];
  if (overgrown) {
    for (let i = 0; i < 220; i++) {
      const x = r() * 1600;
      const y = H + 20 + r() * (1000 - H);
      const d = (y - H) / (1000 - H);
      const h = (12 + r() * 40) * (0.4 + d);
      const lean = (r() - 0.5) * 18;
      const c = r() > 0.7 ? "#9bab4a" : r() > 0.5 ? "#4f7f2f" : "#6f8f37";
      tufts.push(
        <path key={`t${i}`} d={`M${x},${y} q${lean},-${h * 0.6} ${lean * 1.6},-${h} M${x + 4},${y} q${-lean * 0.5},-${h * 0.5} ${-lean},-${h * 0.85}`} stroke={c} strokeWidth={2 + d * 2} fill="none" strokeLinecap="round" />,
      );
    }
    for (let i = 0; i < 26; i++) {
      const x = r() * 1600;
      const y = H + 40 + r() * (960 - H);
      const d = (y - H) / (1000 - H);
      tufts.push(<ellipse key={`p${i}`} cx={x} cy={y} rx={(40 + r() * 90) * (0.5 + d)} ry={(10 + r() * 22) * (0.5 + d)} fill={r() > 0.5 ? "#b5a25a" : "#a08c4c"} opacity=".55" />);
    }
    for (let i = 0; i < 30; i++) {
      const x = r() * 1600;
      const y = H + 40 + r() * (960 - H);
      tufts.push(<circle key={`w${i}`} cx={x} cy={y} r={3 + r() * 4} fill={r() > 0.5 ? "#f2d34f" : "#ffffff"} opacity=".9" />);
    }
  }

  const clouds = Array.from({ length: 4 }).map((_, i) => {
    const cx = 150 + r() * 1300;
    const cy = 90 + r() * 200;
    const w = 120 + r() * 160;
    return (
      <g key={`c${i}`} opacity={dusk ? 0.25 : 0.75} fill={golden ? "#fff6e6" : "#ffffff"}>
        <ellipse cx={cx} cy={cy} rx={w} ry={w * 0.22} />
        <ellipse cx={cx - w * 0.3} cy={cy - w * 0.12} rx={w * 0.45} ry={w * 0.25} />
        <ellipse cx={cx + w * 0.25} cy={cy - w * 0.18} rx={w * 0.5} ry={w * 0.3} />
      </g>
    );
  });

  const lawnTop = overgrown ? "#7f9a45" : dusk ? "#3f7a45" : "#5fae58";
  const lawnBot = overgrown ? "#5c7a32" : dusk ? "#1f4a2a" : "#2f7d3d";

  return (
    <svg
      viewBox="0 0 1600 1000"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={s1} />
          <stop offset=".6" stopColor={s2} />
          <stop offset="1" stopColor={s3} />
        </linearGradient>
        <radialGradient id={`${id}sun`}>
          <stop offset="0" stopColor="#fffbe8" stopOpacity="1" />
          <stop offset=".25" stopColor="#ffe9a8" stopOpacity=".8" />
          <stop offset="1" stopColor="#ffe9a8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}lawn`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={lawnTop} />
          <stop offset="1" stopColor={lawnBot} />
        </linearGradient>
        <linearGradient id={`${id}water`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={dusk ? "#d79a83" : "#8fd0e0"} />
          <stop offset="1" stopColor={dusk ? "#3e5a7a" : "#3f93ad"} />
        </linearGradient>
        <linearGradient id={`${id}shade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".22" />
        </linearGradient>
      </defs>

      <rect width="1600" height="1000" fill={`url(#${id}sky)`} />
      <circle cx={golden || dusk ? 1180 : 1250} cy={golden || dusk ? H - 120 : 170} r={golden || dusk ? 260 : 200} fill={`url(#${id}sun)`} />
      <circle cx={golden || dusk ? 1180 : 1250} cy={golden || dusk ? H - 120 : 170} r={golden || dusk ? 52 : 40} fill="#fffbe8" opacity={dusk ? 0.85 : 0.95} />
      {clouds}

      {/* distant tree line */}
      <path
        d={`M0,${H - 40} C120,${H - 90} 200,${H - 70} 300,${H - 85} S480,${H - 60} 600,${H - 95} S820,${H - 55} 960,${H - 80} S1180,${H - 105} 1320,${H - 70} S1500,${H - 90} 1600,${H - 60} V${H + 10} H0Z`}
        fill={dusk ? "#2a3b3a" : "#3d7a55"}
        opacity=".55"
      />
      <path
        d={`M0,${H - 10} C160,${H - 50} 260,${H - 30} 420,${H - 45} S700,${H - 20} 880,${H - 40} S1200,${H - 15} 1380,${H - 38} S1540,${H - 30} 1600,${H - 25} V${H + 10} H0Z`}
        fill={dusk ? "#1e2f2a" : "#2d6a43"}
        opacity=".8"
      />

      {water && (
        <g>
          <path d={`M0,${H - 2} H1600 V${H + 70} C1200,${H + 90} 400,${H + 60} 0,${H + 80}Z`} fill={`url(#${id}water)`} />
          {Array.from({ length: 10 }).map((_, i) => (
            <path key={`wl${i}`} d={`M${100 + i * 150 + r() * 40},${H + 18 + (i % 3) * 16} h${60 + r() * 60}`} stroke="#fff" strokeOpacity=".45" strokeWidth="3" strokeLinecap="round" />
          ))}
        </g>
      )}

      {house && (
        <g>
          <ellipse cx="800" cy={H + 8} rx="430" ry="18" fill="#000" opacity=".12" />
          <rect x="430" y={H - 170} width="740" height="178" fill={dusk ? "#cdbfae" : "#f4efe6"} />
          <rect x="430" y={H - 170} width="740" height="178" fill={`url(#${id}shade)`} />
          <polygon points={`400,${H - 168} 800,${H - 290} 1200,${H - 168}`} fill={dusk ? "#5b3d34" : "#b0654a"} />
          <polygon points={`400,${H - 168} 800,${H - 290} 1200,${H - 168} 1200,${H - 155} 400,${H - 155}`} fill="#000" opacity=".12" />
          <rect x="740" y={H - 120} width="120" height="128" rx="4" fill={dusk ? "#4a3a2c" : "#6b4e35"} />
          <rect x="740" y={H - 120} width="120" height="128" rx="4" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="4" />
          {[490, 600, 920, 1030].map((wx) => (
            <g key={wx}>
              <rect x={wx} y={H - 128} width="86" height="80" rx="3" fill={dusk ? "#f8cf86" : "#a9d3e6"} />
              <path d={`M${wx},${H - 128} l86,0 l-86,80Z`} fill="#fff" opacity=".25" />
              <rect x={wx} y={H - 128} width="86" height="80" rx="3" fill="none" stroke="#fff" strokeWidth="5" />
              <path d={`M${wx + 43},${H - 128} v80`} stroke="#fff" strokeWidth="3" />
            </g>
          ))}
          <rect x="700" y={H + 4} width="200" height="12" fill="#d9d2c4" />
        </g>
      )}

      {/* lawn */}
      <rect x="0" y={H} width="1600" height={1000 - H} fill={`url(#${id}lawn)`} />
      {stripes && !overgrown && stripePolys}
      {!overgrown &&
        Array.from({ length: 70 }).map((_, i) => {
          const x = r() * 1600;
          const y = H + 30 + r() * (970 - H);
          return <path key={`g${i}`} d={`M${x},${y} l3,-9 M${x + 5},${y} l-2,-8`} stroke="#000" strokeOpacity=".07" strokeWidth="2" />;
        })}

      {path && (
        <g>
          <path d={`M780,${H + 16} C760,${H + 140} 640,${H + 260} 560,1000 L860,1000 C880,${H + 260} 840,${H + 140} 820,${H + 16}Z`} fill={overgrown ? "#b9ad93" : "#e3dccd"} />
          {Array.from({ length: 9 }).map((_, i) => {
            const t = i / 9;
            const y = H + 16 + t * (1000 - H - 16);
            return <path key={`pv${i}`} d={`M${780 - t * 230},${y} H${820 + t * 50}`} stroke="#bfb5a2" strokeWidth={2 + t * 3} />;
          })}
        </g>
      )}

      {beds && (
        <g>
          <path d={`M0,${H + 60} C200,${H + 40} 330,${H + 70} 420,${H + 30} L430,${H + 5} L0,${H + 5}Z`} fill={overgrown ? "#6c5a3c" : "#5a3d27"} />
          <path d={`M1600,${H + 60} C1400,${H + 40} 1270,${H + 70} 1180,${H + 30} L1170,${H + 5} L1600,${H + 5}Z`} fill={overgrown ? "#6c5a3c" : "#5a3d27"} />
          {Array.from({ length: 34 }).map((_, i) => {
            const left = i < 17;
            const x = left ? 20 + (i % 17) * 23 : 1190 + (i % 17) * 23;
            const y = H + 22 + r() * 22;
            const colors = ["#f06b8b", "#ffd166", "#ffffff", "#e94f6d", "#ffb3c6"];
            return (
              <g key={`fl${i}`}>
                <circle cx={x} cy={y} r={16 + r() * 8} fill={overgrown ? "#557a2c" : "#2e6b36"} />
                {!overgrown && <circle cx={x + 3} cy={y - 6} r={5} fill={colors[i % colors.length]} />}
              </g>
            );
          })}
        </g>
      )}

      {hedge &&
        (overgrown ? (
          <g fill="#3f6a2a">
            {Array.from({ length: 16 }).map((_, i) => (
              <circle key={`oh${i}`} cx={i * 105 + r() * 30} cy={H - 20 - r() * 40} r={60 + r() * 40} />
            ))}
          </g>
        ) : (
          <g>
            <rect x="0" y={H - 70} width="380" height="80" rx="14" fill="#25603a" />
            <rect x="1220" y={H - 70} width="380" height="80" rx="14" fill="#25603a" />
            <rect x="0" y={H - 70} width="380" height="18" rx="9" fill="#3d8a52" opacity=".7" />
            <rect x="1220" y={H - 70} width="380" height="18" rx="9" fill="#3d8a52" opacity=".7" />
          </g>
        ))}

      {palms.map((px, i) => (
        <Palm key={`palm${i}`} id={`${id}p${i}`} x={px} base={H + 30 + (i % 2) * 40} scale={0.9 + (i % 3) * 0.18} dark={dusk} />
      ))}

      {debris &&
        Array.from({ length: 22 }).map((_, i) => {
          const x = r() * 1600;
          const y = H + 60 + r() * (900 - H);
          const rot = r() * 180;
          return <path key={`d${i}`} d={`M${x},${y} q30,-14 70,4`} stroke="#8a7044" strokeWidth="6" fill="none" strokeLinecap="round" transform={`rotate(${rot} ${x} ${y})`} opacity=".8" />;
        })}
      {tufts}

      {/* soft vignette */}
      <rect width="1600" height="1000" fill={`url(#${id}shade)`} opacity=".7" />
    </svg>
  );
}

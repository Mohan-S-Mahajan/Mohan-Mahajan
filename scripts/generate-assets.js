import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDirs = [
  path.resolve('public/assets/images'),
  path.resolve('src/assets/images'),
];

outDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Helper to save SVG buffer to WebP/JPG/PNG in both directories
async function saveAsset(name, svgStr, width, height, format = 'webp') {
  const buffer = Buffer.from(svgStr);
  let sharpInstance = sharp(buffer).resize(width, height);
  let outputBuffer;
  if (format === 'webp') {
    outputBuffer = await sharpInstance.webp({ quality: 85 }).toBuffer();
  } else if (format === 'jpeg' || format === 'jpg') {
    outputBuffer = await sharpInstance.jpeg({ quality: 85 }).toBuffer();
  } else {
    outputBuffer = await sharpInstance.png().toBuffer();
  }

  for (const dir of outDirs) {
    fs.writeFileSync(path.join(dir, name), outputBuffer);
  }
  console.log(`Generated ${name} (${width}x${height})`);
}

async function main() {
  // 1. gate-portrait.webp (1400x1800)
  const gatePortraitSvg = `
  <svg width="1400" height="1800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="rimGlow" cx="70%" cy="45%" r="60%">
        <stop offset="0%" stop-color="#FFB000" stop-opacity="0.9"/>
        <stop offset="40%" stop-color="#D9A400" stop-opacity="0.4"/>
        <stop offset="85%" stop-color="#0A0A0B" stop-opacity="1"/>
      </radialGradient>
      <linearGradient id="smokeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0F1B3D" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#0A0A0B" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect width="1400" height="1800" fill="#0A0A0B"/>
    <rect width="1400" height="1800" fill="url(#smokeGrad)"/>
    <circle cx="950" cy="800" r="650" fill="url(#rimGlow)"/>

    <!-- High-backed throne / office chair silhouette -->
    <path d="M 550 500 L 1050 500 L 1000 1300 L 600 1300 Z" fill="#121214" stroke="#D9A400" stroke-width="4"/>
    <rect x="520" y="460" width="560" height="60" rx="10" fill="#1A1A1E" stroke="#FFB000" stroke-width="3"/>
    
    <!-- Man in suit & porkpie hat silhouette with amber rim-light -->
    <path d="M 680 750 C 680 620 920 620 920 750 L 980 1200 L 620 1200 Z" fill="#0E0F12"/>
    <!-- Suit lapels & golden tie -->
    <polygon points="760,820 800,980 840,820 800,1100" fill="#F2B21A" opacity="0.85"/>
    <polygon points="730,760 770,950 710,930" fill="#1F2026"/>
    <polygon points="870,760 830,950 890,930" fill="#1F2026"/>
    <!-- Head & Hat -->
    <ellipse cx="800" cy="620" rx="75" ry="95" fill="#16171B"/>
    <path d="M 690 560 L 910 560 L 890 480 L 710 480 Z" fill="#0A0A0B" stroke="#FFB000" stroke-width="2"/>
    <ellipse cx="800" cy="560" rx="135" ry="22" fill="#0A0A0B" stroke="#D9A400" stroke-width="2"/>
    
    <!-- Atmospheric dust & smoke particles -->
    <circle cx="750" cy="520" r="3" fill="#FFB000" opacity="0.6"/>
    <circle cx="910" cy="670" r="4" fill="#FFB000" opacity="0.7"/>
    <circle cx="650" cy="900" r="5" fill="#FFB000" opacity="0.5"/>
    <circle cx="1020" cy="1100" r="3" fill="#FFB000" opacity="0.8"/>
  </svg>`;
  await saveAsset('gate-portrait.webp', gatePortraitSvg, 1400, 1800);

  // 2. hero-portrait.webp (1400x1700)
  const heroPortraitSvg = `
  <svg width="1400" height="1700" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="heroAmber" cx="65%" cy="35%" r="70%">
        <stop offset="0%" stop-color="#FFB000" stop-opacity="0.85"/>
        <stop offset="45%" stop-color="#D9A400" stop-opacity="0.3"/>
        <stop offset="90%" stop-color="#0A0A0B" stop-opacity="1"/>
      </radialGradient>
      <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1A2035"/>
        <stop offset="100%" stop-color="#0A0A0B"/>
      </linearGradient>
    </defs>
    <rect width="1400" height="1700" fill="#0A0A0B"/>
    <circle cx="900" cy="600" r="600" fill="url(#heroAmber)"/>
    <!-- Scales of justice watermark in background -->
    <path d="M 900 300 L 900 650 M 750 400 L 1050 400 M 750 400 L 710 500 L 790 500 Z M 1050 400 L 1010 500 L 1090 500 Z" 
      stroke="#FFB000" stroke-width="4" fill="none" opacity="0.25"/>
    
    <!-- Hero silhouette: confident lawyer posture with desk -->
    <path d="M 600 700 C 600 550 950 550 950 700 L 1050 1400 L 500 1400 Z" fill="#111317"/>
    <!-- Gold tie & handkerchief -->
    <polygon points="760,760 790,950 820,760 790,1100" fill="#F2B21A"/>
    <polygon points="870,820 900,800 910,830" fill="#C8102E"/>
    <!-- Head & hat profile -->
    <ellipse cx="780" cy="500" rx="80" ry="100" fill="#181A20"/>
    <ellipse cx="780" cy="440" rx="140" ry="24" fill="#0A0A0B" stroke="#D9A400" stroke-width="3"/>
    <path d="M 680 440 L 880 440 L 860 360 L 700 360 Z" fill="#0A0A0B" stroke="#FFB000" stroke-width="2"/>
    
    <!-- Desk foreground -->
    <rect x="200" y="1300" width="1100" height="400" fill="url(#deskGrad)" stroke="#D9A400" stroke-width="2"/>
    <!-- Golden nameplate "JAMES M. McGILL - ATTORNEY AT LAW" -->
    <polygon points="600,1360 980,1360 960,1430 620,1430" fill="#F2B21A" stroke="#0A0A0B" stroke-width="2"/>
    <text x="790" y="1405" font-family="'Courier New', monospace" font-size="16" font-weight="bold" fill="#0A0A0B" text-anchor="middle">JAMES M. McGILL · ATTORNEY AT LAW</text>
  </svg>`;
  await saveAsset('hero-portrait.webp', heroPortraitSvg, 1400, 1700);

  // 3. about-face.webp (1200x1500)
  const aboutFaceSvg = `
  <svg width="1200" height="1500" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="splitFace" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#0F1B3D"/>
        <stop offset="50%" stop-color="#16181F"/>
        <stop offset="100%" stop-color="#0A0A0B"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="1500" fill="#0A0A0B"/>
    <rect width="1200" height="1500" fill="url(#splitFace)"/>

    <!-- High contrast face structure -->
    <ellipse cx="600" cy="650" rx="260" ry="340" fill="#1C1E26"/>
    <!-- Glasses / Spectacles rim glow -->
    <rect x="420" y="580" width="140" height="100" rx="15" fill="none" stroke="#FFB000" stroke-width="6"/>
    <rect x="640" y="580" width="140" height="100" rx="15" fill="none" stroke="#FFB000" stroke-width="6"/>
    <line x1="560" y1="630" x2="640" y2="630" stroke="#FFB000" stroke-width="6"/>
    <!-- Goatee / Beard shadow -->
    <path d="M 520 780 Q 600 950 680 780 Z" fill="#0A0A0B" stroke="#D9A400" stroke-width="2"/>

    <!-- Disintegration particles breaking away to the right -->
    ${Array.from({ length: 60 }).map((_, i) => {
      const cx = 750 + Math.random() * 400;
      const cy = 400 + Math.random() * 700;
      const r = 2 + Math.random() * 8;
      const op = 0.3 + Math.random() * 0.7;
      return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="#FFB000" opacity="${op.toFixed(2)}"/>`;
    }).join('\n')}
  </svg>`;
  await saveAsset('about-face.webp', aboutFaceSvg, 1200, 1500);

  // 4. skills-bg.webp (1600x900)
  const skillsBgSvg = `
  <svg width="1600" height="900" xmlns="http://www.w3.org/2000/svg">
    <rect width="1600" height="900" fill="#0A0A0B"/>
    <!-- Industrial lab pipes & condenser glassware -->
    <path d="M 100 200 L 1500 200 M 100 250 L 1500 250" stroke="#16203A" stroke-width="12"/>
    <path d="M 400 250 L 400 700 L 550 700 L 550 250" stroke="#2F7D4F" stroke-width="4" fill="none" opacity="0.3"/>
    <path d="M 1200 250 L 1200 750 L 1380 750 L 1380 250" stroke="#FFB000" stroke-width="4" fill="none" opacity="0.3"/>
    <!-- Glowing amber lamps in background -->
    <circle cx="450" cy="450" r="180" fill="#FFB000" opacity="0.12"/>
    <circle cx="1250" cy="450" r="180" fill="#5CC8FF" opacity="0.08"/>
    <!-- Floor reflection -->
    <rect x="0" y="720" width="1600" height="180" fill="#0F1117" opacity="0.8"/>
  </svg>`;
  await saveAsset('skills-bg.webp', skillsBgSvg, 1600, 900);

  // 5 & 6. contact-left.webp & contact-right.webp (900x1100 each)
  const contactLeftSvg = `
  <svg width="900" height="1100" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="1100" fill="#0A0A0B"/>
    <radialGradient id="cg1" cx="30%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFB000" stop-opacity="0.7"/>
      <stop offset="60%" stop-color="#0A0A0B" stop-opacity="0.95"/>
    </radialGradient>
    <rect width="900" height="1100" fill="url(#cg1)"/>
    <!-- Close-up intense eye / face contour -->
    <ellipse cx="450" cy="550" rx="280" ry="400" fill="#13151D"/>
    <ellipse cx="480" cy="480" rx="60" ry="25" fill="#000" stroke="#FFB000" stroke-width="4"/>
    <circle cx="480" cy="480" r="12" fill="#FFB000"/>
    <path d="M 400 420 Q 480 390 560 410" stroke="#FFB000" stroke-width="8" fill="none"/>
  </svg>`;
  await saveAsset('contact-left.webp', contactLeftSvg, 900, 1100);

  const contactRightSvg = `
  <svg width="900" height="1100" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="1100" fill="#0A0A0B"/>
    <radialGradient id="cg2" cx="70%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#FFB000" stop-opacity="0.7"/>
      <stop offset="60%" stop-color="#0A0A0B" stop-opacity="0.95"/>
    </radialGradient>
    <rect width="900" height="1100" fill="url(#cg2)"/>
    <!-- Mirrored intense eye / face contour -->
    <ellipse cx="450" cy="550" rx="280" ry="400" fill="#13151D"/>
    <ellipse cx="420" cy="480" rx="60" ry="25" fill="#000" stroke="#FFB000" stroke-width="4"/>
    <circle cx="420" cy="480" r="12" fill="#FFB000"/>
    <path d="M 340 410 Q 420 390 500 420" stroke="#FFB000" stroke-width="8" fill="none"/>
  </svg>`;
  await saveAsset('contact-right.webp', contactRightSvg, 900, 1100);

  // 7. Case study mockups case-01.webp to case-06.webp (1600x1000)
  const caseThemes = [
    { title: "LOS POLLOS HERMANOS CRM", code: "REACT + REDIS", color: "#FFB000", tag: "SUB-30MS LATENCY" },
    { title: "SANDPIPER CROSSING AUDIT", code: "NEXT.JS + POSTGRESQL", color: "#5CC8FF", tag: "ZERO-KNOWLEDGE LEDGER" },
    { title: "VAMONOS PEST FIELD PWA", code: "PWA + INDEXEDDB", color: "#D9A400", tag: "OFFLINE-FIRST DISPATCH" },
    { title: "MADRIGAL METRICS VAULT", code: "THREE.JS + WEBGL", color: "#F2B21A", tag: "60FPS TELEMETRY" },
    { title: "ALBUQUERQUE DESIGN SYSTEM", code: "ACCESSIBILITY AAA", color: "#2F7D4F", tag: "SECTION 508 COMPLIANT" },
    { title: "GRAY MATTER CHEMICAL SIM", code: "WASM + RUST", color: "#C8102E", tag: "STOICHIOMETRIC COMPILE" },
  ];

  for (let i = 0; i < caseThemes.length; i++) {
    const t = caseThemes[i];
    const caseSvg = `
    <svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g${i}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0F1B3D"/>
          <stop offset="60%" stop-color="#121214"/>
          <stop offset="100%" stop-color="#0A0A0B"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#g${i})"/>
      <rect x="40" y="40" width="1520" height="920" fill="none" stroke="${t.color}" stroke-width="3" opacity="0.6"/>
      
      <!-- Top Dossier Bar -->
      <rect x="40" y="40" width="1520" height="70" fill="#0A0A0B"/>
      <text x="80" y="85" font-family="'Courier New', monospace" font-size="20" font-weight="bold" fill="#F2B21A">EVIDENCE EXHIBIT 0${i+1} · ALBUQUERQUE BENCH DOCKET</text>
      <text x="1480" y="85" font-family="'Courier New', monospace" font-size="20" font-weight="bold" fill="${t.color}" text-anchor="end">STATUS: VERIFIED WON</text>

      <!-- Mock UI Window -->
      <rect x="100" y="160" width="1400" height="740" rx="8" fill="#14161E" stroke="#333" stroke-width="2"/>
      <!-- Window header -->
      <rect x="100" y="160" width="1400" height="60" rx="8" fill="#1C1F2B"/>
      <circle cx="140" cy="190" r="8" fill="#C8102E"/>
      <circle cx="170" cy="190" r="8" fill="#FFB000"/>
      <circle cx="200" cy="190" r="8" fill="#2F7D4F"/>
      <text x="240" y="196" font-family="'Courier New', monospace" font-size="16" fill="#A89F8A">https://secure.evidence-vault.internal/case-0${i+1}</text>

      <!-- Dashboard Grid Visualization -->
      <text x="160" y="300" font-family="'Impact', 'Arial Black', sans-serif" font-size="52" fill="#F3E9D2">${t.title}</text>
      <text x="160" y="340" font-family="'Courier New', monospace" font-size="22" font-weight="bold" fill="${t.color}">${t.code} // ${t.tag}</text>

      <!-- Chart / Metric Cards -->
      <rect x="160" y="390" width="380" height="240" fill="#0D0E14" stroke="#262A38" stroke-width="2" rx="4"/>
      <text x="190" y="440" font-family="'Courier New', monospace" font-size="16" fill="#888">METRIC PURITY</text>
      <text x="190" y="520" font-family="'Impact', sans-serif" font-size="64" fill="#F2B21A">99.1%</text>
      <text x="190" y="580" font-family="'Courier New', monospace" font-size="15" fill="#2F7D4F">▲ 0.00ms CLS · 100/100 AUDIT</text>

      <rect x="580" y="390" width="460" height="240" fill="#0D0E14" stroke="#262A38" stroke-width="2" rx="4"/>
      <path d="M 620 570 Q 720 450 820 520 T 1000 440" fill="none" stroke="${t.color}" stroke-width="6"/>
      <text x="620" y="440" font-family="'Courier New', monospace" font-size="16" fill="#888">REAL-TIME TRAFFIC FLOW</text>

      <rect x="1080" y="390" width="360" height="240" fill="#0D0E14" stroke="#262A38" stroke-width="2" rx="4"/>
      <text x="1110" y="440" font-family="'Courier New', monospace" font-size="16" fill="#888">SECURITY INTEGRITY</text>
      <text x="1110" y="520" font-family="'Impact', sans-serif" font-size="52" fill="#5CC8FF">UNCOMPROMISED</text>
      <text x="1110" y="575" font-family="'Courier New', monospace" font-size="15" fill="#E9DDB8">SHA-256 SIGNED LEDGER</text>

      <!-- Bottom Status Strip -->
      <rect x="100" y="840" width="1400" height="60" fill="#10121A"/>
      <text x="160" y="876" font-family="'Courier New', monospace" font-size="15" fill="#F2B21A">VERDICT CONFIRMED: FAST, CLEAN, BULLETPROOF ARCHITECTURE</text>
      
      <!-- Stamped CONFIDENTIAL badge -->
      <rect x="1250" y="700" width="220" height="80" rx="4" fill="none" stroke="#C8102E" stroke-width="6" transform="rotate(-8 1250 700)"/>
      <text x="1360" y="752" font-family="'Impact', sans-serif" font-size="32" font-weight="bold" fill="#C8102E" text-anchor="middle" transform="rotate(-8 1250 700)">CONFIDENTIAL</text>
    </svg>`;
    await saveAsset(`case-0${i+1}.webp`, caseSvg, 1600, 1000);
  }

  // 8. og-image.jpg (1200x630)
  const ogSvg = `
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#0A0A0B"/>
    <circle cx="950" cy="300" r="400" fill="#FFB000" opacity="0.35"/>
    <text x="80" y="160" font-family="'Courier New', monospace" font-size="20" font-weight="bold" fill="#F2B21A">ALBUQUERQUE, NM · ATTORNEY OF CODE</text>
    <text x="80" y="270" font-family="'Impact', sans-serif" font-size="96" fill="#F3E9D2">BETTER CALL [NAME]</text>
    <text x="80" y="350" font-family="'Georgia', serif" font-size="32" font-style="italic" fill="#E9DDB8">"Did you know you have options?"</text>
    <text x="80" y="440" font-family="'Arial', sans-serif" font-size="22" fill="#A89F8A">Senior Creative Front-End Engineer · React, TypeScript &amp; 99.1% Pure Code</text>
    
    <rect x="80" y="500" width="300" height="64" fill="#F2B21A"/>
    <text x="230" y="542" font-family="'Impact', sans-serif" font-size="28" fill="#0A0A0B" text-anchor="middle">1-800-ASK-SAUL</text>
  </svg>`;
  await saveAsset('og-image.jpg', ogSvg, 1200, 630, 'jpg');

  // 9. texture-paper.jpg (800x1000)
  const paperSvg = `
  <svg width="800" height="1000" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="1000" fill="#E9DDB8"/>
    <!-- Red left margin line -->
    <line x1="80" y1="0" x2="80" y2="1000" stroke="#D64545" stroke-width="3"/>
    <line x1="86" y1="0" x2="86" y2="1000" stroke="#D64545" stroke-width="1" opacity="0.5"/>
    <!-- Blue ruled lines -->
    ${Array.from({ length: 30 }).map((_, i) => `<line x1="0" y1="${80 + i * 30}" x2="800" y2="${80 + i * 30}" stroke="#9BB2CE" stroke-width="1.5" opacity="0.8"/>`).join('\n')}
  </svg>`;
  await saveAsset('texture-paper.jpg', paperSvg, 800, 1000, 'jpg');

  console.log("All visual assets successfully generated!");
}

main().catch(err => {
  console.error("Asset generation error:", err);
  process.exit(1);
});

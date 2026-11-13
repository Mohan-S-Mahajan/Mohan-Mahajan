/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "courtroom-navy": "var(--courtroom-navy)",
        "saul-gold": "var(--saul-gold)",
        "saul-red": "var(--saul-red)",
        cream: "var(--cream)",
        paper: "var(--paper)",
        "amber-glow": "var(--amber-glow)",
        hazmat: "var(--hazmat)",
        "blue-sky": "var(--blue-sky)",
        "element-green": "var(--element-green)",
        manila: "#F5EAD4",
        "manila-dark": "#E2D2B4",
        "court-gold": "#E5A93C",
        "stamp-red": "#C92A2A",
        "forensic-ink": "#121214",
      },
      fontFamily: {
        docket: ["'Bodoni Moda'", "'DM Serif Display'", "serif"],
        bebas: ["'Bebas Neue'", "sans-serif"],
        anton: ["'Anton'", "sans-serif"],
        serif: ["'DM Serif Display'", "serif"],
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
        italiana: ["'Italiana'", "'Bodoni Moda'", "serif"],
        lato: ["'Lato'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        marker: ["'Permanent Marker'", "cursive"],
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 12px var(--amber-glow))'
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.45',
            filter: 'none'
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        smokeDrift: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.04' },
          '50%': { transform: 'translate(-3%, 4%) scale(1.08)', opacity: '0.08' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.04' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        }
      },
      animation: {
        flicker: 'flicker 5s linear infinite',
        marquee: 'marquee 28s linear infinite',
        smoke: 'smokeDrift 45s ease-in-out infinite',
        'ken-burns': 'kenBurns 14s ease-out forwards',
      },
      boxShadow: {
        'amber-glow': '0 0 35px rgba(255, 176, 0, 0.28)',
        'gold-glow': '0 0 25px rgba(242, 178, 26, 0.35)',
        'blue-glow': '0 0 20px rgba(92, 200, 255, 0.4)',
      }
    },
  },
  plugins: [],
}

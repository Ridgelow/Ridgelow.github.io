import type { Config } from "tailwindcss";

// BLACKOUT — the 11-step grey ladder, no accent color.
// Every value here matches the design system 1:1; don't hand-roll a new grey.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bo: {
          black: "#000000",    // page ground
          coal: "#060608",     // a panel that must separate from black without reading lighter
          ash: "#0e0e10",      // standard panel / card fill
          graphite: "#16161a", // nested panel
          iron: "#1f1f24",     // raised / interactive surface
          rule: "#2e2e34",     // hairline borders, grids
          steel: "#4a4a52",    // decorative only — disabled marks, dim debris
          ghost: "#6b6b73",    // decorative only — glitch offsets
          smoke: "#9a9aa2",    // secondary text
          chalk: "#c9c9cf",    // body text — softer than white, use before reaching for white
          white: "#ffffff",    // headlines, the targeted element, rationed
        },
      },
      fontFamily: {
        mark: ["var(--font-hacked)", "var(--font-display)", "sans-serif"],
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
        mono: ["var(--font-pixel)", "ui-monospace", "Menlo", "monospace"],
      },
      spacing: {
        // the kit's 4px base — space-1 (4px) through space-12 (48px) already exist
        // as Tailwind's native 1 / 2 / 3 / 4 / 6 / 8 / 12 scale (1 = 4px). Use those directly.
      },
      borderRadius: {
        none: "0px",
        sm: "2px", // status chips only — see the BLACKOUT README
      },
      boxShadow: {
        // flat rings only, no blur — depth comes from the grey ladder, not light
        edge: "0 0 0 1px #2e2e34",
        "edge-soft": "0 0 0 1px #1f1f24",
        "edge-live": "0 0 0 1px #ffffff",
        glitch: "-3px 0 0 #6b6b73, 3px 0 0 #c9c9cf",
      },
      keyframes: {
        "caret-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;

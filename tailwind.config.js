/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Single accent: warm amber/tan against near-black. Deliberately not
        // the blue/violet "AI" default — see the redesign note in index.css.
        accent: {
          DEFAULT: '#E8A23D',
          soft: '#F0B968',
          dim: '#B87F2E',
        },
        ink: {
          DEFAULT: '#F5F4F1',   // primary text (off-white, not pure white)
          muted: '#A8A5A0',     // secondary text
          faint: '#716E69',     // tertiary / disabled
        },
        surface: {
          DEFAULT: '#0B0B0C',   // page background (off-black, not pure black)
          raised: '#131315',    // card background
          overlay: '#1B1B1E',   // hover / elevated
        },
        line: 'rgba(245, 244, 241, 0.10)',
      },
      fontFamily: {
        sans: ['Archivo', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 0 rgba(245,244,241,0.06) inset, 0 12px 32px -16px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}

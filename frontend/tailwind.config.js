export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { primary: 'var(--teal)', background: 'var(--canvas)', foreground: 'var(--ink)', muted: 'var(--muted)', border: 'var(--line)' },
      fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] },
      boxShadow: { card: 'var(--shadow-card)' },
    },
  },
  plugins: [],
}
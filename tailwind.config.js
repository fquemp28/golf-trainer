/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // Cette section est CRUCIALE pour votre système de thèmes dynamiques
  safelist: [
    {
      // Safelist pour les couleurs de fond, texte, bordure, anneaux, etc.
      pattern: /(bg|text|border|ring|shadow|from|to)-(emerald|slate|orange|blue|red|gray|zinc|neutral|stone|amber|yellow|lime|green|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)/,
      variants: ['hover', 'focus', 'active', 'group-hover'], // On inclut les variantes interactives
    },
    {
        // Safelist spécifique pour les opacités si nécessaire (ex: bg-slate-900/90)
        pattern: /(bg|text)-(emerald|slate|orange)-(900)\/(90|95)/,
    }
  ],
  plugins: [],
}
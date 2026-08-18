/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette - warm neutrals
        'canvas': '#fafaf9',
        'pure-white': '#ffffff',
        'stone-border': '#e8e6e5',
        'stone-muted': '#d6d3d1',
        'ash-gray': '#a8a29e',
        'warm-gray': '#78716c',
        'ink-black': '#0c0a09',
        'soot': '#1c1917',

        // Accent - cyan (single chromatic voice)
        'cyan-signal': '#3ba6f1',
        'cyan-edge': '#3398e1',
        'sky-wash': '#c1e1f7',

        // Legacy mappings (untuk kompatibilitas)
        'primary': '#3ba6f1',
        'accent': '#3398e1',
        'surface': '#ffffff',
        'deep': '#0c0a09',
        'muted': '#f5f5f5',
        'stone': '#78716c',
        'fog': '#e8e6e5',
      },
      fontFamily: {
        'display': ['Inter Tight', 'Satoshi', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'cards': '10px',
        'badges': '9999px',
        'images': '8px',
        'inputs': '6px',
        'buttons': '9999px',
        'feature-card': '16px',
        'tags': '9999px',
        'icons': '4px',
      },
      boxShadow: {
        'subtle': 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
        'sm': 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px',
        'md': 'rgba(0, 0, 0, 0.05) 0px 4px 16px 0px',
        'xl': 'rgba(17, 12, 46, 0.12) 0px 12px 45px 0px',
        'lg': 'rgba(0, 0, 0, 0.05) 0px 4px 16px 0px',
      },
      maxWidth: {
        'page': '1200px',
      },
      spacing: {
        '36': '36px',
        '120': '120px',
      },
      fontSize: {
        'caption': ['10px', { lineHeight: '2.3' }],
        'body-lg': ['16px', { lineHeight: '1.69', letterSpacing: '0.048px' }],
        'subheading': ['20px', { lineHeight: '1.2', letterSpacing: '-0.1px' }],
        'heading-sm': ['32px', { lineHeight: '1.25', letterSpacing: '-0.8px' }],
        'display': ['52px', { lineHeight: '1.12', letterSpacing: '-1.092px' }],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        // widest: '.1em',
        widest: '.25em',
      },
      colors: {
        dark: 'rgb(26, 28, 35)',
        light: 'rgb(231, 231, 231)',
        accent: 'rgb(255, 234, 0)',
        accentLight: "rgb(248, 184, 48)"
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

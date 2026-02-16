import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f8f6f3',
          100: '#ebe6dd',
          200: '#d9cfc0',
          300: '#c4b09b',
          400: '#b09479',
          500: '#9d7f61',
          600: '#8a6d56',
          700: '#725948',
          800: '#5f4b3e',
          900: '#4f3f35',
        },
        forest: {
          50: '#f2f9f4',
          100: '#e0f1e5',
          200: '#c2e3cd',
          300: '#95cdaa',
          400: '#60b080',
          500: '#3d9460',
          600: '#2b764b',
          700: '#235e3c',
          800: '#1e4b32',
          900: '#193e2a',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e8ebe2',
          200: '#d2d8c6',
          300: '#b4bfa2',
          400: '#96a57e',
          500: '#7a8b61',
          600: '#5f6e4c',
          700: '#4b563d',
          800: '#3e4734',
          900: '#353c2d',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

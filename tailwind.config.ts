import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#FAFAFA',
        'ink-soft': '#A1A1A1',
        'muted-dark': '#D4D4D4',
        accent: {
          DEFAULT: '#DC2626',
          hover: '#EF4444',
          light: 'rgba(220, 38, 38, 0.10)',
          subtle: 'rgba(220, 38, 38, 0.05)',
        },
        deep: '#0A0A0A',
        navy: '#121212',
        'medium-navy': '#141414',
        surface: '#0F0F0F',
        border: {
          DEFAULT: '#262626',
          light: '#1F1F1F',
        },
        success: {
          DEFAULT: '#22C55E',
          bg: 'rgba(34, 197, 94, 0.10)',
          border: 'rgba(34, 197, 94, 0.25)',
        },
        warning: {
          DEFAULT: '#FACC15',
          bg: 'rgba(250, 204, 21, 0.10)',
          border: 'rgba(250, 204, 21, 0.25)',
        },
        danger: {
          DEFAULT: '#EF4444',
          bg: 'rgba(239, 68, 68, 0.10)',
          border: 'rgba(239, 68, 68, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: {
        container: '1360px',
      },
      spacing: {
        nav: '72px',
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.3)',
        'card-md': '0 4px 8px rgba(0,0,0,0.4)',
        'card-lg': '0 10px 20px rgba(0,0,0,0.5)',
        'card-xl': '0 20px 40px rgba(0,0,0,0.6)',
      },
      transitionDuration: {
        fast: '150ms',
        slow: '300ms',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;

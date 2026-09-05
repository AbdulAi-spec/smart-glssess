import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#050507',
        obsidian: {
          950: '#050507',
          900: '#07070b',
          850: '#0a0a0f',
          800: '#101017',
          700: '#171722',
          600: '#222230',
        },
        champagne: {
          light: '#E6CA85',
          DEFAULT: '#D4AF37',
          dark: '#B38F24',
          muted: '#C5A880',
          glow: 'rgba(212, 175, 55, 0.25)',
        },
        titanium: {
          silver: '#E5E7EB',
          frost: '#D1D5DB',
          raw: '#9CA3AF',
          dark: '#4B5563',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      backgroundImage: {
        'radial-radial': 'radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))',
        'subtle-glow': 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212,175,55,0.06), transparent 40%)',
        'titanium-specular': 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(212,175,55,0.08) 50%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        'glow-champagne': '0 0 35px -5px rgba(212, 175, 55, 0.2)',
        'glow-champagne-sm': '0 0 15px -3px rgba(212, 175, 55, 0.25)',
        'glass-edge': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

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
        background: '#050505',
        surface: '#0A0A0C',
        'surface-elevated': '#121216',
        cyan: {
          electric: '#00D6FF',
          glow: 'rgba(0, 214, 255, 0.25)',
        },
        blue: {
          corporate: '#0050FF',
          glow: 'rgba(0, 80, 255, 0.25)',
        },
        titanium: {
          liquid: '#E5E7EB',
          matte: '#9CA3AF',
          dark: '#1F2937',
        },
      },
      fontFamily: {
        sans: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'SF Mono',
          'JetBrains Mono',
          'Menlo',
          'monospace',
        ],
      },
      backgroundImage: {
        'cyan-radial': 'radial-gradient(circle at 50% 50%, rgba(0, 214, 255, 0.08) 0%, transparent 60%)',
        'blue-radial': 'radial-gradient(circle at 50% 50%, rgba(0, 80, 255, 0.1) 0%, transparent 65%)',
        'glass-radial': 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.04) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(0, 214, 255, 0.3)',
        'glow-blue': '0 0 35px -5px rgba(0, 80, 255, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;

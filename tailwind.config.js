/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Evolved blue
          dark: '#2563EB',
          light: '#60A5FA',
          glow: 'rgba(59, 130, 246, 0.5)',
        },
        secondary: {
          DEFAULT: '#8B5CF6', // Purple shift
          glow: 'rgba(139, 92, 246, 0.5)',
        },
        background: {
          DEFAULT: '#0A0E27', // Deep rich background
          dark: '#050812',
          card: 'rgba(255, 255, 255, 0.02)',
        },
        surface: {
          DEFAULT: '#0B1120',
          light: '#1E293B',
        },
        accent: {
          cyan: '#06b6d4',
          emerald: '#10b981',
        },
        'electric-blue': '#4c6ef5', // Keeping for backward compatibility if needed
        'soft-indigo': '#94a3b8', // Updated to slate-400 for better contrast on dark
        graphite: '#f8fafc', // Updated to slate-50 for text on dark
        'accent-green': '#10b981',
        'light-slate': '#1e293b', // Darker slate for borders
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'], // Placeholder for display font
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg, #0A0E27 0%, #050812 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
        'text-gradient': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(59, 130, 246, 0.15)',
        'card': '0 4px 24px rgba(0,0,0,0.12)',
        'card-hover': '0 12px 48px rgba(59, 130, 246, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'scroll': 'scroll 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}


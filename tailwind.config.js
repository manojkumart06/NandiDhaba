/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B0B0B',
          900: '#111111',
          850: '#161616',
          800: '#1C1C1C',
        },
        bone: {
          50: '#F5F5F5',
          200: '#D4D4D4',
          400: '#A1A1A1',
        },
        ember: {
          50: '#FFF5E6',
          200: '#FFD7A1',
          400: '#FFA94D',
          500: '#FF8A1F',
          600: '#F26B0F',
          700: '#C7480A',
          900: '#5A1E04',
        },
        gold: {
          400: '#E8C97A',
          500: '#D4AF37',
          600: '#A97D1F',
        },
        ocean: {
          400: '#7DB3C7',
          500: '#3F7E97',
          700: '#1F4356',
          900: '#0C2330',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        cinematic: '-0.03em',
      },
      animation: {
        'flicker': 'flicker 4s ease-in-out infinite',
        'float-slow': 'float-slow 14s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 5s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '0.85', filter: 'brightness(1.0)' },
          '50%': { opacity: '1', filter: 'brightness(1.15)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        grain: {
          '0%': { transform: 'translate(0,0)' },
          '20%': { transform: 'translate(-5%,5%)' },
          '40%': { transform: 'translate(5%,-5%)' },
          '60%': { transform: 'translate(-3%,3%)' },
          '80%': { transform: 'translate(3%,-3%)' },
          '100%': { transform: 'translate(0,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(11,11,11,0.95) 80%)',
        'ember-gradient': 'linear-gradient(135deg, #FF8A1F 0%, #C7480A 50%, #5A1E04 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E8C97A 0%, #D4AF37 50%, #A97D1F 100%)',
      },
    },
  },
  plugins: [],
};

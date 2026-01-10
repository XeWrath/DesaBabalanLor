import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // KKN Theme Colors from Logo
        // Primary colors from the logo palette
        navy: {
          50: '#e8eaf0',
          100: '#c5c9d9',
          200: '#9fa6bf',
          300: '#7883a5',
          400: '#5a678f',
          500: '#3c4b79', // #27325b base
          600: '#27325b', // Dark navy blue (main)
          700: '#1f2647',
          800: '#171b35',
          900: '#0f1123',
        },
        teal: {
          50: '#e6f0f2',
          100: '#b3d4d9',
          200: '#80b8c0',
          300: '#4d9ca7',
          400: '#449fa9', // Medium teal-cyan (main)
          500: '#3a8a93',
          600: '#296286', // Dark teal-blue (main)
          700: '#1f4a5f',
          800: '#153238',
          900: '#0b1a1f',
        },
        steel: {
          50: '#e8f0f5',
          100: '#c5d9e6',
          200: '#a2c2d7',
          300: '#7fabc8',
          400: '#5c94b9',
          500: '#4b80a8', // Medium steel blue (main)
          600: '#3d6a8a',
          700: '#2f546c',
          800: '#213e4e',
          900: '#132830',
        },
        sky: {
          50: '#f0f6f9',
          100: '#d4e4ed',
          200: '#b8d2e1',
          300: '#9cc0d5',
          400: '#8db4cb', // Light sky blue (main)
          500: '#7aa0b8',
          600: '#6288a0',
          700: '#4a7088',
          800: '#325870',
          900: '#1a4058',
        },
        forest: {
          50: '#e8f0ea',
          100: '#c4d9c9',
          200: '#a0c2a8',
          300: '#7cab87',
          400: '#589466',
          500: '#3d7d4d',
          600: '#1d5e27', // Dark forest green (main)
          700: '#16471e',
          800: '#0f3015',
          900: '#08190c',
        },
        gold: {
          50: '#faf6ed',
          100: '#f5e8d1',
          200: '#f0dab5',
          300: '#ebcc99',
          400: '#e6be7d',
          500: '#e1b061',
          600: '#dca43c', // Golden yellow-orange (main)
          700: '#b88530',
          800: '#946624',
          900: '#704718',
        },
        // Keep amber for compatibility
        amber: {
          50: '#fef6ed',
          100: '#fde8d1',
          200: '#fbdab5',
          300: '#f9cc99',
          400: '#f7be7d',
          500: '#f5b061',
          600: '#dca43c', // Match gold
          700: '#b88530',
          800: '#946624',
          900: '#704718',
        },
        earth: {
          50: '#faf6ed',
          100: '#f5e8d1',
          200: '#f0dab5',
          300: '#ebcc99',
          400: '#e6be7d',
          500: '#e1b061',
          600: '#dca43c', // Match gold
          700: '#b88530',
          800: '#946624',
          900: '#704718',
        },
        // Keep some blue for accents
        primary: {
          50: '#e8eaf0',
          100: '#c5c9d9',
          200: '#9fa6bf',
          300: '#7883a5',
          400: '#5a678f',
          500: '#3c4b79',
          600: '#27325b', // Match navy
          700: '#1f2647',
          800: '#171b35',
          900: '#0f1123',
        },
        ocean: {
          50: '#e6f0f2',
          100: '#b3d4d9',
          200: '#80b8c0',
          300: '#4d9ca7',
          400: '#449fa9', // Match teal
          500: '#3a8a93',
          600: '#296286',
          700: '#1f4a5f',
          800: '#153238',
          900: '#0b1a1f',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.8s ease-out',
        'rotate-3d': 'rotate3d 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 102, 204, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 102, 204, 0.8), 0 0 60px rgba(0, 188, 212, 0.4)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rotate3d: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
    },
  },
  plugins: [],
}
export default config


import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './icons/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      body: '#F8F9FA',
      text: {
        primary: {
          light: '#001523',
          dark: '#E9ECEF',
        },
        secondary: {
          light: '#001A2C',
          dark: '#F8F9FA',
        },
        title: {
          light: '#00111C',
          dark: '#DEE2E6',
        },
      },
      icon: {
        primary: '#001A2C',
      },
      background: {
        primary: {
          light: '#DEE2E6',
          dark: '#343A40',
        },
        secondary: {
          light: '#E9ECEF',
          dark: '#212529',
          stroke: '#394047',
        },
        transparent: 'transparent',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
export default config

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
      text: '#001523',
      textSecondary: '#001A2C',
      title: '#00111C',
      icon: '#001A2C',
      backgroundPrimary: '#DEE2E6',
      backgroundSecondary: '#E9ECEF',
      backgroundSecondaryStroke: '#DEE2E6',
    },
  },
  plugins: [],
}
export default config

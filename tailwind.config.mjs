/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  darkMode: ['class', '[data-theme="dark"]'],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#3F51B5',
          secondary: '#AD1457',
          accent: '#1A237E',
          '--rounded-btn': '1rem',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#3F51B5',
          secondary: '#AD1457',
          accent: '#1A237E',
          '--rounded-btn': '1rem',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: 'dui-',
    logs: false,
    themeRoot: ':root',
  },
};

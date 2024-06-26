import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import typed from 'tailwind-plugin-typed';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      width: {
        hr: '10ch',
      },
      typography: {
        DEFAULT: {
          css: {
            'ol ol': {
              listStyle: 'lower-alpha',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography(),
    daisyui,
    typed({
      pauseAfterDeletionDuration: 1,
      pauseAfterWordDuration: 1,
    }),
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#3F51B5',
          secondary: '#AD1457',
          accent: '#1A237E',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#3F51B5',
          secondary: '#AD1457',
          accent: '#1A237E',
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

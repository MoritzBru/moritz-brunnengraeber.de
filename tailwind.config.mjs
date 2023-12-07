/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'ol ol': {
              listStyle: 'lower-alpha',
            },
          },
        },
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      // },
      // transitionTimingFunction: {
      //   'in-out-back': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      // },
    },
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

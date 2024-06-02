import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import compressor from 'astro-compressor';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.moritz-brunnengraeber.de',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    alpinejs(),
    compressor({
      gzip: false,
      brotli: true,
    }),
    icon({
      iconDir: 'src/assets/icons',
      include: {
        'svg-spinner': ['ring-resize'],
        ph: ['*'],
      },
    }),
  ],
});

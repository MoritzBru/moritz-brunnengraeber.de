import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import compressor from 'astro-compressor';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.moritz-brunnengraeber.de',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    alpinejs(),
    compressor(),
  ],
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
        scale: 1,
        customCollections: {
          mb: FileSystemIconLoader('./src/assets/icons'),
        },
      }),
    ],
  },
});

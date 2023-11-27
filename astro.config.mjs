import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

export default defineConfig({
  site: 'https://www.moritz-brunnengraeber.de',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
        customCollections: {
          mb: FileSystemIconLoader('./src/assets/icons'),
        },
      }),
    ],
  },
});

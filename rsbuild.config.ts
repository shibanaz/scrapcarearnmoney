import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html:{
    title: 'Scrap Car and Earn Money',
    favicon: './src/assets/images/favicon.ico',
  }
});

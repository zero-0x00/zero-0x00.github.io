import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  webpack: (config) => {
    // SVG loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // PDF loader
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[name][ext]',
      },
    });

    // Добавляем поддержку алиасов в webpack
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
      '@components': path.join(__dirname, 'src/components'),
      '@hooks': path.join(__dirname, 'src/hooks'),
      '@assets': path.join(__dirname, 'src/assets'),
      '@ui': path.join(__dirname, 'src/ui'),
      '@types': path.join(__dirname, 'src/types'),
    };

    return config;
  },
};

export default nextConfig;

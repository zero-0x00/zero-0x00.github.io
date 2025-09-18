import { ReactNode } from 'react';

import { ThemeProvider } from '@ui/theme/ThemeProvider';
import { Metadata, Viewport } from 'next';
import Script from 'next/script';

import './globals.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const metadata: Metadata = {
  title: 'Резюме Бугай Максим - Senior Frontend Developer',
  description:
    'Резюме Frontend разработчика Максима Бугая с 9 годами опыта в React, TypeScript и Next.js',
  keywords: [
    'frontend',
    'react',
    'typescript',
    'nextjs',
    'developer',
    'resume',
    'portfolio',
  ],
  authors: [{ name: 'Максим Бугай' }],
  openGraph: {
    title: 'Максим Бугай - Senior Frontend Developer',
    description: 'Резюме Frontend разработчика с 9 годами опыта',
    type: 'profile',
    locale: 'ru_RU',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        {/* Yandex.Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103578340', 'ym');

            ym(103578340, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>

        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/103578340"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

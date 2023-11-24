import './globals.css';
import { Open_Sans } from 'next/font/google';
import { Metadata } from 'next';
import classNames from 'classnames';
import { PageHeader, PageFooter } from '@components/layout';
import ThemeProviders from '@components/Providers';
import Providers from '@utils/provider';
import ToasterProvider from '@providers/ToasterProvider';

import {
  GOOGLE_VERIFICATION_CODE,
  NAVER_VERIFICATION_CODE,
} from '@service/constant';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  applicationName: "Dotori Jung's Blog Application",
  metadataBase: new URL('https://dotorimook-log.vercel.app/'),
  creator: 'Kwangmook Jung',
  publisher: 'Kwangmook Jung',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Developer',
    'Frontend',
    '도토리묵',
    '도토리정',
    'DevLog',
    '개발',
    '리액트',
    '프론트엔드',
    '정광묵',
    '자바스크립트',
  ],
  title: {
    default: '도토리정의 DevLog',
    template: '도토리정의 DevLog | %s',
  },
  description: 'Frontend Dev 도토리정의 블로그',
  verification: {
    google: GOOGLE_VERIFICATION_CODE,
    other: {
      'naver-site-verification': NAVER_VERIFICATION_CODE,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(sans.className, 'scroll-smooth')}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col bg-light selection:bg-purple-400 selection:text-white dark:bg-stone-900"
      >
        <Providers>
          <ThemeProviders>
            <ToasterProvider />
            <PageHeader />
            <main className="mx-auto w-full max-w-7xl grow p-8">
              {children}
            </main>
            <PageFooter />
          </ThemeProviders>
        </Providers>
      </body>
    </html>
  );
}

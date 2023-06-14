import './globals.css';
import { Open_Sans } from 'next/font/google';
import { Metadata } from 'next';
import classNames from 'classnames';
import { PageHeader, PageFooter } from '@components/layout';
import Providers from '@components/Providers';
import {
  GOOGLE_VERIFICATION_CODE,
  NAVER_VERIFICATION_CODE,
} from '@service/constant';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  applicationName: "Dotori Jung's Blog Application",
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
      <body className="flex min-h-screen flex-col bg-light selection:bg-purple-400 selection:text-white dark:bg-stone-900">
        <Providers>
          <PageHeader />
          <main className="mx-auto w-full max-w-7xl grow p-8">{children}</main>
          <PageFooter />
        </Providers>
      </body>
    </html>
  );
}

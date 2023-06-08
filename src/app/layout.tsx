import './globals.css';
import { Open_Sans } from 'next/font/google';
import { Metadata } from 'next';
import classNames from 'classnames';
import { PageHeader, PageFooter } from '@components/layout';
import Head from 'next/head';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: '도토리정의 DevLog',
    template: '도토리정의 DevLog | %s',
  },
  description: 'Frontend Dev 도토리정의 블로그',
  verification: {
    google: 'h5hXfhgh2YyYCX6iW7D3Bwbw9z4pIU5ypnJg2sbX-ZM',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={classNames(sans.className, 'scroll-smooth')}>
      <Head>
        <meta
          name="google-site-verification"
          content="h5hXfhgh2YyYCX6iW7D3Bwbw9z4pIU5ypnJg2sbX-ZM"
        />
      </Head>
      <body className="flex min-h-screen flex-col bg-light selection:bg-purple-400 selection:text-white">
        <PageHeader />
        <main className="mx-auto w-full max-w-7xl grow p-8">{children}</main>
        <PageFooter />
      </body>
    </html>
  );
}

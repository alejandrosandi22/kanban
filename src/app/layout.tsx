import Providers from '@/common/components/providers';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';

import type { LayoutProps } from '@/lib/types';
import type { Metadata } from 'next';

import '@/common/styles/globlas.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Kanban App',
    default: 'Kanban App',
  },
  icons: { icon: './favicon.ico' },
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang='en'>
      <body className={cn('bg-background', inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

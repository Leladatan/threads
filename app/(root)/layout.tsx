import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {NextFont} from "next/dist/compiled/@next/font";

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Threads description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  );
};

import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {NextFont} from "next/dist/compiled/@next/font";
import {Particles} from "@/components/particles";
import {ClerkProvider} from "@clerk/nextjs";

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
      <ClerkProvider>
          <html lang="en">
          <body className={inter.className}>
          <Particles
              className="absolute inset-0 -z-10 animate-fade-in hidden sm:block"
              quantity={100}
          />
          {children}
          </body>
          </html>
      </ClerkProvider>
  );
};

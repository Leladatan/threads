import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {NextFont} from "next/dist/compiled/@next/font";
import {Particles} from "@/components/particles";
import {ClerkProvider} from "@clerk/nextjs";
import Header from "@/components/header";
import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import Footer from "@/components/footer";
import {cn} from "@/lib/utils";

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
          <body className={cn("overflow-hidden overflow-y-auto scrollbar-thin", inter.className)}>
          <Particles
              className="absolute inset-0 -z-10 animate-fade-in hidden sm:block"
              quantity={100}
          />
          <Header />

          <main className="flex flex-row">
              <LeftSidebar />

              <section className="flex min-h-screen flex-1 flex-col items-center px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
                <div className="w-full max-w-4xl">
                    {children}
                </div>
              </section>

              <RightSidebar />
          </main>

          <Footer />
          </body>
          </html>
      </ClerkProvider>
  );
};

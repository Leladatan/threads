import "../globals.css";
import {type FC} from 'react';
import {ClerkProvider} from "@clerk/nextjs";
import {NextFont} from "next/dist/compiled/@next/font";
import {Inter} from "next/font/google";
import {Metadata} from "next";
import {cn} from "@/lib/utils";

const inter: NextFont = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: "Threads",
    description: "Meta Threads App"
};

interface LayoutAuthProps {
    children: React.ReactNode;
}

const LayoutAuth: FC<LayoutAuthProps> = ({children}) => {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={cn("bg-dark-1",inter.className)}>
            <div className="flex justify-center items-center">
                {children}
            </div>
            </body>
            </html>
        </ClerkProvider>
    );
};

export default LayoutAuth;

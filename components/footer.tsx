"use client";

import {type FC, useMemo} from 'react';
import {IconType} from "react-icons";
import {AiOutlineHeart, AiOutlineHome, AiOutlineSearch, AiOutlineUser} from "react-icons/ai";
import {BiAddToQueue, BiCommentDetail} from "react-icons/bi";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";

const Footer: FC = () => {
    const pathname: string = usePathname();

    const routes: {label: string, href: string, active: boolean, icon: IconType}[] = useMemo(() => [
        {
            label: "Home",
            href: "/",
            active: pathname === "/",
            icon: AiOutlineHome
        },
        {
            label: "Search",
            href: "/search",
            active: pathname === "/search",
            icon: AiOutlineSearch
        },
        {
            label: "Activity",
            href: "/activity",
            active: pathname === "/activity",
            icon: AiOutlineHeart
        },
        {
            label: "Create Thread",
            href: "/create-thread",
            active: pathname === "/create-thread",
            icon: BiAddToQueue
        },
        {
            label: "Communities",
            href: "/communities",
            active: pathname === "/communities",
            icon: BiCommentDetail
        },
        {
            label: "Profile",
            href: "/profile",
            active: pathname === "/profile",
            icon: AiOutlineUser
        },
    ], [pathname]);

    return (
        <footer className="fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs:px-7 md:hidden">
            <div className="flex items-center justify-between gap-3 px-2 xs:gap-5">
                {routes.map(route => (
                    <Link href={route.href} key={route.href} className={cn("relative flex flex-col items-center" +
                        " gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5 hover:text-white transition",
                        route.active ? "text-white" : "text-neutral-400")}>
                        <route.icon size={20} />
                        <p className="text-subtle-medium text-white max-sm:hidden">
                            {route.label.split(/\s+/)[0]}
                        </p>
                    </Link>
                ))}
            </div>
        </footer>
    );
};

export default Footer;

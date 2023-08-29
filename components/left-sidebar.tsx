"use client";

import {type FC, useMemo} from 'react';
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {AiOutlineHeart, AiOutlineHome, AiOutlineSearch, AiOutlineUser} from "react-icons/ai";
import {cn} from "@/lib/utils";
import {BiAddToQueue, BiCommentDetail} from "react-icons/bi";
import {SignedIn, SignOutButton} from "@clerk/nextjs";
import {FiLogOut} from "react-icons/fi";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";
import {IconType} from "react-icons";

const LeftSidebar: FC = () => {
    const pathname: string = usePathname();
    const router: AppRouterInstance = useRouter();

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
        <section className="custom-scrollbar sticky left-0 top-0 z-20 flex h-screen w-fit
         flex-col justify-between overflow-auto pb-5 pl-5
          pt-28 max-md:hidden">
            <div className="flex w-full flex-1 flex-col gap-6 px-2">
                {routes.map(route => (
                    <Link href={route.href} key={route.href} className={cn("relative flex justify-start gap-4 " +
                        "rounded-lg hover:text-white transition",
                        route.active ? "text-white" : "text-neutral-500")}>
                        <route.icon size={20} />
                        <p className="max-lg:hidden">{route.label}</p>
                    </Link>
                ))}
            </div>

            <div className="mt-10 px-2 pb-4">
                <SignedIn>
                    <SignOutButton signOutCallback={() => router.push("/sign-in")}>
                        <div className="flex cursor-pointer gap-4 px-2">
                            <FiLogOut className="text-white cursor-pointer" size={24}/>
                            <p className="text-white max-lg:hidden">Logout</p>
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>
        </section>
    );
};

export default LeftSidebar;

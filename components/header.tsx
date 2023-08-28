import {type FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import {OrganizationSwitcher, SignedIn, SignOutButton} from "@clerk/nextjs";
import {FiLogOut} from "react-icons/fi";

const Header: FC = () => {
    return (
        <header>
            <nav className="fixed top-0 z-30 flex w-full items-center justify-between px-6 py-3">
                <Link href="/" className="flex items-center gap-4">
                    <Image
                        src="/logo.svg"
                        alt="Threads logo"
                        className="object-cover object-center"
                        width={28}
                        height={28}
                    />
                    <p className="text-white text-3xl font-bold max-md:hidden">
                        Threads
                    </p>
                </Link>

                <div className="flex items-center gap-1">
                    <div className="block md:hidden">
                        <SignedIn>
                            <SignOutButton>
                                <FiLogOut className="text-white cursor-pointer" size={24}/>
                            </SignOutButton>
                        </SignedIn>
                    </div>
                    <OrganizationSwitcher
                        appearance={{
                            elements: {
                                organizationSwitcherTrigger: "py-2 px-4 text-white truncate w-[150px] md:w-[200px] lg:w-[300px]"
                            }
                        }}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;

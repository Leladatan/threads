import {type FC} from 'react';
import Link from "next/link";
import Image from "next/image";

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
                    <p className="text-white max-xs:hidden">
                        Threads
                    </p>
                </Link>
            </nav>
        </header>
    );
};

export default Header;

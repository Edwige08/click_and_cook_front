import Image from "next/image";
import { Home, UserRoundPen, ConciergeBell, LogOut } from "lucide-react"
import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            className="flex flex-row justify-between items-center py-2 px-7 bg-(--lightColor)"
        >
            <Link
                href="/home">
                <Image
                    src="/images/logo_click_and_cook.png"
                    alt="Logo Click & Cook"
                    width={1024}
                    height={1024}
                    className="w-30"
                />
            </Link>
            <div>
                <ul className="flex flex-col justify-center gap-1 h-full md:flex-row md:gap-8">
                    <li>
                        <Link
                            href="/home"
                            className="flex flex-row gap-2 items-center md:w-30 hover:font-bold md:border-b md:py-2 md:flex-col md:rounded-t-4xl md:hover:bg-(--orangeColor)">
                            <Home />
                            <p className="flex flex-col justify-end">
                                Accueil
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/home/personnalProfile"
                            className="flex flex-row gap-2 items-center md:w-30 hover:font-bold md:border-b md:py-2 md:flex-col md:rounded-t-4xl md:hover:bg-(--orangeColor)">
                            <UserRoundPen />
                            <p className="flex flex-col justify-end">
                                Mon profil
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="flex flex-row gap-2 items-center md:w-30 hover:font-bold md:border-b md:py-2 md:flex-col md:rounded-t-4xl md:hover:bg-(--orangeColor)">
                            <ConciergeBell />
                            <p className="flex flex-col justify-end">
                                Mes recettes
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="flex flex-row gap-2 items-center md:w-30 hover:font-bold md:border-b md:py-2 md:flex-col md:rounded-t-4xl md:hover:bg-(--orangeColor)">
                            <LogOut />
                            <p className="flex flex-col justify-end">
                                Déconnexion
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
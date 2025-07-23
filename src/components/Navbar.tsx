import Image from "next/image";
import { Home, UserRoundPen, ConciergeBell } from "lucide-react"

export default function Navbar() {
    return (
        <nav
            className="flex flex-row justify-between items-center py-2 px-7 bg-(--lightColor)"
        >
            <Image
                src="/images/logo_click_and_cook.png"
                alt="Logo Click & Cook"
                width={1024}
                height={1024}
                className="w-30"
            />
            <div>
                <ul className="flex flex-col justify-center gap-2 h-full md:flex-row md:gap-8">
                    <li>
                        <a href="/home" className="flex flex-row gap-2 items-center md:w-30 hover:font-bold md:border-b md:py-2 md:flex-col md:rounded-t-4xl md:hover:bg-(--orangeColor)">
                            <Home />
                            <p className="flex flex-col justify-end">
                                Accueil
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row gap-2 items-center md:w-30 hover:font-bold md:border-b md:py-2 md:flex-col md:rounded-t-4xl md:hover:bg-(--orangeColor)">
                            <UserRoundPen />
                            <p className="flex flex-col justify-end">
                                Mon profil
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row gap-2 items-center md:w-30 hover:font-bold md:border-b md:py-2 md:flex-col md:rounded-t-4xl md:hover:bg-(--orangeColor)">
                            <ConciergeBell />
                            <p className="flex flex-col justify-end">
                                Mes recettes
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
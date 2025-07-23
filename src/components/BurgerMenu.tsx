'use client'

import { Home, UserRoundPen, ConciergeBell } from "lucide-react"
import { useState } from "react"

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button
                onClick={toggleMenu}
                className={`flex flex-col gap-1 transform transition-transform duration-300 ease-in-out ${isOpen ? '-translate-x-35' : 'translate-x-0'}`}>
                <div className={`h-1 w-7 border bg-(--orangeColor) rounded-lg transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2 ' : ''}`}></div>
                <div className={`h-1 w-7 border bg-(--orangeColor) rounded-lg transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-x-0 ' : 'opacity-100 scale-x-100'}`}></div>
                <div className={`h-1 w-7 border bg-(--orangeColor) rounded-lg transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2 ' : ''}`}></div>
            </button>

            <div
                className={`fixed top-2 right-0 p-2 rounded-lg h-30 w-40 max-w-[80vw] border border-(--darkBlue) bg-(--orangeColor) shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <ul className="flex flex-col justify-center gap-2 h-full">
                    <li>
                        <a href="/home" className="flex flex-row gap-2 items-center ">
                            <Home />
                            <p className="flex flex-col justify-end hover:font-bold">
                                Accueil
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row gap-2 items-center">
                            <UserRoundPen />
                            <p className="flex flex-col justify-end hover:font-bold">
                                Mon profil
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row gap-2 items-center">
                            <ConciergeBell />
                            <p className="flex flex-col justify-end hover:font-bold">
                                Mes recettes
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

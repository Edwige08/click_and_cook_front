import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

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
            <BurgerMenu />
        </nav>
    )
}
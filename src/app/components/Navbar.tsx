import Image from "next/image";

export default function Navbar() {
    return (
        <nav
        className="flex flex-row justify-between items-center p-2 bg-(--lightColor)"
        >
            <Image
                src="/images/logo_click_and_cook.png"
                alt="Logo Click & Cook"
                width={1024}
                height={1024}
                className="w-30"
            />

            <div className="flex flex-col gap-1">
                <div className="h-1 w-7 rounded-sm bg-(--darkBlue)"></div>
                <div className="h-1 w-7 rounded-sm bg-(--darkBlue)"></div>
                <div className="h-1 w-7 rounded-sm bg-(--darkBlue)"></div>
            </div>
        </nav>
    )
}
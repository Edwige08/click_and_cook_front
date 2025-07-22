import Image from "next/image";

export default function Navbar() {
    return (
        <nav
        className="flex flex-row justify-between items-center py-2 pl-7 bg-(--lightColor)"
        >
            <Image
                src="/images/logo_click_and_cook.png"
                alt="Logo Click & Cook"
                width={1024}
                height={1024}
                className="w-30"
            />

            <div className="flex flex-col gap-1 p-2 pr-7">
                <div className="h-1 w-7 rounded-sm bg-(--darkBlue)"></div>
                <div className="h-1 w-7 rounded-sm bg-(--darkBlue)"></div>
                <div className="h-1 w-7 rounded-sm bg-(--darkBlue)"></div>
            </div>
        </nav>
    )
}
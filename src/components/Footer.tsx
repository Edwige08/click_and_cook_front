import { FacebookIcon, InstagramIcon, YoutubeIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer
            className="bg-(--darkBlue) text-(--lightColor) "
        >

            <div
            className="flex flex-col gap-4 items-center py-7 px-5 lg:flex-row lg:items-start lg:justify-evenly"
            >

                <div
                    className="flex flex-col items-center p-2"
                >
                    <h2
                        className="font-bold pb-3 text-lg
"
                    >
                        Réseaux sociaux :
                    </h2>
                    <div
                        className="flex flex-row gap-2"
                    >

                        <Link href="#">
                            <InstagramIcon />
                        </Link>
                        <Link href="#">
                            <FacebookIcon />
                        </Link>
                        <Link href="#">
                            <YoutubeIcon />
                        </Link>
                    </div>
                </div>

                <div className="border-1 border-(--lightColor) w-[60%] lg:hidden">
                </div>

                <div
                    className="flex flex-col items-center p-2"
                >
                    <h2
                        className="font-bold pb-2 text-lg"
                    >
                        Contact :
                    </h2>
                    <p>116 Rue du Faubourg Saint-Martin</p>
                    <p>75010 Paris</p>
                    <p>+33 6 07 08 09 01</p>
                    <Link
                        href="mailto:contact@clickandcook.fr"
                    >
                        <p>contact@clickandcook.fr</p>
                    </Link>
                </div>
                                <div className="border-1 border-(--lightColor) w-[60%] lg:hidden">
                </div>
            </div>

            <div
            className="text-center pb-7"
            >
                <p>© 2025 - <a href="https://github.com/Edwige08">Edwige</a>, <a href="https://github.com/rchouhani">Romain</a> et <a href="https://github.com/victorlpr">Victor</a>
                </p>
            </div>


        </footer >
    )
}
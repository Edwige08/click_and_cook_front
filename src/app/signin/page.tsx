import Image from "next/image";
import Navbar from "../../components/Navbar";
import FormSignIn from "../../components/FormSignIn";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <header
                className="flex flex-col items-center bg-(--lightColor)"
            >
                <Link href="/">
                    <Image
                        src="/images/logo_click_and_cook.png"
                        alt="Logo Click & Cook"
                        width={1024}
                        height={1024}
                        className="w-50 m-3"
                    />
                </Link>
                <div>
                    <FormSignIn />
                </div>
            </header>
        </>
    )
}
import Link from "next/link";
import ButtonOrange from "./ButtonOrange";

export default function FormSignIn() {
    return (
        <form
            className="flex flex-col gap-4 items-center px-10 py-5 m-5 rounded-sm shadow-lg bg-white"
        >
            <h2
                className="font-bold text-xl mb-2"
            >
                Se connecter :
            </h2>
            <input
                type="text"
                placeholder="Votre nom d'utilisateur" 
                className="p-2 rounded-sm border bg-(--lightColor)"
                />
            <input
                type="text"
                placeholder="Votre mot de passe" 
                className="p-2 rounded-sm border bg-(--lightColor)"
                />
            <ButtonOrange
                text="Connexion"
            />
            <Link href="/signup">
            <p
            className="underline"
            >
                Créer un compte
                </p>
                </Link>
        </form>
    )
}
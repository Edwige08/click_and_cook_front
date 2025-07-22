import Link from "next/link";
import ButtonGreen from "./ButtonGreen";

export default function FormSignUp() {
    return (
        <form
            className="flex flex-col gap-4 items-center px-10 py-5 m-5 rounded-sm shadow-lg bg-white"
        >
            <h2
                className="font-bold text-xl mb-2"
            >
                Créer un compte :
            </h2>
            <input
                type="text"
                placeholder="Prénom"
                className="p-2 rounded-sm border bg-(--lightColor)"
            />
            <input
                type="text"
                placeholder="Nom"
                className="p-2 rounded-sm border bg-(--lightColor)"
            />
            <input
                type="text"
                placeholder="Email"
                className="p-2 rounded-sm border bg-(--lightColor)"
            />
            <input
                type="text"
                placeholder="Nom d'utilisateur"
                className="p-2 rounded-sm border bg-(--lightColor)"
            />
            <input
                type="text"
                placeholder="Mot de passe"
                className="p-2 rounded-sm border bg-(--lightColor)"
            />
            <ButtonGreen
                text="Créer mon compte"
            />
        </form>
    )
}
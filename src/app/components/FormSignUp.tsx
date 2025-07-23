import Link from "next/link";
import ButtonGreen from "./ButtonGreen";
import Input from "./Input";

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
            <Input
                type="text"
                placeholder="Prénom"
            />
            <Input
                type="text"
                placeholder="Nom"
            />
            <Input
                type="email"
                placeholder="Email"
            />
            <Input
                type="text"
                placeholder="Nom d'utilisateur"
            />
            <Input
                type="password"
                placeholder="Mot de passe"
            />
            <ButtonGreen
                text="Créer mon compte"
            />
        </form>
    )
}
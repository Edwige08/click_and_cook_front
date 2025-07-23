'use client'

import Link from "next/link";
import ButtonOrange from "./ButtonOrange";
import Input from "./Input";
import { useState } from "react";

export default function FormSignIn() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    return (
        <form
            className="flex flex-col gap-4 items-center px-10 py-5 m-5 rounded-sm shadow-lg bg-white"
        >
            <h2
                className="font-bold text-xl mb-2"
            >
                Se connecter :
            </h2>
            <Input
                inputName="username"
                type="text"
                placeholder="Votre nom d'utilisateur"
                value={formData.username}
                onChange={() => HandleChange}
            />
            <Input
                inputName="password"
                type="password"
                placeholder="Votre mot de passe"
                value={formData.password}
                onChange={() => HandleChange}
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
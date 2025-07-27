'use client'

import Link from "next/link";
import ButtonOrange from "./ButtonOrange";
import Input from "./Input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormSignIn() {
    const router = useRouter()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>();

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        setIsLoading(true);
        setMessage('');

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log("Données reçues au login :", data);
            localStorage.setItem('auth_token', data.auth_token);

            if (!response.ok) {
                throw new Error(data.message || 'Erreur lors de la connexion')
            }

            setMessage(data.message)
            console.log(data)

            setTimeout(() => {
                router.push('/home')
            }, 2000);

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
            setMessage(errorMessage);

        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 2000)
        }
    }

    return (
        <form
            className="flex flex-col gap-4 items-center px-10 py-5 m-5 rounded-sm shadow-lg bg-white"
            onSubmit={handleSubmit}
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
                onChange={HandleChange}
            />
            <Input
                inputName="password"
                type="password"
                placeholder="Votre mot de passe"
                value={formData.password}
                onChange={HandleChange}
            />
            <ButtonOrange
                type="submit"
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
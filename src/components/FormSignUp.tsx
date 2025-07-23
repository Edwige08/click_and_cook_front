'use client'

import React, { useState } from "react";
import ButtonGreen from "./ButtonGreen";
import Input from "./Input";
import { useRouter } from "next/navigation";
import { access } from "fs";

interface FormData {
    firstname: string,
    lastname: string,
    email: string,
    username: string,
    password: string
}

export default function FormSignUp() {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
        firstname: '',
        lastname: '',
        email: '',
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
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erreur lors de la création du compte')
            }

            setMessage(data.message)
            console.log(message)

            setTimeout(() => {
                router.push('/signin')
            }, 2000);

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
            setMessage(errorMessage);

        } finally {
            setIsLoading(false);
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
                Créer un compte :
            </h2>
            <Input
                inputName="firstname"
                type="text"
                placeholder="Prénom"
                value={formData.firstname}
                onChange={HandleChange}
            />
            <Input
                inputName="lastname"
                type="text"
                placeholder="Nom"
                value={formData.lastname}
                onChange={HandleChange}
            />
            <Input
                inputName="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={HandleChange}
            />
            <Input
                inputName="username"
                type="text"
                placeholder="Nom d'utilisateur"
                value={formData.username}
                onChange={HandleChange}
            />
            <Input
                inputName="password"
                type="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={HandleChange}
            />
            <ButtonGreen
                type="submit"
                disabled={isLoading}
                text={ isLoading? "Création du compte..." : "Créer mon compte"}
            />
        </form>
    )
}
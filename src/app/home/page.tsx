'use client'

import { useEffect, useState } from "react";
import CardRecipe from "../../components/CardRecipe";
import Navbar from "../../components/Navbar";
import FormSearchBar from "@/components/FormSearchBar";

interface Recipe {
    titre: string,
    photo: string,
    date: string,
    auteurice: string
}

const recipe: Recipe = {
    titre: 'Frites au four maison',
    photo: 'https://cdn.pixabay.com/photo/2024/04/16/16/40/ai-generated-8700413_1280.jpg',
    date: '22/07/2025',
    auteurice: 'Marie'
}

export default function Home() {

    const [searchValue, setSearchValue] = useState<string>("");
    const [lastRecipes, setLastRecipes] = useState([]);

    const username: string | null = localStorage.getItem("username");
    console.log(username);


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            // async function getSearchRecipes() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes`, {
                // credentials: 'include',
                headers: {
                    'Authorization': 'Token c29fccbebea1072ceebb4eb212c3da1608d0fb56',
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json();
            console.log("data :", data)
            // }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Une erreur est survenue dans la récupération des données.";
            console.log("errorMessage : ", errorMessage);
        }
    }

    useEffect(() => {
        async function getRecipes() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes`, {
                // credentials: 'include',
                headers: {
                    'Authorization': 'Token c29fccbebea1072ceebb4eb212c3da1608d0fb56',
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json();
            console.log("data :", data)
            setLastRecipes(data)
        }
        getRecipes();
    }, [])


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    return (
        <>
            <h2 className="py-5 text-center text-xl font-bold">
                Bonjour {username} !
            </h2>

            <FormSearchBar
                onSubmit={handleSubmit}
                value={searchValue}
                onChange={handleChange}
            />

            <p className="p-5 text-center">
                Voici les dernières recettes tout juste sorties du four :
            </p>

            <div>
                {/* {lastRecipes.map((recipe, index) => {
                    return (
                        <CardRecipe
                            key={index}
                            title={recipe.titre}
                            photo={recipe.photo}
                            date={recipe.date}
                            auteurice={recipe.auteurice}
                        />
                    )
                })} */}
                <CardRecipe
                    title={recipe.titre}
                    photo={recipe.photo}
                    date={recipe.date}
                    auteurice={recipe.auteurice}
                />
            </div>
        </>
    )
}
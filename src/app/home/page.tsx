'use client'

import { useState } from "react";
import CardRecipe from "../../components/CardRecipe";
import Navbar from "../../components/Navbar";

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

    const [lastRecipes, setLastRecipes] = useState([]);

    async function getRecipes () {
        const response = await fetch(`${process.env.back_end_url}`)
        const data = await response.json();
        setLastRecipes(data)
    }

    return (
        <>
            <Navbar />
            <h2 className="py-5 text-center text-xl font-bold">
                Bonjour USER !
            </h2>

            <p className="p-5 text-center">
                Voici les dernières recettes tout juste sorties du four :
            </p>

            <div>
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
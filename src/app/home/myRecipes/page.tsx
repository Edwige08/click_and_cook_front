'use client'

import MyRecipes from "@/components/MyRecipes"
import MyRecipesLiked from "@/components/MyRecipesLiked"
import { useState } from "react"

export default function Home() {
    const [myRecipes, setMyRecipes] = useState(true)
    const [recipesLiked, setRecipesLiked] = useState(false)

    const displayMyRecipes = () => {
        if (!myRecipes) {
            setMyRecipes(true)
            setRecipesLiked(false)
        }
    }
    const displayRecipesLiked = () => {
        if (!recipesLiked) {
            setRecipesLiked(true)
            setMyRecipes(false)
        }
    }
    return (
        <>
            <div className="flex flex-row gap-2 md:gap-5 justify-center my-5 ">
                <button
                    onClick={displayMyRecipes}
                    className={`p-2 border rounded-lg w-[40%] max-w-70 ${myRecipes ? "font-bold underline bg-(--orangeColor)" : "text-gray-400" }`}>
                    Mes recettes publiées
                </button>
                <button
                    onClick={displayRecipesLiked}
                    className={`p-2 border rounded-lg w-[40%] max-w-70 ${recipesLiked ? "font-bold underline bg-(--orangeColor)" : "text-gray-400" }`}>
                    Mes recettes favorites
                </button>
            </div>
            <div>
                <MyRecipes 
                classes={` ${myRecipes ? "" : "hidden"}`}
                />
                <MyRecipesLiked 
                classes={` ${recipesLiked ? "" : "hidden"}`}
                />
            </div>
        </>
    )
}
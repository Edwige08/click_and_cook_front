'use client'

import MyRecipes from "@/components/MyRecipes"
import { useEffect, useState } from "react"
import { Recipes } from "@/types/interface"
import { useUser } from "@/components/UserInfos"

export default function Home() {

    const [myRecipes, setMyRecipes] = useState(true)
    const [recipesLiked, setRecipesLiked] = useState(false)
    const [recipes, setRecipes] = useState<Recipes[]>([])
    const [recipesLikedList, setRecipesLikedList] = useState<Recipes[]>([])

    const user = useUser().user;

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

    useEffect(() => {
        async function getRecipes() {
            const token = localStorage.getItem("auth_token");
            if (!token) return;

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes/user/${user?.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            }
            );
            const data = await response.json();
            console.log('👀👀', data)
            setRecipes(data);
        }
        getRecipes();
    }, []);

    useEffect(() => {
        async function getRecipesLiked() {
            const token = localStorage.getItem("auth_token");
            if (!token) return;

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes/user/liked-by/${user?.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            }
            );
            const data = await response.json();
            console.log('🔰🔰', data)
            setRecipesLikedList(data);
        }
        getRecipesLiked();
    }, []);

    return (
        <>
            <div className="flex flex-row gap-2 md:gap-5 justify-center my-5 ">
                <button
                    onClick={displayMyRecipes}
                    className={`p-2 border rounded-lg w-[40%] max-w-70 ${myRecipes ? "font-bold underline bg-(--orangeColor)" : "text-gray-400"}`}>
                    Mes recettes publiées
                </button>
                <button
                    onClick={displayRecipesLiked}
                    className={`p-2 border rounded-lg w-[40%] max-w-70 ${recipesLiked ? "font-bold underline bg-(--orangeColor)" : "text-gray-400"}`}>
                    Mes recettes favorites
                </button>
            </div>
            <div>
                <div className={`flex flex-col gap-1 py-2 px-4 ${myRecipes ? "" : "hidden"}`}>
                    {recipes.map((recipe) => {
                        return (
                            <MyRecipes
                                title={recipe.title}
                                key={recipe.id} />

                        )
                    })}
                    <p className="text-center">
                        {recipes.length > 0 ? "" : "Vous n'avez pas encore publié de recettes 😢"}
                    </p>
                </div>

                <div className={`flex flex-col gap-1 py-2 px-4 ${recipesLiked ? "" : "hidden"}`}>
                    {recipesLikedList.map((recipe) => {
                        return (
                            <MyRecipes
                                title={recipe.title}
                                key={recipe.id} />
                        )
                    })}
                    <p className="text-center">
                        {recipesLikedList.length > 0 ? "" : "Vous n'avez pour le moment pas de recettes dans vos favoris 😢"}
                    </p>
                </div>
            </div>
        </>
    )
}
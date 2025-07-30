'use client'

import MyRecipes from "@/components/MyRecipes"
import { useEffect, useState } from "react"
import { Recipe } from "@/types/interface"
import { useUser } from "@/components/UserInfos"
import { useSearchParams } from "next/navigation"
import Link from "next/link"

export default function Home() {

    const [myRecipes, setMyRecipes] = useState<boolean>(true)
    const [recipesLiked, setRecipesLiked] = useState<boolean>(false)
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [recipesLikedList, setRecipesLikedList] = useState<Recipe[]>([])

    const user = useUser().user;
    const searchParams = useSearchParams()

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
        const currentTab = searchParams.get('tab')
        if (currentTab === 'fav') {
            setRecipesLiked(true)
            setMyRecipes(false)
        } else {
            setMyRecipes(true)
            setRecipesLiked(false)
        }
    }, [searchParams])

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
                                id={recipe.id}
                                key={recipe.id}
                            />
                        )
                    })}

                    {recipes.length > 0 ?
                        <button className="flex flex-col items-center mx-10 my-5 px-4 py-2 border rounded-lg shadow-xl text-white bg-(--redColor) hover:bg-(--darkBlue)">
                            <Link href="/home">
                                ✨ Découvrir encore plus de nouvelles recettes et leurs créateurs
                            </Link>
                        </button> :
                        <div className={`flex flex-col items-center gap-1 py-2 px-4 ${myRecipes ? "" : "hidden"}`}>
                            <p className="text-center">
                                Vous n'avez pas encore publié de recettes 😢
                            </p>
                            <button className="flex flex-col items-center mx-10 my-5 px-4 py-2 border rounded-lg shadow-xl text-white bg-(--redColor) hover:bg-(--darkBlue)">
                                <Link href="/home">
                                    ✨ Découvrir de nouvelles recettes et leurs créateurs
                                </Link>
                            </button>
                        </div>
                    }
                </div>

                <div className={`flex flex-col gap-1 py-2 px-4 ${recipesLiked ? "" : "hidden"}`}>
                    {recipesLikedList.map((recipe) => {
                        return (
                            <MyRecipes
                                title={recipe.title}
                                id={recipe.id}
                                key={recipe.id} />
                        )
                    })}


                    {recipesLikedList.length > 0 ?
                        <button className="flex flex-col items-center mx-10 my-5 px-4 py-2 border rounded-lg shadow-xl text-white bg-(--redColor) hover:bg-(--darkBlue)">
                            <Link href="/home">
                                ✨ Découvrir encore plus de nouvelles recettes et leurs créateurs
                            </Link>
                        </button> :
                        <div className={`flex flex-col items-center gap-1 py-2 px-4 ${recipesLiked ? "" : "hidden"}`}>
                            <p className="text-center">
                                Vous n'avez pas encore de recettes dans vos favoris 😢
                            </p>
                            <button className="flex flex-col items-center mx-10 my-5 px-4 py-2 border rounded-lg shadow-xl text-white bg-(--redColor) hover:bg-(--darkBlue)">
                                <Link href="/home">
                                    ✨ Découvrir de nouvelles recettes et leurs créateurs
                                </Link>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
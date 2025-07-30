'use client';

import CardProfileStat from "@/components/CardProfileStat";
import { use, useEffect, useState } from "react";
import { Recipe, UserProfile } from "@/types/interface";
import CardRecipe from "@/components/CardRecipe";

type Props = {
    params: Promise<{ id: string }>
}

export default function DisplayDynamicUsers({ params }: Props) {
    const resolvedParams = use(params);

    const [userInfos, setUserInfos] = useState<UserProfile>({});
    const [userRecipes, setUserRecipes] = useState<Recipe[]>([])

    async function fetchUser() {
        try {
            const token = localStorage.getItem("auth_token");
            if (!token) return;

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/user/${resolvedParams.id}/profile/`,
                {
                    cache: "no-store",
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${token}`,
                    }
                }
            )

            if (!response.ok) {
                throw new Error('Erreur lors du chargement des informations')
            }

            const data = await response.json();
            console.log("🍿 ", data);
            setUserInfos(data);

        } catch (error) {
            console.log('Erreur : ', error);
        }
    }

    async function getUserRecipes() {
        try {

            const token = localStorage.getItem("auth_token");
            if (!token) return;

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes/user/${resolvedParams.id}`, {
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
            })

            if (!response.ok) {
                throw new Error('Erreur lors du chargement des informations')
            }

            const data = await response.json();
            console.log("🍫 ", data);
            setUserRecipes(data);

        } catch (error) {
            console.log("Erreur : ", error);
        }

    }

    useEffect(() => {
        fetchUser()
    }, [resolvedParams.id])

    useEffect(() => {
        getUserRecipes()
    }, [resolvedParams.id])

    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="pt-7 pb-3 text-2xl font-bold">
                    Profil de : {userInfos.username}
                </h2>

                <p className="pb-5 italic">
                    Inscrit.e depuis le 00/00/0000
                </p>
            </div>
            <div className="flex flex-row gap-2 justify-evenly flex-wrap p-2 mx-5 my-2 lg:mx-20 xl:mx-45 pt-5 rounded-lg shadow-lg bg-(--orangeColor)">
                <CardProfileStat
                    statNumber={userInfos.recipes_count}
                    statName="Recettes postées"
                />
                <CardProfileStat
                    statNumber={userInfos.following_count}
                    statName="Abonnements"
                />
                <CardProfileStat
                    statNumber={42}
                    statName="Recettes favorites"
                />
                <CardProfileStat
                    statNumber={userInfos.followers_count}
                    statName="Abonnés"
                />
            </div>
            <div>
                <h3 className="py-5 text-center text-lg font-bold">
                    Recettes publiées par {userInfos.username} :
                </h3>
                {userRecipes && userRecipes.map((recipe) => {
                    return (
                        <CardRecipe
                            key={recipe.id}
                            id={recipe.id}
                            title={recipe.title}
                            cook_time_min={recipe.cook_time_min}
                            prep_time_min={recipe.prep_time_min}
                            servings={recipe.servings}
                            picture={recipe.picture}
                            created_at={recipe.created_at}
                            user={recipe.user_detail}
                            user_id={recipe.user_detail.id}
                        />
                    )
                })}
            </div>

        </>
    )
}
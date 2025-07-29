'use client'

import ButtonSection from "@/components/ButtonSection";
import CardProfileStat from "@/components/CardProfileStat";
import { useUser } from "@/components/UserInfos";
import { useEffect, useState } from "react";
import { Recipes } from "@/types/interface"

export default function personnalProfile() {

  const [recipes, setRecipes] = useState<Recipes[]>([]);
  const [recipesLikedList, setRecipesLikedList] = useState<Recipes[]>([]);

  const user = useUser().user;

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

  async function getLikedRecipes() {
    const token = localStorage.getItem("auth_token");
    if (!token) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/likes/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }
    );
    const data = await response.json();
    console.log('🔰🔰', data)
    setRecipesLikedList(data.results);
  }

  useEffect(() => {
    getLikedRecipes()
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="pt-7 pb-3 text-2xl font-bold">
          Bonjour {user ? user.username : ""} !
        </h2>
        <p className="pb-5 italic">{user ? `Inscrit.e depuis le ${new Date(user.created_at).toLocaleDateString()}` : ``}</p>
      </div>
      <div className="flex flex-row gap-2 justify-evenly flex-wrap p-2 mx-5 my-2 lg:mx-20 xl:mx-45 pt-5 rounded-lg shadow-lg bg-(--orangeColor)">
        <CardProfileStat
          statNumber={recipes.length}
          statName={recipes.length > 1 ? "Recettes postées" : "Recette postée"}
        />
        <CardProfileStat statNumber={12} statName="Abonnements" />
        <CardProfileStat
          statNumber={recipesLikedList.length}
          statName={recipes.length > 1 ? "Recettes favorites" : "Recette favorite"}
        />
        <CardProfileStat statNumber={3} statName="Abonnés" />
      </div>
      <div>
        <h3 className="py-5 text-center text-lg font-bold">
          Que voulez-vous faire ?
        </h3>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-full">
          <ButtonSection
            link="/home/publishRecipe"
            image="➕"
            text="Ajouter une recette"
            classes="md:mb-6 border-2 text-lg py-3 bg-(--lightColor) md:w-160 hover:bg-(--redColor)"
          />
        </div>
        <div className="flex flex-col items-center w-full md:flex-row md:flex-wrap md:gap-2 md:justify-center lg:px-35 xl:px-2">
          <ButtonSection
            link="/home/myRecipes?tab=pub"
            image="🥘"
            text="Mes recettes publiées"
            classes="md:w-75 xl:w-65 "
          />
          <ButtonSection
            link="/home/myRecipes?tab=fav"
            image="🧡"
            text="Mes recettes favorites"
            classes="md:w-75 xl:w-65"
          />
          <ButtonSection
            link="/home/follows?tab=followed"
            image="👩‍🍳"
            text="Mes abonnements"
            classes="md:w-75 xl:w-65 "
          />
          <ButtonSection
            link="/home/follows?tab=following"
            image="👥"
            text="Mes abonnés"
            classes="md:w-75 xl:w-65 "
          />
        </div>
      </div>
    </>
  );
}

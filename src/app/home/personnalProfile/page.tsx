'use client'

import ButtonSection from "@/components/ButtonSection";
import CardProfileStat from "@/components/CardProfileStat";
import { useUser } from "@/components/UserInfos";
import { useEffect, useState } from "react";

export default function personnalProfile() {
  interface User {
    username: string;
  }

  interface Step {
    description: string;
  }

  interface Ingredients {
    title: string;
    quantity: number;
    unity: string;
  }

  interface Recipes {
    id: number;
    title: string;
    cook_time_min: number;
    prep_time_min: number;
    servings: number;
    ingredients: Ingredients[];
    steps: Step[];
    picture: string;
    likes_count: number;
    is_liked: number;
    user: number;
    user_detail: User[];
    created_at: string;
  }

  interface CreatedAt {
    createdAt: string | null
  }
  const [recipes, setRecipes] = useState<Recipes[]>([])

  const user = useUser().user;
  console.log("🍐 user : ", user)

  useEffect(() => {
    async function getRecipes() {
      const token = localStorage.getItem("auth_token");
      if (!token) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes/user/9`, {
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

  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="pt-7 pb-3 text-2xl font-bold">
          Bonjour {user ? user.username : ""} !
        </h2>
        <p className="pb-5 italic">{user ? `Inscrit.e depuis le ${new Date(user.created_at).toLocaleDateString()}` : `` }</p>
      </div>
      <div className="flex flex-row gap-2 justify-evenly flex-wrap p-2 mx-5 my-2 lg:mx-20 xl:mx-45 pt-5 rounded-lg shadow-lg bg-(--orangeColor)">
        <CardProfileStat
          statNumber={recipes.length}
          statName={recipes.length > 1 ? "Recettes postées" : "Recette postée"}
        />
        <CardProfileStat statNumber={12} statName="Abonnements" />
        <CardProfileStat statNumber={24} statName="Recettes favorites" />
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
            link="#"
            image="🥘"
            text="Mes recettes publiées"
            classes="md:w-75 xl:w-65 "
          />
          <ButtonSection
            link="#"
            image="🧡"
            text="Mes recettes favorites"
            classes="md:w-75 xl:w-65"
          />
          <ButtonSection
            link="#"
            image="👩‍🍳"
            text="Mes abonnements"
            classes="md:w-75 xl:w-65 "
          />
          <ButtonSection
            link="#"
            image="👥"
            text="Mes abonnés"
            classes="md:w-75 xl:w-65 "
          />
        </div>
      </div>
    </>
  );
}

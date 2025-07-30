'use client'

import { Clock4, CookingPot, Users } from "lucide-react";
import { Recipe, Ingredients, Step } from "@/types/interface";
import { use, useEffect, useState } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

export default function displayDynamicRecipes({ params }: Props) {
  const resolvedParams = use(params);

  const [recipe, setRecipe] = useState<Recipe | null>(null)

  const monthInLetters = (month: number) => {
    if (month == 0) return "janvier";
    if (month == 1) return "février";
    if (month == 2) return "mars";
    if (month == 3) return "avril";
    if (month == 4) return "mai";
    if (month == 5) return "juin";
    if (month == 6) return "juillet";
    if (month == 7) return "août";
    if (month == 8) return "septembre";
    if (month == 9) return "octobre";
    if (month == 10) return "novembre";
    if (month == 11) return "décembre";
  };

  async function fetchRecipe() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes/${resolvedParams.id}/`,
        { cache: "no-store" }
      )

      if (!response.ok) {
        throw new Error('Erreur lors du chargement de la recette')
      }

      const data = await response.json();
      console.log("🍣", data);
      setRecipe(data)

    } catch (error) {
      console.log('Erreur : ', error);
    }

  }

  useEffect(() => {
    console.log("je suis trigger")
    fetchRecipe()
  }, [resolvedParams.id]);

  let publicationDate = "";
  if (recipe?.created_at) {
    const pubDate = new Date(recipe.created_at);
    publicationDate = `${pubDate.getDate()}${pubDate.getDate() === 1 ? "er" : ""} ${monthInLetters(pubDate.getMonth())} ${pubDate.getFullYear()}`;
  }

  return (
    <div className="flex flex-col items-center">
      {recipe ?
        <div className="flex flex-col m-5 md:mx-10 p-5 md:p-10 bg-(--orangeColor) border border-(--darkBlue) shadow-xl/20 rounded-lg max-w-250">
          <div className="flex flex-col items-center justify-center rounded-lg max-h-80 overflow-hidden">
            <img
              src={recipe?.picture}
              alt={`Photo de ${recipe?.title}`}
              className="rounded-lg w-full"
            />
          </div>
          <h2 className="pt-5 text-center text-2xl font-bold">{recipe?.title}</h2>
          <div className="flex flex-row justify-center my-3">
            <button className="px-3 py-1 rounded-lg text-(--lightColor) bg-(--redColor) hover:bg-(--darkBlue) shadow-xl">
              Sauvegarder 🤍❤️
            </button>
          </div>
          <div className="pb-2 text-end italic">
            <p>Publiée le {publicationDate}</p>
            <p>Par 👩‍🍳 {recipe?.user_detail.username}</p>
          </div>
          <div className="flex flex-row justify-evenly gap-4 py-4">
            <p className="flex flex-col items-center p-2 border rounded-lg w-20 bg-(--lightColor)">
              <Users />
              {recipe?.servings} pers
            </p>
            <p className="flex flex-col items-center p-2 border rounded-lg w-20 bg-(--lightColor)">
              <Clock4 />
              {recipe?.prep_time_min} min
            </p>
            <p className="flex flex-col items-center p-2 border rounded-lg w-20 bg-(--lightColor)">
              <CookingPot />
              {recipe?.cook_time_min} min
            </p>
          </div>
          <h3 className="py-2 underline text-lg font-bold">Ingrédients :</h3>
          <ul className="pl-5 pb-3 list-disc">
            {recipe?.ingredients.map((ing: Ingredients, index: number) => {
              return (
                <li key={index}>
                  {ing.title} : {ing.quantity} {ing.unity}
                </li>
              );
            })}
          </ul>
          <h3 className="py-2 underline text-lg font-bold">Préparation :</h3>
          <ol className="pl-5 pb-3 list-decimal">
            {recipe?.steps.map((step: Step, index: number) => {
              return <li key={index}>{step.description}</li>;
            })}
          </ol>
        </div> :
        <div className="flex justify-center items-center min-h-screen">
          <p>Chargement de la recette...</p>
        </div>
      }
    </div>
  );
}

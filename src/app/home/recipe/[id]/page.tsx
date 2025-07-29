import { Clock4, CookingPot, Users } from "lucide-react";
import { Recipe, Ingredients, Step } from "@/types/interface";

type Props = {
  params: { id: string };
};

export default async function displayDynamicRecipes({ params }: Props) {
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

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes/${params.id}/`,
    { cache: "no-store" }
  );
  console.log("res : ", res);

  const recipe: Recipe = await res.json();
  console.log("recipe :", recipe);
  const pubDate = new Date(recipe.created_at);
  const publicationDate = `
            ${pubDate.getDate()}
            ${pubDate.getDate() == 1 ? "er" : ""}
            ${monthInLetters(pubDate.getMonth())} ${pubDate.getFullYear()}`;

  return (
    <div className="flex flex-col items-center">

      <div className="flex flex-col m-5 md:mx-10 p-5 md:p-10 bg-(--orangeColor) border border-(--darkBlue) shadow-xl/20 rounded-lg max-w-250">
        <div className="flex flex-col items-center">
          <img
            src={recipe.picture}
            alt={`Photo de ${recipe.title}`}
            className="rounded-lg"
          />
        </div>
        <h2 className="pt-5 text-center text-2xl font-bold">{recipe.title}</h2>
        <div className="flex flex-row justify-center my-3">
          <button className="px-3 py-1 rounded-lg text-(--lightColor) bg-(--redColor) hover:bg-(--darkBlue) shadow-xl">
            Sauvegarder 🤍❤️
          </button>
        </div>
        <div className="pb-2 text-end italic">
          <p>Publiée le {publicationDate}</p>
          <p>Par 👩‍🍳 {recipe.user_detail.username}</p>
        </div>
        <div className="flex flex-row justify-evenly gap-4 py-4">
          <p className="flex flex-col items-center p-2 border rounded-lg w-20 bg-(--lightColor)">
            <Users />
            {recipe.servings} pers
          </p>
          <p className="flex flex-col items-center p-2 border rounded-lg w-20 bg-(--lightColor)">
            <Clock4 />
            {recipe.prep_time_min} min
          </p>
          <p className="flex flex-col items-center p-2 border rounded-lg w-20 bg-(--lightColor)">
            <CookingPot />
            {recipe.cook_time_min} min
          </p>
        </div>
        <h3 className="py-2 underline text-lg font-bold">Ingrédients :</h3>
        <ul className="pl-5 pb-3 list-disc">
          {recipe.ingredients.map((ing: Ingredients, index: number) => {
            return (
              <li key={index}>
                {ing.title} : {ing.quantity} {ing.unity}
              </li>
            );
          })}
        </ul>
        <h3 className="py-2 underline text-lg font-bold">Préparation :</h3>
        <ol className="pl-5 pb-3 list-decimal">
          {recipe.steps.map((step: Step, index: number) => {
            return <li key={index}>{step.description}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

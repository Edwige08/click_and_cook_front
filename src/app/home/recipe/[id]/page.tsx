import { Clock4, CookingPot, Users } from "lucide-react";
import { Recipes, Ingredients, Step } from "@/types/interface";

type Props = {
       params: { id:string };
}


export default async function displayDynamicRecipes( { params }: Props) {
    const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes/${params.id}/`,
    { cache: "no-store" }
  );
    console.log('res : ', res)
    
    const recipe = await res.json();
    console.log('recipe :', recipe)
    console.log('coucouuuuuuuu', await params)
    return (
        <div className="flex flex-col m-5">
            <div
                className="flex flex-col items-center">
                <img src={recipe.picture} alt={`Photo de ${recipe.title}`} className="rounded-lg" />
            </div>
            <h2 className="py-5 text-center text-2xl font-bold">
                {recipe.title}
            </h2>
            <div className="py-2 text-end italic">
                <p>Publiée le 00/00/0000</p>
                <p>Par {recipe.user}</p>
            </div>
            <div className="flex flex-row justify-evenly gap-4 py-4">
                <p className="flex flex-col items-center p-2 border rounded-lg w-20 bg-(--lightColor)">
                    <Users />{recipe.servings} pers
                </p>
                <p className="flex flex-col items-center p-2 border rounded-lg w-20 bg-(--lightColor)">
                    <Clock4 />{recipe.prep_time_min} min
                </p>
                <p className="flex flex-col items-center p-2 border rounded-lg w-20 bg-(--lightColor)">
                    <CookingPot />{recipe.cook_time_min} min
                </p>
            </div>
            <h3 className="py-2 underline text-lg font-bold">
                Ingrédients :
            </h3>
            <ul className="pl-5 pb-3 list-disc">
                {recipe.ingredients.map((ing: Ingredients, index: number) => {
                    return (
                        <li key={index}>
                            {ing.title} : {ing.quantity} {ing.unity}
                        </li>
                    )
                })}
            </ul>
            <h3 className="py-2 underline text-lg font-bold">
                Préparation :
            </h3>
            <ol className="pl-5 pb-3 list-decimal">
                {recipe.steps.map((step: Step, index: number) => {
                    return (
                        <li key={index}>
                            {step.description}
                            </li>
                    )
                })}
            </ol>
        </div>
    )
}
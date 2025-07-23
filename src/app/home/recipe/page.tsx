import { Clock4, CookingPot, Users } from "lucide-react"

interface Ingredient {
    title: string
    quantity: number
    unity: string
}

interface Step {
    description: string
}

interface Recipe {
    titre: string,
    cook_time_min: number
    prep_time_min: number
    servings: number
    ingredients: Ingredient[]
    steps: Step[]
    user: number
    picture: string,
}

const recipe: Recipe = {
    titre: "Frites au four maison",
    cook_time_min: 30,
    prep_time_min: 20,
    servings: 4,
    ingredients: [
        { title: "Huile", quantity: 2, unity: "c. à soupe" },
        { title: "Pommes de terre", quantity: 8, unity: "unités" },
        { title: "Paprika", quantity: 1, unity: "c. à soupe" }
    ],
    steps: [
        { description: "Préchauffez le four à 250°C." },
        { description: "Coupez les pommes de terre en frites (adaptez l'épaisseur selon vos préférences), puis rincez-les et essuyez l'excédent d'eau." },
        { description: "Mélangez bien les frites avec l'huile et le paprika." },
        { description: "Déposez les frites bien à plat sur la plaque du four." },
        { description: "Enfournez pendant 30 à 40 minutes." },
        { description: "Une fois que les frites sont dorées comme vous le souhaitez, c'est prêt !" }
    ],
    user: 4,
    picture: "https://cdn.pixabay.com/photo/2024/04/16/16/40/ai-generated-8700413_1280.jpg"
}

export default function Recipe() {
    return (
        <div className="flex flex-col m-5">
            <div
                className="flex flex-col items-center">
                <img src={recipe.picture} alt="Photo de la recette" className="rounded-lg" />
            </div>
            <h2 className="py-5 text-center text-2xl font-bold">
                {recipe.titre}
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
                {recipe.ingredients.map((ing, index) => {
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
                {recipe.steps.map((step, index) => {
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
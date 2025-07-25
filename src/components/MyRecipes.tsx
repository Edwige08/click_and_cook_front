import { ChefHat } from "lucide-react";

const exampleList = [
    { usrnm: "Recette publiée 1" },
    { usrnm: "Recette publiée 2" },
    { usrnm: "Recette publiée 3" },
    { usrnm: "Recette publiée 4" },
]

export default function MyRecipes(props: { classes: string }) {
    return (
        <div className={`flex flex-col gap-1 py-2 px-4 ${props.classes}`}>
            {exampleList.map((example) => {
                return (
                    <button
                        className="flex flex-row gap-2 items-center border rounded-xl p-2 hover:underline hover:cursor-pointer hover:bg-(--lightColor)">
                        <p>
                            <ChefHat />
                        </p>
                        <p>{example.usrnm}</p>
                    </button>
                )
            })}
        </div>
    )
}
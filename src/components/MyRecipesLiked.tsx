import { ChefHat } from "lucide-react";

const exampleList = [
    { usrnm: "Recette aimée 1" },
    { usrnm: "Recette aimée 2" },
    { usrnm: "Recette aimée 3" },
    { usrnm: "Recette aimée 4" },
]

export default function MyRecipesLiked(props: { classes: string }) {
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
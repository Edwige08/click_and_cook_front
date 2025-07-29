import { ChefHat } from "lucide-react";

export default function MyRecipes(props: { title: string }) {
    return (
        <button
            className="flex flex-row gap-2 items-center border rounded-xl p-2 hover:underline hover:cursor-pointer hover:bg-(--lightColor)"
        >
            <p>
                <ChefHat />
            </p>
            <p>{props.title}</p>
        </button>
    )
}
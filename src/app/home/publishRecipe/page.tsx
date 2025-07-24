import FormRecipe from "@/components/FormRecipe";
import { ChefHat } from "lucide-react";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center pt-10 pb-5 text-2xl text-center font-bold">
                <ChefHat />
                <h2>
                    Publier une nouvelle recette
                </h2>
            </div>
            <FormRecipe />
        </>
    )
}
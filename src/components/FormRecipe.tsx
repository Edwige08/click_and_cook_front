'use client'

import { CirclePlus, Trash2 } from "lucide-react";
import Input from "./Input";
import { useState } from "react";
import ButtonGreen from "./ButtonGreen";

export default function FormRecipe() {

    interface Ingredient {
        ingredient: string,
        quantity: number,
        unity: string
    }

    interface Step {
        description: string
    }

    const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([{ ingredient: "", quantity: 0, unity: "" }]);
    const [stepsList, setStepsList] = useState<Step[]>([{ description: "" }]);

    const addIngredient = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIngredientsList((prev) => ([...prev, { ingredient: "", quantity: 0, unity: "" }]))
    }

    const addStep = (event: React.MouseEvent<HTMLButtonElement>) => {
        setStepsList((prev) => ([...prev, { description: "" }]))
    }

    const handleChangeIng = (value: string | number, key: keyof Ingredient, index: number) => {
        let updated: Ingredient[] = [...ingredientsList]
        if (key === 'quantity') {
            updated[index][key] = value as number;
        } else {
            updated[index][key] = value as string;
        }
        setIngredientsList(updated)
    }

    const handleChangeStep = (value: string, key: keyof Step, index: number) => {
        let updated: Step[] = [...stepsList]
        updated[index][key] = value;
        setStepsList(updated)
    }

    console.log("ingredientsList : ", ingredientsList);

    return (
        <form className="m-4 px-2 py-5 border border-(--darkBlue) rounded-lg bg-(--orangeColor)">
            <div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="" className="font-bold">Titre de la recette :</label>
                    <Input
                        inputName="title"
                        type="text"
                        placeholder="ex : Lasagnes à la bolognaise"
                    />
                </div>
                <div className="flex flex-row justify-between mb-4">
                    <div className="flex flex-col w-[50%]">
                        <label htmlFor="" className="font-bold">Préparation :</label>
                        <div className="flex flex-row gap-2 items-center">
                            <Input
                                inputName="prep_time"
                                type="number"
                                placeholder="ex : 30"
                                classes="w-20"
                            />
                            <p>min</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <label htmlFor="" className="font-bold">Cuisson :</label>
                        <div className="flex flex-row gap-2 items-center">
                            <Input
                                inputName="cooking_time"
                                type="number"
                                placeholder="ex : 60"
                                classes="w-20"
                            />
                            <p>min</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="" className="font-bold">Nombre de personne :</label>
                    <Input
                        inputName="servings"
                        type="number"
                        placeholder="ex : 4"
                        classes="w-20"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <p className="font-bold">Liste des ingrédients :</p>
                    <div className="flex flex-col">
                        <div className="flex flex-row gap-2 pl-2">
                            <p className="w-[44%]">Ingrédients :</p>
                            <p className="w-[19%]">Qtés</p>
                            <p className="w-[29%]">Unités</p>
                            <p className="w-[8%] text-(--orangeColor)">.</p>
                        </div>
                        {ingredientsList.map((ingr, index: number) => {
                            return (
                                <div
                                    className="flex flex-row gap-2"
                                    key={index}>
                                    <Input
                                        inputName="ingredient"
                                        type="text"
                                        placeholder="ex : Tomates"
                                        classes="w-[44%]"
                                        value={ingr.ingredient}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeIng(e.target.value, 'ingredient', index)}
                                    />
                                    <Input
                                        inputName="quantity"
                                        type="number"
                                        placeholder="ex : 3"
                                        classes="w-[19%]"
                                        value={ingr.quantity}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeIng(e.target.value, 'quantity', index)}
                                    />
                                    <Input
                                        inputName="unity"
                                        type="text"
                                        placeholder="ex : unités"
                                        classes="w-[29%]"
                                        value={ingr.unity}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeIng(e.target.value, 'unity', index)}
                                    />
                                </div>

                            )
                        })}
                        {/* <button className="flex flex-col items-center w-[8%] ">
                            <p className="m-auto p-1 rounded-xl shadow-sm bg-(--redColor) text-(--lightColor)">
                                <Trash2 />
                            </p>
                        </button> */}
                        <div className="flex flex-row gap-2">
                            <div className="w-[44%] text-(--orangeColor)">.</div>
                            <div className="w-[19%] text-(--orangeColor)">.</div>
                            <div className="w-[29%] text-(--orangeColor)">.</div>
                            <button
                                type="button"
                                className="flex flex-col items-center w-[8%]"
                                onClick={addIngredient}>
                                <p className="m-auto p-1 rounded-xl shadow-sm bg-(--greenColor) text-(--lightColor)">
                                    <CirclePlus />
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <p className="font-bold">Etapes de préparation :</p>
                    <div className="flex flex-col gap-2">
                        {stepsList.map((step, index: number) => {
                            return (
                                <div className="flex flex-row gap-2"
                                key={index}
                                >
                                    <textarea
                                        name="step"
                                        placeholder="ex : Epluchez les carottes."
                                        className="p-2 rounded-sm border bg-(--lightColor) w-[92%] h-20"
                                        value={step.description}
                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChangeStep(e.target.value, 'description', index)}
                                    />
                                    {/* <Input
                                inputName="step"
                                type="text"
                                placeholder="ex : Epluchez les carottes."
                                classes="w-[92%] h-20"
                            /> */}
                                    {/* <button className="flex flex-col items-center w-[8%] ">
                                <p className="m-auto p-1 rounded-xl shadow-sm bg-(--redColor) text-(--lightColor)">
                                    <Trash2 />
                                </p>
                            </button> */}
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex flex-col items-end">
                        <button
                            type="button"
                            className="flex flex-col items-center w-[8%]"
                            onClick={addStep}>
                            <p className="m-auto p-1 rounded-xl shadow-sm bg-(--greenColor) text-(--lightColor)">
                                <CirclePlus />
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center m-auto">
                <ButtonGreen 
                type="submit"
                text="Publier la recette"/>
            </div>
        </form>
    )
}
import { CirclePlus, Trash2 } from "lucide-react";
import Input from "./Input";

export default function FormRecipe() {
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
                        <div className="flex flex-row gap-2">
                            <Input
                                inputName="ingredient"
                                type="text"
                                placeholder="ex : Tomates"
                                classes="w-[44%]"
                            />
                            <Input
                                inputName="quantity"
                                type="number"
                                placeholder="ex : 3"
                                classes="w-[19%]"
                            />
                            <Input
                                inputName="unity"
                                type="text"
                                placeholder="ex : unités"
                                classes="w-[29%]"
                            />
                            <button className="flex flex-col items-center w-[8%] ">
                                <p className="m-auto p-1 rounded-xl shadow-sm bg-(--redColor) text-(--lightColor)">
                                    <Trash2 />
                                </p>
                            </button>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="w-[44%] text-(--orangeColor)">.</div>
                            <div className="w-[19%] text-(--orangeColor)">.</div>
                            <div className="w-[29%] text-(--orangeColor)">.</div>
                            <button className="flex flex-col items-center w-[8%]">
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
                        <div className="flex flex-row gap-2">
                            <Input
                                inputName="step"
                                type="text"
                                placeholder="ex : Epluchez les carottes."
                                classes="w-[92%]"
                            />
                            <button className="flex flex-col items-center w-[8%] ">
                                <p className="m-auto p-1 rounded-xl shadow-sm bg-(--redColor) text-(--lightColor)">
                                    <Trash2 />
                                </p>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <button className="flex flex-col items-center w-[8%]">
                            <p className="m-auto p-1 rounded-xl shadow-sm bg-(--greenColor) text-(--lightColor)">
                                <CirclePlus />
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
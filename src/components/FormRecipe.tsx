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
                            <p className="w-[40%]">Ingrédients :</p>
                            <p className="w-[20%]">Qtés</p>
                            <p className="w-[30%]">Unités</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Input
                                inputName="ingredient"
                                type="text"
                                placeholder="ex : Tomates"
                                classes="w-[45%]"
                            />
                            <Input
                                inputName="quantity"
                                type="number"
                                placeholder="ex : 3"
                                classes="w-[20%]"
                            />
                            <Input
                                inputName="unity"
                                type="text"
                                placeholder="ex : unités"
                                classes="w-[30%]"
                            />
                            <button className="p-1 my-2 rounded-xl shadow-sm bg-(--redColor) text-(--lightColor)">
                                <Trash2 />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <button className="p-1 my-2 rounded-xl shadow-sm bg-(--greenColor) text-(--lightColor)">
                            <CirclePlus />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <p className="font-bold">Etapes de préparation :</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <Input
                                inputName="ingredient"
                                type="text"
                                placeholder="ex : Epluchez les carottes."
                                classes="w-[95%]"
                            />
                            <button className="p-1 my-2 rounded-xl shadow-sm bg-(--redColor) text-(--lightColor)">
                                <Trash2 />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <button className="p-1 my-2 rounded-xl shadow-sm bg-(--greenColor) text-(--lightColor)">
                            <CirclePlus />
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
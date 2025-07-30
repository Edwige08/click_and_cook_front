"use client";

import { CirclePlus, Trash2 } from "lucide-react";
import Input from "./Input";
import { useEffect, useState } from "react";
import ButtonGreen from "./ButtonGreen";
import { useRouter } from "next/navigation";
import { Step, Ingredient } from "@/types/interface";

export default function FormRecipe() {
  const router = useRouter();
  
  const [loading, setLoading] = useState(false);
  const [newTitle, setNewTitle] = useState<string>("");
  const [prepTime, setPrepTime] = useState<number>(0);
  const [cookTime, setCookTime] = useState<number>(0);
  const [servings, setServings] = useState<number>(0);
  const [urlPhoto, setUrlPhoto] = useState<string>("");
  const [ingredientsList, setIngredientsList] = useState<Ingredient[]>([
    { ingredient: "", quantity: 0, unity: "" },
  ]);
  const [stepsList, setStepsList] = useState<Step[]>([{ description: "" }]);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        console.error("Token introuvable");
        return;
      }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACK_END_URL}/user/me/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        if (!res.ok)
          throw new Error("Erreur lors de la récupération de l'utilisateur");
        const data = await res.json();
        console.log('😋😋😋', data.user)
      } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur", error);
      }
    };
    fetchUser();
  }, []);

  const addIngredient = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIngredientsList((prev) => [
      ...prev,
      { ingredient: "", quantity: 0, unity: "" },
    ]);
  };
  const addStep = (event: React.MouseEvent<HTMLButtonElement>) => {
    setStepsList((prev) => [...prev, { description: "" }]);
  };

  const handleChangeIng = (
    value: string | number,
    key: keyof Ingredient,
    index: number
  ) => {
    let updated: Ingredient[] = [...ingredientsList];
    if (key === "quantity") {
      updated[index][key] = value as number;
    } else {
      updated[index][key] = value as string;
    }
    setIngredientsList(updated);
  };

  const handleChangeStep = (value: string, key: keyof Step, index: number) => {
    let updated: Step[] = [...stepsList];
    updated[index][key] = value;
    setStepsList(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const token = localStorage.getItem("auth_token");
      if (!token) {
        alert("Token introuvable, veuillez vous reconnecter");
        setLoading(false);
        return;
      }
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes/`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            title: newTitle,
            prep_time_min: prepTime,
            cook_time_min: cookTime,
            servings: servings,
            picture: urlPhoto,
            ingredients: ingredientsList.map(
              ({ ingredient, quantity, unity }) => ({
                title: ingredient,
                quantity,
                unity,
              })
            ),
            steps: stepsList.map(({ description }) => ({ description })),
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Erreur lors de l'envoi de la recette :", errorData);
        alert("Erreur lors de l'envoi de la recette. Vérifiez les données.");
        setLoading(false);
        return;
      }

      router.push("/home/myRecipes");
    } catch (error) {
      console.error("Erreur lors de la soumission :", error);
      alert("Erreur lors de la soumission");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-4 px-2 py-5 border border-(--darkBlue) rounded-lg bg-(--orangeColor)"
    >
      <div>
        <div className="flex flex-col mb-4">
          <label htmlFor="" className="font-bold">
            Titre de la recette :
          </label>
          <Input
            inputName="title"
            type="text"
            placeholder="ex : Lasagnes à la bolognaise"
            value={newTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewTitle(e.target.value)
            }
          />
        </div>
        <div className="flex flex-row justify-between mb-4">
          <div className="flex flex-col w-[50%]">
            <label htmlFor="" className="font-bold">
              Préparation :
            </label>
            <div className="flex flex-row gap-2 items-center">
              <Input
                inputName="prep_time"
                type="number"
                placeholder="ex : 30"
                classes="w-20"
                value={prepTime}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPrepTime(Number(e.target.value))
                }
              />
              <p>min</p>
            </div>
          </div>
          <div className="flex flex-col w-[50%]">
            <label htmlFor="" className="font-bold">
              Cuisson :
            </label>
            <div className="flex flex-row gap-2 items-center">
              <Input
                inputName="cooking_time"
                type="number"
                placeholder="ex : 60"
                classes="w-20"
                value={cookTime}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCookTime(Number(e.target.value))
                }
              />
              <p>min</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="" className="font-bold">
            Nombre de personne :
          </label>
          <Input
            inputName="servings"
            type="number"
            placeholder="ex : 4"
            classes="w-20"
            value={servings}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setServings(Number(e.target.value))
            }
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
                <div className="flex flex-row gap-2" key={index}>
                  <Input
                    inputName="ingredient"
                    type="text"
                    placeholder="ex : Tomates"
                    classes="w-[44%]"
                    value={ingr.ingredient}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChangeIng(e.target.value, "ingredient", index)
                    }
                  />
                  <Input
                    inputName="quantity"
                    type="number"
                    placeholder="ex : 3"
                    classes="w-[19%]"
                    value={ingr.quantity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChangeIng(e.target.value, "quantity", index)
                    }
                  />
                  <Input
                    inputName="unity"
                    type="text"
                    placeholder="ex : unités"
                    classes="w-[29%]"
                    value={ingr.unity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleChangeIng(e.target.value, "unity", index)
                    }
                  />
                </div>
              );
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
                onClick={addIngredient}
              >
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
                <div className="flex flex-row gap-2" key={index}>
                  <textarea
                    name="step"
                    placeholder="ex : Epluchez les carottes."
                    className="p-2 rounded-sm border bg-(--lightColor) w-[92%] h-20"
                    value={step.description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleChangeStep(e.target.value, "description", index)
                    }
                  />
                  {/* <Input
                                inputName="step"
                                type="text"
                                placeholder="ex : Epluchez les carottes."
                                classes="w-[92%] h-20"
                            />
                  <button className="flex flex-col items-center w-[8%] ">
                                <p className="m-auto p-1 rounded-xl shadow-sm bg-(--redColor) text-(--lightColor)">
                                    <Trash2 />
                                </p>
                            </button> */}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-end">
            <button
              type="button"
              className="flex flex-col items-center w-[8%]"
              onClick={addStep}
            >
              <p className="m-auto p-1 rounded-xl shadow-sm bg-(--greenColor) text-(--lightColor)">
                <CirclePlus />
              </p>
            </button>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="" className="font-bold">
            Url de la photo de la recette :
          </label>
          <Input
            inputName="urlPhoto"
            type="text"
            placeholder="ex : https://mon-url-de-photo.com/photo0123.jpg"
            value={urlPhoto}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUrlPhoto(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex flex-col justify-center m-auto">
        <ButtonGreen type="submit" text="Publier la recette" disabled={loading} />
      </div>
    </form>
  );
}

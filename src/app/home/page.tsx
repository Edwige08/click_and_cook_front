"use client";

import { useEffect, useState } from "react";
import CardRecipe from "../../components/CardRecipe";
import Navbar from "../../components/Navbar";
import FormSearchBar from "@/components/FormSearchBar";

// const recipe: Recipe = {
//     titre: 'Frites au four maison',
//     photo: 'https://cdn.pixabay.com/photo/2024/04/16/16/40/ai-generated-8700413_1280.jpg',
//     date: '22/07/2025',
//     auteurice: 'Marie'
// }

export default function Home() {
  interface User {
    username: string;
  }

  interface Recipe {
    id: number;
    title: string;
    cook_time_min: number;
    prep_time_min: number;
    servings: number;
    picture: string;
    created_at: string;
    user: string;
  }

  const [searchValue, setSearchValue] = useState<string>("");
  const [lastRecipes, setLastRecipes] = useState<Recipe[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("auth_token");
      if (!token) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/user/me/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log("response : ", response);

      const data = await response.json();
      console.log("😁😁", data);
      setUser(data.user);
    }
    getUser();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // async function getSearchRecipes() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes`,
        {
          // credentials: 'include',
          headers: {
            Authorization: "Token c29fccbebea1072ceebb4eb212c3da1608d0fb56",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("data :", data);
      // }
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Une erreur est survenue dans la récupération des données.";
      console.log("errorMessage : ", errorMessage);
    }
  };

  useEffect(() => {
    async function getRecipes() {
      const token = localStorage.getItem("auth_token");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/api/recipes/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Token ${token}` }),
          },
        }
      );
      console.log("response : ", response);

      if (!response.ok) {
        console.error(
          "Erreur lors de la récupération des données: ",
          response.status
        );
        return;
      }

      const data = await response.json();
      console.log("data", data);
      setLastRecipes(data.results || data);
    }
    getRecipes();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <h2 className="py-5 text-center text-xl font-bold">
        Bonjour {user ? user.username : "!"}
      </h2>

      <FormSearchBar
        onSubmit={handleSubmit}
        value={searchValue}
        onChange={handleChange}
      />

      <p className="p-5 text-center">
        Voici les dernières recettes tout juste sorties du four :
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {lastRecipes.length === 0 ? (
          <p className="text-center text-gray-500">Aucune recette trouvée.</p>
        ) : (
          lastRecipes.map((recipe, index) => (
            <CardRecipe
              key={index}
              title={recipe.title}
              cook_time_min={recipe.cook_time_min}
              prep_time_min={recipe.prep_time_min}
              servings={recipe.servings}
              picture={recipe.picture}
              created_at={recipe.created_at}
              user={recipe.user}
            />
          ))
        )}
      </div>
    </>
  );
}

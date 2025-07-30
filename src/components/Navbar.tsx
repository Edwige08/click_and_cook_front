"use client";

import Image from "next/image";
import { Home, UserRoundPen, ConciergeBell, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("auth_token");
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/logout/`,
        {
          method: "POST",
          //   credentials: "include", // nécessaire si tu utilises les cookies
          headers: {
            "content-type": "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Erreur lors de la déconnexion");

      router.push("/");
    } catch (error) {
      console.error("Erreur de déconnexion :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="flex flex-row justify-between items-center py-2 px-7 bg-(--lightColor)">
      <Link href="/home">
        <Image
          src="/images/logo_click_and_cook.png"
          alt="Logo Click & Cook"
          width={1024}
          height={1024}
          className="w-30"
        />
      </Link>
      <div>
        <ul className="flex flex-col justify-center gap-1 h-full md:flex-row md:gap-8">
          <li>
            <Link
              href="/home"
              className="flex flex-row gap-2 items-center md:w-30 hover:font-bold md:border-b md:py-2 md:flex-col md:rounded-t-4xl md:hover:bg-(--orangeColor)"
            >
              <Home />
              <p className="flex flex-col justify-end">Accueil</p>
            </Link>
          </li>
          <li>
            <Link
              href="/home/personnalProfile"
              className="flex flex-row gap-2 items-center md:w-30 hover:font-bold md:border-b md:py-2 md:flex-col md:rounded-t-4xl md:hover:bg-(--orangeColor)"
            >
              <UserRoundPen />
              <p className="flex flex-col justify-end">Mon profil</p>
            </Link>
          </li>
          <li>
            <Link
              href="/home/myRecipes"
              className="flex flex-row gap-2 items-center md:w-30 hover:font-bold md:border-b md:py-2 md:flex-col md:rounded-t-4xl md:hover:bg-(--orangeColor)"
            >
              <ConciergeBell />
              <p className="flex flex-col justify-end">Mes recettes</p>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              disabled={loading}
              className="flex flex-row gap-2 items-center md:w-30 hover:font-bold md:border-b md:py-2 md:flex-col md:rounded-t-4xl md:hover:bg-(--orangeColor)"
            >
              <LogOut />
              {loading ? "Déconnexion..." : "Se déconnecter"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

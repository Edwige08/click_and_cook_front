import Image from "next/image";
import ButtonOrange from "./components/ButtonOrange";
import ButtonGreen from "./components/ButtonGreen";
import CardPresentation from "./components/CardPresentation";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="flex  flex-col items-center p-5 bg-(--lightColor)">
        <Image
          src="/images/logo_click_and_cook.png"
          alt="Logo Click & Cook"
          width={1024}
          height={1024}
          className="w-50 m-3"
        />
        <h2
          className="pt-5 text-shadow-md font-bold text-2xl text-center"
        >
          Partagez vos recettes en un clic !
        </h2>
        <p
          className="pt-10 pb-10 text-shadow-xs text-center"
        >
          Rejoignez une communauté passionnée de cuisine où chaque plat raconte une histoire
        </p>
        <div
          className="flex flex-col gap-5 pb-7"
        >
          <Link href="/signin">
            <ButtonOrange
              text="Se connecter"
              classes="w-full"
            />
          </Link>
          <Link href="/signup">
            <ButtonGreen
              type="button"
              text="Créer mon compte"
              classes="w-full"
            />
          </Link>
        </div>
      </div>
      <div
        className="py-5 px-5">
        <h2
          className="pt-5 text-shadow-md font-bold text-2xl text-center"
        >
          Une expérience culinaire unique
        </h2>
        <p
          className="pt-10 pb-10 text-shadow-xs text-center"
        >
          Découvrez tout ce que Click & Cook vous réserve
        </p>

        <div>

          <CardPresentation
            emoji="📝"
            title="Publiez vos recettes"
            description="Partagez vos créations culinaires avec des photos alléchantes, des instructions détaillées et vos petites astuces secrètes."
          />

          <CardPresentation
            emoji="❤️"
            title="Aimez & Commentez"
            description="Interagissez avec la communauté ! Likez vos recettes préférées et partagez vos impressions et conseils."
          />

          <CardPresentation
            emoji="👩‍🍳"
            title="Suivez vos chefs favoris"
            description="Ne ratez aucune création de vos cuisiniers préférés en les suivant pour être notifié de leurs nouvelles recettes."
          />
        </div>
      </div>
    </>
  );
}

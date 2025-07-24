import ButtonSection from "@/components/ButtonSection";
import CardProfileStat from "@/components/CardProfileStat";

export default function personnalProfile() {
    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="pt-7 pb-3 text-2xl font-bold">Bonjour Username !</h2>
                <p className="pb-5 italic">Inscrit.e depuis le 00/00/0000</p>
            </div>
            <div className="flex flex-row gap-2 justify-evenly flex-wrap p-2 mx-5 my-2 lg:mx-20 xl:mx-45 pt-5 rounded-lg shadow-lg bg-(--orangeColor)">
                <CardProfileStat
                    statNumber={24}
                    statName="Recettes postées" />
                <CardProfileStat
                    statNumber={12}
                    statName="Abonnements" />
                <CardProfileStat
                    statNumber={24}
                    statName="Recettes favorites" />
                <CardProfileStat
                    statNumber={3}
                    statName="Abonnés" />
            </div>
            <div>
                <h3 className="py-5 text-center text-lg font-bold">
                    Que voulez-vous faire ?
                </h3>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center w-full">
                    <ButtonSection
                        link="#"
                        image="➕"
                        text="Ajouter une recette"
                        classes="md:mb-6 border-2 text-lg py-3 bg-(--lightColor) md:w-160 hover:bg-(--redColor)"
                    />
                </div>
                <div className="flex flex-col items-center w-full md:flex-row md:flex-wrap md:gap-2 md:justify-center lg:px-35 xl:px-2">
                    <ButtonSection
                        link="#"
                        image="🥘"
                        text="Mes recettes publiées"
                        classes="md:w-75 xl:w-65 "
                    />
                    <ButtonSection
                        link="#"
                        image="🧡"
                        text="Mes recettes favorites"
                        classes="md:w-75 xl:w-65"
                    />
                    <ButtonSection
                        link="#"
                        image="👩‍🍳"
                        text="Mes abonnements"
                        classes="md:w-75 xl:w-65 "
                    />
                    <ButtonSection
                        link="#"
                        image="👥"
                        text="Mes abonnés"
                        classes="md:w-75 xl:w-65 "
                    />
                </div>
            </div>
        </>
    )
}
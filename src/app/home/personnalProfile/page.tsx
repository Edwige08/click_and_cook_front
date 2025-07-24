import CardProfileStat from "@/components/CardProfileStat";

export default function personnalProfile() {
    return (
        <>
            <div className="flex flex-col items-center">
                <h2 className="pt-7 pb-3 text-2xl font-bold">Bonjour Username !</h2>
                <p className="pb-5 italic">Inscrit.e depuis le 00/00/0000</p>
            </div>
            <div className="flex flex-row gap-2 justify-evenly flex-wrap p-2 mx-5 my-2 pt-5 rounded-lg shadow-lg bg-(--orangeColor)">
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
        </>
    )
}
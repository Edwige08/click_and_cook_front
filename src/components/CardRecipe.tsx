import Link from "next/link"

export default function CardRecipe(props: {
    id: number,
    title: string,
    cook_time_min: number,
    prep_time_min: number,
    servings: number,
    picture: string,
    created_at: string,
    user: string,
    user_id: number,
}) {
    return (

        <article className="flex flex-col items-center mx-2 max-w-80 overflow-hidden border rounded-3xl shadow-lg duration-120 ease-in-out hover:translate-1">
            <div className={"flex flex-col justify-center mb-2 overflow-hidden w-full h-50"}>
                <img
                    src={props.picture}
                    alt="Photo de la recette"
                    width={300}
                    height={200}
                    className="w-full box-border"
                />
            </div>
            <div className="w-full px-2">
                <h3 className="mb-2 text-center font-bold">
                    {props.title}
                </h3>
                <div className="flex flex-col items-end px-2 pb-2 text-end text-sm">
                    <p>Publiée le {props.created_at}</p>
                    <p className="flex flex-row gap-1">Par 👩‍🍳
                        <Link href={`home/userProfile/${props.user_id}`} className="underline cursor-pointer">
                            {props.user}
                        </Link>
                    </p>
                </div>
            </div>
        </article >
    )
}


export default function CardRecipe(props: {title: string, photo: string, date: string, auteurice: string}) {
    return (
        <article
            className="flex flex-col items-center mx-2 max-w-80 overflow-hidden border rounded-3xl shadow-lg hover:translate-2"
        >
            <div
                className={"flex flex-col justify-center mb-2 overflow-hidden w-full h-50"}
            >
                <img
                    src={props.photo}
                    alt="Photo de la recette"
                    width={300}
                    height={200}
                    className="w-full box-border"
                />
            </div>
            <div
                className="w-full px-2"
            >
                <h3
                    className="mb-2 text-center font-bold"
                >
                    {props.title}
                </h3>
                <p
                    className="flex flex-row justify-end text-end text-sm"
                >Publiée le {props.date} <br />
                    Par 👩‍🍳 {props.auteurice}</p>
            </div>
        </article>
    )
}
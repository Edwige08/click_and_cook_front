export default function CardPresentation(props: { emoji: string, title: string, description: string }) {
    return (
        <article className="m-5 px-5 py-10 border rounded-xl shadow-sm bg-(--lightColor)">
            <div className="flex justify-center items-center">
                <p className="p-5 rounded-xl text-3xl bg-(--redColor)">
                    {props.emoji}
                </p>
            </div>
            <h3 className="p-3 font-bold text-xl text-center">
                {props.title}
            </h3>
            <p className="text-center">
                {props.description}
            </p>
        </article>
    )
}
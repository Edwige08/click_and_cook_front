export default function ButtonOrange(props: { text: string, classes?: string }) {
    return (
        <button
            className={`py-4 px-8 font-bold shadow-sm text-shadow-sm rounded-4xl bg-(--orangeColor) hover:bg-(--darkBlue) hover:text-(--lightColor) ${props.classes}`}
        >
            {props.text}
        </button>
    )
}
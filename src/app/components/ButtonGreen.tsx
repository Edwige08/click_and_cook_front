export default function ButtonGreen(props: { text: string, classes?: string }) {
    return (
        <button
            className={`py-4 px-8 font-bold shadow-sm text-shadow-sm rounded-4xl text-(--lightColor) bg-(--greenColor) hover:bg-(--darkBlue) ${props.classes}`}
        >
            {props.text}
        </button>
    )
}
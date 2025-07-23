export default function ButtonOrange(props: { type?: "submit" | "button", disabled?: boolean, text: string, classes?: string }) {
    return (
        <button
            type={props.type}
            disabled={props.disabled}
            className={`py-4 px-8 font-bold shadow-sm text-shadow-sm rounded-4xl bg-(--orangeColor) hover:bg-(--darkBlue) hover:text-(--lightColor) ${props.classes}`}
        >
            {props.text}
        </button>
    )
} 
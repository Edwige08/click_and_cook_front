export default function ButtonGreen(props: { disabled?: boolean, text: string, classes?: string }) {
    return (
        <button
            type="submit"
            disabled={props.disabled}
            className={`flex flex-col justify-center items-center py-1 px-1 font-bold shadow-sm text-shadow-sm rounded-4xl text-(--lightColor) bg-(--greenColor) hover:bg-(--darkBlue) ${props.classes}`}

        >
            {props.text}
        </button>
    )
}
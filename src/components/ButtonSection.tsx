import Link from "next/link"

export default function ButtonSection(props: { text: string, image: string, link: string, classes?: string }) {
    return (
        <button 
            className={`py-2 px-4 my-2 md:mx-5 xl:mx-2 w-[90%] box-border shadow-md border border-(--darkBlue) rounded-lg cursor-pointer hover:bg-(--greenColor) hover:font-bold hover:text-(--lightColor) ${props.classes}`}
        >
            <Link
                href={props.link}
                className={`flex flex-row gap-2 text-start`}
            >
                <p>{props.image}</p>
                <p>{props.text}</p>
            </Link>
        </button>
    )
}
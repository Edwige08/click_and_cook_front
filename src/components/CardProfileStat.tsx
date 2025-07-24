export default function CardProfileStat (props: { statNumber: number, statName: string }) {
    return (
        <div className="flex flex-col justify-center items-center p-3 mb-3 shadow-xl border rounded-lg w-40 bg-(--lightColor)">
            <p className="font-bold text-2xl text-(--redColor)">{props.statNumber}</p>
            <p>{props.statName}</p>
        </div>
    )
}
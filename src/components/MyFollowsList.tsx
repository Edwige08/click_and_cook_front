import { ChefHat } from "lucide-react";

const exampleList = [
    { usrnm: "username1" },
    { usrnm: "username2" },
    { usrnm: "username3" },
    { usrnm: "username4" },
]

export default function MyFollowsList(props: { classes: string }) {
    return (
        <div className={`flex flex-col gap-1 py-2 px-4 ${props.classes}`}>
            {exampleList.map((example) => {
                return (
                    <button
                        className="flex flex-row gap-2 items-center border rounded-xl p-2 hover:underline hover:cursor-pointer hover:bg-(--lightColor)">
                        <p>
                            <ChefHat />
                        </p>
                        <p>{example.usrnm}</p>
                    </button>
                )
            })}
        </div>
    )
}
import { ChefHat } from "lucide-react";

const exampleList = [
    { usrnm: "Follower 1" },
    { usrnm: "Follower 2" },
    { usrnm: "Follower 3" },
    { usrnm: "Follower 4" },
]

export default function MyFollowersList(props: { classes: string }) {
    return (
        <div className={`flex flex-col gap-1 py-2 px-4 ${props.classes}`}>
            {exampleList.map((example, index) => {
                return (
                    <button
                        className="flex flex-row gap-2 items-center border rounded-xl p-2 hover:underline hover:cursor-pointer hover:bg-(--lightColor)"
                        key={index}
                    >
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
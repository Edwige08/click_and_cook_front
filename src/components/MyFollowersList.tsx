import { ChefHat } from "lucide-react";

export default function MyFollowersList(props: { username: string }) {
    return (
        <button className="flex flex-row gap-2 items-center border rounded-xl p-2 hover:underline hover:cursor-pointer hover:bg-(--lightColor)">
            <p><ChefHat /></p>
            <p>{props.username}</p>
        </button>
    )
}
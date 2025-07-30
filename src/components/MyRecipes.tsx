import { ChefHat } from "lucide-react";

export default function MyRecipes(props: { title: string, id: number }) {
  return (
    <a href={`recipe/${props.id}`}>
      <button className="flex flex-row gap-2 items-center border rounded-xl p-2 w-full hover:underline hover:cursor-pointer hover:bg-(--orangeColor)">
        <p>
          <ChefHat />
        </p>
        <p>{props.title}</p>
      </button>
    </a>
  );
}

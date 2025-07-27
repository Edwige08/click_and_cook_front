import ButtonSearch from "./ButtonGreen";
import Input from "./Input";

export default function FormSearchBar() {
    return (
        <form
            action=""
            className="flex flex-row gap-2 justify-center m-2 p-3 rounded-lg shadow-xl bg-(--orangeColor)"
        >
            <div
                className="flex flex-col gap-2 w-[90%]">

                <label
                    htmlFor=""
                    className="px-2 text-lg underline"
                >Rechercher une recette :</label>
                <Input
                    inputName="search"
                    type="text" 
                    placeholder="ex : Tarte aux poireaux"
                    />
            </div>
            <div className="flex flex-col justify-end items-end">
                <ButtonSearch
                    type="submit"
                    text="🔎"
                />
            </div>

        </form>
    )
}
import ButtonSearch from "./ButtonGreen";
import Input from "./Input";

export default function FormSearchBar(props: {onSubmit: React.FormEventHandler, value: string, onChange: React.ChangeEventHandler}) {
    return (
        <form
            action=""
            className="flex flex-row gap-2 justify-center m-2 p-3 rounded-lg shadow-xl bg-(--orangeColor)"
            onSubmit={props.onSubmit}
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
                    value={props.value}
                    onChange={props.onChange}
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
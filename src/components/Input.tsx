import { ChangeEventHandler } from "react";

export default function Input(props: { inputName: string, type: string, placeholder?: string, classes?: string, value?: string, onChange?: ChangeEventHandler }) {
    return (
        <input
            name={props.inputName}
            type={props.type}
            placeholder={props.placeholder}
            className={`p-2 rounded-sm border bg-(--lightColor) ${props.classes}`}
            value={props.value}
            onChange={props.onChange}
            required
        />
    )
}
export default function Input(props: {type: string, placeholder?: string, value?: string }) {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className="p-2 rounded-sm border bg-(--lightColor)"
            value={props.value}
        />
    )
}
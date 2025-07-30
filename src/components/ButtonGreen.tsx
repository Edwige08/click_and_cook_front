import { ButtonHTMLAttributes } from "react";

export default function ButtonGreen(props: {
  type?: "submit" | "button";
  disabled?: boolean;
  text: string;
  classes?: string;
}) {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={`py-4 px-8 font-bold shadow-sm text-shadow-sm rounded-4xl text-(--lightColor) bg-(--greenColor) hover:bg-(--darkBlue) ${props.classes}`}
    >
      {props.text}
    </button>
  );
}

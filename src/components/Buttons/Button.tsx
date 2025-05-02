import style from "./Button.module.css";
import { ButtonModel } from "./ButtonModel";

export const Button = (props: ButtonModel) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={
        (props.disabled && style.disabled) ||
        (props.variant === "default" && style.default) ||
        (props.variant === "navigation" && style.navigation) ||
        "default"
      }
    >
      {props.children}
    </button>
  );
};

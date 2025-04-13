import style from "./Button.module.css";
import { ButtonModel } from "./ButtonModel";

export const Button = (props: ButtonModel) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={
        (props.variant === "default" && !props.disabled && style.default) ||
        (props.variant === "navigation" && style.navigation) ||
        (props.disabled && style.disabled) ||
        "default"
      }
    >
      {props.children}
    </button>
  );
};

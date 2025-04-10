import style from "./Input.module.css";
import { InputModel } from "./InputModel";

export const Input = (props: InputModel) => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
      type={props.variant === "testing" ? "checkbox" : "text"}
      className={
        props.variant === "testing"
          ? style.testing
          : style.default || style.testingLocked
      }
      onClick={props.onClick}
      name={props.name}
    />
  );
};

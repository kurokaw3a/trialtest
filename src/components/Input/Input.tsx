import { useState } from "react";
import style from "./Input.module.css";
import { InputModel } from "./InputModel";

export const Input = (props: InputModel) => {
  const [check, setCheck] = useState<boolean>(false);
  const checkInput = () => {
    props.onClick?.();
    setCheck((prev) => !prev);
  };
  return (
    <div>
      {props.variant === "testing" || props.variant == "testingLocked" ? (
        <div
          onClick={checkInput}
          className={
            (props.variant == "testing" && check && style.testingChecked) ||
            (props.variant === "testingLocked" && style.testingLocked) ||
            style.testing
          }
        ></div>
      ) : (
        <></>
      )}
    </div>
  );
};

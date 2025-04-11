import { useState } from "react";
import { IAnswers } from "../../store/reducers/TestingModel";
import { Input } from "../Input/Input";
import styles from "./TestingComponent.module.css";
import { TestingComponentModel } from "./TestingComponentModel";

export const TestingComponent = ({
  test,
  onClick,
  variant,
}: {
  test: IAnswers[];
  onClick?: ({ number, value }: TestingComponentModel) => void;
  variant: "math" | "russian";
}) => {
  const [clickedInputs, setClickedInputs] = useState<
    Record<number, Set<number>>
  >({});
  const [lockedDivs, setLockedDivs] = useState<Record<number, boolean>>({});
  const [lastClickedInput, setLastClickedInput] = useState<
    Record<number, number | null>
  >({});

  const selectVariant = (props: TestingComponentModel) => {
    setClickedInputs((prev) => {
      const currentSet = prev[props.number] || new Set();
      currentSet.add(props.value);

      if (currentSet.size >= 2) {
        setLockedDivs((prevLocked) => ({
          ...prevLocked,
          [props.number]: true,
        }));
        setLastClickedInput((prevLastClicked) => ({
          ...prevLastClicked,
          [props.number]: props.value,
        }));
      }

      return { ...prev, [props.number]: currentSet };
    });

    onClick?.({ ...props });
  };

  const arr = variant === "math" ? [1, 2, 3, 4, 5] : [1, 2, 3, 4];

  return (
    <div className={styles.container}>
      <div className={variant === "math" ? styles.label : styles.label2}>
        <p>A</p>
        <p>Б</p>
        <p>В</p>
        <p>Г</p>
        {variant !== "russian" && <p>Д</p>}
      </div>
      {test?.map((el) => (
        <div
          id={el.number.toString()}
          className={lockedDivs[el.number] ? styles.disabled : styles.input}
        >
          <p>{el.number}</p>
          <div className={styles.inputs}>
            {arr.map((value) => (
              <Input
                key={value}
                variant={
                  lastClickedInput[el.number] === value
                    ? "testingLocked"
                    : "testing"
                }
                onClick={() =>
                  !lockedDivs[el.number] &&
                  !clickedInputs[el.number]?.has(value) &&
                  selectVariant({ number: el.number, value })
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

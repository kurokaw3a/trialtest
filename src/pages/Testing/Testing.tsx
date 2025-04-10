import styles from "./Testing.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { TestingSlice } from "../../store/reducers/TestingSlice";
import { PdfViewer } from "../../components/PdfViewer/PdfViewer";
import { TestingComponent } from "../../components/TestingComponent/TestingComponent";
import { TestingComponentModel } from "../../components/TestingComponent/TestingComponentModel";
import { Button } from "../../components/Buttons/Button";

export const Testing = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(TestingSlice.actions.getTestById(id));
  }, [id, dispatch]);

  const test = useAppSelector((state) => state.testing.currentTest);

  const [selected, setSelected] = useState({
    math: [] as TestingComponentModel[],
    russian1: [] as TestingComponentModel[],
    russian2: [] as TestingComponentModel[],
  });

  const selectMath = (number: TestingComponentModel) => {
    setSelected((prevSelected) => {
      const existingIndex = prevSelected.math.findIndex(
        (el) => el.number === number.number
      );

      if (existingIndex !== -1) {
        const updatedSelected = [...prevSelected.math];
        updatedSelected[existingIndex] = number;
        return {
          math: updatedSelected,
          russian1: prevSelected.russian1,
          russian2: prevSelected.russian2,
        };
      } else {
        return {
          math: [...prevSelected.math, number],
          russian1: prevSelected.russian1,
          russian2: prevSelected.russian2,
        };
      }
    });
  };
  const selectRussian1 = (number: TestingComponentModel) => {
    setSelected((prevSelected) => {
      const existingIndex = prevSelected.russian1.findIndex(
        (el) => el.number === number.number
      );

      if (existingIndex !== -1) {
        const updatedSelected = [...prevSelected.russian1];
        updatedSelected[existingIndex] = number;
        return {
          math: prevSelected.math,
          russian1: updatedSelected,
          russian2: prevSelected.russian2,
        };
      } else {
        return {
          math: prevSelected.math,
          russian1: [...prevSelected.russian1, number],
          russian2: prevSelected.russian2,
        };
      }
    });
  };
  const selectRussian2 = (number: TestingComponentModel) => {
    setSelected((prevSelected) => {
      const existingIndex = prevSelected.russian2.findIndex(
        (el) => el.number === number.number
      );

      if (existingIndex !== -1) {
        const updatedSelected = [...prevSelected.russian2];
        updatedSelected[existingIndex] = number;
        return {
          math: prevSelected.math,
          russian1: prevSelected.russian1,
          russian2: updatedSelected,
        };
      } else {
        return {
          math: prevSelected.math,
          russian1: prevSelected.russian1,
          russian2: [...prevSelected.russian2, number],
        };
      }
    });
  };

  console.log(selected);

  return (
    <div className={styles.testing}>
      <PdfViewer file={test.file} id={test.id} />
      <div className={styles.container}>
        <div>
          <TestingComponent
            test={test.answers?.math}
            variant="math"
            onClick={selectMath}
          />
        </div>
        <div>
          <TestingComponent
            test={test.answers?.russian1}
            variant="russian"
            onClick={selectRussian1}
          />
        </div>
        <div>
          <TestingComponent
            test={test.answers?.russian2}
            variant="russian"
            onClick={selectRussian2}
          />
        </div>
      </div>
      <Button variant="default">Начать тест</Button>
    </div>
  );
};

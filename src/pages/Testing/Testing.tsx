import styles from "./Testing.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { TestingSlice } from "../../store/reducers/TestingSlice";
import { PdfViewer } from "../../components/PdfViewer/PdfViewer";

export const Testing = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(TestingSlice.actions.getTestById(id));
  }, [id, dispatch]);


  const test = useAppSelector((state) => state.testing.currentTest);

  return (
    <div className={styles.testing}>
      <PdfViewer file={test.file} id={test.id} />
    </div>
  );
};

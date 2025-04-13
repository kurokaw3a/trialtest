import styles from "./PdfViewer.module.css";
import { Document, Page } from "react-pdf";
import { PdfViewerModel } from "./PdfViewerModel";
import { useState } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useAppDispatch } from "../../hooks/redux";
import { TestingSlice } from "../../store/reducers/TestingSlice";

export const PdfViewer = (props: PdfViewerModel) => {
  const [numPages, setNumPages] = useState<number>(NaN);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const dispatch = useAppDispatch();

  const nextPage = () => {
    setPageNumber((prev) => (prev == numPages ? 1 : prev + 1));
    dispatch(
      TestingSlice.actions.nextPage(
        pageNumber === numPages ? 1 : pageNumber + 1
      )
    );
  };
  const prevPage = () => {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : numPages));
    dispatch(
      TestingSlice.actions.nextPage(pageNumber > 1 ? pageNumber - 1 : numPages)
    );
  };

  return (
    <div className={styles.pdfViewer} rel="preload">
      <div className={styles.container}>
        <span onClick={prevPage} className={styles.arrow}>
          ←
        </span>
        <Document
          loading="Загрузка файла..."
          error="Загрузка файла..."
          file={props.file}
          onLoadSuccess={onDocumentLoadSuccess}
          className={styles.pdf}
        >
          <div className={styles.page}>
            <Page pageNumber={pageNumber} width={700} />
          </div>
          <div className={styles.page2}>
            <Page pageNumber={pageNumber} width={300} />
          </div>
        </Document>
        <span onClick={nextPage} className={styles.arrow}>
          →
        </span>
      </div>
    </div>
  );
};

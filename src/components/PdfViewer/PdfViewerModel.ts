export interface PdfViewerModel {
  id: number;
  file: string;
  getPage?: (page: number) => void;
}

import { createSlice } from "@reduxjs/toolkit";
import { ITestFiles, ITestList } from "./TestingModel";
import logo from "../../assets/coomo_logo.e1e09338dc05a935d4ca5ba8981ca1fe.svg";
import file1 from "../../assets/ceatm1.pdf";
import file2 from "../../assets/ceatm18.pdf";
import file3 from "../../assets/ceatm19.pdf";

const testList: ITestList[] = [
  {
    id: 1,
    title: "ПРОБНЫЙ ТЕСТ с testing.kg",
    img: logo,
    status: true,
  },
  {
    id: 18,
    title: "ЦООМО 18",
    img: logo,
    status: false,
  },
  {
    id: 19,
    title: "ЦООМО 19",
    img: logo,
    status: false,
  },
];

const testFiles: ITestFiles[] = [
  {
    id: 1,
    title: "ПРОБНЫЙ ТЕСТ с testing.kg",
    file: file1,
  },
  {
    id: 18,
    title: "ЦООМО 18",
    file: file2,
  },
  {
    id: 19,
    title: "ЦООМО 19",
    file: file3,
  },
];

const initialState = {
  list: testList,
  files: testFiles,
  currentTest: {} as ITestFiles,
};

export const TestingSlice = createSlice({
  name: "Testing",
  initialState: initialState,
  reducers: {
    getTestById: (state, action) => {
      const testId = action.payload;
      const test = state.files.filter((item) => item.id === Number(testId))[0];
      if (test) {
        state.currentTest = test;
      }
    },
    clearState: (state) => {
      state.currentTest = {
        id: NaN,
        title: "",
        file: "",
      };
    },
  },
});

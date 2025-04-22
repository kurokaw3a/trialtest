import { createSlice } from "@reduxjs/toolkit";
import { ITestCurrent, ITestList } from "./TestingModel";
import logo from "../../assets/coomo_logo.e1e09338dc05a935d4ca5ba8981ca1fe.svg";
import file1 from "../../assets/ceatm1.pdf";
import { TestingCalculateModel } from "../../pages/Testing/TestingModel";
import { TestingComponentModel } from "../../components/TestingComponent/TestingComponentModel";
// import file2 from "../../assets/ceatm18.pdf";
// import file3 from "../../assets/ceatm19.pdf";

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

const testFiles: ITestCurrent[] = [
  {
    id: 1,
    title: "ПРОБНЫЙ ТЕСТ с testing.kg",
    file: file1,
    totalQuestions: 150,
    answers: {
      math: [
        { number: 1, value: 2 },
        { number: 2, value: 2 },
        { number: 3, value: 1 },
        { number: 4, value: 2 },
        { number: 5, value: 1 },
        { number: 6, value: 3 },
        { number: 7, value: 1 },
        { number: 8, value: 2 },
        { number: 9, value: 1 },
        { number: 10, value: 2 },
        { number: 11, value: 1 },
        { number: 12, value: 1 },
        { number: 13, value: 2 },
        { number: 14, value: 2 },
        { number: 15, value: 1 },
        { number: 16, value: 3 },
        { number: 17, value: 2 },
        { number: 18, value: 4 },
        { number: 19, value: 1 },
        { number: 20, value: 1 },
        { number: 21, value: 2 },
        { number: 22, value: 3 },
        { number: 23, value: 1 },
        { number: 24, value: 3 },
        { number: 25, value: 3 },
        { number: 26, value: 1 },
        { number: 27, value: 3 },
        { number: 28, value: 3 },
        { number: 29, value: 2 },
        { number: 30, value: 2 },
      ],
      math2: [
        { number: 31, value: 3 },
        { number: 32, value: 3 },
        { number: 33, value: 4 },
        { number: 34, value: 4 },
        { number: 35, value: 2 },
        { number: 36, value: 3 },
        { number: 37, value: 5 },
        { number: 38, value: 2 },
        { number: 39, value: 2 },
        { number: 40, value: 1 },
        { number: 41, value: 4 },
        { number: 42, value: 4 },
        { number: 43, value: 2 },
        { number: 44, value: 2 },
        { number: 45, value: 4 },
        { number: 46, value: 4 },
        { number: 47, value: 1 },
        { number: 48, value: 2 },
        { number: 49, value: 1 },
        { number: 50, value: 5 },
        { number: 51, value: 4 },
        { number: 52, value: 4 },
        { number: 53, value: 3 },
        { number: 54, value: 5 },
        { number: 55, value: 3 },
        { number: 56, value: 2 },
        { number: 57, value: 4 },
        { number: 58, value: 3 },
        { number: 59, value: 5 },
        { number: 60, value: 4 },
      ],
      russian1: [
        { number: 1, value: 3 },
        { number: 2, value: 2 },
        { number: 3, value: 2 },
        { number: 4, value: 1 },
        { number: 5, value: 3 },
        { number: 6, value: 4 },
        { number: 7, value: 3 },
        { number: 8, value: 2 },
        { number: 9, value: 3 },
        { number: 10, value: 4 },
        { number: 11, value: 3 },
        { number: 12, value: 2 },
        { number: 13, value: 4 },
        { number: 14, value: 1 },
        { number: 15, value: 2 },
        { number: 16, value: 3 },
        { number: 17, value: 2 },
        { number: 18, value: 1 },
        { number: 19, value: 3 },
        { number: 20, value: 2 },
        { number: 21, value: 3 },
        { number: 22, value: 4 },
        { number: 23, value: 4 },
        { number: 24, value: 3 },
        { number: 25, value: 2 },
        { number: 26, value: 3 },
        { number: 27, value: 2 },
        { number: 28, value: 3 },
        { number: 29, value: 1 },
        { number: 30, value: 4 },
        { number: 31, value: 3 },
        { number: 32, value: 2 },
        { number: 33, value: 4 },
        { number: 34, value: 2 },
        { number: 35, value: 1 },
        { number: 36, value: 4 },
        { number: 37, value: 2 },
        { number: 38, value: 2 },
        { number: 39, value: 4 },
        { number: 40, value: 3 },
        { number: 41, value: 2 },
        { number: 42, value: 3 },
        { number: 43, value: 2 },
        { number: 44, value: 4 },
        { number: 45, value: 1 },
        { number: 46, value: 4 },
        { number: 47, value: 1 },
        { number: 48, value: 1 },
        { number: 49, value: 2 },
        { number: 50, value: 1 },
        { number: 51, value: 2 },
        { number: 52, value: 4 },
        { number: 53, value: 3 },
        { number: 54, value: 2 },
        { number: 55, value: 3 },
        { number: 56, value: 2 },
        { number: 57, value: 3 },
        { number: 58, value: 4 },
        { number: 59, value: 2 },
        { number: 60, value: 4 },
      ],
      russian2: [
        { number: 1, value: 1 },
        { number: 2, value: 4 },
        { number: 3, value: 3 },
        { number: 4, value: 1 },
        { number: 5, value: 4 },
        { number: 6, value: 2 },
        { number: 7, value: 1 },
        { number: 8, value: 2 },
        { number: 9, value: 3 },
        { number: 10, value: 2 },
        { number: 11, value: 4 },
        { number: 12, value: 2 },
        { number: 13, value: 3 },
        { number: 14, value: 1 },
        { number: 15, value: 3 },
        { number: 16, value: 1 },
        { number: 17, value: 4 },
        { number: 18, value: 1 },
        { number: 19, value: 4 },
        { number: 20, value: 3 },
        { number: 21, value: 2 },
        { number: 22, value: 3 },
        { number: 23, value: 1 },
        { number: 24, value: 4 },
        { number: 25, value: 3 },
        { number: 26, value: 2 },
        { number: 27, value: 1 },
        { number: 28, value: 4 },
        { number: 29, value: 3 },
        { number: 30, value: 4 },
      ],
    },
    page: 1,
  },
  // {
  //   id: 18,
  //   title: "ЦООМО 18",
  //   file: file2,
  //   totalQuestions: 150,
  // },
  // {
  //   id: 19,
  //   title: "ЦООМО 19",
  //   file: file3,
  //   totalQuestions: 150,
  // },
];

const initialState = {
  list: testList,
  files: testFiles,
  currentTest: {
    page: 1,
  } as ITestCurrent,
  text: "",
};

export const TestingSlice = createSlice({
  name: "testing",
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
        totalQuestions: 150,
        answers: state.currentTest.answers,
        totalPoint: 0,
        totalUncorrect: 0,
        page: 1,
      };
    },
    nextPage: (state, action) => {
      state.currentTest.page = action.payload;
    },
    prevPage: (state, action) => {
      state.currentTest.page = action.payload;
    },
    calculatePoints: (state, action) => {
      const answers = action.payload as TestingCalculateModel;

      const mathAnswers = {
        true: [] as TestingComponentModel[],
        uncorrect: [] as TestingComponentModel[],
      };
      const russian1Answers = {
        true: [] as TestingComponentModel[],
        uncorrect: [] as TestingComponentModel[],
      };
      const russian2Answers = {
        true: [] as TestingComponentModel[],
        uncorrect: [] as TestingComponentModel[],
      };
      const uncorrectAnswers = [];

      for (const testFile of testFiles) {
        const mathTotal = testFile.answers.math.concat(testFile.answers.math2);
        const correctAnswersMap = new Map(
          mathTotal.map((answer) => [answer.number, answer.value])
        );

        const correctAnswersMapRussian1 = new Map(
          testFile.answers.russian1.map((answer) => [
            answer.number,
            answer.value,
          ])
        );

        const correctAnswersMapRussian2 = new Map(
          testFile.answers.russian2.map((answer) => [
            answer.number,
            answer.value,
          ])
        );

        for (const userAnswer of answers.math) {
          if (
            userAnswer.value &&
            correctAnswersMap.has(userAnswer.number) &&
            correctAnswersMap.get(userAnswer.number) === userAnswer.value
          ) {
            mathAnswers.true.push(userAnswer);
          } else {
            mathAnswers.uncorrect.push(userAnswer);
            uncorrectAnswers.push(userAnswer);
          }
        }

        for (const userAnswer of answers.russian1) {
          if (
            userAnswer.value &&
            correctAnswersMapRussian1.has(userAnswer.number) &&
            correctAnswersMapRussian1.get(userAnswer.number) ===
              userAnswer.value
          ) {
            russian1Answers.true.push(userAnswer);
          } else {
            russian1Answers.uncorrect.push(userAnswer);
            uncorrectAnswers.push(userAnswer);
          }
        }

        for (const userAnswer of answers.russian2) {
          if (
            userAnswer.value &&
            correctAnswersMapRussian2.has(userAnswer.number) &&
            correctAnswersMapRussian2.get(userAnswer.number) ===
              userAnswer.value
          ) {
            russian2Answers.true.push(userAnswer);
          } else {
            russian2Answers.uncorrect.push(userAnswer);
            uncorrectAnswers.push(userAnswer);
          }
        }
        state.currentTest.totalPoint = parseFloat(
          (
            mathAnswers.true.length * 1.12 +
            russian1Answers.true.length * 2 +
            russian2Answers.true.length * 1.9
          ).toFixed(1)
        );
        state.currentTest.totalUncorrect = uncorrectAnswers.length;

        alert(
          [
            `Ваш балл: ${state.currentTest.totalPoint}`,
            `\nВсего неправильных ответов: ${state.currentTest.totalUncorrect}`,
            mathAnswers.uncorrect.length > 0
              ? `Математика: ${mathAnswers.uncorrect.length}`
              : "",
            russian1Answers.uncorrect.length > 0
              ? `АДП и ЧП: ${russian1Answers.uncorrect.length}`
              : "",
            russian2Answers.uncorrect.length > 0
              ? `Грамматика: ${russian2Answers.uncorrect.length}`
              : "",
          ]
            .filter((line) => line !== "")
            .join("\n")
        );
      }
    },
  },
});

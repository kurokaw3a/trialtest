export interface ITestList {
  id: number;
  title: string;
  img?: string;
  status: boolean;
}

export interface IAnswers {
  number: number;
  value: number;
}

export interface ITestCurrent {
  id: number;
  title: string;
  file: string;
  totalQuestions: number;
  answers: {
    math: IAnswers[];
    russian1: IAnswers[];
    russian2: IAnswers[];
  };
}

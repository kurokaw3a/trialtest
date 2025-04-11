import { TestingComponentModel } from "../../components/TestingComponent/TestingComponentModel";

export interface TestingModel {
  disabled: boolean;
  number: number;
}

export interface TestingCalculateModel {
  math: TestingComponentModel[];
  russian1: TestingComponentModel[];
  russian2: TestingComponentModel[];
}

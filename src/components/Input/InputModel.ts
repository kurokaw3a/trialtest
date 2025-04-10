export interface InputModel {
  value?: string;
  onChange?: () => void;
  onClick?: () => void;
  disabled?: boolean;
  variant: "testing" | "default" | "testingLocked";
  checked?: boolean;
  name?: string;
}

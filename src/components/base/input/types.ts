import {
  Control,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { TextInputProps } from "react-native";

export interface BaseControlledInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T>;
  error?: FieldError;
}

export interface InputProps<T extends FieldValues>
  extends BaseControlledInputProps<T>,
    TextInputProps {
  icon?: string;
  label?: string;
}

export interface BottomSheetInputProps<T extends FieldValues>
  extends InputProps<T> {}

export interface NumberInputProps<T extends FieldValues>
  extends BaseControlledInputProps<T> {
  label?: string;
}

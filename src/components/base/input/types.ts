import {Control, FieldError, FieldValues, Path, RegisterOptions} from "react-hook-form";
import {TextInputProps} from "react-native";

export interface InputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T>;
  error?: FieldError;
  icon?: string;
  label?: string;
  placeholder?: string;
}

export interface BottomSheetInputProps<T extends FieldValues> extends InputProps<T> {}
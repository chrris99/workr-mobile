import { FieldValues } from "react-hook-form";
import { BaseControlledInputProps } from "../types";
import { TextInputProps } from "react-native";

export interface TextAreaProps<T extends FieldValues>
  extends BaseControlledInputProps<T>,
    Omit<TextInputProps, "multiline" | "numberOfLines"> {
  label?: string;
}

export interface BottomSheetTextAreaProps<T extends FieldValues>
  extends TextAreaProps<T> {}

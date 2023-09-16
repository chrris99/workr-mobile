import {
  Control,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { TextInputProps } from "react-native";
import { DropdownItem } from "./dropdown/DropdownItem";

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

export interface TextAreaProps<T extends FieldValues>
  extends BaseControlledInputProps<T>,
    Omit<TextInputProps, "multiline" | "numberOfLines"> {
  label?: string;
}

export interface NumberInputProps<T extends FieldValues>
  extends BaseControlledInputProps<T> {
  label?: string;
}

export type DropdownItem = {
  label: string;
  value: string;
  icon?: string;
};

export interface DropdownItemProps {
  item: DropdownItem;
  isSelected: boolean;
}

export interface DropdownInputProps<T extends FieldValues>
  extends BaseControlledInputProps<T> {
  data: DropdownItem[];
  label?: string;
  placeholder?: string;
  searchPlaceholder?: string;
}

export interface BottomSheetInputProps<T extends FieldValues>
  extends InputProps<T> {}

export interface BottomSheetDropdownInputProps<T extends FieldValues>
  extends DropdownInputProps<T> {}

export interface BottomSheetTextAreaProps<T extends FieldValues>
  extends TextAreaProps<T> {}

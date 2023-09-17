import { FieldValues } from "react-hook-form";
import { BaseControlledInputProps } from "../types";

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

export interface BottomSheetDropdownInputProps<T extends FieldValues>
  extends DropdownInputProps<T> {}

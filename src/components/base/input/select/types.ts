import { FieldValue, FieldValues } from "react-hook-form";
import { IconName } from "../../../../design-system/icons/icons";
import { BaseControlledInputProps } from "../types";

export type SelectItem<T> = {
  value: T;
  iconName: IconName;
  displayText: string;
};

type BaseSelectItemProps<T> = {
  onChange: (...event: any[]) => void;
  item: SelectItem<T>;
};

export type SingleSelectItemProps<T> = BaseSelectItemProps<T> & {
  selectedItem: T;
  setSelectedItem: (value: T) => void;
};

export type MultiSelectItemProps<T> = BaseSelectItemProps<T> & {
  selectedItems: T[];
  setSelectedItems: (indexes: T[]) => void;
};

export type SelectItemProps<T> = {
  item: SelectItem<T>;
  isSelected: boolean;
  onPress: () => void;
};

export interface SelectInputProps<T extends FieldValues, V>
  extends BaseControlledInputProps<T> {
  options: SelectItem<V>[];
}

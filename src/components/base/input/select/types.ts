import { FieldValues } from "react-hook-form";
import { IconName } from "../../../../design-system/icons/icons";
import { BaseControlledInputProps } from "../types";

export type Item<T> = {
  value: T;
  iconName: IconName;
  displayText: string;
};

type BaseSelectItemProps<T> = {
  onChange: (...event: any[]) => void;
  item: Item<T>;
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
  item: Item<T>;
  isSelected: boolean;
  onPress: () => void;
};

export interface SelectInputProps<T extends FieldValues, V>
  extends BaseControlledInputProps<T> {
  options: Item<V>[];
}

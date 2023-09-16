import { FieldValue, FieldValues } from "react-hook-form";
import { IconName } from "../../../../design-system/icons/icons";
import { BaseControlledInputProps } from "../types";

export type SelectItem = {
  id: number;
  iconName: IconName;
  value: string;
};

type BaseSelectItemProps = {
  onChange: (...event: any[]) => void;
  item: SelectItem;
};

type SingleSelectItemProps = BaseSelectItemProps & {
  multiselect: false;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

type MultiSelectItemProps = BaseSelectItemProps & {
  multiselect: true;
  selectedIndexes: number[];
  setSelectedIndexes: (indexes: number[]) => void;
};

export type SelectItemProps = SingleSelectItemProps | MultiSelectItemProps;

export interface SelectInputProps<T extends FieldValues>
  extends BaseControlledInputProps<T> {
  options: Omit<SelectItem, "id">[];
  multiselect?: boolean;
}

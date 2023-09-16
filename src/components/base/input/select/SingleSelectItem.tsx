import { SingleSelectItemProps } from "./types";
import { SelectItem } from "./SelectItem";

export const SingleSelectItem = <T,>({
  item,
  onChange,
  selectedItem,
  setSelectedItem,
}: SingleSelectItemProps<T>) => {
  const isSelected = selectedItem === item.value;

  const onPress = () => {
    setSelectedItem(item.value);
    onChange(item.value);
  };

  return <SelectItem item={item} isSelected={isSelected} onPress={onPress} />;
};

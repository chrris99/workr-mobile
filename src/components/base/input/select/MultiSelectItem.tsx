import { SelectItem } from "./SelectItem";
import { MultiSelectItemProps } from "./types";

export const MultiSelectItem = <T,>({
  item,
  onChange,
  selectedItems,
  setSelectedItems,
}: MultiSelectItemProps<T>) => {
  const isSelected = selectedItems.includes(item.value);

  const onPress = () => {
    isSelected ? unselectItem() : selectItem();
  };

  const selectItem = () => {
    const newSelectedItems = [item.value, ...selectedItems];

    setSelectedItems(newSelectedItems);
    onChange(newSelectedItems);
  };

  const unselectItem = () => {
    const newSelectedItems = selectedItems.filter(
      (value) => value !== item.value
    );

    setSelectedItems(newSelectedItems);
    onChange(newSelectedItems);
  };

  return <SelectItem item={item} isSelected={isSelected} onPress={onPress} />;
};

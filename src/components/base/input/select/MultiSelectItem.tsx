import { View } from "react-native";
import { SelectItem } from "./SelectItem";
import { MultiSelectItemProps } from "./types";
import { testId } from "../../../../utils/testId";

export const MULTI_SELECT_ITEM_TEST_IDS = {
  ITEM: testId("multi-select-item"),
} satisfies Record<string, string>;

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

  return (
    <View testID={`${MULTI_SELECT_ITEM_TEST_IDS.ITEM}-${item.value}`}>
      <SelectItem item={item} isSelected={isSelected} onPress={onPress} />
    </View>
  );
};

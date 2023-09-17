import { SingleSelectItemProps } from "./types";
import { SelectItem } from "./SelectItem";
import { View } from "react-native";
import { testId } from "../../../../utils/testId";

export const SINGLE_SELECT_ITEM_TEST_IDS = {
  ITEM: testId("single-select-item"),
} satisfies Record<string, string>;

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

  return (
    <View testID={`${SINGLE_SELECT_ITEM_TEST_IDS.ITEM}-${item.value}`}>
      <SelectItem item={item} isSelected={isSelected} onPress={onPress} />
    </View>
  );
};

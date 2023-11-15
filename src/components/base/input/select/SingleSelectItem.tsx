import { SelectItem } from "@/components/base/input/select/SelectItem";
import { SingleSelectItemProps } from "@/components/base/input/select/types";
import { testId } from "@/utils/test/testId";
import { View } from "react-native";

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

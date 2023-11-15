import { Checkbox } from "@/components/base/checkbox/Checkbox";
import { SelectItemProps } from "@/components/base/input/select/types";
import { colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { testId } from "@/utils/test/testId";
import { StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const SELECT_ITEM_TEST_IDS = {
  SELECT_ITEM: testId("select-item"),
} satisfies Record<string, string>;

export const SelectItem = <T,>({
  item,
  isSelected,
  onPress,
}: SelectItemProps<T>) => {
  const selectionStyle = isSelected ? styles.selected : styles.notSelected;

  return (
    <TouchableWithoutFeedback
      style={[styles.container, selectionStyle]}
      onPress={onPress}
      testID={SELECT_ITEM_TEST_IDS.SELECT_ITEM}
    >
      <View style={styles.contentContainer}>
        <Icon
          name={item.iconName}
          color={isSelected ? "primary-700" : "gray-900"}
        />
        <Text style={styles.textContainer}>{item.displayText}</Text>
        <Checkbox selected={isSelected} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing["spacing-2"],
    paddingHorizontal: spacing["spacing-3"],
    borderRadius: spacing["spacing-2"],
  },
  selected: {
    backgroundColor: colors["primary-50"],
    borderColor: colors["primary-700"],
    borderWidth: 2,
  },
  notSelected: {
    borderColor: colors["gray-200"],
    borderWidth: 2,
  },
  contentContainer: {
    flexDirection: "row",
    gap: spacing["spacing-2"],
    alignItems: "center",
  },
  textContainer: {
    alignSelf: "center",
    flexGrow: 1,
  },
});

import { StyleSheet, View } from "react-native";
import Text from "../../../../design-system/typography/Text";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { spacing } from "../../../../design-system/spacing/spacing";
import { colors } from "../../../../design-system/colors/colors";
import { Checkbox } from "../../checkbox/Checkbox";
import { SelectItemProps } from "./types";
import { Icon } from "../../../../design-system/icons/Icon";

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

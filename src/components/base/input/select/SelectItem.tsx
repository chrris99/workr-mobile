import { StyleSheet, View } from "react-native";
import Text from "../../../../design-system/typography/Text";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { spacing } from "../../../../design-system/spacing/spacing";
import { FeaturedIcon } from "../../../../design-system/icons/FeaturedIcon";
import { colors } from "../../../../design-system/colors/colors";
import { Checkbox } from "../../checkbox/Checkbox";
import { SelectItemProps } from "./types";
import { Icon } from "../../../../design-system/icons/Icon";
import { FieldValues } from "react-hook-form";

export const SelectItem = ({ item, onChange, ...props }: SelectItemProps) => {
  const isSelected = props.multiselect
    ? props.selectedIndexes.includes(item.id)
    : props.selectedIndex === item.id;

  const selectionStyle = isSelected ? styles.selected : styles.notSelected;

  const onPress = () => {
    if (props.multiselect) {
      isSelected
        ? props.setSelectedIndexes(
            props.selectedIndexes.filter((index) => index !== item.id)
          )
        : props.setSelectedIndexes([item.id, ...props.selectedIndexes]);

      onChange(props.selectedIndexes);
    } else {
      props.setSelectedIndex(item.id);
      onChange(props.selectedIndex);
    }
  };

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
        <Text style={styles.textContainer}>{item.value}</Text>
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

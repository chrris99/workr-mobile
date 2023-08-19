import { StyleSheet, View } from "react-native";
import Text from "../../../design-system/typography/Text";
import { spacing } from "../../../design-system/spacing/spacing";
import { colors } from "../../../design-system/colors/colors";

export type DropdownValue = string | null | undefined;
export type DropdownItem<V> = {
  label: string;
  value: V;
  icon?: string;
};

interface DropdownItemProps<V> {
  item: DropdownItem<V>;
  isSelected: boolean;
}

export const DropdownItem = <V extends DropdownValue>({
  item,
  isSelected,
}: DropdownItemProps<V>) => {
  const backgroudnColorStyle = {
    backgroundColor: isSelected ? colors["gray-100"] : colors["white"],
  };
  return (
    <View style={[styles.container, backgroudnColorStyle]}>
      <Text type={"body-M-medium"}>{item.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing["spacing-2.5"],
    paddingHorizontal: spacing["spacing-3.5"],
  },
});

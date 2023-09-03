import { StyleSheet, View } from "react-native";
import Text from "../../../design-system/typography/Text";
import { spacing } from "../../../design-system/spacing/spacing";
import { colors } from "../../../design-system/colors/colors";
import { Icon } from "../../../design-system/icons/Icon";

export type DropdownItem = {
  label: string;
  value: string;
  icon?: string;
};

interface DropdownItemProps {
  item: DropdownItem;
  isSelected: boolean;
}

export const DropdownItem = ({
  item,
  isSelected,
}: DropdownItemProps) => {
  const backgroudnColorStyle = {
    backgroundColor: isSelected ? colors["gray-100"] : colors["white"],
  };
  return (
    <View style={[styles.container, backgroudnColorStyle]}>
      <Text type={"body-M-regular"}>{item.label}</Text>
      {isSelected && <Icon name="Check" color={'primary-700'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing["spacing-2.5"],
    paddingHorizontal: spacing["spacing-3.5"],
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

import { colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { spacing } from "@/design-system/spacing/spacing";
import { StyleSheet, View } from "react-native";

interface CheckboxProps {
  selected: boolean;
}

export const Checkbox = ({ selected }: CheckboxProps) => {
  const selectionStyle = selected ? styles.selected : styles.notSelected;

  return (
    <View style={[styles.container, selectionStyle]}>
      {selected && (
        <Icon name={"Check"} color={"white"} size="XS" strokeWidth={4} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: spacing["spacing-4"],
    height: spacing["spacing-4"],
    borderRadius: spacing["spacing-2"],
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    borderWidth: 1,
    borderColor: colors["primary-700"],
    backgroundColor: colors["primary-700"],
  },
  notSelected: {
    borderRadius: spacing["spacing-2"],
    borderWidth: 1,
    borderColor: colors["gray-300"],
  },
});

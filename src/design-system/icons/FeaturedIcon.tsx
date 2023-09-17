import { Color, colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { IconName } from "@/design-system/icons/icons";
import { spacing } from "@/design-system/spacing/spacing";
import { StyleSheet, View } from "react-native";

interface FeaturedIconProps {
  iconName: IconName;
  color?: Color;
  strokeWidth?: number;
}
export const FeaturedIcon = ({
  iconName,
  color,
  strokeWidth,
}: FeaturedIconProps) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size="M" color={color} strokeWidth={strokeWidth} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing["spacing-3"],
    borderRadius: spacing["spacing-2.5"],
    borderWidth: 1,
    borderColor: colors["gray-200"],
  },
});

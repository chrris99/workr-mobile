import { StyleSheet, View } from "react-native";
import { Icon } from "./Icon";
import { IconName } from "./icons";
import { spacing } from "../spacing/spacing";
import { color } from "react-native-reanimated";
import { Color, colors } from "../colors/colors";

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

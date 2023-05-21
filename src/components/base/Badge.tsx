import { StyleSheet, View } from "react-native";
import { spacing } from "../../design-system/spacing/spacing";
import Text from "../../design-system/typography/Text";
import { colors } from "../../design-system/colors/colors"

interface BadgeProps {
  text: string;
  type?: "solid" | "outline";
}

const Badge = ({ text, type }: BadgeProps) => {
  const backgroundColor =
    type === "solid" ? { backgroundColor: colors["primary-700"] } : {};

  return (
    <View style={[styles.badge, backgroundColor]}>
      <Text
        type="body-S-medium"
        color={type === "solid" ? "white" : "primary-700"}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 16,
    paddingVertical: spacing["spacing-1"],
    paddingHorizontal: spacing["spacing-2.5"],
    borderColor: colors["primary-700"],
    borderWidth: 1,
  },
  solidBadge: {
    backgroundColor: colors["primary-700"],
  },
});

export default Badge;

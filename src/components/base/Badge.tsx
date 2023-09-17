import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { StyleSheet, View } from "react-native";

interface BadgeProps {
  text: string;
  type?: "solid" | "outline";
}

const Badge = ({ text, type }: BadgeProps) => {
  const backgroundColor =
    type === "solid" ? { backgroundColor: colors["primary-200"] } : {};

  return (
    <View style={[styles.badge, backgroundColor]}>
      <Text type="body-S-medium" color={"primary-700"}>
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

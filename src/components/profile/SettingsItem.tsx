import { Icon } from "@/design-system/icons/Icon";
import { IconName } from "@/design-system/icons/icons";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface SettignsItemProps {
  title: string;
  iconName: IconName;
  onPress?: () => void;
}

export const SettingsItem = ({
  title,
  iconName,
  onPress,
}: SettignsItemProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.titleContainer}>
        {iconName && <Icon name={iconName} />}
        <Text type="body-S-medium">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: spacing["spacing-4"],
    paddingVertical: spacing["spacing-3"],
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    gap: spacing["spacing-4"],
    alignItems: "center",
  },
});

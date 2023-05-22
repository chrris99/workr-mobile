import { StyleSheet, View } from "react-native";
import Text from "../../design-system/typography/Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../design-system/colors/colors";
import { spacing } from "../../design-system/spacing/spacing";

export interface SettignsItemProps {
  title: string;
  icon?: JSX.Element;
  onPress?: () => void;
}

export const SettingsItem = ({ title, icon, onPress }: SettignsItemProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.titleContainer}>
        {icon && icon}
        <Text type="body-M-semibold">{title}</Text>
      </View>
      {icon && icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors["gray-300"],
    paddingHorizontal: spacing["spacing-4"],
    paddingVertical: spacing["spacing-3"],
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: spacing['spacing-4']
  }
});

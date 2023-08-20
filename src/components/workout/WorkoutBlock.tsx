import { StyleSheet, View } from "react-native";
import Text from "../../design-system/typography/Text";
import { spacing } from "../../design-system/spacing/spacing";
import { colors } from "../../design-system/colors/colors";

export const WorkoutBlock = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacing["spacing-2"],
    borderWidth: 2,
    borderColor: colors["gray-300"],
    borderStyle: "dashed",
    padding: spacing["spacing-4"],
    minHeight: 350
  },
});

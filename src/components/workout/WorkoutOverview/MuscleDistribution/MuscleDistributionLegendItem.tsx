import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { Muscle, capitalize } from "@/types/muscle";
import { StyleSheet, View } from "react-native";

type MuscleDistributionLegendItemProps = {
  color: string;
  value: Muscle;
};

export const MuscleDistributionLegendItem = ({
  color,
  value,
}: MuscleDistributionLegendItemProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text>{capitalize(value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing["spacing-2"],
    alignItems: "center",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 100,
  },
});

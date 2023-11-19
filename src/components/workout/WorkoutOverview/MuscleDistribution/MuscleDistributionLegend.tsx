import { MuscleDistributionLegendItem } from "@/components/workout/WorkoutOverview/MuscleDistribution/MuscleDistributionLegendItem";
import { MuscleDistributionChartData } from "@/components/workout/WorkoutOverview/MuscleDistributionChart";
import { spacing } from "@/design-system/spacing/spacing";
import { StyleSheet, View } from "react-native";

type MuscleDistributionLegendProps = {
  data: MuscleDistributionChartData[];
};

export const MuscleDistributionLegend = ({
  data,
}: MuscleDistributionLegendProps) => {
  return (
    <View style={styles.container}>
      {data.map((slice) => (
        <MuscleDistributionLegendItem value={slice.value} color={slice.color} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: spacing["spacing-2"],
  },
});

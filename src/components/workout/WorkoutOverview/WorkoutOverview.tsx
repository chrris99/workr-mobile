import { MuscleDistributionChart } from "@/components/workout/WorkoutOverview/MuscleDistributionChart";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { WorkoutTemplate } from "@/types/workout";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";

export type VolumeByMuscle = { [muscle: string]: number };
type WorkoutOverviewProps = {
  workoutTemplate: WorkoutTemplate;
};

export const WorkoutOverview = ({ workoutTemplate }: WorkoutOverviewProps) => {
  const getTotalVolumeByMuscle = () => {
    const totalVolumeByMuscle = workoutTemplate.blocks.reduce((acc, block) => {
      block.items.forEach((item) => {
        const totalVolumeForItem = item.sets.reduce(
          (acc, set) => acc + set.reps * set.weight,
          0
        );
        const primaryMuscle = item.exercise.targetMuscleGroup;

        if (!acc[primaryMuscle]) acc[primaryMuscle] = 0;
        acc[primaryMuscle] += 3 * totalVolumeForItem;

        item.exercise.secondaryMuscleGroups?.forEach((secondaryMuscle) => {
          if (!acc[secondaryMuscle]) acc[secondaryMuscle] = 0;
          acc[secondaryMuscle] += totalVolumeForItem;
        });
      });

      return acc;
    }, {} as VolumeByMuscle);

    return totalVolumeByMuscle;
  };

  const getTopMusclePercentage = (
    volumeByMuscle: VolumeByMuscle,
    limit = 4
  ): VolumeByMuscle => {
    const topMuscles = Object.entries(volumeByMuscle)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit);

    const topMusclesTotalVolume = topMuscles.reduce(
      (acc, curr) => acc + curr[1],
      0
    );

    return Object.fromEntries(
      topMuscles.map(([muscle, volume]) => [
        muscle,
        volume / topMusclesTotalVolume,
      ])
    );
  };

  const data = useMemo(
    () => getTopMusclePercentage(getTotalVolumeByMuscle()),
    [workoutTemplate]
  );

  return (
    <View style={styles.container}>
      <Text type="body-S-medium">Most involved muscle groups</Text>
      <MuscleDistributionChart data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    borderRadius: spacing["spacing-4"],
    padding: spacing["spacing-4"],
    gap: spacing["spacing-4"],
  },
});

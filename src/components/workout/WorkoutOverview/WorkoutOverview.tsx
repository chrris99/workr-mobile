import { MuscleDistributionChart } from "@/components/workout/WorkoutOverview/MuscleDistributionChart";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import { WorkoutTemplate } from "@/types/workout";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

type VolumeByMuscle = { [muscle: string]: number };
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

  const getTopMuscles = (
    volumeByMuscle: VolumeByMuscle,
    limit = 4
  ): VolumeByMuscle =>
    Object.fromEntries(
      Object.entries(volumeByMuscle)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
    );

  useEffect(() => {
    const res = getTotalVolumeByMuscle();
    console.log(res);
  }, [workoutTemplate]);

  return (
    <View style={styles.container}>
      <MuscleDistributionChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    borderRadius: spacing["spacing-4"],
  },
});

// util functions
// get Volume = reps * weight

import { ExerciseCard } from "@/components/exercise/ExerciseCard/ExerciseCard";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import { WorkoutBlock as TWorkoutBlock, WorkoutItem } from "@/types/workout";
import { StyleSheet, View } from "react-native";

type WorkoutBlockProps = {
  workoutBlock: TWorkoutBlock;
};

export const WorkoutBlock = ({ workoutBlock }: WorkoutBlockProps) => {
  const renderItem = (workoutItem: WorkoutItem) => (
    <>
      <ExerciseCard exercise={workoutItem.exercise} />
      <ExerciseCard exercise={workoutItem.exercise} />
    </>
  );

  return (
    <View style={workoutBlock.items.length > 1 ? styles.container : {}}>
      {workoutBlock.items.map((item) => renderItem(item))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderLeftColor: colors["primary-700"],
    borderLeftWidth: spacing["spacing-1"],
    paddingLeft: spacing["spacing-1"],
  },
});

import { BaseWorkoutPlanFormProps } from "@/components/workout/forms/types";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { Exercise } from "@/models/exercise";
import { useFieldArray } from "react-hook-form";
import { StyleSheet, View } from "react-native";

type WorkoutTemplateProps = BaseWorkoutPlanFormProps & {
  exercises: Exercise[];
};

export const WorkoutTemplate = ({
  control,
  exercises,
}: WorkoutTemplateProps) => {
  // Figure out index
  const { fields: workoutBlocks } = useFieldArray({
    control,
    name: `workouts.${0}.blocks` as "workouts.0.blocks",
  });

  const renderWorkoutBlocks = () =>
    workoutBlocks.map((block) => {
      return (
        <View style={styles.workoutBlockContainer}>
          <Text>{block.id}</Text>
        </View>
      );
    });

  return <View style={styles.container}>{renderWorkoutBlocks()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: spacing["spacing-2"],
    borderWidth: 2,
    borderColor: colors["gray-300"],
    borderStyle: "dashed",
    padding: spacing["spacing-4"],
    minHeight: 350,
  },
  workoutBlockContainer: {
    borderRadius: spacing["spacing-2"],
    borderWidth: 2,
    borderColor: colors["gray-300"],
    borderStyle: "dashed",
  },
});

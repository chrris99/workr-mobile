import { useGetExercisesQuery } from "@/api/api";
import { BottomSheetInput } from "@/components/base/input/BottomSheetInput";
import { DropdownInput } from "@/components/base/input/dropdown/DropdownInput";
import { BaseWorkoutTemplateFormProps } from "@/components/workout/forms/types";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { muscleToIcon } from "@/types/muscle";
import { WorkoutItem as TWorkoutItem } from "@/types/workout";
import { useMemo } from "react";
import { useFieldArray } from "react-hook-form";
import { StyleSheet, View } from "react-native";

type WorkoutItemProps = BaseWorkoutTemplateFormProps & {
  blockIndex: number;
  item: TWorkoutItem;
  itemIndex: number;
};

export const WorkoutItemForm = ({
  control,
  blockIndex,
  item,
  itemIndex,
}: WorkoutItemProps) => {
  const workoutItemField = useMemo(
    () =>
      `blocks.${blockIndex}.items.${itemIndex}` as `blocks.${number}.items.${number}`,
    [blockIndex, itemIndex]
  );

  const { data: exercises, isFetching } = useGetExercisesQuery();

  const { fields: sets, append } = useFieldArray({
    control,
    name: `${workoutItemField}.sets`,
  });

  return (
    <View style={styles.workoutItem}>
      <DropdownInput
        control={control}
        name={`${workoutItemField}.exerciseId`}
        data={
          exercises
            ? exercises.map((exercise) => ({
                value: exercise.id,
                label: exercise.name,
                icon: muscleToIcon(exercise.targetMuscleGroup),
              }))
            : []
        }
        placeholder="Select exercise"
      />

      <View style={styles.sets}>
        <View style={styles.setsHeader}>
          <Text type={"body-L-semibold"}>Sets</Text>

          <Button
            type={"primary-link-lg"}
            text="Add set"
            iconName="Plus"
            onPress={() => append({ reps: 0, weight: 0, unit: "kg" })}
          />
        </View>

        {sets.map((set, index) => (
          <View style={styles.set}>
            <Text style={{ alignSelf: "center" }} type={"body-L-semibold"}>
              {index + 1}
            </Text>
            <BottomSheetInput
              control={control}
              name={`${workoutItemField}.sets.${index}.reps`}
            />
            <BottomSheetInput
              control={control}
              name={`${workoutItemField}.sets.${index}.weight`}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  workoutItem: {
    gap: spacing["spacing-2"],
  },
  sets: {},
  setsHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  set: {
    flexDirection: "row",
    gap: spacing["spacing-8"],
  },
});

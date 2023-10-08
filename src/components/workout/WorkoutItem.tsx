import { useGetExercisesQuery } from "@/api/api";
import { DropdownInput } from "@/components/base/input/dropdown/DropdownInput";
import { NumberInput } from "@/components/base/input/number/NumberInput";
import { BaseWorkoutTemplateFormProps } from "@/components/workout/forms/types";
import { Button } from "@/design-system/buttons/Button";
import { WorkoutItem as TWorkoutItem } from "@/types/workout";
import { useMemo } from "react";
import { useFieldArray } from "react-hook-form";
import { View } from "react-native";

type WorkoutItemProps = BaseWorkoutTemplateFormProps & {
  blockIndex: number;
  item: TWorkoutItem;
  itemIndex: number;
};

export const WorkoutItem = ({
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
    <View>
      <DropdownInput
        control={control}
        name={`${workoutItemField}.exerciseId`}
        data={
          exercises
            ? exercises.map((exercise) => ({
                value: exercise.id,
                label: exercise.name,
              }))
            : []
        }
        label="Select exercise*"
      />
      {sets.map((set, index) => (
        <View>
          <NumberInput
            control={control}
            name={`${workoutItemField}.sets.${index}.reps`}
            label="Reps"
          />
        </View>
      ))}
      <Button
        type={"primary-icon-md"}
        text="Add set"
        iconName="Plus"
        onPress={() => append({ reps: 0, weight: 0, unit: "kg" })}
      />
    </View>
  );
};

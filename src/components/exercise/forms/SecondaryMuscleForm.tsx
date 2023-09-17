import { MultiSelectInput } from "@/components/base/input/select/MultiSelectInput";
import { BaseExerciseFormProps } from "@/components/exercise/forms/types";
import { muscleItem, muscles } from "@/types/muscle";

export const SecondaryMuscleForm = ({ control }: BaseExerciseFormProps) => {
  return (
    <MultiSelectInput
      control={control}
      name={"secondaryMuscleGroups"}
      options={muscles.map((muscle) => muscleItem(muscle))}
    />
  );
};

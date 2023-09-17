import { SelectInput } from "@/components/base/input/select/SelectInput";
import { BaseExerciseFormProps } from "@/components/exercise/forms/types";
import { muscleItem, muscles } from "@/types/muscle";

export const TargetMuscleForm = ({ control }: BaseExerciseFormProps) => {
  return (
    <SelectInput
      control={control}
      name={"targetMuscleGroup"}
      options={muscles.map((muscle) => muscleItem(muscle))}
    />
  );
};

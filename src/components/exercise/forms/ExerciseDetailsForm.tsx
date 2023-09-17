import { useFormState } from "react-hook-form";
import { BaseExerciseFormProps } from "./types";
import { StyleSheet, View } from "react-native";
import { BottomSheetInput } from "../../base/input/BottomSheetInput";
import { DropdownInput } from "../../base/input/dropdown/DropdownInput";
import { mapMuscle, muscles } from "../../../types/muscle";
import { spacing } from "../../../design-system/spacing/spacing";
import { BottomSheetTextArea } from "../../base/input/text-area/BottomSheetTextArea";
import { SelectInput } from "../../base/input/select/SelectInput";
import { MultiSelectInput } from "../../base/input/select/MultiSelectInput";

export const ExerciseDetailForm = ({ control }: BaseExerciseFormProps) => {
  const { errors } = useFormState({
    control,
  });

  return (
    <View style={styles.form}>
      <BottomSheetInput
        control={control}
        rules={{
          required: {
            value: true,
            message: "Exercise name is required",
          },
        }}
        name={"name"}
        error={errors.name}
        placeholder="Exercise name"
        label="Name*"
      />
      <BottomSheetTextArea
        control={control}
        name={"description"}
        error={errors.description}
        placeholder="Add description..."
        label="Description"
      />
      <MultiSelectInput
        control={control}
        name={"targetMuscleGroup"}
        options={[...muscles].map((muscle) => ({
          value: muscle,
          displayText: muscle,
          iconName: mapMuscle(muscle)
        }))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: spacing["spacing-4"],
    paddingBottom: spacing["spacing-7"],
  },
});

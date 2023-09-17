import { BottomSheetInput } from "@/components/base/input/BottomSheetInput";
import { MultiSelectInput } from "@/components/base/input/select/MultiSelectInput";
import { BottomSheetTextArea } from "@/components/base/input/text-area/BottomSheetTextArea";
import { BaseExerciseFormProps } from "@/components/exercise/forms/types";
import { spacing } from "@/design-system/spacing/spacing";
import { mapMuscle, muscles } from "@/types/muscle";
import { useFormState } from "react-hook-form";
import { StyleSheet, View } from "react-native";

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
          iconName: mapMuscle(muscle),
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

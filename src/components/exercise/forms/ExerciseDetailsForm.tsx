import { useFormState } from "react-hook-form";
import { BaseExerciseFormProps } from "./types";
import { StyleSheet, View } from "react-native";
import { BottomSheetInput } from "../../base/input/BottomSheetInput";
import { DropdownInput } from "../../base/input/dropdown/DropdownInput";
import { muscles } from "../../../types/muscle";
import { spacing } from "../../../design-system/spacing/spacing";
import { TextArea } from "../../base/input/TextArea";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

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
      <DropdownInput
        control={control}
        name={"targetMuscleGroup"}
        label={"Target muscle group*"}
        data={[...muscles].map((muscle) => ({
          value: muscle,
          label: muscle.charAt(0).toUpperCase() + muscle.slice(1),
        }))}
        placeholder="Select target muscle group"
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

import { StyleSheet, View } from "react-native";
import { BaseWorkoutPlanFormProps } from "./types";
import { BottomSheetInput } from "../../base/input/BottomSheetInput";
import { spacing } from "../../../design-system/spacing/spacing";
import { useFormState } from "react-hook-form";

export const WorkoutPlanDetailsForm = ({ control }: BaseWorkoutPlanFormProps) => {
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
          message: "Workout plan name is required",
        },
      }}
      name={"name"}
      error={errors.name}
      placeholder="Plan name"
      label="Name*"
    />
  </View>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: spacing["spacing-4"],
    paddingBottom: spacing["spacing-7"],
  }
})
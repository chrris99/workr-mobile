import { StyleSheet, View } from "react-native";
import { BaseWorkoutPlanFormProps } from "./types";
import { BottomSheetInput } from "../../base/input/BottomSheetInput";
import { spacing } from "../../../design-system/spacing/spacing";
import { useFormState } from "react-hook-form";
import { BottomSheetTextArea } from "../../base/input/text-area/BottomSheetTextArea";
import { NumberInput } from "../../base/input/number/NumberInput";

export const WorkoutPlanDetailsForm = ({
  control,
}: BaseWorkoutPlanFormProps) => {
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
      <BottomSheetTextArea
        control={control}
        name={"description"}
        error={errors.description}
        placeholder="Add description..."
        label="Description"
      />
      <View style={styles.inputRow}>
        <NumberInput
          control={control}
          name={"weekCount"}
          label="Weeks"
        />
        <NumberInput
          control={control}
          name={"daysPerWeek"}
          label="Days per week"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: spacing["spacing-4"],
    paddingBottom: spacing["spacing-7"],
  },
  inputRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing["spacing-4"],
  },
});

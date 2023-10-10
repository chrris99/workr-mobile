import { useGetExercisesQuery } from "@/api/api";
import { WorkoutTemplate } from "@/components/workout/forms/WorkoutTemplateForm";
import { BaseWorkoutPlanFormProps } from "@/components/workout/forms/types";
import { spacing } from "@/design-system/spacing/spacing";
import { useFormState, useWatch } from "react-hook-form";
import { StyleSheet, View } from "react-native";

export const WorkoutPlanDayForm = ({ control }: BaseWorkoutPlanFormProps) => {
  const { errors } = useFormState({
    control,
  });

  const { data, isFetching } = useGetExercisesQuery();

  const weeks = useWatch({
    control,
    name: "weekCount",
  });

  const renderWeeks = () =>
    [...Array(weeks)].map((_, index) => <WorkoutTemplate control={control} />);

  return <View style={styles.form}>{renderWeeks()}</View>;
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

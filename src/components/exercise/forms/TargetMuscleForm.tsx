import { SelectInput } from "@/components/base/input/select/SelectInput";
import { BaseExerciseFormProps } from "@/components/exercise/forms/types";
import { spacing } from "@/design-system/spacing/spacing";
import { muscleItem, muscles } from "@/types/muscle";
import { StyleSheet, View } from "react-native";

export const TargetMuscleForm = ({ control }: BaseExerciseFormProps) => {
  return (
    <View style={styles.form}>
      <SelectInput
        control={control}
        name={"targetMuscleGroup"}
        options={muscles.map((muscle) => muscleItem(muscle))}
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

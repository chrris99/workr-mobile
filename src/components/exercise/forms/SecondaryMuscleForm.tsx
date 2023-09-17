import { MultiSelectInput } from "@/components/base/input/select/MultiSelectInput";
import { BaseExerciseFormProps } from "@/components/exercise/forms/types";
import { spacing } from "@/design-system/spacing/spacing";
import { muscleItem, muscles } from "@/types/muscle";
import { StyleSheet, View } from "react-native";

export const SecondaryMuscleForm = ({ control }: BaseExerciseFormProps) => {
  return (
    <View style={styles.form}>
      <MultiSelectInput
        control={control}
        name={"secondaryMuscleGroups"}
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

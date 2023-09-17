import { DropdownInput } from "@/components/base/input/dropdown/DropdownInput";
import { MultiSelectDropdownInput } from "@/components/base/input/dropdown/multiselect/MultiSelectDropdownInput";
import { BaseExerciseFormProps } from "@/components/exercise/forms/types";
import { spacing } from "@/design-system/spacing/spacing";
import { muscles } from "@/types/muscle";
import { StyleSheet, View } from "react-native";

export const ExerciseMuscleForm = ({ control }: BaseExerciseFormProps) => {
  return (
    <View style={styles.form}>
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
      <MultiSelectDropdownInput
        control={control}
        name={"secondaryMuscleGroups"}
        label={"Secondary muscle group"}
        data={[...muscles].map((muscle) => ({
          value: muscle,
          label: muscle.charAt(0).toUpperCase() + muscle.slice(1),
        }))}
        placeholder="Select secondary muscle groups"
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

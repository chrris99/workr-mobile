import { StyleSheet, View } from "react-native";
import { BaseExerciseFormProps } from "./types";
import { DropdownInput } from "../../base/input/dropdown/DropdownInput";
import { muscles } from "../../../types/muscle";
import { MultiSelectDropdownInput } from "../../base/input/dropdown/multiselect/MultiSelectDropdownInput";
import { spacing } from "../../../design-system/spacing/spacing";

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

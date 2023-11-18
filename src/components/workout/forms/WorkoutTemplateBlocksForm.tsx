import { WorkoutBlockForm } from "@/components/workout/WorkoutBlockForm";
import { BaseWorkoutTemplateFormProps } from "@/components/workout/forms/types";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import { useFieldArray, useFormState } from "react-hook-form";
import { StyleSheet, View } from "react-native";

export const WorkoutTemplateBlocksForm = ({
  control,
}: BaseWorkoutTemplateFormProps) => {
  const { errors } = useFormState({
    control,
  });

  const { fields: blocks, append } = useFieldArray({ control, name: "blocks" });

  return (
    <View style={styles.form}>
      <View style={styles.blocks}>
        {blocks.map((block, index) => (
          <WorkoutBlockForm
            key={block.id}
            control={control}
            blockIndex={index}
          />
        ))}
      </View>

      <Button
        type={"gray-solid-md"}
        iconName="Plus"
        onPress={() =>
          append({ items: [{ sets: [{ reps: 0, weight: 0, unit: "kg" }] }] })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: spacing["spacing-8"],
    paddingBottom: spacing["spacing-7"],
  },
  blocks: {
    flexDirection: "column",
    gap: spacing["spacing-12"],
  },
  inputRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing["spacing-4"],
  },
});

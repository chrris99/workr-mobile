import { FieldArrayWithId, useFieldArray, useFormState } from "react-hook-form";
import { BaseExerciseFormProps, ExerciseFormValues } from "./types";
import { BottomSheetInput } from "../../base/input/BottomSheetInput";
import { StyleSheet, View } from "react-native";
import { spacing } from "../../../design-system/spacing/spacing";
import { useEffect } from "react";
import { Button } from "../../../design-system/buttons/Button";

export const ExerciseInstructionsForm = ({
  control,
}: BaseExerciseFormProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "instructions",
  });

  useEffect(() => {
    console.log(fields);
  }, [fields]);

  // TODO: Consider simply passing down the errors object
  const { errors } = useFormState({
    control,
  });

  const renderInstructionInput = (
    field: FieldArrayWithId<ExerciseFormValues, "instructions", "id">,
    index: number
  ) => (
    <BottomSheetInput
      key={field.id}
      control={control}
      name={`instructions.${index}.description`}
      error={errors.instructions?.root}
      label={`Step ${index + 1}`}
    />
  );

  return (
    <View style={styles.form}>
      {fields.map((field, index) => renderInstructionInput(field, index))}
      <Button
        text="Add step"
        type={"primary-solid-lg"}
        onPress={() => append({ description: "" })}
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

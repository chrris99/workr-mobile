import { ForwardedRef, forwardRef } from "react";
import { Exercise } from "../../../models/exercise";
import { useForm, SubmitHandler } from "react-hook-form";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Muscle, muscles } from "../../../types/muscle";
import { BottomModal } from "../../base/modal/BottomModal";
import { Keyboard, StyleSheet, View } from "react-native";
import { DropdownInput } from "../../base/input/dropdown/DropdownInput";
import { spacing } from "../../../design-system/spacing/spacing";
import { Button } from "../../../design-system/buttons/Button";
import { BottomSheetInput } from "../../base/input/BottomSheetInput";

export type ExerciseFormValues = {
  name: string;
  targetMuscleGroup: Muscle;
  description: string;
};

interface ExerciseModalProps {
  onSubmit: SubmitHandler<ExerciseFormValues>;
  title: string;
  subtitle?: string;
  exercise?: Exercise;
}

export const ExerciseModal = forwardRef(
  (
    { onSubmit, title, subtitle, exercise }: ExerciseModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const { dismiss } = useBottomSheetModal();

    const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<ExerciseFormValues>({
      defaultValues: {
        name: exercise?.name ?? "",
        targetMuscleGroup: exercise?.targetMuscleGroup ?? "abductors",
        description: exercise?.description ?? "",
      },
    });

    const closeModal = () => {
      if (Keyboard.isVisible()) Keyboard.dismiss();
      dismiss();
      reset();
    };

    const onValid = (data: ExerciseFormValues) => {
      onSubmit(data);
      closeModal();
    };

    return (
      <BottomModal
        ref={ref}
        title={title}
        subtitle={subtitle}
        onDismiss={reset}
      >
        <View style={styles.container}>
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
              label="Name"
            />
            <DropdownInput
              control={control}
              name={"targetMuscleGroup"}
              label={"Target muscle group"}
              data={[...muscles].map((muscle) => ({
                value: muscle,
                label: muscle.charAt(0).toUpperCase() + muscle.slice(1),
              }))}
              placeholder="Select target muscle group"
            />
          </View>
          <Button
            text="Create exercise"
            onPress={handleSubmit(onValid)}
            type={"primary-solid-md"}
          />
        </View>
      </BottomModal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  form: {
    gap: spacing["spacing-4"],
    paddingBottom: spacing["spacing-7"],
  },
});

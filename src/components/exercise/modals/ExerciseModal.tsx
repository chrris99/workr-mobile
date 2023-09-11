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
import { usePaginatedComponent } from "../../../hooks/usePaginatedComponent";
import { ExerciseDetailForm } from "../forms/ExerciseDetailsForm";
import { PaginatedBottomModal } from "../../base/modal/PaginatedBottomModal";
import { ExerciseFormValues } from "../forms/types";
import { ExerciseInstructionsForm } from "../forms/ExerciseInstructionsForm";

interface ExerciseModalProps {
  onSubmit: SubmitHandler<ExerciseFormValues>;
  title: string;
  buttonTitle: string;
  subtitle?: string;
  exercise?: Exercise;
}

export const ExerciseModal = forwardRef(
  (
    { onSubmit, title, buttonTitle, subtitle, exercise }: ExerciseModalProps,
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
        instructions: exercise?.instructions
          ? exercise.instructions.map((instruction) => ({
              description: instruction,
            }))
          : [{ description: "" }],
      },
    });

    const modalPages = [
      <ExerciseDetailForm control={control} />,
      <ExerciseInstructionsForm control={control} />,
    ];

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
      <PaginatedBottomModal
        ref={ref}
        pages={modalPages}
        title={title}
        subtitle={subtitle}
        onDismiss={reset}
      />
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

/**
 *  <View style={styles.container}>
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
              label="Name*"
            />
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
          </View>
          <Button
            text={buttonTitle}
            onPress={handleSubmit(onValid)}
            type={"primary-solid-md"}
          />
        </View>
 */

import { Keyboard, StyleSheet, View } from "react-native";
import { Input } from "../base/input/Input";
import { spacing } from "../../design-system/spacing/spacing";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { BottomModal } from "../base/modal/BottomModal";
import {
  BottomSheetModal,
  BottomSheetTextInput,
  useBottomSheet,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Muscle, muscles } from "../../types/muscle";
import { DropdownInput } from "../base/input/dropdown/DropdownInput";
import { useAddExerciseMutation } from "../../api/api";
import { Button } from "../../design-system/buttons/Button";
import { useForwardRef } from "../../hooks/useForwardRef";
import { SubmitHandler, useForm } from "react-hook-form";
import { BottomSheetInput } from "../base/input/BottomSheetInput";

type CreateExerciseFormValues = {
  name: string;
  targetMuscleGroup: Muscle;
};

export const CreateExerciseModal = forwardRef(
  (_, ref: ForwardedRef<BottomSheetModal>) => {
    const { dismiss } = useBottomSheetModal();

    const {
      control,
      handleSubmit,
      reset,
      setFocus,
      formState: { errors, ...formState },
    } = useForm<CreateExerciseFormValues>({
      defaultValues: {
        name: "",
        targetMuscleGroup: "abductors",
      },
    });

    const [addExercise] = useAddExerciseMutation();

    const closeModal = () => {
      if (Keyboard.isVisible()) Keyboard.dismiss();
      dismiss();
      reset();
    };

    const onSubmit: SubmitHandler<CreateExerciseFormValues> = async (
      data: CreateExerciseFormValues
    ) => {
      console.log(data);
      await addExercise({
        name: data.name,
        targetMuscleGroup: data.targetMuscleGroup,
      })
        .unwrap()
        .catch((err) => console.error(err));

      closeModal();
    };

    return (
      <BottomModal
        ref={ref}
        title="Add exercise"
        subtitle="Create a new exercise to use in your workout templates"
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
            onPress={handleSubmit(onSubmit)}
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

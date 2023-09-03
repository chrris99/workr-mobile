import { StyleSheet, View } from "react-native";
import { Input } from "../base/Input";
import { spacing } from "../../design-system/spacing/spacing";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import { BottomModal } from "../base/modal/BottomModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Muscle, muscles } from "../../types/muscle";
import { DropdownInput } from "../base/dropdown/DropdownInput";
import { useAddExerciseMutation } from "../../api/api";
import { Button } from "../../design-system/buttons/Button";
import { useForwardRef } from "../../hooks/useForwardRef";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateExerciseFormValues = {
  name: string;
  targetMuscleGroup: Muscle;
};

export const CreateExerciseModal = forwardRef(
  (props, ref: ForwardedRef<BottomSheetModal>) => {
    const modalRef = useForwardRef<BottomSheetModal>(ref);

    const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<CreateExerciseFormValues>({
      defaultValues: {
        name: "",
        targetMuscleGroup: "abs",
      },
    });

    const [addExercise, res] = useAddExerciseMutation();

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

      modalRef.current.dismiss();
      reset();
    };

    return (
      <BottomModal
        ref={modalRef}
        title="Add exercise"
        subtitle="Create a new exercise to use in your workout templates"
      >
        <View style={styles.form}>
          <Input
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
      </BottomModal>
    );
  }
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: spacing["spacing-7"],
  },
  form: {
    gap: spacing["spacing-4"],
    paddingBottom: spacing["spacing-7"],
  },
});

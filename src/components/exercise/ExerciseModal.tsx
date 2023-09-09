import { ForwardedRef, forwardRef } from "react";
import { Exercise } from "../../models/exercise";
import { useForm, SubmitHandler } from "react-hook-form";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useForwardRef } from "../../hooks/useForwardRef";
import { Muscle, muscles } from "../../types/muscle";
import { BottomModal } from "../base/modal/BottomModal";
import { StyleSheet, View } from "react-native";
import { Input } from "../base/input/Input";
import { DropdownInput } from "../base/dropdown/DropdownInput";
import { spacing } from "../../design-system/spacing/spacing";
import { Button } from "../../design-system/buttons/Button";

export type ExerciseFormValues = {
  name: string;
  targetMuscleGroup: Muscle;
  description: string;
};

interface ExerciseModalProps {
  onSubmit: SubmitHandler<ExerciseFormValues>;
  title: string;
  subtitle: string;
  exercise?: Exercise;
}

export const ExerciseModal = forwardRef(
  (
    { onSubmit, title, subtitle, exercise }: ExerciseModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const modalRef = useForwardRef<BottomSheetModal>(ref);

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

    const onValid = (data: ExerciseFormValues) => {
      onSubmit(data);
      reset();
    };

    return (
      <BottomModal
        ref={modalRef}
        onDismiss={reset}
        title={title}
        subtitle={subtitle}
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
          <Input
            control={control}
            name={"description"}
            error={errors.description}
            placeholder="Description"
            label="Description"
          />
        </View>
        <Button
          text="Create exercise"
          onPress={handleSubmit(onValid)}
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

import { ForwardedRef, forwardRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useAddExerciseMutation } from "../../../api/api";
import { ExerciseModal } from "./ExerciseModal";
import { ExerciseFormValues } from "../forms/types";

export const CreateExerciseModal = forwardRef(
  (_, ref: ForwardedRef<BottomSheetModal>) => {
    const [addExercise] = useAddExerciseMutation();

    const onSubmit = async (data: ExerciseFormValues) => {
      await addExercise({
        name: data.name,
        targetMuscleGroup: data.targetMuscleGroup,
      })
        .unwrap()
        .catch((err) => console.error(err));
    };

    return (
      <ExerciseModal
        ref={ref}
        title="Create a new exercise"
        buttonTitle="Create exercise"
        subtitle="Create a new exercise to use in your workout templates"
        onSubmit={onSubmit}
      />
    );
  }
);

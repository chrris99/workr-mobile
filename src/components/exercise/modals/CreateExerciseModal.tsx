import { ForwardedRef, forwardRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Muscle } from "../../../types/muscle";
import { useAddExerciseMutation } from "../../../api/api";
import { SubmitHandler } from "react-hook-form";
import { ExerciseFormValues, ExerciseModal } from "./ExerciseModal";

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
        title="Add exercise"
        buttonTitle="Create exercise"
        subtitle="Create a new exercise to use in your workout templates"
        onSubmit={onSubmit}
      />
    );
  }
);

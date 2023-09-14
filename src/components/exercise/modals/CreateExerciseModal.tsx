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
        pages={{
          detailPage: {
            title: "Create a new exercise",
            subtitle: "Create a new exercise to use in your workout templates",
          },
          instructionsPage: {
            title: "Add instructions",
            subtitle: "Provide step-by-step instructions on how to execute this exercise"
          }
        }}
        onSubmit={onSubmit}
      />
    );
  }
);

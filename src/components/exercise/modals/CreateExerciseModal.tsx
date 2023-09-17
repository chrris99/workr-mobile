import { useAddExerciseMutation } from "@/api/api";
import { ExerciseFormValues } from "@/components/exercise/forms/types";
import { ExerciseModal } from "@/components/exercise/modals/ExerciseModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ForwardedRef, forwardRef } from "react";

export const CreateExerciseModal = forwardRef(
  (_, ref: ForwardedRef<BottomSheetModal>) => {
    const [addExercise] = useAddExerciseMutation();

    const onSubmit = async (data: ExerciseFormValues) => {
      await addExercise({
        name: data.name,
        targetMuscleGroup: data.targetMuscleGroup,
        secondaryMuscleGroups: data.secondaryMuscleGroups,
        description: data.description,
        instructions: data.instructions.map(
          (instruction) => instruction.description
        ),
      })
        .unwrap()
        .catch((err) => console.error(err));
    };

    return (
      <ExerciseModal
        ref={ref}
        headers={{
          detailPage: {
            title: "Create a new exercise",
            subtitle: "Create a new exercise to use in your workout templates",
          },
          instructionsPage: {
            title: "Add instructions",
            subtitle:
              "Provide step-by-step instructions on how to execute this exercise",
          },
        }}
        onSubmit={onSubmit}
      />
    );
  }
);

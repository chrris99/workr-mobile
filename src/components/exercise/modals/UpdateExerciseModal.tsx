import { useUpdateExerciseMutation } from "@/api/api";
import { ExerciseFormValues } from "@/components/exercise/forms/types";
import { ExerciseModal } from "@/components/exercise/modals/ExerciseModal";
import { Exercise } from "@/models/exercise";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ForwardedRef, forwardRef } from "react";
import { SubmitHandler } from "react-hook-form";

interface UpdateExerciseModalProps {
  exercise: Exercise;
}

export const UpdateExerciseModal = forwardRef(
  (
    { exercise }: UpdateExerciseModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const [updateExercise] = useUpdateExerciseMutation();

    const onSubmit: SubmitHandler<ExerciseFormValues> = async (
      data: ExerciseFormValues
    ) => {
      await updateExercise({
        id: exercise.id,
        name: data.name,
        description: data.description,
        targetMuscleGroup: data.targetMuscleGroup,
        secondaryMuscleGroups: data.secondaryMuscleGroups,
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
        title={`Update ${exercise.name.toLowerCase()} exercise`}
        buttonTitle="Update exercise"
        subtitle="Use up to date exercises in your workout templates"
        onSubmit={onSubmit}
        exercise={exercise}
      />
    );
  }
);

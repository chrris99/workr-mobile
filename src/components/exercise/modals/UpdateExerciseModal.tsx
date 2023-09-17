import { useUpdateExerciseMutation } from "@/api/api";
import { ExerciseModal } from "@/components/exercise/modals/ExerciseModal";
import { Exercise } from "@/models/exercise";
import { Muscle } from "@/types/muscle";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ForwardedRef, forwardRef } from "react";
import { SubmitHandler } from "react-hook-form";

type CreateExerciseFormValues = {
  name: string;
  targetMuscleGroup: Muscle;
};

interface UpdateExerciseModalProps {
  exercise: Exercise;
}

export const UpdateExerciseModal = forwardRef(
  (
    { exercise }: UpdateExerciseModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const [updateExercise] = useUpdateExerciseMutation();

    const onSubmit: SubmitHandler<CreateExerciseFormValues> = async (
      data: CreateExerciseFormValues
    ) => {
      await updateExercise({
        id: exercise.id,
        name: data.name,
        targetMuscleGroup: data.targetMuscleGroup,
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

import { ForwardedRef, forwardRef } from "react";
import { Exercise } from "../../../models/exercise";
import { useForm, SubmitHandler } from "react-hook-form";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Keyboard } from "react-native";
import { ExerciseDetailForm } from "../forms/ExerciseDetailsForm";
import { PaginatedBottomModal } from "../../base/modal/PaginatedBottomModal";
import { ExerciseFormValues } from "../forms/types";
import { ExerciseInstructionsForm } from "../forms/ExerciseInstructionsForm";
import { BottomModalPage } from "../../base/modal/types";

interface ExerciseModalPages {
  detailPage?: Omit<BottomModalPage, 'component'>
  instructionsPage?: Omit<BottomModalPage, 'component'>
}

interface ExerciseModalProps {
  pages?: ExerciseModalPages
  onSubmit: SubmitHandler<ExerciseFormValues>;
  exercise?: Exercise;
}

export const ExerciseModal = forwardRef(
  (
    { pages, onSubmit, exercise }: ExerciseModalProps,
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

    const modalPages: BottomModalPage[] = [
      {
        component: <ExerciseDetailForm control={control} />,
        title: pages?.detailPage?.title ?? "Input exerecise details",
        subtitle: pages?.detailPage?.subtitle
      },
      {
        component: <ExerciseInstructionsForm control={control} />,
        title: pages?.instructionsPage?.title ?? "Default",
        subtitle: pages?.instructionsPage?.subtitle
      },
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
        onDismiss={reset}
      />
    );
  }
);

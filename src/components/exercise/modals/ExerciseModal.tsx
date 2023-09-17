import { PaginatedBottomModal } from "@/components/base/modal/PaginatedBottomModal";
import {
  BottomModalPage,
  BottomModalPageHeader,
} from "@/components/base/modal/types";
import { ExerciseDetailForm } from "@/components/exercise/forms/ExerciseDetailsForm";
import { ExerciseInstructionsForm } from "@/components/exercise/forms/ExerciseInstructionsForm";
import { SecondaryMuscleForm } from "@/components/exercise/forms/SecondaryMuscleForm";
import { TargetMuscleForm } from "@/components/exercise/forms/TargetMuscleForm";
import { ExerciseFormValues } from "@/components/exercise/forms/types";
import { Exercise } from "@/models/exercise";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { ForwardedRef, forwardRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Keyboard } from "react-native";

interface ExerciseModalPageHeaders {
  detailPage?: BottomModalPageHeader;
  musclesPage?: BottomModalPageHeader;
  instructionsPage?: BottomModalPageHeader;
}

interface ExerciseModalProps {
  headers?: ExerciseModalPageHeaders;
  onSubmit: SubmitHandler<ExerciseFormValues>;
  exercise?: Exercise;
}

export const ExerciseModal = forwardRef(
  (
    { headers, onSubmit, exercise }: ExerciseModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const { dismiss } = useBottomSheetModal();

    const {
      control,
      handleSubmit,
      reset,
      getValues,
      formState: { errors },
    } = useForm<ExerciseFormValues>({
      defaultValues: {
        name: exercise?.name ?? "",
        targetMuscleGroup: exercise?.targetMuscleGroup ?? "abductors",
        secondaryMuscleGroups: exercise?.secondaryMuscleGroups ?? [],
        description: exercise?.description ?? "",
        instructions: exercise?.instructions
          ? exercise.instructions.map((instruction) => ({
              description: instruction,
            }))
          : [{ description: "" }],
      },
    });

    // TODO: Use translation file

    const modalPages: BottomModalPage[] = [
      {
        component: <ExerciseDetailForm control={control} />,
        title: headers?.detailPage?.title ?? "Input exerecise details",
        subtitle: headers?.detailPage?.subtitle,
      },
      {
        component: <TargetMuscleForm control={control} />,
        title: headers?.musclesPage?.title ?? "Select pirmary muscle group",
        subtitle:
          headers?.musclesPage?.subtitle ??
          "The main target muscle required for the exercise",
      },
      {
        component: <SecondaryMuscleForm control={control} />,
        title: headers?.musclesPage?.title ?? "Select secondary muscle groups",
        subtitle:
          headers?.musclesPage?.subtitle ??
          "The support muscles that ensure stability and efficiency for the primary muscle",
      },
      {
        component: <ExerciseInstructionsForm control={control} />,
        title: headers?.instructionsPage?.title ?? "Default",
        subtitle: headers?.instructionsPage?.subtitle,
      },
    ];

    const closeModal = () => {
      if (Keyboard.isVisible()) Keyboard.dismiss();
      dismiss();
      reset();
    };

    const onValid = (data: ExerciseFormValues) => {
      console.log("hello");
      onSubmit(data);
      closeModal();
    };

    return (
      <PaginatedBottomModal
        ref={ref}
        pages={modalPages}
        onDismiss={reset}
        onSubmit={handleSubmit(onValid)}
      />
    );
  }
);

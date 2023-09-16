import { ForwardedRef, forwardRef, useEffect } from "react";
import { Exercise } from "../../../models/exercise";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Keyboard } from "react-native";
import { ExerciseDetailForm } from "../forms/ExerciseDetailsForm";
import { PaginatedBottomModal } from "../../base/modal/PaginatedBottomModal";
import { ExerciseFormValues } from "../forms/types";
import { ExerciseInstructionsForm } from "../forms/ExerciseInstructionsForm";
import { BottomModalPage, BottomModalPageHeader } from "../../base/modal/types";
import { ExerciseMuscleForm } from "../forms/ExerciseMusclesForm";

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

    const muscle = useWatch({
      control,
      name: "targetMuscleGroup",
      defaultValue: "abs",
    });

    useEffect(() => {
      console.log(muscle)
    }, [muscle])

    const modalPages: BottomModalPage[] = [
      {
        component: <ExerciseDetailForm control={control} />,
        title: headers?.detailPage?.title ?? "Input exerecise details",
        subtitle: headers?.detailPage?.subtitle,
      },
      {
        component: <ExerciseMuscleForm control={control} />,
        title: headers?.musclesPage?.title ?? "Add muscles",
        subtitle: headers?.musclesPage?.subtitle,
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

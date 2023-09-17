import { PaginatedBottomModal } from "@/components/base/modal/PaginatedBottomModal";
import { BottomModalPage } from "@/components/base/modal/types";
import { WorkoutBlock } from "@/components/workout/WorkoutBlock";
import { WorkoutPlanDetailsForm } from "@/components/workout/forms/WorkoutPlanDetailsForm";
import { WorkoutPlanFormValues } from "@/components/workout/forms/types";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ForwardedRef, forwardRef, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";

interface CreateTemplateModalProps {}

export const CreateTemplateModal = forwardRef(
  (props: CreateTemplateModalProps, ref: ForwardedRef<BottomSheetModal>) => {
    const defaultWorkoutDays = 3;

    const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<WorkoutPlanFormValues>({
      defaultValues: {
        name: "",
        description: "",
        weekCount: 4,
        daysPerWeek: defaultWorkoutDays,
      },
    });

    const workoutDays = useWatch({
      control,
      name: "daysPerWeek",
      defaultValue: defaultWorkoutDays,
    });

    const workoutPages = useMemo(() => {
      return [
        ...[...Array(workoutDays)].map((_, index) => ({
          component: <WorkoutBlock />,
          title: `Add day ${index + 1}`,
          subtitle: "Create a workout from a template for your plan",
        })),
      ];
    }, [workoutDays]);

    const modalPages: BottomModalPage[] = useMemo(() => {
      return [
        {
          component: <WorkoutPlanDetailsForm control={control} />,
          title: "Add plan",
          subtitle:
            "Create a new workout plan from your workout templates and exercises",
        },
        ...workoutPages,
      ];
    }, [workoutPages]);

    return <PaginatedBottomModal ref={ref} pages={modalPages} />;
  }
);

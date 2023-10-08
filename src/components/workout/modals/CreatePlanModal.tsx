import { PaginatedBottomModal } from "@/components/base/modal/PaginatedBottomModal";
import { BottomModalPage } from "@/components/base/modal/types";
import { WorkoutPlanDayForm } from "@/components/workout/forms/WorkoutPlanDayForm";
import { WorkoutPlanDetailsForm } from "@/components/workout/forms/WorkoutPlanDetailsForm";
import { WorkoutPlanFormValues } from "@/components/workout/forms/types";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ForwardedRef, forwardRef, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";

interface CreatePlanModalProps {}

export const CreatePlanModal = forwardRef(
  (props: CreatePlanModalProps, ref: ForwardedRef<BottomSheetModal>) => {
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
        workouts: [{ blocks: [] }],
      },
    });

    // fore each item in the workouts array a workout template entity is created (or updated?) and stored in the database (backend takes care of this?)
    // if a day is created from an existing workout template, but it is updated during the creation of the workout plan, a new workout template is saved (?)

    const workoutDays = useWatch({
      control,
      name: "daysPerWeek",
      defaultValue: defaultWorkoutDays,
    });

    const workoutPages = useMemo(
      () =>
        [...Array(workoutDays)].map((_, index) => ({
          component: <WorkoutPlanDayForm control={control} />,
          title: `Add day ${index + 1}`,
          subtitle: "Create a workout from a template for your plan",
        })),
      [workoutDays]
    );

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

    return (
      <PaginatedBottomModal
        ref={ref}
        pages={modalPages}
        onSubmit={() => console.log("submit")}
      />
    );
  }
);

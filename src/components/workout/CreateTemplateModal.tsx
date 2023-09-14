import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { WorkoutBlock } from "./WorkoutBlock";
import { useForm, useWatch } from "react-hook-form";
import { PaginatedBottomModal } from "../base/modal/PaginatedBottomModal";
import { WorkoutPlanDetailsForm } from "./forms/WorkoutPlanDetailsForm";
import { WorkoutPlanFormValues } from "./forms/types";
import { BottomModalPage } from "../base/modal/types";

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

    useEffect(() => console.log('workoud day', {workoutDays}), [workoutDays])

    const modalPages: BottomModalPage[] = useMemo(() => {
      return [
        {
          component: <WorkoutPlanDetailsForm control={control} />,
          title: "Add plan",
          subtitle:
            "Create a new workout plan from your workout templates and exercises",
        },
        ...workoutPages
      ];
    }, [workoutPages]);

    return <PaginatedBottomModal ref={ref} pages={modalPages} />;
  }
);

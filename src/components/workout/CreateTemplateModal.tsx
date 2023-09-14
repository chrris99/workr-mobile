import { ForwardedRef, forwardRef } from "react";
import {
  BottomSheetModal
} from "@gorhom/bottom-sheet";
import { WorkoutBlock } from "./WorkoutBlock";
import { useForm } from "react-hook-form";
import { PaginatedBottomModal } from "../base/modal/PaginatedBottomModal";
import { WorkoutPlanDetailsForm } from "./forms/WorkoutPlanDetailsForm";
import { WorkoutPlanFormValues } from "./forms/types";
import { BottomModalPage } from "../base/modal/types";

interface CreateTemplateModalProps {}

export const CreateTemplateModal = forwardRef(
  (props: CreateTemplateModalProps, ref: ForwardedRef<BottomSheetModal>) => {
    const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<WorkoutPlanFormValues>({
      defaultValues: {
        name: "",
        description: "",
      },
    });

    const modalPages: BottomModalPage[] = [
      {
        component: <WorkoutPlanDetailsForm control={control} />,
        title: "Add plan",
        subtitle:
          "Create a new workout plan from your workout templates and exercises",
      },
      {
        component: <WorkoutBlock />,
        title: "Define workout",
        subtitle: "todo",
      },
      {
        component: <WorkoutBlock />,
        title: "Define workout",
        subtitle: "todo",
      },
    ];

    return <PaginatedBottomModal ref={ref} pages={modalPages} />;
  }
);

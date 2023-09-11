import { StyleSheet } from "react-native";
import { ForwardedRef, forwardRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { spacing } from "../../design-system/spacing/spacing";
import { usePaginatedComponent } from "../../hooks/usePaginatedComponent";
import { WorkoutBlock } from "./WorkoutBlock";
import { useForm } from "react-hook-form";
import { PaginatedBottomModal } from "../base/modal/PaginatedBottomModal";

interface CreateTemplateModalProps {}

type WorkoutPlanFormValues = {
  name: string;
  description?: string;
};

export const CreateTemplateModal = forwardRef(
  (props: CreateTemplateModalProps, ref: ForwardedRef<BottomSheetModal>) => {
    const modalPages = [<WorkoutBlock />, <WorkoutBlock />, <WorkoutBlock />];

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

    return (
      <PaginatedBottomModal
        ref={ref}
        pages={modalPages}
        title="Add plan"
        subtitle="Create a new workout plan from your workout templates and exercises"
      />
    );
  }
);
import { StyleSheet, View } from "react-native";
import { ForwardedRef, forwardRef } from "react";
import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { spacing } from "../../design-system/spacing/spacing";
import { usePaginatedComponent } from "../../hooks/usePaginatedComponent";
import { WorkoutBlock } from "./WorkoutBlock";
import { useForm } from "react-hook-form";
import { PaginatedBottomModal } from "../base/modal/PaginatedBottomModal";
import Text from "../../design-system/typography/Text";
import { WorkoutPlanDetailsForm } from "./forms/WorkoutPlanDetailsForm";
import { WorkoutPlanFormValues } from "./forms/types";

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

    const modalPages = [
      <WorkoutPlanDetailsForm control={control} />,
      <WorkoutBlock />,
      <WorkoutBlock />,
    ];

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

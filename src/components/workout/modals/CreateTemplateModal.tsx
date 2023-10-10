import { useCreateWorkoutTemplateMutation } from "@/api/api";
import { PaginatedBottomModal } from "@/components/base/modal/PaginatedBottomModal";
import { BottomModalPage } from "@/components/base/modal/types";
import { WorkoutTemplateBlocksForm } from "@/components/workout/forms/WorkoutTemplateBlocksForm";
import { WorkoutTemplateDetailsForm } from "@/components/workout/forms/WorkoutTemplateDetailsForm";
import { WorkoutTemplateFormValues } from "@/components/workout/forms/types";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { ForwardedRef, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { Keyboard, StyleSheet } from "react-native";

interface CreateTemplateModalProps {}

export const CreateTemplateModal = forwardRef(
  (props: CreateTemplateModalProps, ref: ForwardedRef<BottomSheetModal>) => {
    const { dismiss } = useBottomSheetModal();

    const [createWorkoutTemplate] = useCreateWorkoutTemplateMutation();

    const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<WorkoutTemplateFormValues>({
      defaultValues: {
        name: "",
        description: "",
        blocks: [{ items: [{ sets: [] }] }],
      },
    });

    const modalPages: BottomModalPage[] = [
      {
        component: <WorkoutTemplateDetailsForm control={control} />,
        title: "Input workout template details",
      },
      {
        component: <WorkoutTemplateBlocksForm control={control} />,
        title: "Add exercises",
      },
    ];

    const closeModal = () => {
      if (Keyboard.isVisible()) Keyboard.dismiss();
      dismiss();
      reset();
    };

    const onValid = async (data: WorkoutTemplateFormValues) => {
      console.log("data submit", { data });
      const body = {
        name: data.name,
        description: data.description,
        blocks: data.blocks,
      };
      console.log("body", body);

      await createWorkoutTemplate(body);
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

const styles = StyleSheet.create({
  form: {
    gap: spacing["spacing-4"],
    paddingBottom: spacing["spacing-7"],
  },
  blockContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: spacing["spacing-2"],
    borderWidth: 2,
    borderColor: colors["gray-300"],
    borderStyle: "dashed",
    padding: spacing["spacing-4"],
    minHeight: 350,
  },
});

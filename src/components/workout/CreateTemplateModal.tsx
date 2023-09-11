import { StyleSheet, View } from "react-native";
import { ForwardedRef, forwardRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomModal } from "../base/modal/BottomModal";
import { spacing } from "../../design-system/spacing/spacing";
import { usePaginatedComponent } from "../../hooks/usePaginatedComponent";
import { Pagination } from "../base/Pagination";
import { Button } from "../../design-system/buttons/Button";
import { WorkoutBlock } from "./WorkoutBlock";
import { useForm } from "react-hook-form";

interface CreateTemplateModalProps {}

type WorkoutPlanFormValues = {
  name: string;
  description?: string;
}

export const CreateTemplateModal = forwardRef(
  (props: CreateTemplateModalProps, ref: ForwardedRef<BottomSheetModal>) => {
    const { steps, currentStepIndex, isFirstStep, prev, next } =
      usePaginatedComponent([
        <WorkoutBlock />,
        <WorkoutBlock />,
        <WorkoutBlock />,
      ]);

      const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<WorkoutPlanFormValues>({
        defaultValues: {
          name: "",
          description: ""
        },
      });

    //TODO: Paginated component elements must have an ID prop

    return (
      <BottomModal
        ref={ref}
        title="Add plan"
        subtitle="Create a new workout plan from your workout templates and exercises"
      >
        <View style={styles.progress}>
          <Pagination currentStep={currentStepIndex + 1} steps={steps.length} />
        </View>

        <View style={styles.content}>{steps[currentStepIndex]}</View>

        <View style={styles.pagination}>
          <Button
            text="Back"
            iconName="ArrowLeft"
            iconPosition="leading"
            type={"gray-solid-lg"}
            onPress={prev}
          />
          <Button
            text="Next"
            iconName="ArrowRight"
            type={"primary-solid-lg"}
            onPress={next}
          />
        </View>
      </BottomModal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    padding: spacing["spacing-5"],
  },
  progress: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing["spacing-1.5"],
  },
  content: {
    paddingVertical: spacing["spacing-7"],
  },
  pagination: {
    flexDirection: "row",
    justifyContent: 'center',
    gap: spacing["spacing-4"],
  },
  button: {
    backgroundColor: 'red'
  }
});

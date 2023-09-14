import { ForwardedRef, forwardRef } from "react";
import { BottomModal } from "./BottomModal";
import { PaginatedBottomModalProps } from "./types";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { StyleSheet, View } from "react-native";
import { Pagination } from "../Pagination";
import { Button } from "../../../design-system/buttons/Button";
import { spacing } from "../../../design-system/spacing/spacing";
import { usePaginatedComponent } from "../../../hooks/usePaginatedComponent";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const PaginatedBottomModal = forwardRef(
  (
    { title, subtitle, onDismiss, pages, scrollable }: PaginatedBottomModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const insets = useSafeAreaInsets();

    const {
      step,
      stepCount,
      currentStepIndex,
      prev,
      next,
      reset: resetPagination,
    } = usePaginatedComponent(pages);

    return (
      <BottomModal
        ref={ref}
        title={title}
        subtitle={subtitle}
        onDismiss={() => {
          if (onDismiss) onDismiss();
          resetPagination();
        }}
        scrollable
      >
        <View style={styles.progress}>
          <Pagination currentStep={currentStepIndex + 1} steps={stepCount} />
        </View>

        {step}

        <View style={[styles.pagination, { paddingBottom: insets.bottom }]}>
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
    justifyContent: "center",
    gap: spacing["spacing-4"],
  },
});

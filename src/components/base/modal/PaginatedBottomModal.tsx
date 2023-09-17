import { BottomModal } from "@/components/base/modal/BottomModal";
import { PaginatedBottomModalProps } from "@/components/base/modal/types";
import { Pagination } from "@/components/base/pagination/Pagination";
import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import { usePaginatedBottomModal } from "@/hooks/usePaginatedBottomModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ForwardedRef, forwardRef } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const PaginatedBottomModal = forwardRef(
  (
    { pages, onDismiss, onSubmit, submitTitle }: PaginatedBottomModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const insets = useSafeAreaInsets();

    const {
      currentPageIndex,
      title,
      subtitle,
      component,
      isLastPage,
      prev,
      next,
      reset: resetPagination,
    } = usePaginatedBottomModal(pages);

    const primaryButtonText = isLastPage ? submitTitle ?? "Submit" : "Next";

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
        {component}

        <View style={[styles.pagination, { paddingBottom: insets.bottom }]}>
          <Button
            text="Back"
            iconName="ArrowLeft"
            iconPosition="leading"
            type={"gray-link-lg"}
            onPress={prev}
          />
          <Pagination
            currentStepIndex={currentPageIndex}
            steps={pages.length}
          />
          <Button
            text={primaryButtonText}
            iconName="ArrowRight"
            type={"primary-solid-lg"}
            onPress={() => {
              isLastPage ? onSubmit() : next();
            }}
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
    justifyContent: "space-between",
    alignItems: "center",
  },
});

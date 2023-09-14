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
import { usePaginatedBottomModal } from "../../../hooks/usePaginatedBottomModal";

export const PaginatedBottomModal = forwardRef(
  (
    { onDismiss, pages }: PaginatedBottomModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const insets = useSafeAreaInsets();

    const {
      currentPageIndex,
      title,
      subtitle,
      component,
      prev,
      next,
      reset: resetPagination,
    } = usePaginatedBottomModal(pages);

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
          <Pagination currentStepIndex={currentPageIndex} steps={pages.length} />
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
    justifyContent: "space-between",
    alignItems: 'center'
  },
});

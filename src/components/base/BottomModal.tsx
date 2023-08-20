import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { ForwardedRef, forwardRef, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import { spacing } from "../../design-system/spacing/spacing";

type BottomModalProps = Pick<BottomSheetModalProps, "children">;

export const BottomModal = forwardRef(
  ({ children }: BottomModalProps, ref: ForwardedRef<BottomSheetModal>) => {
    const snapPoints = useMemo(() => ["10%", "50%", "85%"], []);

    const renderBackdropComponent = useCallback(
      (props: BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop {...props} />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={2}
        snapPoints={snapPoints}
        backdropComponent={renderBackdropComponent}
      >
        {children}
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  modalScreen: {
    padding: spacing["spacing-8"],
  },
});

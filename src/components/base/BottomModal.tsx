import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { ForwardedRef, RefObject, forwardRef, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";

type BottomModalProps = Pick<BottomSheetModalProps, "index" | "children">;

export const BottomModal = forwardRef(
  (
    { children }: BottomModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const snapPoints = useMemo(() => ["25%", "50%"], []);
    
    const renderBackdropComponent = useCallback(
      (props: BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={1}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdropComponent}
      >
        {children}
      </BottomSheetModal>
    );
  }
);
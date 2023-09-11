import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { Keyboard, StyleSheet, View, ViewProps } from "react-native";
import { colors } from "../../../design-system/colors/colors";
import { spacing } from "../../../design-system/spacing/spacing";
import { useForwardRef } from "../../../hooks/useForwardRef";
import { BottomModalHeader } from "./BottomModalHeader";
import { shadows } from "../../../design-system/shadows/shadows";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Divider } from "../../../design-system/spacing/Divider";

interface BottomModalProps extends Pick<ViewProps, "children"> {
  title: string;
  subtitle?: string;
  onDismiss?: () => void;
}

const DYNAMIC_SNAPPOINT_PLACEHOLDER = "CONTENT_HEIGHT";

export const BottomModal = forwardRef(
  (
    { children, title, subtitle, onDismiss }: BottomModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const insets = useSafeAreaInsets();
    const modalRef = useForwardRef<BottomSheetModal>(ref);
    const initialSnapPoints = useMemo(
      () => ["15%", DYNAMIC_SNAPPOINT_PLACEHOLDER],
      []
    );

    const {
      animatedHandleHeight,
      animatedSnapPoints,
      animatedContentHeight,
      handleContentLayout,
    } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

    const renderBackdropComponent = useCallback(
      (props: BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          onPress={() => {
            if (Keyboard.isVisible()) Keyboard.dismiss();
          }}
          pressBehavior={"collapse"}
        />
      ),
      []
    );

    /*
    useEffect(() => {
      Keyboard.addListener('keyboardDidHide', () => modalRef.current.snapToIndex(1))
      return () => Keyboard.removeAllListeners('keyboardDidHide')
    }, [])*/

    return (
      <BottomSheetModal
        ref={modalRef}
        index={1}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        backdropComponent={renderBackdropComponent}
        backgroundStyle={styles.background}
        onDismiss={onDismiss}
        keyboardBehavior={"interactive"}
        keyboardBlurBehavior={"restore"}
      >
        <BottomSheetView
          style={[styles.container, { paddingBottom: insets.bottom }]}
          onLayout={handleContentLayout}
        >
          <BottomModalHeader title={title} subtitle={subtitle} />
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors["gray-50"],
    ...shadows["md"],
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing["spacing-6"],
  },
});

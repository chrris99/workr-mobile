import { BottomModalHeader } from "@/components/base/modal/BottomModalHeader";
import { BottomModalProps } from "@/components/base/modal/types";
import { colors } from "@/design-system/colors/colors";
import { shadows } from "@/design-system/shadows/shadows";
import { spacing } from "@/design-system/spacing/spacing";
import { useForwardRef } from "@/hooks/useForwardRef";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { ForwardedRef, forwardRef, useCallback, useMemo } from "react";
import { Dimensions, Keyboard, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const BottomModal = forwardRef(
  (
    {
      children,
      title,
      subtitle,
      onDismiss,
      scrollable = false,
    }: BottomModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const insets = useSafeAreaInsets();
    const modalRef = useForwardRef<BottomSheetModal>(ref);
    const initialSnapPoints = useMemo(() => ["15%"], []);

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

    return (
      <BottomSheetModal
        ref={modalRef}
        index={1}
        enableDynamicSizing
        topInset={insets.top}
        maxDynamicContentSize={Dimensions.get("window").height * 0.85}
        snapPoints={initialSnapPoints}
        backdropComponent={renderBackdropComponent}
        backgroundStyle={styles.background}
        onDismiss={onDismiss}
        keyboardBehavior={"interactive"}
        keyboardBlurBehavior={"restore"}
        enablePanDownToClose={false}
      >
        <BottomSheetScrollView
          style={styles.container}
          stickyHeaderIndices={[0]}
          bounces={false}
        >
          <BottomModalHeader title={title} subtitle={subtitle} />
          {children}
        </BottomSheetScrollView>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors["gray-50"],
    ...shadows["lg"],
  },
  container: {
    paddingHorizontal: spacing["spacing-6"],
  },
});

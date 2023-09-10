import {
  BottomSheetBackdrop,
  BottomSheetModal
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import {ForwardedRef, forwardRef, useCallback, useEffect, useMemo} from "react";
import {Keyboard, StyleSheet, View, ViewProps} from "react-native";
import { colors } from "../../../design-system/colors/colors";
import { spacing } from "../../../design-system/spacing/spacing";
import { useForwardRef } from "../../../hooks/useForwardRef";
import { BottomModalHeader } from "./BottomModalHeader";
import { shadows } from "../../../design-system/shadows/shadows";

interface BottomModalProps extends Pick<ViewProps, "children"> {
  title: string;
  subtitle?: string;
  onDismiss?: () => void;
}

export const BottomModal = forwardRef(
  (
    { children, title, subtitle, onDismiss }: BottomModalProps,
    ref: ForwardedRef<BottomSheetModal>
  ) => {
    const modalRef = useForwardRef<BottomSheetModal>(ref);
    const snapPoints = useMemo(() => ["15%", "50%", "85%"], []);

    const renderBackdropComponent = useCallback(
      (props: BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop {...props} onPress={() => {
          if (Keyboard.isVisible()) Keyboard.dismiss()
        }} pressBehavior={0}/>
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
        snapPoints={snapPoints}
        backdropComponent={renderBackdropComponent}
        backgroundStyle={styles.background}
        onDismiss={onDismiss}
        keyboardBehavior={'extend'}
      >
        <View style={styles.container}>
          <BottomModalHeader title={title} subtitle={subtitle} />
          {children}
        </View>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors["gray-50"],
    ...shadows['md']
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing["spacing-6"],
  },
});

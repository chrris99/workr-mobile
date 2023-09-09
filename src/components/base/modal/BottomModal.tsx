import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
} from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { ForwardedRef, forwardRef, useCallback, useMemo } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { colors } from "../../../design-system/colors/colors";
import { Button } from "../../../design-system/buttons/Button";
import Text from "../../../design-system/typography/Text";
import { spacing } from "../../../design-system/spacing/spacing";
import { useForwardRef } from "../../../hooks/useForwardRef";

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
    const snapPoints = useMemo(() => ["15%", "60%", "85%"], []);

    const renderBackdropComponent = useCallback(
      (props: BottomSheetDefaultBackdropProps) => (
        <BottomSheetBackdrop {...props} pressBehavior={0} />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={modalRef}
        index={1}
        snapPoints={snapPoints}
        backdropComponent={renderBackdropComponent}
        backgroundStyle={styles.background}
        onDismiss={onDismiss}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text type={"body-L-semibold"}>{title}</Text>
              <Button
                type={"gray-link-2xl"}
                iconName={"Close"}
                onPress={() => modalRef.current.close()}
              />
            </View>
            {subtitle && (
              <Text
                type={"body-S-regular"}
                color={"gray-600"}
                style={styles.subtitle}
              >
                {subtitle}
              </Text>
            )}
          </View>
          {children}
        </View>
      </BottomSheetModal>
    );
  }
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors["gray-50"],
  },
  container: {
    paddingHorizontal: spacing["spacing-6"],
  },
  header: {
    paddingBottom: spacing["spacing-7"],
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    paddingTop: spacing["spacing-1"],
  },
});

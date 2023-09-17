import { BottomModalHeaderProps } from "@/components/base/modal/types";
import { Button } from "@/design-system/buttons/Button";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Keyboard, StyleSheet, View } from "react-native";

export const BottomModalHeader = ({
  title,
  subtitle,
}: BottomModalHeaderProps) => {
  const { dismiss } = useBottomSheetModal();

  const handleClose = () => {
    if (Keyboard.isVisible()) Keyboard.dismiss();
    dismiss();
  };

  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Text type={"body-L-semibold"}>{title}</Text>
        <Button
          type={"gray-link-2xl"}
          iconName={"Close"}
          onPress={handleClose}
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
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors["gray-50"],
    paddingBottom: spacing["spacing-5"],
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

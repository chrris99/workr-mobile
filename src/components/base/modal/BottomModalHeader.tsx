import {Keyboard, StyleSheet, View} from "react-native";
import Text from "../../../design-system/typography/Text";
import { Button } from "../../../design-system/buttons/Button";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { spacing } from "../../../design-system/spacing/spacing";

interface BottomModalHeaderProps {
  title: string;
  subtitle?: string;
}

export const BottomModalHeader = ({
  title,
  subtitle,
}: BottomModalHeaderProps) => {
  const { dismiss } = useBottomSheetModal();

  const handleClose = () => {
    if(Keyboard.isVisible()) Keyboard.dismiss();
    dismiss();
  }

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

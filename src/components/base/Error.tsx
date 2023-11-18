import { Button } from "@/design-system/buttons/Button";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { StyleSheet, View } from "react-native";

type ErrorProps = {
  refetch: () => void;
  message?: string;
};

export const Error = ({ refetch, message = "Error" }: ErrorProps) => {
  return (
    <View style={styles.container}>
      <Text type="heading-S-medium">{message}</Text>
      <Button
        type={"primary-solid-lg"}
        text="Try again"
        iconName="ArrowRotateRight"
        onPress={refetch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing["spacing-4"],
    alignItems: "center",
    justifyContent: "center",
  },
});

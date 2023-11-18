import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type LoadingProps = {
  message?: string;
};

export const Loading = ({ message = "Loading..." }: LoadingProps) => {
  return (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator color={colors["primary-700"]} size="large" />
      <Text type={"body-M-regular"} color={"gray-500"}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    gap: spacing["spacing-4"],
    alignItems: "center",
    justifyContent: "center",
  },
});

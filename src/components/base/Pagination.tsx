import { StyleSheet, View, ViewStyle } from "react-native";
import { spacing } from "../../design-system/spacing/spacing";
import { colors } from "../../design-system/colors/colors";

interface PaginationIndicatorProps {
  isCompleted: boolean;
}

const PaginationIndicator = ({ isCompleted }: PaginationIndicatorProps) => {
  const backgroundColorStyle: ViewStyle = {
    backgroundColor: isCompleted
      ? colors["primary-700"]
      : colors["primary-200"],
  };

  return (
    <View style={[styles.paginationIndicator, backgroundColorStyle]}></View>
  );
};

interface PaginationProps {
  steps: number;
  currentStep: number;
}

export const Pagination = ({ steps, currentStep }: PaginationProps) => {
  const indicators = [...Array(steps)].map((_, index) => (
    <PaginationIndicator key={index} isCompleted={index < currentStep} />
  ));

  return <View style={styles.pagination}>{indicators}</View>;
};

const styles = StyleSheet.create({
  paginationIndicator: {
    height: spacing["spacing-2"],
    width: spacing["spacing-12"],
    borderRadius: 4,
  },
  pagination: {
    display: "flex",
    flexDirection: "row",
    gap: spacing["spacing-3"],
  },
});

import { StyleSheet, View, ViewStyle } from "react-native";
import { spacing } from "../../../design-system/spacing/spacing";
import { colors } from "../../../design-system/colors/colors";
import { PaginationIndicatorProps, PaginationProps } from "./types";

const PaginationIndicator = ({
  isActive,
  paginationStyle,
}: PaginationIndicatorProps) => {
  const backgroundColorStyle: ViewStyle = {
    backgroundColor: isActive ? colors["primary-700"] : colors["primary-200"],
  };

  const sizeStyle = styles[paginationStyle];

  return <View style={[sizeStyle, backgroundColorStyle]}></View>;
};

export const Pagination = ({ steps, currentStepIndex, type = 'active', style = 'dot' }: PaginationProps) => {
  const calculateIsActive = (index: number) => {
    if (type === 'active') return currentStepIndex === index

    return index <= currentStepIndex
  }

  const indicators = [...Array(steps)].map((_, index) => (
    <PaginationIndicator key={index} isActive={calculateIsActive(index)} paginationStyle={style} />
  ));

  return <View style={styles.pagination}>{indicators}</View>;
};

const styles = StyleSheet.create({
  pagination: {
    display: "flex",
    flexDirection: "row",
    gap: spacing["spacing-2"],
  },
  dot: {
    height: spacing["spacing-2"],
    width: spacing["spacing-2"],
    borderRadius: 4,
  },
  bar: {
    height: spacing["spacing-2"],
    width: spacing["spacing-12"],
    borderRadius: 4,
  },
});

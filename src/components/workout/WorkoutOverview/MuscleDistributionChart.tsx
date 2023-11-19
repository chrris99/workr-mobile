import { MuscleDistributionLegend } from "@/components/workout/WorkoutOverview/MuscleDistribution/MuscleDistributionLegend";
import { VolumeByMuscle } from "@/components/workout/WorkoutOverview/WorkoutOverview";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import { Muscle } from "@/types/muscle";
import { useMemo } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

export type MuscleDistributionChartData = {
  percent: number;
  color: string;
  value: Muscle;
};
type MuscleDistributionChartProps = {
  data: VolumeByMuscle;
};

const chartColors = [
  colors["primary-800"],
  colors["primary-600"],
  colors["primary-400"],
  colors["primary-200"],
];

const { width } = Dimensions.get("window");
const size = width / 3; // Adjust the size of the chart
const strokeWidth = spacing["spacing-8"]; // Width of the ring segments
const radius = size / 2 - strokeWidth / 2;

// Function to calculate the stroke dasharray for each segment
const getCoordinatesForPercent = (percent: number) => {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
};

export const MuscleDistributionChart = ({
  data,
}: MuscleDistributionChartProps) => {
  let cumulativePercent = 0;

  const chartData: MuscleDistributionChartData[] = useMemo(
    () =>
      Object.entries(data).map(([muscle, percentage], index) => ({
        value: muscle as Muscle,
        percent: percentage,
        color: chartColors[index],
      })),
    []
  );

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          {chartData.map((slice, index) => {
            const [startX, startY] =
              getCoordinatesForPercent(cumulativePercent);
            cumulativePercent += slice.percent;

            const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
            const largeArcFlag = slice.percent > 0.5 ? 1 : 0;

            // Path for each segment
            const pathData = [
              `M ${startX * radius + size / 2} ${startY * radius + size / 2}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${
                endX * radius + size / 2
              } ${endY * radius + size / 2}`,
            ].join(" ");

            return (
              <Path
                key={index}
                d={pathData}
                fill="none"
                stroke={slice.color}
                strokeWidth={strokeWidth}
              />
            );
          })}
        </G>
      </Svg>
      <MuscleDistributionLegend data={chartData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing["spacing-10"],
    alignItems: "center",
  },
});

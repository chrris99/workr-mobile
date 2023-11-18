import { Dimensions, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

type MuscleDistributionChartProps = {};

const data = [
  { percent: 0.4, color: "red" },
  { percent: 0.5, color: "blue" },
  { percent: 0.1, color: "green" },
];

const { width } = Dimensions.get("window");
const size = width - 60; // Adjust the size of the chart
const strokeWidth = 40; // Width of the ring segments
const radius = size / 2 - strokeWidth / 2;
const circumference = radius * 2 * Math.PI;

// Function to calculate the stroke dasharray for each segment
const getCoordinatesForPercent = (percent: number) => {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
};

export const MuscleDistributionChart = () => {
  let cumulativePercent = 0;

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          {data.map((slice, index) => {
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
    </View>
  );
};

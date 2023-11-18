import {
  BASE_HORIZONTAL_GUTTER,
  spacing,
} from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { StyleSheet, View } from "react-native";

export const ExerciseOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text type={"body-L-semibold"}>Overview</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: BASE_HORIZONTAL_GUTTER,
    paddingTop: spacing["spacing-6"],
  },
});

/*

      <View style={styles.content}>
        <Text>{exercise?.name}</Text>
        <View style={styles.muscleContainer}>
          {exercise.secondaryMuscleGroups?.map((muscle) => (
            <Badge type="solid" text={muscle} />
          ))}
        </View>
      </View>

*/

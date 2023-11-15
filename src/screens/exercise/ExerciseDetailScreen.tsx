import Badge from "@/components/base/Badge";
import { Header } from "@/components/base/Header";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { ExerciseDetailScreenRouteProp } from "@/navigation/ExerciseStackNavigator";
import { testId } from "@/utils/test/testId";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGetExerciseByIdQuery } from "../../api/api";

export const EXERCISE_DETAIL_TEST_IDS = {
  SCREEN: testId("exercise-detail-screen"),
} as const;

export const ExerciseDetailScreen = () => {
  const insets = useSafeAreaInsets();
  const { params } = useRoute<ExerciseDetailScreenRouteProp>();
  const { data: exercise, isFetching } = useGetExerciseByIdQuery(params.id);

  if (isFetching)
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );

  // TODO: Top tab navigator: History, charts, records
  // TODO: Overview card
  // TODO: Instructions section

  return (
    <View testID={EXERCISE_DETAIL_TEST_IDS.SCREEN}>
      {exercise && (
        <View style={styles.container}>
          <Header title={exercise.name} />
          <View style={styles.muscleContainer}>
            {exercise.secondaryMuscleGroups?.map((muscle) => (
              <Badge type="solid" text={muscle} />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing["spacing-4"],
  },
  muscleContainer: {
    flexDirection: "row",
    gap: spacing["spacing-2"],
  },
});

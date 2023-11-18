import { colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { Exercise } from "@/models/exercise";
import { ExerciseListScreenNavigationProps } from "@/navigation/ExerciseStackNavigator";
import { muscleToIcon } from "@/types/muscle";
import { testId } from "@/utils/test/testId";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const EXERCISE_CARD_TEST_IDS = {
  CARD: testId("exercise-card"),
  NAME: testId("exercise-name"),
  DESCRIPTION: testId("exercise-description"),
  PRIMARY_MUSCLE: testId("exercise-primary-muscle"),
  SECONDARY_MUSCLE: testId("exercise-secondary-muscle"),
} as const;

type ExerciseCardProps = {
  exercise: Exercise;
};

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const navigation = useNavigation<ExerciseListScreenNavigationProps>();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      testID={EXERCISE_CARD_TEST_IDS.CARD}
      onPress={() => navigation.navigate("ExerciseDetail", { id: exercise.id })}
    >
      <View style={styles.container}>
        <Image
          source={require("../../../../assets/images/kettlebell.png")}
          style={styles.image}
        />

        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.primaryMuscle}>
              <Icon name={muscleToIcon(exercise.targetMuscleGroup)} size="S" />
              <Text
                testID={EXERCISE_CARD_TEST_IDS.PRIMARY_MUSCLE}
                type="body-S-semibold"
                color="primary-700"
              >
                {exercise.targetMuscleGroup.toUpperCase()}
              </Text>
            </View>

            <Text testID={EXERCISE_CARD_TEST_IDS.NAME} type="body-L-semibold">
              {exercise.name}
            </Text>
          </View>

          {exercise.description && (
            <Text
              testID={EXERCISE_CARD_TEST_IDS.DESCRIPTION}
              numberOfLines={2}
              ellipsizeMode={"tail"}
              type={"body-XS-regular"}
              color={"gray-500"}
            >
              {exercise.description}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: spacing["spacing-4"],
    backgroundColor: colors["white"],
    height: spacing["spacing-32"],
    flexDirection: "row",
  },
  image: {
    flex: 2,
    borderTopLeftRadius: spacing["spacing-4"],
    borderBottomLeftRadius: spacing["spacing-4"],
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    padding: spacing["spacing-4"],
    overflow: "hidden",
    gap: spacing["spacing-1"],
    flex: 3,
    justifyContent: "space-between",
  },
  header: {
    gap: spacing["spacing-0.5"],
  },
  primaryMuscle: {
    flexDirection: "row",
    gap: spacing["spacing-1.5"],
    alignItems: "center",
  },
  muscles: {
    flexDirection: "row",
  },
});

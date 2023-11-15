import { useDeleteExerciseMutation } from "@/api/api";
import Badge from "@/components/base/Badge";
import { UpdateExerciseModal } from "@/components/exercise/modals/UpdateExerciseModal";
import { Button } from "@/design-system/buttons/Button";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { Exercise } from "@/models/exercise";
import { ExerciseListScreenNavigationProps } from "@/navigation/ExerciseStackNavigator";
import { testId } from "@/utils/test/testId";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Swipeable, TouchableOpacity } from "react-native-gesture-handler";

type ExerciseCardProps = {
  exercise: Exercise;
};

const AnimatedView = Animated.createAnimatedComponent(View);

export const EXERCISE_CARD_TEST_IDS = {
  CARD: testId("exercise-card"),
  TOUCHABLE: testId("exercise-card-touchable"),
  NAME: testId("exercise-name"),
  DESCRIPTION: testId("exercise-description"),
  PRIMARY_MUSCLE: testId("exercise-primary-muscle"),
  SECONDARY_MUSCLE: testId("exercise-secondary-muscle"),
  EDIT_BUTTON: testId("edit-exercise-button"),
  DELETE_BUTTON: testId("delete-exercise-button"),
} as const;

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const swipeableRef = useRef<Swipeable>(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const navigation = useNavigation<ExerciseListScreenNavigationProps>();

  const openModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const [deleteExercise] = useDeleteExerciseMutation();

  const renderRightActions = (
    dragX: Animated.AnimatedInterpolation<number>
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-80, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <>
        <View style={styles.actionContainer}>
          <AnimatedView style={{ transform: [{ scale }] }} />

          <Button
            testID={EXERCISE_CARD_TEST_IDS.EDIT_BUTTON}
            type={"secondary-icon-sm"}
            iconName="Edit"
            onPress={() => {
              openModal();
              swipeableRef.current?.close();
            }}
          />
          <Button
            testID={EXERCISE_CARD_TEST_IDS.DELETE_BUTTON}
            type={"secondary-icon-sm"}
            iconName="Trash"
            onPress={() => deleteExercise(exercise.id)}
          />
        </View>
        <UpdateExerciseModal ref={bottomSheetRef} exercise={exercise} />
      </>
    );
  };

  return (
    <Swipeable
      testID={EXERCISE_CARD_TEST_IDS.CARD}
      ref={swipeableRef}
      renderRightActions={renderRightActions}
      rightThreshold={30}
    >
      <TouchableOpacity
        testID={EXERCISE_CARD_TEST_IDS.TOUCHABLE}
        style={styles.container}
        onPress={() =>
          navigation.navigate("ExerciseDetail", { id: exercise.id })
        }
      >
        <View style={styles.name}>
          <Text
            testID={EXERCISE_CARD_TEST_IDS.PRIMARY_MUSCLE}
            type="body-S-semibold"
            color="primary-700"
          >
            {exercise.targetMuscleGroup.toUpperCase()}
          </Text>
          <Text testID={EXERCISE_CARD_TEST_IDS.NAME} type="body-L-semibold">
            {exercise.name}
          </Text>
          {exercise.description && (
            <Text
              testID={EXERCISE_CARD_TEST_IDS.DESCRIPTION}
              type={"body-M-regular"}
              color={"gray-500"}
            >
              {exercise.description.length > 100
                ? `${exercise.description.slice(0, 100)}...`
                : exercise.description}
            </Text>
          )}
        </View>
        <View style={styles.muscles}>
          {exercise.secondaryMuscleGroups && (
            <Badge
              testId={EXERCISE_CARD_TEST_IDS.SECONDARY_MUSCLE}
              type="solid"
              text={exercise.secondaryMuscleGroups[0]}
            />
          )}
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing["spacing-4"],
    borderRadius: spacing["spacing-4"],
    backgroundColor: colors["white"],
    gap: spacing["spacing-4"],
  },
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing["spacing-5"],
  },
  name: {
    gap: spacing["spacing-1"],
  },
  muscles: {
    flexDirection: "row",
  },
});

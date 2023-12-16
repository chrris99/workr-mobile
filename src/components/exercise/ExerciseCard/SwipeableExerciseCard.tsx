import { useDeleteExerciseMutation } from "@/api/api";
import { ExerciseCard } from "@/components/exercise/ExerciseCard/ExerciseCard";
import { UpdateExerciseModal } from "@/components/exercise/modals/UpdateExerciseModal";
import { Button } from "@/design-system/buttons/Button";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import { Exercise } from "@/models/exercise";
import { testId } from "@/utils/test/testId";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

type ExerciseCardProps = {
  exercise: Exercise;
};

const AnimatedView = Animated.createAnimatedComponent(View);

export const SWIPEABLE_EXERCISE_CARD_TEST_IDS = {
  SWIPEABLE_CARD: testId("swipeable-exercise-card"),
  EDIT_BUTTON: testId("edit-exercise-button"),
  DELETE_BUTTON: testId("delete-exercise-button"),
} as const;

export const SwipeableExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const swipeableRef = useRef<Swipeable>(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

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
            testID={SWIPEABLE_EXERCISE_CARD_TEST_IDS.EDIT_BUTTON}
            type={"gray-icon-sm"}
            iconName="Edit"
            style={[styles.button, styles.editButton]}
            onPress={() => {
              openModal();
              swipeableRef.current?.close();
            }}
          />
          <Button
            testID={SWIPEABLE_EXERCISE_CARD_TEST_IDS.DELETE_BUTTON}
            type={"gray-icon-md"}
            iconName="Trash"
            style={[styles.button, styles.deleteButton]}
            onPress={() => deleteExercise(exercise.id)}
          />
        </View>
        <UpdateExerciseModal ref={bottomSheetRef} exercise={exercise} />
      </>
    );
  };

  return (
    <Swipeable
      testID={SWIPEABLE_EXERCISE_CARD_TEST_IDS.SWIPEABLE_CARD}
      ref={swipeableRef}
      renderRightActions={renderRightActions}
      rightThreshold={30}
    >
      <ExerciseCard exercise={exercise} />
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing["spacing-3"],
    paddingLeft: spacing["spacing-6"],
  },
  button: {
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: spacing["spacing-4"],
    borderRadius: spacing["spacing-4"],
  },
  deleteButton: {
    backgroundColor: colors["error-200"],
  },
  editButton: {
    backgroundColor: colors["primary-200"],
  },
});

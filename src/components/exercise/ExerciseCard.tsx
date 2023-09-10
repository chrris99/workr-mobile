import { Animated, StyleSheet, View } from "react-native";
import { Exercise } from "../../models/exercise";
import Text from "../../design-system/typography/Text";
import { spacing } from "../../design-system/spacing/spacing";
import { colors } from "../../design-system/colors/colors";
import { Swipeable } from "react-native-gesture-handler";
import { useDeleteExerciseMutation } from "../../api/api";
import Badge from "../base/Badge";
import { Button } from "../../design-system/buttons/Button";
import { shadows } from "../../design-system/shadows/shadows";
import { CreateExerciseModal } from "./modals/CreateExerciseModal";
import { useCallback, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { UpdateExerciseModal } from "./modals/UpdateExerciseModal";

interface ExerciseCardProps {
  exercise: Exercise;
}

const AnimatedView = Animated.createAnimatedComponent(View);

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
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
            type={"secondary-icon-sm"}
            iconName="Edit"
            onPress={() => {
              openModal();
              swipeableRef.current?.close();

            }}
          />
          <Button
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
      ref={swipeableRef}
      renderRightActions={renderRightActions}
      enableTrackpadTwoFingerGesture
      rightThreshold={30}
    >
      <View style={styles.container}>
        <View style={styles.name}>
          <Text type="body-S-semibold" color="primary-700">
            {exercise.targetMuscleGroup}
          </Text>
          <Text type="body-L-semibold">{exercise.name}</Text>
          {exercise.description && (
            <Text type={"body-M-regular"} color={"gray-500"}>
              {exercise.description}
            </Text>
          )}
        </View>
        <View style={styles.muscles}>
          {exercise.forceType && (
            <Badge type="solid" text={exercise.forceType} />
          )}
        </View>
      </View>
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

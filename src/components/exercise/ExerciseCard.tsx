import { useDeleteExerciseMutation } from "@/api/api";
import Badge from "@/components/base/Badge";
import { UpdateExerciseModal } from "@/components/exercise/modals/UpdateExerciseModal";
import { Button } from "@/design-system/buttons/Button";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { Exercise } from "@/models/exercise";
import { ExerciseListScreenNavigationProps } from "@/navigation/ExerciseStackNavigator";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { Swipeable, TouchableOpacity } from "react-native-gesture-handler";

interface ExerciseCardProps {
  exercise: Exercise;
}

const AnimatedView = Animated.createAnimatedComponent(View);

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
      rightThreshold={30}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate("ExerciseDetail", { id: exercise.id })
        }
      >
        <View style={styles.name}>
          <Text type="body-S-semibold" color="primary-700">
            {exercise.targetMuscleGroup.toUpperCase()}
          </Text>
          <Text type="body-L-semibold">{exercise.name}</Text>
          {exercise.description && (
            <Text type={"body-M-regular"} color={"gray-500"}>
              {exercise.description.length > 100
                ? `${exercise.description.slice(0, 100)}...`
                : exercise.description}
            </Text>
          )}
        </View>
        <View style={styles.muscles}>
          {exercise.secondaryMuscleGroups && (
            <Badge type="solid" text={exercise.secondaryMuscleGroups[0]} />
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

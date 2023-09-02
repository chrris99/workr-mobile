import { Animated, StyleSheet, View } from "react-native";
import { Exercise } from "../../models/exercise";
import Text from "../../design-system/typography/Text";
import { spacing } from "../../design-system/spacing/spacing";
import { colors } from "../../design-system/colors/colors";
import { Swipeable } from "react-native-gesture-handler";
import { Button } from "../base/Button";
import { Icon } from "../../design-system/icons/Icon";
import { useDeleteExerciseMutation } from "../../api/api";
import Badge from "../base/Badge";

interface ExerciseCardProps {
  exercise: Exercise;
}

const AnimatedView = Animated.createAnimatedComponent(View);

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
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
      <View style={styles.actionContainer}>
        <AnimatedView style={{ transform: [{ scale }] }} />

        <Button
          type="solid"
          backgroundColor="primary-600"
          icon={<Icon color="white" name={"Edit"} />}
        />
        <Button
          type="solid"
          backgroundColor="error-600"
          icon={<Icon color="white" name={"Trash"} />}
          onPress={() => deleteExercise(exercise.id)}
        />
      </View>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      enableTrackpadTwoFingerGesture
      rightThreshold={40}
    >
      <View style={styles.container}>
        <View style={styles.name}>
          <Text type="body-S-semibold" color="primary-700">
            {exercise.targetMuscleGroup}
          </Text>
          <Text type="body-L-semibold">{exercise.name}</Text>
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
    backgroundColor: colors["gray-50"],
    gap: spacing["spacing-4"],
  },
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: spacing["spacing-3"],
    gap: spacing["spacing-3"],
  },
  name: {
    gap: spacing["spacing-1"],
  },
  muscles: {
    flexDirection: "row",
  },
});

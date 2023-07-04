import { StyleSheet, View } from "react-native";
import { Exercise } from "../../models/exercise";
import Text from "../../design-system/typography/Text";
import { spacing } from "../../design-system/spacing/spacing";
import { colors } from "../../design-system/colors/colors";

interface ExerciseCardProps {
  exercise: Exercise;
}

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text type="body-S-semibold" color="primary-700">
          {exercise.targetMuscleGroup}
        </Text>
        <Text type="body-L-semibold">{exercise.name}</Text>
      </View>
      <View style={styles.muscles}>
        <Text type="body-M-medium" color="gray-500">{exercise.forceType}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing["spacing-4"],
    borderColor: colors["gray-200"],
    borderWidth: 1,
    borderRadius: spacing["spacing-4"],
    backgroundColor: colors["white"],
    gap: spacing['spacing-4']
  },
  name: {
    gap: spacing["spacing-1"],
  },
  muscles: {
    flexDirection: 'row'
  }
});

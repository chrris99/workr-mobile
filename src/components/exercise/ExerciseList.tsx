import { ExerciseCard } from "@/components/exercise/ExerciseCard/ExerciseCard";
import { spacing } from "@/design-system/spacing/spacing";
import { Exercise } from "@/models/exercise";
import { testId } from "@/utils/test/testId";
import { FlatList, StyleSheet, View } from "react-native";

type ExerciseListProps = {
  exercises: Exercise[];
};

export const EXERCISE_LIST_TEST_IDS = {
  LIST: testId("exercise-list"),
  SEPARATOR: testId("exercise-list-separator"),
} as const;

export const ExerciseList = ({ exercises }: ExerciseListProps) => {
  return (
    <FlatList
      testID={EXERCISE_LIST_TEST_IDS.LIST}
      data={exercises}
      renderItem={({ item }) => <ExerciseCard exercise={item} />}
      ItemSeparatorComponent={() => (
        <View
          testID={EXERCISE_LIST_TEST_IDS.SEPARATOR}
          style={styles.separator}
        ></View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: spacing["spacing-4"],
  },
});

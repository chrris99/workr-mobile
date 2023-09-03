import { FlatList, StyleSheet, View } from "react-native";
import { Exercise } from "../../models/exercise";
import { ExerciseCard } from "./ExerciseCard";
import { spacing } from "../../design-system/spacing/spacing";
import { EmptyState } from "./EmptyState";

interface ExerciseTableProps {
  exercises: Exercise[];
}

export const ExerciseList = ({ exercises }: ExerciseTableProps) => {
  return (
    <FlatList
      data={exercises}
      renderItem={({ item }) => <ExerciseCard exercise={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: spacing["spacing-4"],
  },
});

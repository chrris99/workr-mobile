import { ExerciseCard } from "@/components/exercise/ExerciseCard";
import { spacing } from "@/design-system/spacing/spacing";
import { Exercise } from "@/models/exercise";
import { FlatList, StyleSheet, View } from "react-native";

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

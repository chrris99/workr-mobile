import { Header } from "@/components/base/Header";
import { WorkoutTemplateList } from "@/components/workout/WorkoutTemplate/WorkoutTemplateList";
import { spacing } from "@/design-system/spacing/spacing";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const WorkoutScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Header
        title="Workouts"
        subtitle="See your workout templates and active workouts all in one place"
      />

      <WorkoutTemplateList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing["spacing-4"],
  },
});

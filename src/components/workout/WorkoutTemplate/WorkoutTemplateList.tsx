import { useGetWorkoutTemplatesQuery } from "@/api/api";
import { Error } from "@/components/base/Error";
import { Loading } from "@/components/base/Loading";
import { WorkoutTemplateCard } from "@/components/workout/WorkoutTemplate/WorkoutTemplateCard";
import { spacing } from "@/design-system/spacing/spacing";
import { testId } from "@/utils/test/testId";
import { FlatList, StyleSheet, View } from "react-native";

export const WORKOUT_TEMPLATE_LIST_TEST_IDS = {
  LIST: testId("workout-template-list"),
};

export const WorkoutTemplateList = () => {
  const { data, error, isLoading, isError, refetch } =
    useGetWorkoutTemplatesQuery();

  if (isLoading) return <Loading message="Loading your workouts..." />;
  if (isError) return <Error refetch={refetch} />;

  return (
    <FlatList
      testID={WORKOUT_TEMPLATE_LIST_TEST_IDS.LIST}
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <WorkoutTemplateCard workoutTemplate={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: spacing["spacing-8"],
  },
});

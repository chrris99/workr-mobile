import { useGetWorkoutTemplatesQuery } from "@/api/api";
import { Error } from "@/components/base/Error";
import { Loading } from "@/components/base/Loading";
import { WorkoutTemplateCard } from "@/components/workout/WorkoutTemplate/WorkoutTemplateCard";
import { spacing } from "@/design-system/spacing/spacing";
import { testId } from "@/utils/test/testId";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

export const WORKOUT_TEMPLATE_LIST_TEST_IDS = {
  LIST: testId("workout-template-list"),
};

export const WorkoutTemplateList = () => {
  const { data, isLoading, isError, refetch } = useGetWorkoutTemplatesQuery();

  if (isLoading) return <Loading message="Loading your workouts..." />;
  if (isError) return <Error refetch={refetch} />;

  return (
    <FlatList
      testID={WORKOUT_TEMPLATE_LIST_TEST_IDS.LIST}
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <WorkoutTemplateCard workoutTemplate={item} />
        </View>
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get("window").width * 0.8,
  },
  separator: {
    width: spacing["spacing-4"],
  },
});

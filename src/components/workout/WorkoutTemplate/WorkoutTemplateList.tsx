import { useGetWorkoutTemplatesQuery } from "@/api/api";
import { Error } from "@/components/base/Error";
import { Loading } from "@/components/base/Loading";
import { Carousel } from "@/components/base/carousel/Carousel";
import { WorkoutTemplateCard } from "@/components/workout/WorkoutTemplate/WorkoutTemplateCard";
import { testId } from "@/utils/test/testId";
import { Dimensions, StyleSheet, View } from "react-native";

export const WORKOUT_TEMPLATE_LIST_TEST_IDS = {
  LIST: testId("workout-template-list"),
};

export const WorkoutTemplateList = () => {
  const { data, isLoading, isError, refetch } = useGetWorkoutTemplatesQuery();

  if (isLoading) return <Loading message="Loading your workouts..." />;
  if (isError) return <Error refetch={refetch} />;

  return (
    <Carousel
      testID={WORKOUT_TEMPLATE_LIST_TEST_IDS.LIST}
      data={data}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <WorkoutTemplateCard workoutTemplate={item} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: Dimensions.get("window").width * 0.8,
  },
});

import { useGetWorkoutTemplatesQuery } from "@/api/api";
import { WorkoutTemplateCard } from "@/components/workout/WorkoutTemplate/WorkoutTemplateCard";
import Text from "@/design-system/typography/Text";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

export const WorkoutTemplateList = () => {
  const { data, isLoading, isError } = useGetWorkoutTemplatesQuery();

  if (isError)
    return (
      <View>
        <Text>An error occured</Text>
      </View>
    );

  if (isLoading) return <ActivityIndicator />;

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <WorkoutTemplateCard workoutTemplate={item} />}
    />
  );
};

const styles = StyleSheet.create({});

import { useGetWorkoutTemplateByIdQuery } from "@/api/api";
import { Error } from "@/components/base/Error";
import { Loading } from "@/components/base/Loading";
import { WorkoutBlock } from "@/components/workout/WorkoutBlock/WorkoutBlock";
import { WorkoutOverview } from "@/components/workout/WorkoutOverview/WorkoutOverview";
import { Button } from "@/design-system/buttons/Button";
import {
  BASE_HORIZONTAL_GUTTER,
  spacing,
} from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { WorkoutTemplateDetailScreenRouteProp } from "@/navigation/WorkoutTemplateStackNavigator";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const WorkoutDetailScreen = () => {
  const { params } = useRoute<WorkoutTemplateDetailScreenRouteProp>();
  const {
    data: workoutTemplate,
    isLoading,
    isError,
    refetch,
  } = useGetWorkoutTemplateByIdQuery(params.id);

  useEffect(() => {
    if (workoutTemplate) {
      const res = workoutTemplate.blocks
        .map((block) => block.items)
        .flat()
        .filter((item) => !("items" in item));

      console.log(res);
    }
  }, [workoutTemplate]);

  if (isLoading) return <Loading message="Loading workout template" />;
  if (isError) return <Error refetch={refetch} />;

  const thumbnailHeight = Dimensions.get("window").height * 0.5;

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={[styles.thumbnailContainer, { height: thumbnailHeight }]}>
          <Image
            style={styles.thumbnail}
            source={require("../../../assets/images/push-up.png")}
          />
          <View style={styles.title}>
            <Text type={"heading-XS-semibold"} color="white">
              {workoutTemplate?.name}
            </Text>
            <Text color="white" style={{ opacity: 0.6 }} numberOfLines={3}>
              {workoutTemplate?.description}
            </Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.overview}>
            <Text type={"body-L-semibold"}>Overview</Text>

            {/** TODO: Add workout overview card, muslce distribution chart */}
            {workoutTemplate && (
              <WorkoutOverview workoutTemplate={workoutTemplate} />
            )}
          </View>

          <Text type={"body-L-semibold"}>What you'll do</Text>
          {workoutTemplate?.blocks.map((workoutBlock, index) => (
            <WorkoutBlock key={index} workoutBlock={workoutBlock} />
          ))}
        </View>
      </ScrollView>
      <Button
        type={"primary-solid-lg"}
        text="Start Workout"
        iconName="ArrowRight"
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  thumbnailContainer: {
    backgroundColor: "black",
    position: "relative",
  },
  thumbnail: { height: "100%", width: "100%", opacity: 0.7 },
  title: {
    position: "absolute",
    bottom: spacing["spacing-6"],
    left: BASE_HORIZONTAL_GUTTER,
  },
  content: {
    paddingHorizontal: BASE_HORIZONTAL_GUTTER,
    marginTop: spacing["spacing-6"],
    gap: spacing["spacing-4"],
  },
  overview: {},
  blocks: {},
  cta: {},
});

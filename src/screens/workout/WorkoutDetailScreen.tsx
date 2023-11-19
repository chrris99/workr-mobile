import { useGetWorkoutTemplateByIdQuery } from "@/api/api";
import { Error } from "@/components/base/Error";
import { Loading } from "@/components/base/Loading";
import { WorkoutBlock } from "@/components/workout/WorkoutBlock/WorkoutBlock";
import { Button } from "@/design-system/buttons/Button";
import {
  BASE_HORIZONTAL_GUTTER,
  spacing,
} from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { WorkoutTemplateDetailScreenRouteProp } from "@/navigation/WorkoutTemplateStackNavigator";
import { requireImage } from "@/utils/requireImage";
import { useRoute } from "@react-navigation/native";
import { useMemo } from "react";
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

  const thumbnailImage = useMemo(
    () => requireImage(workoutTemplate?.blocks[0].items[0].exercise.imageUrl),
    [workoutTemplate]
  );

  if (isLoading) return <Loading message="Loading workout template" />;
  if (isError) return <Error refetch={refetch} />;

  const thumbnailHeight = Dimensions.get("window").height * 0.5;

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={[styles.thumbnailContainer, { height: thumbnailHeight }]}>
          <Image style={styles.thumbnail} source={thumbnailImage} />
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
          <Button
            type={"primary-solid-lg"}
            text="Start Workout"
            iconName="ArrowRight"
          />
          {/** TODO: Add workout overview card, muslce distribution chart 
             *           <View style={styles.overview}>
             *             <Text type={"body-L-semibold"}>Overview</Text>
            {workoutTemplate && (
              <WorkoutOverview workoutTemplate={workoutTemplate} />
            )}
                      </View>
            */}

          <Text type={"body-L-semibold"}>What you'll do</Text>
          <View style={styles.blocks}>
            {workoutTemplate?.blocks.map((workoutBlock, index) => (
              <WorkoutBlock key={index} workoutBlock={workoutBlock} />
            ))}
          </View>
        </View>
      </ScrollView>
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
    marginVertical: spacing["spacing-6"],
    gap: spacing["spacing-4"],
  },
  overview: {},
  blocks: {
    gap: spacing["spacing-8"],
  },
  cta: {},
});

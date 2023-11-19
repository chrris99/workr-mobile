import { Error } from "@/components/base/Error";
import { Loading } from "@/components/base/Loading";
import {
  BASE_HORIZONTAL_GUTTER,
  spacing,
} from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import ExerciseDetailTopTabNavigator from "@/navigation/ExerciseDetailTopTabNavigator";
import { ExerciseDetailScreenRouteProp } from "@/navigation/ExerciseStackNavigator";
import { requireImage } from "@/utils/requireImage";
import { testId } from "@/utils/test/testId";
import { useRoute } from "@react-navigation/native";
import { useMemo } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useGetExerciseByIdQuery } from "../../api/api";

export const EXERCISE_DETAIL_TEST_IDS = {
  SCREEN: testId("exercise-detail-screen"),
} as const;

export const ExerciseDetailScreen = () => {
  const insets = useSafeAreaInsets();
  const { params } = useRoute<ExerciseDetailScreenRouteProp>();
  const {
    data: exercise,
    isLoading,
    isError,
    refetch,
  } = useGetExerciseByIdQuery(params.id);

  const thumbnailHeight = Dimensions.get("window").height * 0.5;
  const thumbnailImage = useMemo(
    () => requireImage(exercise?.imageUrl),
    [exercise?.imageUrl]
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error refetch={refetch} />;

  // TODO: Top tab navigator: History, charts, records
  // TODO: Overview card
  // TODO: Instructions section

  return (
    <ScrollView
      testID={EXERCISE_DETAIL_TEST_IDS.SCREEN}
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={[styles.thumbnailContainer, { height: thumbnailHeight }]}>
        <Image style={styles.thumbnail} source={thumbnailImage} />
        <View style={styles.title}>
          <Text type={"heading-XS-semibold"} color="white">
            {exercise?.name}
          </Text>
          <Text
            color="white"
            style={{ opacity: 0.7 }}
            numberOfLines={2}
            ellipsizeMode={"tail"}
          >
            {exercise?.description}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <ExerciseDetailTopTabNavigator exercise={exercise} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  thumbnailContainer: {
    backgroundColor: "black",
    position: "relative",
  },
  thumbnail: { height: "100%", width: "100%", opacity: 0.6 },
  title: {
    position: "absolute",
    bottom: spacing["spacing-6"],
    paddingHorizontal: BASE_HORIZONTAL_GUTTER,
  },
  content: {
    flex: 1,
  },
  muscleContainer: {
    flexDirection: "row",
    gap: spacing["spacing-2"],
  },
});

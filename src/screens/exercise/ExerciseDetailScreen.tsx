import { StyleSheet, View } from "react-native";
import { useGetExerciseByIdQuery } from "../../api/api";
import Text from "../../design-system/typography/Text";
import { spacing } from "../../design-system/spacing/spacing";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "../../components/base/Header";
import { useRoute } from "@react-navigation/native";
import { ExerciseDetailScreenRouteProp } from "../../navigation/ExerciseStackNavigator";

export const ExerciseDetailScreen = () => {
  const insets = useSafeAreaInsets();
  const { params } = useRoute<ExerciseDetailScreenRouteProp>();
  const { data: exercise, isFetching } = useGetExerciseByIdQuery(params.id);

  if (isFetching)
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>
    );

  return (
    <>
      {exercise && (
        <View style={styles.container}>
          <Header
            title={exercise.name}
            subtitle={exercise.description}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing["spacing-4"],
  },
});

import { useGetWorkoutTemplateByIdQuery } from "@/api/api";
import { Error } from "@/components/base/Error";
import { Loading } from "@/components/base/Loading";
import Text from "@/design-system/typography/Text";
import { WorkoutTemplateDetailScreenRouteProp } from "@/navigation/WorkoutTemplateStackNavigator";
import { useRoute } from "@react-navigation/native";
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

  if (isLoading) return <Loading message="Loading workout template" />;
  if (isError) return <Error refetch={refetch} />;

  const screenHeight = Dimensions.get("window").height;
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: screenHeight * 0.5 }}>
        <Image
          style={styles.thumbnail}
          source={require("../../../assets/images/trainer-woman-thumbnail-2.png")}
        />
      </View>
      <View>
        <Text type={"heading-XS-semibold"}>{workoutTemplate?.name}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  thumbnail: { height: "100%", width: "100%" },
});

import Text from "@/design-system/typography/Text";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const WorkoutDetailScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: screenHeight / 3 }}>
        <Image
          style={styles.thumbnail}
          source={require("../../../assets/images/trainer-woman-thumbnail-2.png")}
        />
      </View>
      <View style={styles.content}>
        <Text>Workout detail screen</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "red" },
  thumbnail: { height: "100%", width: "100%" },
  content: { flex: 1, backgroundColor: "green" },
});

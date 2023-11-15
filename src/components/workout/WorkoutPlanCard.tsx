import { colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type WorkoutPlanCardProps = {
  weeks: number;
  days: number;
  createdBy: string;
  title: string;
};

export const WorkoutPlanCard = ({
  title,
  weeks,
  days,
  createdBy,
}: WorkoutPlanCardProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image
        style={styles.thumbnail}
        source={require("../../../assets/images/trainer-woman-thumbnail-2.png")}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text type={"body-L-semibold"}>Workout Plan</Text>
          <Icon name={"ArrowUpRight"} size="S" />
        </View>

        <View style={styles.details}>
          <View style={styles.label}>
            <Icon color={"primary-700"} size={"XS"} name="Calendar" />
            <Text>6 weeks</Text>
          </View>

          <View style={styles.label}>
            <Icon color={"primary-700"} size={"XS"} name="Weight" />
            <Text>3 workouts</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["white"],
    borderRadius: 8,
    overflow: "hidden",
  },
  thumbnail: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: spacing["spacing-4"],
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    gap: spacing["spacing-4"],
    paddingTop: spacing["spacing-2"],
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing["spacing-1"],
  },
});

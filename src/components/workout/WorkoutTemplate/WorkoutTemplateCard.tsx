import { Button } from "@/design-system/buttons/Button";
import { colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { WorkoutTemplate } from "@/models/workoutTemplate";
import { testId } from "@/utils/test/testId";
import { useMemo } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export const WORKOUT_TEMPLATE_CARD_TEST_IDS = {
  CARD: testId("workout-template-card"),
  NAME: testId("workout-template-name"),
};

type WorkoutTemplateCardProps = {
  workoutTemplate: WorkoutTemplate;
};

export const WorkoutTemplateCard = ({
  workoutTemplate,
}: WorkoutTemplateCardProps) => {
  const exerciseCount = useMemo(
    () =>
      workoutTemplate.blocks.reduce(
        (acc, block) => acc + block.items.length,
        0
      ),
    [workoutTemplate]
  );

  return (
    <TouchableOpacity
      testID={WORKOUT_TEMPLATE_CARD_TEST_IDS.CARD}
      style={styles.container}
      activeOpacity={0.8}
    >
      <Image
        style={styles.thumbnail}
        source={require("../../../../assets/images/trainer-woman-thumbnail-2.png")}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text type={"body-L-semibold"}>{workoutTemplate.name}</Text>
        </View>

        <View style={styles.details}>
          <View style={styles.label}>
            <Icon color={"primary-700"} size={"S"} name="Weight" />
            <Text type={"body-M-regular"}>{`${exerciseCount} ${
              exerciseCount > 1 ? "exercises" : "exercise"
            }`}</Text>
          </View>
        </View>

        <Button type={"primary-solid-lg"} text="Start" iconName="Stopwatch" />
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
    gap: spacing["spacing-2"],
  },
});

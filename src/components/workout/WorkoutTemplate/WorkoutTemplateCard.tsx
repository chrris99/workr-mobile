import { colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { WorkoutTemplateListScreenNavigationProps } from "@/navigation/WorkoutTemplateStackNavigator";
import { WorkoutTemplate } from "@/types/workout";
import { testId } from "@/utils/test/testId";
import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation<WorkoutTemplateListScreenNavigationProps>();

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
      onPress={() =>
        navigation.navigate("WorkoutTemplateDetail", { id: workoutTemplate.id })
      }
    >
      <Image
        style={styles.thumbnail}
        source={require("../../../../assets/images/push-up.png")}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text
            type={"body-L-semibold"}
            testID={WORKOUT_TEMPLATE_CARD_TEST_IDS.NAME}
          >
            {workoutTemplate.name}
          </Text>
        </View>

        <View style={styles.details}>
          <View style={styles.label}>
            <Icon color={"primary-700"} size={"S"} name="Weight" />
            <Text type={"body-M-regular"}>{`${exerciseCount} ${
              exerciseCount > 1 ? "exercises" : "exercise"
            }`}</Text>
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
    gap: spacing["spacing-2"],
  },
});

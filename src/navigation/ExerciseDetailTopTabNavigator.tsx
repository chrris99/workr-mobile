import { Color, colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { spacing } from "@/design-system/spacing/spacing";
import Text from "@/design-system/typography/Text";
import { Exercise } from "@/models/exercise";
import { ExerciseHistoryScreen } from "@/screens/exercise/ExerciseHistoryScreen";
import { ExerciseOverviewScreen } from "@/screens/exercise/ExerciseOverviewScreen";
import {
  MaterialTopTabNavigationProp,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { StyleSheet, View } from "react-native";

type ExerciseDetailRouteParams = {
  exercise: Exercise;
};

type ExerciseDetailTopTabParamList = {
  ExerciseOverview: ExerciseDetailRouteParams;
  ExerciseHistory: ExerciseDetailRouteParams;
};

export type ExerciseOverviewScreenNavigationProps =
  MaterialTopTabNavigationProp<
    ExerciseDetailTopTabParamList,
    "ExerciseOverview"
  >;
export type ExerciseHistoryScreenNavigationProps = MaterialTopTabNavigationProp<
  ExerciseDetailTopTabParamList,
  "ExerciseHistory"
>;

const ExerciseDetailTopTab =
  createMaterialTopTabNavigator<ExerciseDetailTopTabParamList>();

const ExerciseDetailTopTabNavigator = ({
  exercise,
}: ExerciseDetailRouteParams) => {
  const ACTIVE_COLOR: Color = "primary-700";
  const INACTIVE_COLOR: Color = "gray-400";

  return (
    <ExerciseDetailTopTab.Navigator
      initialRouteName="ExerciseOverview"
      screenOptions={{
        tabBarActiveTintColor: ACTIVE_COLOR,
        tabBarInactiveTintColor: INACTIVE_COLOR,
        tabBarIndicatorStyle: {
          height: 3,
          backgroundColor: colors[ACTIVE_COLOR],
        },
        tabBarItemStyle: styles.tabBarItem,
        swipeEnabled: false,
        tabBarPressOpacity: 0.8,
      }}
    >
      <ExerciseDetailTopTab.Screen
        name="ExerciseOverview"
        options={{
          title: "Overview",
          tabBarLabel: ({ focused }) => (
            <Text
              type="body-M-medium"
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            >
              Overview
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Icon
                name="ExerciseOverview"
                size="S"
                color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
              />
            </View>
          ),
        }}
      >
        {(props) => <ExerciseOverviewScreen {...props} exercise={exercise} />}
      </ExerciseDetailTopTab.Screen>
      <ExerciseDetailTopTab.Screen
        name="ExerciseHistory"
        component={ExerciseHistoryScreen}
        options={{
          title: "History",
          tabBarLabel: ({ focused }) => (
            <Text
              type="body-M-medium"
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            >
              History
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIcon}>
              <Icon
                name="Chart"
                size="S"
                color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
              />
            </View>
          ),
        }}
      />
    </ExerciseDetailTopTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarItem: { flexDirection: "row", gap: spacing["spacing-1"] },
  tabBarIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExerciseDetailTopTabNavigator;

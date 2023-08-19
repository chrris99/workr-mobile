import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PlanScreen from "../screens/PlanScreen";
import ExerciseScreen from "../screens/ExerciseScreen";
import { Icon } from "../design-system/icons/Icon";
import { Color, colors } from "../design-system/colors/colors";

type RootTabParamList = {
  Home: undefined;
  Plan: undefined;
  Exercise: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigator = () => {
  const ACTIVE_COLOR: Color = "primary-700";
  const INACTIVE_COLOR: Color = "gray-400";

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: colors[INACTIVE_COLOR],
        tabBarActiveTintColor: colors[ACTIVE_COLOR],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"Home"}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Plan"
        component={PlanScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"Target"}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Exercise"
        component={ExerciseScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"Weight"}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={"User"}
              color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;

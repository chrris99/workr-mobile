import { Color, colors } from "@/design-system/colors/colors";
import { Icon } from "@/design-system/icons/Icon";
import { IconName } from "@/design-system/icons/icons";
import ProfileStackNavigator from "@/navigation/ProfileStackNavigator";
import WorkoutTemplateStackNavigator from "@/navigation/WorkoutTemplateStackNavigator";
import HomeScreen from "@/screens/HomeScreen";
import PlanScreen from "@/screens/PlanScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExerciseStackNavigator from "./ExerciseStackNavigator";

type RootTabParamList = {
  Home: undefined;
  Plan: undefined;
  Workout: undefined;
  Exercise: undefined;
  You: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigator = () => {
  const ACTIVE_COLOR: Color = "primary-700";
  const INACTIVE_COLOR: Color = "gray-400";

  const tabBarIcon = (iconName: IconName, focused: boolean) => (
    <Icon name={iconName} color={focused ? ACTIVE_COLOR : INACTIVE_COLOR} />
  );

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
          tabBarIcon: ({ focused }) => tabBarIcon("Home", focused),
        }}
      />
      <Tab.Screen
        name="Plan"
        component={PlanScreen}
        options={{
          tabBarIcon: ({ focused }) => tabBarIcon("Target", focused),
        }}
      />
      <Tab.Screen
        name="Workout"
        component={WorkoutTemplateStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => tabBarIcon("Stopwatch", focused),
        }}
      />
      <Tab.Screen
        name="Exercise"
        component={ExerciseStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => tabBarIcon("Weight", focused),
        }}
      />
      <Tab.Screen
        name="You"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => tabBarIcon("User", focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;

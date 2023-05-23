import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PlanScreen from "../screens/PlanScreen";
import ExerciseScreen from "../screens/ExerciseScreen";

type RootTabParamList = {
  Home: undefined;
  Plan: undefined;
  Exercise: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Plan" component={PlanScreen} />
      <Tab.Screen name="Exercise" component={ExerciseScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;

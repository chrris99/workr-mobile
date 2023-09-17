import ExerciseScreen from "@/screens/ExerciseScreen";
import { ExerciseDetailScreen } from "@/screens/exercise/ExerciseDetailScreen";
import { RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

type ExerciseDetailRoutePrams = {
  id: string;
};

type ExerciseStackParamList = {
  ExerciseList: undefined;
  ExerciseDetail: ExerciseDetailRoutePrams;
};

export type ExerciseListScreenNavigationProps = StackNavigationProp<
  ExerciseStackParamList,
  "ExerciseList"
>;
export type ExerciseDetailScreenNavigationProps = StackNavigationProp<
  ExerciseStackParamList,
  "ExerciseDetail"
>;
export type ExerciseDetailScreenRouteProp = RouteProp<
  ExerciseStackParamList,
  "ExerciseDetail"
>;

const ExerciseStack = createStackNavigator<ExerciseStackParamList>();

const ExerciseStackNavigator = () => {
  return (
    <ExerciseStack.Navigator
      initialRouteName="ExerciseList"
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    >
      <ExerciseStack.Screen name="ExerciseList" component={ExerciseScreen} />
      <ExerciseStack.Screen
        name="ExerciseDetail"
        component={ExerciseDetailScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: true,
          headerBackTitle: "Exercises",
        }}
      />
    </ExerciseStack.Navigator>
  );
};

export default ExerciseStackNavigator;

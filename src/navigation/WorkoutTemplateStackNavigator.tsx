import { Icon } from "@/design-system/icons/Icon";
import { BASE_HORIZONTAL_GUTTER } from "@/design-system/spacing/spacing";
import { ExerciseDetailRoutePrams } from "@/navigation/ExerciseStackNavigator";
import { ExerciseDetailScreen } from "@/screens/exercise/ExerciseDetailScreen";
import { WorkoutDetailScreen } from "@/screens/workout/WorkoutDetailScreen";
import { WorkoutScreen } from "@/screens/workout/WorkoutScreen";
import { RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

type WorkoutTemplateDetailRoutePrams = {
  id: string;
};

type WorkoutTemplateStackParamList = {
  WorkoutTemplateList: undefined;
  WorkoutTemplateDetail: WorkoutTemplateDetailRoutePrams;
  ExerciseDetail: ExerciseDetailRoutePrams;
};

export type WorkoutTemplateListScreenNavigationProps = StackNavigationProp<
  WorkoutTemplateStackParamList,
  "WorkoutTemplateList"
>;
export type WorkoutTemplateDetailScreenNavigationProps = StackNavigationProp<
  WorkoutTemplateStackParamList,
  "WorkoutTemplateDetail"
>;
export type WorkoutTemplateDetailScreenRouteProp = RouteProp<
  WorkoutTemplateStackParamList,
  "WorkoutTemplateDetail"
>;

const WorkoutTemplateStack =
  createStackNavigator<WorkoutTemplateStackParamList>();

const WorkoutTemplateStackNavigator = () => {
  return (
    <WorkoutTemplateStack.Navigator
      initialRouteName="WorkoutTemplateList"
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    >
      <WorkoutTemplateStack.Screen
        name="WorkoutTemplateList"
        component={WorkoutScreen}
      />
      <WorkoutTemplateStack.Screen
        name="WorkoutTemplateDetail"
        component={WorkoutDetailScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          headerBackImage: () => (
            <Icon name="ArrowLeft" strokeWidth={2.5} color={"white"} />
          ),
          headerLeftContainerStyle: { paddingLeft: BASE_HORIZONTAL_GUTTER },
        }}
      />
      <WorkoutTemplateStack.Screen
        name="ExerciseDetail"
        component={ExerciseDetailScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerTransparent: true,
          headerBackImage: () => (
            <Icon name="ArrowLeft" strokeWidth={2.5} color={"white"} />
          ),
          headerLeftContainerStyle: { paddingLeft: BASE_HORIZONTAL_GUTTER },
        }}
      />
    </WorkoutTemplateStack.Navigator>
  );
};

export default WorkoutTemplateStackNavigator;

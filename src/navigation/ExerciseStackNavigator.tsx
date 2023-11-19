import { Icon } from "@/design-system/icons/Icon";
import { BASE_HORIZONTAL_GUTTER } from "@/design-system/spacing/spacing";
import ExerciseScreen from "@/screens/ExerciseScreen";
import { ExerciseDetailScreen } from "@/screens/exercise/ExerciseDetailScreen";
import { RouteProp } from "@react-navigation/native";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

export type ExerciseDetailRoutePrams = {
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
          headerTitle: "",
          headerTransparent: true,
          headerBackImage: () => (
            <Icon name="ArrowLeft" strokeWidth={2.5} color={"white"} />
          ),
          headerLeftContainerStyle: { paddingLeft: BASE_HORIZONTAL_GUTTER },
        }}
      />
    </ExerciseStack.Navigator>
  );
};

export default ExerciseStackNavigator;

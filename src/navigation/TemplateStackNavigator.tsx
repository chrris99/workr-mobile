import {
  StackNavigationOptions,
  StackNavigationProp,
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { CreateTemplateName } from "../components/workout/CreateTemplateName";
import { CreateTemplateBlock } from "../components/workout/CreateTemplateBlock";
import {
  NavigationContainer,
  RouteProp,
  useNavigationContainerRef,
  useNavigationState,
} from "@react-navigation/native";
import { useMemo } from "react";
import Text from "../design-system/typography/Text";

type NewWorkoutTemplateStackParamList = {
  Name: undefined;
  Block: { order: number };
};

export type NameScreenNavigationProps = StackNavigationProp<
  NewWorkoutTemplateStackParamList,
  "Name"
>;
export type BlockScreenNavigationProps = StackNavigationProp<
  NewWorkoutTemplateStackParamList,
  "Block"
>;
export type NameScreenRouteProp = RouteProp<
  NewWorkoutTemplateStackParamList,
  "Name"
>;
export type BlockScreenRouteProp = RouteProp<
  NewWorkoutTemplateStackParamList,
  "Block"
>;

const Stack = createStackNavigator<NewWorkoutTemplateStackParamList>();

const TemplateStackNavigator = () => {
  const navigationRef = useNavigationContainerRef();
  const screenOptions = useMemo<StackNavigationOptions>(
    () => ({
      ...TransitionPresets.SlideFromRightIOS,
      headerShown: false,
      safeAreaInsets: { top: 0 },
      cardStyle: {
        backgroundColor: "white",
        overflow: "visible",
      },
    }),
    []
  );

  const state = navigationRef.getRootState();

  return (
    <NavigationContainer ref={navigationRef} independent>
      <Text>{state.routes.length}</Text>
      <Stack.Navigator initialRouteName="Name" screenOptions={screenOptions}>
        <Stack.Screen name="Name" component={CreateTemplateName} />
        <Stack.Screen name="Block" component={CreateTemplateBlock} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TemplateStackNavigator;

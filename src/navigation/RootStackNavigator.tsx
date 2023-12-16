import { Icon } from "@/design-system/icons/Icon";
import { BASE_HORIZONTAL_GUTTER } from "@/design-system/spacing/spacing";
import { EmailVerificationScreen } from "@/screens/auth/EmailVerificationScreen";
import SignInScreen from "@/screens/auth/SignInScreen";
import SignUpScreen from "@/screens/auth/SignUpScreen";
import WelcomeScreen from "@/screens/auth/WelcomeScreen";
import { NameScreen } from "@/screens/onboarding/NameScreen";
import { UserTypeScreen } from "@/screens/onboarding/UserTypeScreen";
import { UserType } from "@/screens/onboarding/types";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import { useMemo } from "react";

type RootStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  Name: undefined;
  UserType: UserTypeScreenRouteParams;
  SignUp: SignUpScreenRouteParams;
  EmailVerification: undefined;
};

export type UserTypeScreenRouteParams = {
  firstName: string;
  lastName: string;
};

export type SignUpScreenRouteParams = UserTypeScreenRouteParams & {
  type: UserType;
};

export type WelcomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;
export type SignInScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "SignIn"
>;
export type NameScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Name"
>;
export type UserTypeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "UserType"
>;
export type SignUpScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const onboardingScreenOptions = useMemo(
    () => ({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
      headerBackImage: () => (
        <Icon name="ArrowLeft" strokeWidth={2.5} color={"gray-900"} />
      ),
      headerLeftContainerStyle: { paddingLeft: BASE_HORIZONTAL_GUTTER },
    }),
    []
  );

  return (
    <RootStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
        gestureEnabled: false,
      }}
    >
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      <RootStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={onboardingScreenOptions}
      />
      <RootStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: "Sign In",
        }}
      />
      <RootStack.Screen
        name="Name"
        component={NameScreen}
        options={onboardingScreenOptions}
      />
      <RootStack.Screen
        name="UserType"
        component={UserTypeScreen}
        options={onboardingScreenOptions}
      />
      <RootStack.Screen
        name="EmailVerification"
        component={EmailVerificationScreen}
        options={onboardingScreenOptions}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;

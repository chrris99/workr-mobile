import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import { Button } from "../components/base/Button";
import SignInScreen from "../screens/auth/SignInScreen";

type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  SignIn: undefined;
};

export type WelcomeScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;
export type SignUpScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;
export type SignInScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  "SignIn"
>;

const RootStack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Welcome" screenOptions={{
      headerShown: true,
      headerBackTitleVisible: false
    }}>
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      <RootStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'Sign Up'
        }}
      />
      <RootStack.Screen name="SignIn" component={SignInScreen} options={{
        title: 'Sign In'
      }}/>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;

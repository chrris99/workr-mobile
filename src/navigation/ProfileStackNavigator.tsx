import { Icon } from "@/design-system/icons/Icon";
import { BASE_HORIZONTAL_GUTTER } from "@/design-system/spacing/spacing";
import { GymScreen } from "@/screens/profile/GymScreen";
import ProfileScreen from "@/screens/profile/ProfileScreen";
import {
  StackNavigationProp,
  createStackNavigator,
} from "@react-navigation/stack";

type ProfileStackParamList = {
  Profile: undefined;
  Gym: undefined;
};

export type ProfileScreenNavigationProps = StackNavigationProp<
  ProfileStackParamList,
  "Profile"
>;
export type GymScreenNavigationProps = StackNavigationProp<
  ProfileStackParamList,
  "Gym"
>;

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen
        name="Gym"
        component={GymScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackImage: () => (
            <Icon name="ArrowLeft" strokeWidth={2.5} color={"primary-700"} />
          ),
          headerLeftContainerStyle: { paddingLeft: BASE_HORIZONTAL_GUTTER },
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;

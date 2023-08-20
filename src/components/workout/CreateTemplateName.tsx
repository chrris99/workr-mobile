import { View } from "react-native";
import Text from "../../design-system/typography/Text";
import { useNavigation } from "@react-navigation/native";
import { NameScreenNavigationProps } from "../../navigation/NewWorkoutTemplateStackNavigator";
import { Button } from "../base/Button";
import { Pagination } from "../Pagination";

export const CreateTemplateName = () => {
  const { push } = useNavigation<NameScreenNavigationProps>();
  return (
    <View>
        <Pagination currentStep={1} steps={4}/>
      <Text>Template</Text>
      <Button
        title="Navigate"
        type="solid"
        onPress={() => push("Block", { order: 1 })}
      />
    </View>
  );
};

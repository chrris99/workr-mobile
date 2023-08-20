import { View } from "react-native";
import Text from "../../design-system/typography/Text";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { NameScreenNavigationProps } from "../../navigation/TemplateStackNavigator";
import { Button } from "../base/Button";
import { Pagination } from "../base/Pagination";

export const CreateTemplateName = () => {
  const { push } = useNavigation<NameScreenNavigationProps>();
  const routesLength = useNavigationState(state => state.routes.length)

  return (
    <View>
      <Pagination currentStep={1} steps={4} />
      
      <Button
        title="Navigate"
        type="solid"
        onPress={() => push("Block", { order: 1 })}
      />
    </View>
  );
};

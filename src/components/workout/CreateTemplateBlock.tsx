import { View } from "react-native";
import Text from "../../design-system/typography/Text";
import { useRoute } from "@react-navigation/native";
import { BlockScreenRouteProp } from "../../navigation/TemplateStackNavigator";
import { WorkoutBlock } from "./WorkoutBlock";
import { ModalScreen } from "../base/modal/ModalScreen";

export const CreateTemplateBlock = () => {
  const {
    params: { order },
  } = useRoute<BlockScreenRouteProp>();

  return (
    <ModalScreen>
      <WorkoutBlock />
    </ModalScreen>
  );
};

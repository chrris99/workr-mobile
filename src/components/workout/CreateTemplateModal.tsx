import { View } from "react-native";
import Text from "../../design-system/typography/Text";
import { ForwardedRef, forwardRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomModal } from "../base/BottomModal";

interface CreateTemplateModalProps {

}

export const CreateTemplateModal = forwardRef(
  (props: CreateTemplateModalProps, ref: ForwardedRef<BottomSheetModal>) => {
    return (
      <BottomModal ref={ref}>
        <View>
          <Text>Create Template</Text>
        </View>
      </BottomModal>
    );
  }
);

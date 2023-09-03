import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../design-system/typography/Text";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { CreateTemplateModal } from "../components/workout/CreateTemplateModal";
import { Button } from "../design-system/buttons/Button";

const PlanScreen = () => {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Plan screen</Text>
      <Button
        text="Add Workout Template"
        type={"primary-solid-md"}
        onPress={openModal}
      />
      <CreateTemplateModal ref={bottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlanScreen;

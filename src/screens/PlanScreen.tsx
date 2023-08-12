import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "../design-system/typography/Text";
import { Button } from "../components/base/Button";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { CreateTemplateModal } from "../components/workout/CreateTemplateModal";

const PlanScreen = () => {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Plan screen</Text>
      <Button title="Add Workout Template" type="solid" onPress={openModal} />
      <CreateTemplateModal ref={bottomSheetRef} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlanScreen;

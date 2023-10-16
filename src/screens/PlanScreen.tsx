import { useGetWorkoutTemplatesQuery } from "@/api/api";
import { CreateTemplateModal } from "@/components/workout/modals/CreateTemplateModal";
import { Button } from "@/design-system/buttons/Button";
import Text from "@/design-system/typography/Text";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PlanScreen = () => {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { data: workoutTemplates } = useGetWorkoutTemplatesQuery();

  useEffect(() => {
    workoutTemplates?.map((template) => console.log(template));
  }, [workoutTemplates]);

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

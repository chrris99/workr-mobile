import {
  SettignsItemProps,
  SettingsItem,
} from "@/components/profile/SettingsItem";
import { colors } from "@/design-system/colors/colors";
import { spacing } from "@/design-system/spacing/spacing";
import { FlatList, View } from "react-native";

export const SettingsList = () => {
  const settings: SettignsItemProps[] = [
    { title: "Personal", iconName: "User" },
    { title: "General", iconName: "Settings" },
    { title: "Notification", iconName: "Home" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        bounces={false}
        data={settings}
        renderItem={({ item }) => (
          <SettingsItem title={item.title} iconName={item.iconName} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: colors["white"],
    borderRadius: spacing["spacing-2"],
  },
  separator: {
    height: spacing["spacing-2"],
  },
};

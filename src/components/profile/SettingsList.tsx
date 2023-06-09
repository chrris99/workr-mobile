import { FlatList, View } from "react-native";
import Text from "../../design-system/typography/Text";
import { SettignsItemProps, SettingsItem } from "./SettingsItem";

import UserIcon from "../../../assets/icons/user.svg";
import SettingsIcon from "../../../assets/icons/settings.svg";
import BellIcon from "../../../assets/icons/bell.svg";
import { spacing } from "../../design-system/spacing/spacing";
import { colors } from "../../design-system/colors/colors";

export const SettingsList = () => {
  const settings: SettignsItemProps[] = [
    { title: "Personal", icon: <UserIcon height={20} width={20} /> },
    { title: "General", icon: <SettingsIcon height={20} width={20} /> },
    { title: "Notification", icon: <BellIcon height={20} width={20} /> },
  ];

  return (
    <View>
      <FlatList
        bounces={false}
        data={settings}
        renderItem={({ item }) => (
          <SettingsItem title={item.title} icon={item.icon} />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        ListHeaderComponent={() => (
          <View
            style={{
              borderTopRightRadius: 8,
              borderTopLeftRadius: 8,
              backgroundColor: colors["gray-300"],
              height: spacing["spacing-4"],
            }}
          ></View>
        )}
      />
    </View>
  );
};

const styles = {
  separator: {
    height: spacing["spacing-4"],
  },
};

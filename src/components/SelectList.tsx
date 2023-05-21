import {
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Badge from "./base/Badge";
import { spacing } from "../design-system/spacing/spacing";

interface ListItemProps<T extends { text: string }> {
  item: T;
  index: number;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

interface SelectListProps<T extends { text: string }> {
  items: T[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

function ListItem<T extends { text: string }>(props: ListItemProps<T>) {
  const { item, index, selectedIndex, setSelectedIndex } = props;
  return (
    <Pressable onPress={() => setSelectedIndex(index)}>
      <Badge
        text={item.text}
        type={selectedIndex === index ? "solid" : "outline"}
      />
    </Pressable>
  );
}

export function SelectList<T extends { text: string }>(
  props: SelectListProps<T>
) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.items}
        renderItem={({ item, index }) => (
          <ListItem
            item={item}
            index={index}
            selectedIndex={props.selectedIndex}
            setSelectedIndex={props.setSelectedIndex}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing["spacing-1"],
  },
  separator: {
    width: spacing["spacing-2"],
  },
});

import {
  BASE_HORIZONTAL_GUTTER,
  spacing,
} from "@/design-system/spacing/spacing";
import { testId } from "@/utils/test/testId";
import {
  Dimensions,
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
} from "react-native";

export const CAROUSEL_TEST_IDS = {
  CAROUSEL: testId("carousel"),
};

export const Carousel = <T,>({
  testID = CAROUSEL_TEST_IDS.CAROUSEL,
  data,
  renderItem,
  ...props
}: FlatListProps<T>) => {
  return (
    <View style={styles.container}>
      <FlatList
        {...props}
        testID={testID}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        ListHeaderComponent={() => <View style={styles.header} />}
        ListFooterComponent={() => <View style={styles.footer} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

/**
 * ({ item }) => (
        <View style={styles.cardContainer}>
          <WorkoutTemplateCard workoutTemplate={item} />
        </View>
      )}
 */

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -BASE_HORIZONTAL_GUTTER,
  },
  cardContainer: {
    width: Dimensions.get("window").width * 0.8,
  },
  separator: {
    width: spacing["spacing-4"],
  },
  header: {
    width: BASE_HORIZONTAL_GUTTER,
  },
  footer: {
    width: BASE_HORIZONTAL_GUTTER,
  },
});

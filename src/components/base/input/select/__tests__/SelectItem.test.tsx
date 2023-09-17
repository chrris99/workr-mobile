import {
  SELECT_ITEM_TEST_IDS,
  SelectItem,
} from "@/components/base/input/select/SelectItem";
import { Item } from "@/components/base/input/select/types";
import { fireEvent, render } from "@testing-library/react-native";

const ABS_ITEM: Item<string> = {
  value: "abs",
  iconName: "Abs",
  displayText: "Abs",
};

const mockOnPress = jest.fn();

describe("select item", () => {
  describe("in selected state", () => {
    it("should render correctly", () => {
      const component = render(
        <SelectItem item={ABS_ITEM} isSelected={true} onPress={mockOnPress} />
      );
      expect(component).toMatchSnapshot();
    });
  });

  describe("in unselected state", () => {
    it("should render correctly", () => {
      const component = render(
        <SelectItem item={ABS_ITEM} isSelected={false} onPress={mockOnPress} />
      );
      expect(component).toMatchSnapshot();
    });
  });

  describe("on press", () => {
    it("should call on press prop", () => {
      const { getByTestId } = render(
        <SelectItem item={ABS_ITEM} isSelected={false} onPress={mockOnPress} />
      );

      const selectItem = getByTestId(SELECT_ITEM_TEST_IDS.SELECT_ITEM);
      fireEvent.press(selectItem);

      expect(mockOnPress).toBeCalledTimes(1);
    });
  });
});

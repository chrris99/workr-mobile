import { fireEvent, render } from "@testing-library/react-native";
import { SingleSelectItem } from "../SingleSelectItem";
import { Item } from "../types";
import { SELECT_ITEM_TEST_IDS } from "../SelectItem";

const mockItem: Item<string> = {
  value: "abs",
  displayText: "Abs",
  iconName: "Abs",
};

const mockOnChange = jest.fn();
const mockSetSelectedItem = jest.fn();

describe("single select item", () => {
  afterEach(() => jest.clearAllMocks());

  describe("on press", () => {
    describe("item is selected", () => {
      it("should call on change prop with item value", () => {
        const { getByTestId } = render(
          <SingleSelectItem
            item={mockItem}
            onChange={mockOnChange}
            selectedItem={"abs"}
            setSelectedItem={mockSetSelectedItem}
          />
        );

        const selectItem = getByTestId(SELECT_ITEM_TEST_IDS.SELECT_ITEM);
        fireEvent.press(selectItem);

        expect(mockOnChange).toBeCalledTimes(1);
        expect(mockOnChange).toBeCalledWith(mockItem.value);
      });

      it("should call set selected item prop with item value", () => {
        const { getByTestId } = render(
          <SingleSelectItem
            item={mockItem}
            onChange={mockOnChange}
            selectedItem={"abs"}
            setSelectedItem={mockSetSelectedItem}
          />
        );

        const selectItem = getByTestId(SELECT_ITEM_TEST_IDS.SELECT_ITEM);
        fireEvent.press(selectItem);

        expect(mockSetSelectedItem).toBeCalledTimes(1);
        expect(mockSetSelectedItem).toBeCalledWith(mockItem.value);
      });
    });

    describe("item is not selected", () => {
      it("should call on change prop with item value", () => {
        const { getByTestId } = render(
          <SingleSelectItem
            item={mockItem}
            onChange={mockOnChange}
            selectedItem={"not abs"}
            setSelectedItem={mockSetSelectedItem}
          />
        );

        const selectItem = getByTestId(SELECT_ITEM_TEST_IDS.SELECT_ITEM);
        fireEvent.press(selectItem);

        expect(mockOnChange).toBeCalledTimes(1);
        expect(mockOnChange).toBeCalledWith(mockItem.value);
      });

      it("should call set selected item prop with item value", () => {
        const { getByTestId } = render(
          <SingleSelectItem
            item={mockItem}
            onChange={mockOnChange}
            selectedItem={"not abs"}
            setSelectedItem={mockSetSelectedItem}
          />
        );

        const selectItem = getByTestId(SELECT_ITEM_TEST_IDS.SELECT_ITEM);
        fireEvent.press(selectItem);

        expect(mockSetSelectedItem).toBeCalledTimes(1);
        expect(mockSetSelectedItem).toBeCalledWith(mockItem.value);
      });
    });
  });
});

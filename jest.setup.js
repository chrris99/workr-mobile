import "@testing-library/jest-native/extend-expect";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

jest.mock("./src/design-system/icons/Icon");

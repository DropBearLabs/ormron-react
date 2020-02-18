import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import GsoReduicer from "./store/reduicers";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

function renderWithRedux(
  ui,
  { initialState, store = createStore(GsoReduicer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}

test.only("First quest walkthrough", async () => {
  const { getByAltText, getByTestId } = renderWithRedux(<App />);
  expect(getByAltText("level-background")).toHaveAttribute("src", "temp1.jpg");
  fireEvent.click(getByTestId("ormron_street_npc_Olija"));
  // expect(getByTestId("background")).toHaveTextContent("No characters");
  // expect(getByTestId("search")).toBeTruthy();
  // expect(getByTestId("searchBtn")).toBeTruthy();
});

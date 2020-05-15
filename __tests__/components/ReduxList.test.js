import React from "react";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";

import ReduxList from "~/components/ReduxList";

jest.mock("react-redux");

describe("Redux Tech List component", () => {
  it("should render tech list", () => {
    useSelector.mockImplementation((callback) =>
      callback({ techs: ["Node.js", "ReactJS"] })
    );

    const { debug, getByTestId, getByText } = render(<ReduxList />);

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByTestId("tech-list")).toContainElement(getByText("ReactJS"));
  });
});

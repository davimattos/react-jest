import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";

import TechList from "~/components/Tech";

describe("Tech component", () => {
  it("should be able to add new tech", () => {
    const { debug, getByText, getByTestId, getByLabelText } = render(
      <TechList />
    );

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByLabelText("Tech")).toHaveValue("");
  });
});

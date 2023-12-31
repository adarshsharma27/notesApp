import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";
import { MemoryRouter } from "react-router-dom";

describe("Navigation Components Test", () => {
  test("Elements List Present or Not", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const imgElement = screen.getByRole("img");
    const buttonElement = screen.getByRole("button");
    const listElement = screen.getAllByRole("listitem");
    expect(buttonElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(listElement).toHaveLength(4);
  });
});

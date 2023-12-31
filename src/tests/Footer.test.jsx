import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Components Test", () => {
  test("Elements Present or Not", () => {
    render(<Footer />);
    // const headingElement = screen.getAllByRole("heading");
    // const descriptionElement = screen.getAllByRole("description");
    // const buttonElement = screen.getAllByRole("button");
    const imgElement = screen.getByRole("img");
    const listElement = screen.getAllByRole("listitem");

    // expect(headingElement).toBeInTheDocument();
    // expect(descriptionElement).toBeInTheDocument();
    // expect(buttonElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
    expect(listElement).toHaveLength(10);
  });
});

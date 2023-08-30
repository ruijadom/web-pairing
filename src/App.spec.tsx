import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("render page title", () => {
    expect(screen.getByText(/Edit/)).toBeInTheDocument();
  });
});

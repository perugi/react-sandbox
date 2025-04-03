import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { use } from "react";

describe("App component", () => {
  it("renders default heading", () => {
    const { container } = render(<App />);
    expect(container).toMatchFileSnapshot("./tests/basic.output.html");
  });

  it("renders radical rhinos after user click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: /click me/i });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});

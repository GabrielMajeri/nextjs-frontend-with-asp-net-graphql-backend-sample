import { describe, expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as actions from "../actions";
import RefreshButton from "./refresh-button";

describe("RefreshButton", () => {
  test("renders correctly", async () => {
    render(<RefreshButton />);
    expect(await screen.findByText("Refresh")).toBeDefined();
  });

  test("invalidates home page when clicked", async () => {
    vi.mock("../actions", () => ({
      revalidateHomePage: vi.fn(),
    }));
    const mockRevalidateHomePage = vi.mocked(actions.revalidateHomePage);
    const user = userEvent.setup();

    render(<RefreshButton />);

    const refreshButton = await screen.findByText("Refresh");
    user.click(refreshButton);

    await waitFor(() =>
      expect(mockRevalidateHomePage).toHaveBeenCalledTimes(1),
    );
  });
});

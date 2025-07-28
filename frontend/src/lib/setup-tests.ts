import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  // Clean up the DOM after each test to ensure a fresh state.
  cleanup();
});

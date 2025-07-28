import { expect, test, vi } from "vitest";
import * as nextCache from "next/cache";
import { revalidateHomePage } from "./actions";

test("revalidates home page", async () => {
  vi.mock("next/cache", () => ({
    revalidatePath: vi.fn(),
  }));

  await revalidateHomePage();

  const spy = vi.mocked(nextCache.revalidatePath);
  expect(spy).toHaveBeenCalledExactlyOnceWith("/");
});

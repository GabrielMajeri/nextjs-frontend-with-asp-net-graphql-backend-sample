import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Next.js front end with ASP.NET back end");
  });
});

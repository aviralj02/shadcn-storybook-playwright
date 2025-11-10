import test, { expect } from "@playwright/test";

const baseUrl = "/";

test.describe("BasicButton Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
  });

  const buttonTests = [
    { name: "Primary", testId: "primary-btn" },
    { name: "Secondary", testId: "secondary-btn" },
    { name: "Destructive", testId: "destructive-btn" },
  ];

  for (const { name, testId } of buttonTests) {
    test(`${name} button should render and respond to hover`, async ({
      page,
    }) => {
      const button = page.getByTestId(testId);

      await expect(button).toBeVisible();

      const bgBefore = await button.evaluate(
        (el) => getComputedStyle(el).backgroundColor
      );

      await button.hover();
      await page.waitForTimeout(300);

      const bgAfter = await button.evaluate(
        (el) => getComputedStyle(el).backgroundColor
      );

      expect(bgBefore).not.toBe(bgAfter);
    });
  }

  test("Disabled button should be visible and should not trigger click", async ({
    page,
  }) => {
    const button = page.getByTestId("disabled-btn");

    await expect(button).toBeVisible();
    await expect(button).toBeDisabled();
  });
});

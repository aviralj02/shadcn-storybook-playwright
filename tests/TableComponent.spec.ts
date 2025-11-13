import { test, expect } from "@playwright/test";

const baseUrl = "/";

test.describe("Table Component Enhanced Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
    await page.waitForSelector('[data-testid="table-card"]', { timeout: 5000 });
  });

  test("card hover effect works (shadow appears)", async ({ page }) => {
    const card = page.getByTestId("table-card");

    const initialShadow = await card.evaluate(
      (el) => getComputedStyle(el).boxShadow
    );

    await card.hover();

    const hoverShadow = await card.evaluate(
      (el) => getComputedStyle(el).boxShadow
    );

    expect(hoverShadow).not.toBe(initialShadow);
    expect(hoverShadow).not.toBe("none");
  });

  test("table is visible with headers and rows", async ({ page }) => {
    const table = page.getByTestId("data-table");
    await expect(table).toBeVisible();

    const headers = page.locator('[data-testid^="data-table-header-cell-"]');
    expect(await headers.count()).toBeGreaterThan(0);

    const rows = page.locator('[data-testid^="data-table-row-"]');
    const rowCount = await rows.count();

    if (rowCount > 0) {
      expect(rowCount).toBeGreaterThan(0);
    } else {
      const noResults = page.locator("text=No results.");
      await expect(noResults).toBeVisible();
    }
  });

  test("switching tabs updates active tab attribute", async ({ page }) => {
    const tabs = ["CEX", "DEX", "OTC", "DARKPOOL"];

    for (const tab of tabs) {
      const trigger = page.getByTestId(`tab-trigger-${tab.toLowerCase()}`);
      await expect(trigger).toBeVisible();

      await trigger.click();

      await expect(trigger).toHaveAttribute("aria-selected", "true");

      for (const otherTab of tabs.filter((t) => t !== tab)) {
        const otherTrigger = page.getByTestId(
          `tab-trigger-${otherTab.toLowerCase()}`
        );
        await expect(otherTrigger).toHaveAttribute("aria-selected", "false");
      }

      const panel = page.getByTestId(`tab-panel-${tab.toLowerCase()}`);
      await expect(panel).toBeVisible();
    }
  });

  test("tab hover shows hover effect", async ({ page }) => {
    const tabs = ["CEX", "DEX", "OTC", "DARKPOOL"];

    for (const tab of tabs) {
      const trigger = page.getByTestId(`tab-trigger-${tab.toLowerCase()}`);
      await expect(trigger).toBeVisible();

      const isActive = await trigger.getAttribute("aria-selected");
      if (isActive === "true") continue;

      const initialBg = await trigger.evaluate(
        (el) => getComputedStyle(el).backgroundColor
      );

      await trigger.hover();
      await page.waitForTimeout(100);

      const hoverBg = await trigger.evaluate(
        (el) => getComputedStyle(el).backgroundColor
      );

      expect(hoverBg).not.toBe(initialBg);
    }
  });

  test("table row hover changes background color", async ({ page }) => {
    const firstRow = page.locator('[data-testid^="data-table-row-"]').first();

    const initialBg = await firstRow.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
    await firstRow.hover();
    const hoverBg = await firstRow.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );

    expect(hoverBg).not.toBe(initialBg);
  });
});

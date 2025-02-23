import { Browser, chromium, Page } from "playwright";
import { describe, it,beforeEach,afterEach } from "vitest";
import { expect } from "playwright/test";

let browser : Browser;
let page : Page;

describe("Toggle tests",{timeout: 60000}, () => {
    beforeEach(async() => {
        browser = await chromium.launch({headless:false, slowMo:1500});
        page = await browser.newPage();
        await page.goto("http://localhost:5173")

    });
    afterEach( async () => {
        await page.close();
        await browser.close();
    })

    it("toggle button is visible", async () => {
        const toggleButton = await page.locator(`[data-testid="toggle-button"]`)
        await expect(toggleButton).toBeVisible();


    })
    it("toggle button switches state", async () => {
        const toggleButton = await page.locator(`[data-testid="toggle-button"]`)
        await expect(toggleButton).toBeVisible();

        await toggleButton.click();
        const toggleButtonText = await toggleButton.textContent();
        expect(toggleButtonText).toBe("ON")

    })
})
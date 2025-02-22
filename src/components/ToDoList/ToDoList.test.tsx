import { describe, it, afterEach, beforeEach } from "vitest";
import { Browser, chromium, Page } from "playwright";
import { expect } from "playwright/test";

let browser: Browser;
let page: Page;

describe("ToDoList tests", { timeout: 20000 }, () => {
    beforeEach(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        await page.goto("http://localhost:5173")
    });
    afterEach(async () => {
        await page.close();
        await browser.close();
    })

    it("Ensure if component is loaded", async () => {
        const heading = await page.locator(`h1:has-text("Todo List")`)
        const headingText = await heading.textContent();
        console.log(`heading is : ${headingText}`);
    });
    it("ensure it is adding new item in todo list", async () => {
        const inputField = await page.locator(`[data-testid="todo-input"]`)
        await inputField.type("typing");
        const addButton = await page.locator(`[data-testid="add-todo-button"]`)
        await addButton.click();

        const firstToDoItem = page.locator(`[data-testid="todo-item-0"]`);
        const firstToDoText = await firstToDoItem.textContent();
        console.log(firstToDoText)
        expect(firstToDoText).toContain("typing")

        await inputField.type("asd");
        await addButton.click()
        const secondToDoItem = await page.locator(`[data-testid="todo-item-1"]`)
        const secondToDoItemText = await secondToDoItem.textContent();
        expect(secondToDoItemText).toContain("asd")

    })


    it("should use delete button", async () => {
        const inputField = await page.locator(`[data-testid="todo-input"]`);
        await inputField.type("newTodo");
        const addButton = await page.locator(`[data-testid="add-todo-button"]`);
        await addButton.click();

        const firstToDoItem = page.locator(`[data-testid="todo-item-0"]`);
        await expect(firstToDoItem).toBeVisible();

        const deleteButton = await page.locator(`[data-testid="delete-btn-0"]`);
        await deleteButton.click();

        await expect(firstToDoItem).not.toBeVisible();
    });
})
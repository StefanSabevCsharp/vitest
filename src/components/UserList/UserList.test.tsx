import { Browser, chromium, Page } from "playwright";
import { describe, it, beforeEach, afterEach } from "vitest";
import { expect } from "playwright/test";

let browser : Browser;
let page : Page;

describe("Mock UserList test", {timeout: 50000}, () => {

    beforeEach( async () => {
        browser = await chromium.launch({headless:false, slowMo: 1500});
        page = await browser.newPage();       
        await page.route("https://jsonplaceholder.typicode.com/users", (route) => {
            route.fulfill({ 
                status:200,
                contentType: "application/json",
                body: JSON.stringify([
                    {id:1, name: "John"},
                    {id:2, name: "Maria" }
                ])
            })
        })
        await page.goto("http://localhost:5173");
    })
    afterEach( async () => {
        await page.close();
        await browser.close(); 
    });

    it("uses mocked data", async () => {
        const userContainer = await page.locator('[data-testid="users-div"]')
        const users = await userContainer.allTextContents();
        expect(users).toEqual(["John", "Maria"])
    })

}) 
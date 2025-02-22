// import {cleanup, render, screen } from "@testing-library/react";
// import "@testing-library/user-event"
// import {describe, it, expect, afterEach } from "vitest"
// import "@testing-library/jest-dom/vitest";
// import Counter from "./Counter";
// import userEvent from "@testing-library/user-event";

// describe("Counter tests", () => {
//     afterEach(() => {
//         cleanup();
//     })

//     it("showing initial state as 0", () => {
//         render(<Counter />)
//         expect(screen.getByTestId("counter")).toHaveTextContent("0");
//     });

//     it("increments the counter", async () => {
//         render(<Counter />);
//         const button = screen.getByRole("button", { name: "Increment" });
//         await userEvent.click(button);
//         const counterValue = screen.getByTestId("counter");
//         expect(counterValue).toHaveTextContent("1");
//     });

//     it("decrements the counter", async () => {
//         render(<Counter />)
//         const button = screen.getByRole("button", { name: "Increment"})
//         await userEvent.click(button);
//         const counterValue = screen.getByTestId("counter");
//         expect(counterValue).toHaveTextContent("1");
//         const decrementButton = screen.getByRole("button", {name : "Decrement"});
//         await userEvent.click(decrementButton);
//         expect(counterValue).toHaveTextContent("0");
//     })
// })

import { chromium, Browser, Page } from "playwright";
import { afterEach, beforeEach, describe, it } from "vitest";
import { expect } from "playwright/test";

let browser: Browser;
let page: Page;

describe("Testing with playwright and vitest", { timeout: 60000 }, () => {
    beforeEach(async () => {
        browser = await chromium.launch()
        page = await browser.newPage();
        await page.goto("http://localhost:5173")
    })
    afterEach(async () => {
        await page.close();
        await browser.close();
    })

    it("Have initial value of 0", async () => {
        const counter = await page.getByTestId("counter")
        const counterText = await counter.textContent();
        expect(counterText).toBe("0")

    })

    it("Succesfully increment the counter", async () => {
        const counter = await page.getByTestId("counter")
        const button = await page.getByRole("button", { name: "Increment" })
        await button.click();
        const counterText = await counter.textContent();
        expect(counterText).toBe("1")
    })

    it("Succesfully decrement the counter", async () => {
        const counter = await page.getByTestId("counter")
        const button = await page.getByRole("button", { name: "Increment" })
        await button.click();
        let counterText = await counter.textContent();
        expect(counterText).toBe("1");
        const decrementButton = await page.getByRole("button", { name: "Decrement" });
        await decrementButton.click();
        counterText = await counter.textContent();
        expect(counterText).toBe("0")

    })
})
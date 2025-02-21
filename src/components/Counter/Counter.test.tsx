import {cleanup, render, screen } from "@testing-library/react";
import "@testing-library/user-event"
import {describe, it, expect, beforeAll, afterAll, afterEach } from "vitest"
import "@testing-library/jest-dom/vitest";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter tests", () => {
    afterEach(() => {
        cleanup();
    })
   
    it("showing initial state as 0", () => {
        render(<Counter />)
        expect(screen.getByTestId("counter")).toHaveTextContent("0");
    });

    it("increments the counter", async () => {
        render(<Counter />);
        const button = screen.getByRole("button", { name: "Increment" });
        await userEvent.click(button);
        const counterValue = screen.getByTestId("counter");
        expect(counterValue).toHaveTextContent("1");
    });
})
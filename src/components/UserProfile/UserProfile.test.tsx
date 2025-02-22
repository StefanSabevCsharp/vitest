import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import UserProfile from "./UserProfile";

describe("UserProfile tests", () => {
    beforeEach(() => {
        globalThis.fetch = vi.fn() ;
    })
    afterEach(() => {  
        vi.resetAllMocks()
    });

    it("fethces user data and renders it", async () => {
        globalThis.fetch.mockResolvedValueOnce({
            json: async () => ({name : "John" , email: "email.gmail.com"})
        })

        render(<UserProfile userId={1} />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();

        const userName = await screen.findByText("John");
        const userEmail = await screen.findByText("email.gmail.com");

        expect(userName).toBeInTheDocument();
        expect(userEmail).toBeInTheDocument();
    });
});
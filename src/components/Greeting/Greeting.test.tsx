import React from "react";
import {render, screen} from "@testing-library/react"
import Greeting from "./Greeting";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Greeting", () => {
   it("renders a greeting", () => {
    render(<Greeting />)
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
   });

   it("renders a greeting with a name" , () => {
    render(<Greeting name={"John"} />)
    expect(screen.getByText("Hello, John!")).toBeInTheDocument();
   })
})
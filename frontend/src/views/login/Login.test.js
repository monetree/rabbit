// Login.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";
import { loginUser } from "../../apis/api";

// Mock the loginUser API function
jest.mock("../../apis/api", () => ({
  loginUser: jest.fn(),
}));

describe("Login Component", () => {
  test("renders login form", () => {
    render(<Login />);
    expect(screen.getByText(/Sign in to your account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Sign in/i })
    ).toBeInTheDocument();
  });

  test("inputs accept text", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/Your email/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password");
  });

  test("handles form submission", async () => {
    // Mock successful login response
    loginUser.mockResolvedValue({ data: true });

    render(<Login />);

    const emailInput = screen.getByLabelText(/Your email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /Sign in/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(window.location.href).toBe("http://localhost/dashboard");
    });
  });

  test("shows alert on invalid credentials", async () => {
    // Mock failed login response
    loginUser.mockResolvedValue({ data: false });

    window.alert = jest.fn();

    render(<Login />);

    const emailInput = screen.getByLabelText(/Your email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole("button", { name: /Sign in/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Invalid credentials");
    });
  });
});

// Users.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Users from "./users";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  uploadFile,
} from "../apis/api";
import userEvent from "@testing-library/user-event";

// Mock the API functions
jest.mock("../apis/api", () => ({
  createUser: jest.fn(),
  deleteUser: jest.fn(),
  getUsers: jest.fn(),
  updateUser: jest.fn(),
  uploadFile: jest.fn(),
}));

describe("Users Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<Users />);
    expect(
      screen.getByText(/Min 10 records required to enable pagination/i)
    ).toBeInTheDocument();
  });

  test("fetches and displays users", async () => {
    getUsers.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "1234567890",
          is_active: true,
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "0987654321",
          is_active: false,
        },
      ],
    });

    render(<Users />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    });
  });

  test("filters users based on search and status", async () => {
    getUsers.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "1234567890",
          is_active: true,
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          phone: "0987654321",
          is_active: false,
        },
      ],
    });

    render(<Users />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "Jane" },
    });
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "No" } });

    await waitFor(() => {
      expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    });
  });

  test("creates a new user", async () => {
    getUsers.mockResolvedValue({
      data: [],
    });

    createUser.mockResolvedValue({});

    render(<Users />);

    fireEvent.click(screen.getByText(/Add/i));

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "New User" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "newuser@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Phone/i), {
      target: { value: "1234567890" },
    });

    fireEvent.click(screen.getByText(/Save/i));

    await waitFor(() => {
      expect(createUser).toHaveBeenCalledWith({
        name: "New User",
        email: "newuser@example.com",
        phone: "1234567890",
      });
      expect(getUsers).toHaveBeenCalledTimes(2); // Initial fetch + after create
    });
  });

  test("updates an existing user", async () => {
    getUsers.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "1234567890",
          is_active: true,
        },
      ],
    });

    updateUser.mockResolvedValue({});

    render(<Users />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    fireEvent.click(screen.getAllByRole("button", { name: /Edit/i })[0]);

    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: "John Updated" },
    });

    fireEvent.click(screen.getByText(/Save/i));

    await waitFor(() => {
      expect(updateUser).toHaveBeenCalledWith({
        id: 1,
        name: "John Updated",
        email: "john@example.com",
        phone: "1234567890",
        is_active: true,
      });
      expect(getUsers).toHaveBeenCalledTimes(2); // Initial fetch + after update
    });
  });

  test("deletes a user", async () => {
    getUsers.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "1234567890",
          is_active: true,
        },
      ],
    });

    render(<Users />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    fireEvent.click(screen.getAllByRole("button", { name: /Delete/i })[0]);

    fireEvent.click(screen.getByText(/Yes/i));

    await waitFor(() => {
      expect(deleteUser).toHaveBeenCalledWith(1);
      expect(getUsers).toHaveBeenCalledTimes(2); // Initial fetch + after delete
    });
  });

  test("uploads a new avatar image", async () => {
    getUsers.mockResolvedValue({
      data: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          phone: "1234567890",
          is_active: true,
          avatar: null,
        },
      ],
    });

    uploadFile.mockResolvedValue({
      data: { imageUrl: "http://example.com/avatar.jpg" },
    });

    updateUser.mockResolvedValue({});

    render(<Users />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/View avatar/i));

    const file = new File(["avatar"], "avatar.png", { type: "image/png" });

    userEvent.upload(screen.getByLabelText(/Change avatar/i).nextSibling, file);

    await waitFor(() => {
      expect(uploadFile).toHaveBeenCalled();
      expect(updateUser).toHaveBeenCalledWith({
        id: 1,
        avatar: "http://example.com/avatar.jpg",
        is_active: true,
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
      });
      expect(getUsers).toHaveBeenCalledTimes(2); // Initial fetch + after upload
    });
  });
});

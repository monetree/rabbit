const { expect } = require("chai");
const sinon = require("sinon");
const {
  userCreate,
  userUpdate,
  userDelete,
  fetchUsers,
  userLogin,
} = require("../controllers/userController");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../helpers/userHelper");
const { handleErrorResponse } = require("../utils/configs");

describe("User API Tests", () => {
  let req, res, next, sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    req = { body: {}, params: {} };
    res = {
      send: sinon.stub(),
      status: sinon.stub().returnsThis(),
    };
    next = sinon.stub();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("userLogin", () => {
    it("should log in successfully with correct credentials", async () => {
      req.body = { email: "admin@soubhagya.com", password: "admin" };

      await userLogin(req, res);

      expect(res.send.calledOnceWith({ msg: "User logged in successfully" })).to
        .be.true;
    });

    it("should return error for invalid credentials", async () => {
      req.body = { email: "invalid@example.com", password: "wrongpassword" };
      sandbox.stub(handleErrorResponse).returns(null);

      await userLogin(req, res);

      expect(handleErrorResponse.calledOnceWith(res, "Invalid credentials")).to
        .be.true;
    });

    it("should handle exceptions", async () => {
      req.body = { email: "admin@soubhagya.com", password: "admin" };
      const error = new Error("Test Error");
      sandbox.stub(handleErrorResponse).throws(error);

      await userLogin(req, res);

      expect(handleErrorResponse.calledOnceWith(res, error.message)).to.be.true;
    });
  });

  describe("userCreate", () => {
    it("should create a user successfully", async () => {
      req.body = {
        name: "Test User",
        email: "test@example.com",
        phone: "1234567890",
      };
      sandbox.stub(createUser).resolves();

      await userCreate(req, res);

      expect(
        createUser.calledOnceWith({
          name: "Test User",
          email: "test@example.com",
          phone: "1234567890",
        })
      ).to.be.true;
      expect(res.send.calledOnceWith({ msg: "User created successfully" })).to
        .be.true;
    });

    it("should handle exceptions", async () => {
      req.body = {
        name: "Test User",
        email: "test@example.com",
        phone: "1234567890",
      };
      const error = new Error("Test Error");
      sandbox.stub(createUser).throws(error);
      sandbox.stub(handleErrorResponse).returns(null);

      await userCreate(req, res);

      expect(handleErrorResponse.calledOnceWith(res, error.message)).to.be.true;
    });
  });

  describe("userUpdate", () => {
    it("should update a user successfully", async () => {
      req.body = {
        id: 1,
        name: "Updated User",
        email: "updated@example.com",
        phone: "0987654321",
        is_active: true,
        avatar: "avatar.png",
      };
      sandbox.stub(updateUser).resolves();

      await userUpdate(req, res);

      expect(
        updateUser.calledOnceWith(1, {
          name: "Updated User",
          email: "updated@example.com",
          phone: "0987654321",
          is_active: true,
          avatar: "avatar.png",
        })
      ).to.be.true;
      expect(res.send.calledOnceWith({ msg: "User updated successfully" })).to
        .be.true;
    });

    it("should handle exceptions", async () => {
      req.body = {
        id: 1,
        name: "Updated User",
        email: "updated@example.com",
        phone: "0987654321",
      };
      const error = new Error("Test Error");
      sandbox.stub(updateUser).throws(error);
      sandbox.stub(handleErrorResponse).returns(null);

      await userUpdate(req, res);

      expect(handleErrorResponse.calledOnceWith(res, error.message)).to.be.true;
    });
  });

  describe("userDelete", () => {
    it("should delete a user successfully", async () => {
      req.params = { id: 1 };
      sandbox.stub(deleteUser).resolves();

      await userDelete(req, res);

      expect(deleteUser.calledOnceWith(1)).to.be.true;
      expect(res.send.calledOnceWith({ msg: "User deleted successfully" })).to
        .be.true;
    });

    it("should handle exceptions", async () => {
      req.params = { id: 1 };
      const error = new Error("Test Error");
      sandbox.stub(deleteUser).throws(error);
      sandbox.stub(handleErrorResponse).returns(null);

      await userDelete(req, res);

      expect(handleErrorResponse.calledOnceWith(res, error.message)).to.be.true;
    });
  });

  describe("fetchUsers", () => {
    it("should fetch users successfully", async () => {
      const users = [
        {
          id: 1,
          name: "Test User",
          email: "test@example.com",
          phone: "1234567890",
        },
      ];
      sandbox.stub(getUsers).resolves(users);

      await fetchUsers(req, res);

      expect(getUsers.calledOnce).to.be.true;
      expect(res.send.calledOnceWith(users)).to.be.true;
    });

    it("should handle exceptions", async () => {
      const error = new Error("Test Error");
      sandbox.stub(getUsers).throws(error);
      sandbox.stub(handleErrorResponse).returns(null);

      await fetchUsers(req, res);

      expect(handleErrorResponse.calledOnceWith(res, error.message)).to.be.true;
    });
  });
});

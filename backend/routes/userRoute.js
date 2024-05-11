const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const {
  userCreate,
  userUpdate,
  userDelete,
  fetchUsers,
  userLogin,
} = require("../controllers/userController");
const authenticateToken = require("../utils/authMiddleware");

router
  .route("/login")
  .post(
    [
      check("email").isEmail().withMessage("Email is invalid"),
      check("password").notEmpty().withMessage("Password is required"),
    ],
    function (req, res) {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const result = userLogin(req, res);
      return result;
    }
  );

router.route("/users").get(authenticateToken, function (req, res) {
  const result = fetchUsers(req, res);
  return result;
});

router
  .route("/create-user")
  .post(
    authenticateToken,
    [
      check("name").notEmpty().withMessage("Name is required"),
      check("email").isEmail().withMessage("Email is invalid"),
      check("phone")
        .notEmpty()
        .withMessage("Phone is required")
        .isMobilePhone()
        .withMessage("Phone number is invalid"),
    ],
    function (req, res) {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const result = userCreate(req, res);
      return result;
    }
  );

router
  .route("/update-user")
  .patch(
    authenticateToken,
    [
      check("name").optional().notEmpty().withMessage("Name cannot be empty"),
      check("email").optional().isEmail().withMessage("Email is invalid"),
      check("phone")
        .optional()
        .notEmpty()
        .withMessage("Phone cannot be empty")
        .isMobilePhone()
        .withMessage("Phone number is invalid"),
    ],
    function (req, res) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const result = userUpdate(req, res);
      return result;
    }
  );

router.route("/delete-user/:id").delete(authenticateToken, function (req, res) {
  const result = userDelete(req, res);
  return result;
});

module.exports = router;

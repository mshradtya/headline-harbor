const express = require("express");
const router = express.Router();
const {
  registerUser,
  readUser,
  deleteUsers,
  addBookmark,
  readBookmarks,
  removeBookmark,
} = require("../controllers/usersController");
const {
  loginUser,
  authUser,
  refresh,
  logout,
} = require("../controllers/authController");

router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.get("/auth/refresh", refresh);
router.post("/auth/logout", logout);
router.post("/users/delete/:id", authUser, deleteUsers);
router.get("/user/:id", authUser, readUser);
router.post("/user/bookmark", authUser, addBookmark);
router.get("/user/bookmarks/:id", authUser, readBookmarks);
router.post("/user/bookmark/remove", authUser, removeBookmark);

module.exports = router;

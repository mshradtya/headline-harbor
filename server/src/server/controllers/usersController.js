const usersService = require("../services/usersService");
const User = require("../models/User");

const registerUser = async (req, res) => {
  if (
    Object.keys(req.body).length !== 2 ||
    !(
      Object.keys(req.body).includes("email") &&
      Object.keys(req.body).includes("password")
    )
  ) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "email and password is required.",
    });
  }
  try {
    console.log(req.body);
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: "User",
      bookmarks: [],
    };
    const user = await usersService.registerUser(userData);
    return res.status(201).json({ status: 201, success: true, user: user });
  } catch (error) {
    return res
      .status(500)
      .json({ status: 400, success: false, message: error.message });
  }
};

const readUser = async (req, res) => {
  if (res.body.role === "SuperAdmin") {
    try {
      const userDetail = await usersService.readUser(req.params.id);
      if (userDetail === null) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: `User does not exist.`,
        });
      }
      return res
        .status(200)
        .json({ status: 200, success: true, user: userDetail });
    } catch (error) {
      if (error.kind === "ObjectId") {
        return res
          .status(400)
          .json({ status: 400, success: false, message: `Invalid user ID.` });
      } else {
        return res.status(400).json({
          status: 400,
          success: false,
          message: `${error.message}`,
        });
      }
    }
  } else {
    return res.status(403).json({
      status: 403,
      success: false,
      message: `You must have SuperAdmin privilege to perform this operation.`,
    });
  }
};

const addBookmark = async (req, res) => {
  if (res.body.role !== "User") {
    return res.status(403).json({
      status: 403,
      success: false,
      message: `Only Users can perform this operation.`,
    });
  }

  try {
    const { _id, banner, source, category, title, summary, link } = req.body;

    // Retrieve the user by _id
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: `User with _id ${_id} not found.`,
      });
    }

    // Check if the bookmark with the same link already exists
    const existingBookmark = user.bookmarks.find(
      (bookmark) => bookmark.link === link
    );

    if (existingBookmark) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: `Bookmark with link '${link}' already exists.`,
      });
    }

    // Create a bookmark object
    const bookmark = {
      banner,
      source,
      category,
      title,
      summary,
      link,
    };

    // Push the bookmark object to the "bookmarks" field in the user model
    user.bookmarks.push(bookmark);
    await user.save();

    return res.status(200).json({
      status: 200,
      success: true,
      message: `Bookmark added successfully.`,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: `Something went wrong. ${err.message}`,
    });
  }
};

const removeBookmark = async (req, res) => {
  try {
    if (res.body.role !== "User") {
      return res.status(403).json({
        status: 403,
        success: false,
        message: `Only Users can perform this operation.`,
      });
    }

    const userId = req.body._id; // User's ID
    const linkToRemove = req.body.link; // Link of the bookmark to be removed

    // Retrieve the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: `User with _id ${userId} not found.`,
      });
    }

    // Find the index of the bookmark to be removed
    const bookmarkIndex = user.bookmarks.findIndex(
      (bookmark) => bookmark.link === linkToRemove
    );

    if (bookmarkIndex === -1) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: `Bookmark with link '${linkToRemove}' not found.`,
      });
    }

    // Remove the bookmark from the bookmarks array
    user.bookmarks.splice(bookmarkIndex, 1);
    await user.save();

    return res.status(200).json({
      status: 200,
      success: true,
      message: `Bookmark removed successfully.`,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: `Something went wrong. ${err.message}`,
    });
  }
};

const readBookmarks = async (req, res) => {
  try {
    if (res.body.role !== "User") {
      return res.status(403).json({
        status: 403,
        success: false,
        message: `Only Users can perform this operation.`,
      });
    }

    const userId = req.params.id; // Assuming you'll receive the user's ID in the request parameters

    // Retrieve the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: `User with _id ${userId} not found.`,
      });
    }

    // Return the user's bookmarks
    return res.status(200).json({
      status: 200,
      success: true,
      bookmarks: user.bookmarks,
    });
  } catch (err) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: `Something went wrong. ${err.message}`,
    });
  }
};

const deleteUsers = async (req, res) => {
  try {
    if (res.body.role === "SuperAdmin") {
      const deletedCount = await usersService.deleteUsers(req.params.id);
      if (deletedCount === 0) {
        return res.status(404).json({
          status: 404,
          success: false,
          message: `User does not exist.`,
        });
      }
      return res.status(200).json({
        status: 200,
        success: true,
        message: `${deletedCount} users have been deleted.`,
      });
    } else {
      return res.status(403).json({
        status: 403,
        success: false,
        message: `You must be a SuperAdmin to perform this operation.`,
      });
    }
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({
        status: 400,
        success: false,
        message: `Invalid user ID`,
      });
    }
    return res.status(400).json({
      status: 400,
      success: false,
      message: `Something went wrong. ${error.message}`,
    });
  }
};

module.exports = {
  registerUser,
  readUser,
  deleteUsers,
  addBookmark,
  readBookmarks,
  removeBookmark,
};

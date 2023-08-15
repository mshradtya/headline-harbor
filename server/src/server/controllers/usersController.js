const usersService = require("../services/usersService");

const registerUser = async (req, res) => {
  if (
    Object.keys(req.body).length !== 3 ||
    !(
      Object.keys(req.body).includes("username") &&
      Object.keys(req.body).includes("email") &&
      Object.keys(req.body).includes("password")
    )
  ) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: "username, email and password is required.",
    });
  }
  try {
    const userData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: "User",
      dateRegistered: formattedDate(new Date()),
      devices: [],
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
};

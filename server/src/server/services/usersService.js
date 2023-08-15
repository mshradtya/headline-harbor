const User = require("../models/User");

const registerUser = async (userData) => {
  const user = new User(userData);
  const newUser = await user.save();
  return newUser;
};

const readUser = async (_id) => {
  const userDetail = await User.findById({ _id }, "-password");
  if (userDetail === null) {
    return null;
  }
  return userDetail;
};

const deleteUsers = async (userId) => {
  try {
    // Find the user to be deleted
    const user = await User.findById(userId);

    // Set owner field to null in allDevices
    const allDevices = await Device.find({ owner: userId });
    const bulkOperations = allDevices.map((device) => ({
      updateOne: {
        filter: { _id: device._id },
        update: { $set: { owner: null } },
      },
    }));

    if (bulkOperations.length > 0) {
      await Device.bulkWrite(bulkOperations);
    }

    // Delete the user
    const { deletedCount } = await User.deleteOne({ _id: userId });

    return deletedCount;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  registerUser,
  readUser,
  deleteUsers,
};

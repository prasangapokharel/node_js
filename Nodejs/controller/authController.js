const bcrypt = require("bcrypt");
const { auth } = require("../model");
const { Op } = require("sequelize");

// CodiumAl: Options | Test this function | Comment Code
exports.register = async (req, res) => {
  try {
    console.log(object);
    const { email, password } = req.body;
    const hashpassword = await bcrypt.hash(password, 8);
    const registerUser = await auth.create({
      email,
      password: hashpassword});
      await registerUser.save();
    res.status(200).json({
      success: true,
      message: "register user successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Internal Server Error",
      exception: `${error}`
    });
  }
};

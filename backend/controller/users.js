const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const userRegister = async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });
    await newUser.save();

    const token = jwt.sign({ email: newUser.email }, "secret_key");
    res.status(200).send({ token: token, name: user.name });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal Server Error");
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send("Invalid email or password");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send("Invalid email or password");
    }

    const token = jwt.sign({ email: user.email }, "secret_key");
    res.status(200).send({ token: token, name: user.name });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  userRegister,
  userLogin,
};

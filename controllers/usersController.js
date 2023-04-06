const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRET = process.env.JWT_SECRET;

const create = async (req, res) => {
  const { password } = req.body;
  if (password.length < 5) {
    res.status(400).json({ message: "password too short" });
    return;
  }

  try {
    const user = await User.create(req.body);
    const payload = { user };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 60 });
    res.status(201).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (password.length < 5) {
    res.status(400).json({ message: "Incorrect Password" });
    return;
  }

  try {
    const user = await User.findOne({ email });
    if (user === null) {
      res.status(401).json({ message: "No user found, Please sign up." });
      return;
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const payload = { user };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 60 });
      res.status(200).json({ token });
      console.log("user login successful");
    } else {
      res.status(401).json({ message: "wrong password" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const logout = async (req, res) => {
  if (req.headers && req.headers.authorization) {
    console.log("working? is" + req.headers.authorization);
  }
};

// if (req.session) {
//   req.session.destroy();
// }
// res.render("users/login", { msg: "", isLoggedIn: false });

module.exports = {
  create,
  login,
  logout,
};

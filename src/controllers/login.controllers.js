import User from "../Models/user.model.js";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  console.log(req.body);
  //   const { email } = req.body;
  const login = await User.findOne({ email: req.body.email });
  if (login) {
    const token = jwt.sign({ id: login._id }, process.env.SECRET);
    res.status(200).json({ token });
  } else {
    res.status(409);
  }
};

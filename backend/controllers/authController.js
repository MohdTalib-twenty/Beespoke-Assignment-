const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const axios= require("axios")

const genreateToekn = async (id) => {
  return await jwt.sign({ userId: id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};


const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcryptjs.compare(password, hashedPassword);
  return isMatch;
};


const Register = async (req, res, next) => {
  try {
    const {name,password}=req.body
   if(!name || !password){
    next("Please enter all the fields")
   }

    const existingUser = await User.findOne({name: name });
    if (existingUser) {
      next("Name already registered please login");
    }

    const user = await new User(req.body);
    const token = await genreateToekn(user._id);
    await user.save();
    return res.status(200).send({
      success: true,
      message: "Registration successfull",
      user: {
        username: user.name,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

const Login = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      next("Please Enter all the fields");
    }
    const findUser = await User.findOne({ name:name });
    if (!findUser) {
      next("Invalid Username or Password");
    }
    const isMatch = await comparePassword(password, findUser.password);
    if (!isMatch) {
      next("Invalid Password");
    }
    const token = await genreateToekn(findUser._id);
    findUser.password = undefined;
    res.status(200).send({
      success: true,
      message: "Login successfully",
      findUser,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const forgetPasswordContoller = async (req, res, next) => {
  try {
    const { email } = req.body;
    
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const resetToken = await getResetToken();
      await User.findOneAndUpdate(
        { email },
        {
          $set: {
            resetPasswordToken: resetToken,
            resetPasswordExpire: Date.now() + 15 * 60 * 1000,
          },
        }
      );
      const message = "Click on the link to reset your password";
      await sendEmail(email, "Reset Password", message);
      res.status(200).send({
        message : "Mail sent successfully"
      })
    } else {
      next("Please provide correct email");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { Register, Login, forgetPasswordContoller };

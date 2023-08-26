import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// Auth user/ set token || POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const {email} = req.body

  const user = await User.findOne({email})

  if (user) {
    generateToken(res, user._id)

    res.status(201).json({
      _id: user._id, 
      name: user.name,
      email: user.email
    })
  } else {
    res.status(401)
    throw new Error('Invalid Email or Password')
  }

});

// Register User || POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {name, email, password} = req.body

  const userExists = await User.findOne({email})

  if (userExists) {
    res.status(400)
    throw new Error('User Already Exists')    
  }

  const user = await User.create({
    name, 
    email, 
    password
  })

  if (user) {
    generateToken(res, user._id)

    res.status(201).json({
      _id: user._id, 
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }

});

// Logout User || POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  // res.cookie('jwt', '', {
  //   httpOnly: true, 
  //   expiresIn: new Date(0)
  // })

  res.clearCookie('jwt', {
    httpOnly: true,
    expiresIn: new Date(0)
  })

  res.status(200).json({message: 'User Logged Out Successful'})
});

// Get User Profile || GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get User Profile' });
});

// Update User Profile || PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'UPDATE User Profile' });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
};

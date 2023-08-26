import asyncHandler from 'express-async-handler';

// @desc    Auth / Set Token
// route    POST /api/users/auth
// @access  Public
const userAuth = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error('Something went wrong');
  res.status(200).json({ message: 'Hello World :)' });
});

// @desc    Register New User
// route    POST /api/users
// @access  Public
const userRegister = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error('Something went wrong');
  res.status(200).json({ message: 'Register User' });
});

// @desc    Get User Profile
// route    POST /api/users/profile
// @access  Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error('Something went wrong');
  res.status(200).json({ message: 'User Profile' });
});

// @desc    Update User Profile
// route    POST /api/users/profile
// @access  Public
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(401);
  throw new Error('Something went wrong');
  res.status(200).json({ message: 'Logout User' });
});

export { userAuth, userLogin, userLogout, userRegister };

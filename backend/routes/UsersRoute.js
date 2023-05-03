const express = require("express");
const { authController, getUserprofile, registerUser, updateUserProfile } = require("../controller/usersController");
const router = express.Router();
const {protect} = require('../middlewares/authMiddleware');

//user registration
router.route('/').post(registerUser);

// post email and password auth
router.post('/login',authController);

// get user profile Private Route
router.route("/profile").get(protect,getUserprofile).put(protect,updateUserProfile);

module.exports = router;
const express=require("express");
const {register,login,followUser,logout,updatePassword,updateProfile,deleteMyProfile,myProfile, getAllUser,getUserProfile,forgotPassword,resetPassword, getMyPosts, getUserPosts} =require("../controllers/user");
const {isAuthenticated}=require("../middlewares/auth");

const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/follow/:id").get(isAuthenticated,followUser);
router.route("/logout").get(isAuthenticated,logout);
router.route("/update/password").put(isAuthenticated,updatePassword);
router.route("/update/profile").put(isAuthenticated,updateProfile);
router.route("/delete/me").delete(isAuthenticated,deleteMyProfile);
router.route("/me").get(isAuthenticated,myProfile);
router.route("/my/posts").get(isAuthenticated,getMyPosts);
router.route("/users").get(isAuthenticated,getAllUser);
router.route("/userposts/:id").get(isAuthenticated, getUserPosts);
router.route("/users/:id").get(isAuthenticated,getUserProfile);
router.route("/forgot/password").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
module.exports = router;
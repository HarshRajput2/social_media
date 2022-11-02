const express=require("express");
const { createPost, likeAndUnlikePost, deletePost ,getPostsOfFollowing,updateCaption,commentOnPost,deleteComment}=require("../controllers/post");
const {isAuthenticated}=require("../middlewares/auth");
const router=express.Router();


router.route("/post/upload").post(isAuthenticated,createPost);
router.route("/post/:id").get(isAuthenticated,likeAndUnlikePost).delete(isAuthenticated,deletePost);

router.route("/posts").get(isAuthenticated,getPostsOfFollowing);
router.route("/post/:id").put(isAuthenticated,updateCaption);

router.route("/post/comment/:id").put(isAuthenticated,commentOnPost).delete(isAuthenticated,deleteComment);
module.exports = router;
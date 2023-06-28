import express from "express";
import {
  getPosts,
  createPosts,
  getPostsById,
  deletePosts,
  updatePosts,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.get("/:id", getPostsById);
router.delete("/:id", deletePosts);
router.put("/:id", updatePosts);

export default router;

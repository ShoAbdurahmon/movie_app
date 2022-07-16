import express from "express";

import controller from "#controllers/blog_comments.Controller";

const router = express.Router();

router.get("/blog_comments", controller.GET);
router.delete("/blog_comments/:id", controller.DELETE);
router.post("/blog_comments", controller.POST);


export default router;
import express from "express";

import controller from "#controllers/blogs.Controller";

const router = express.Router();

router.get("/blogs", controller.GET);
router.delete("/blogs/:id", controller.DELETE);
router.post("/blogs", controller.POST);


export default router;
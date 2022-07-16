import express from "express";

import controller from "#controllers/show_reviews.Controller";

const router = express.Router();

router.get("/show_reviews", controller.GET);
router.delete("/show_reviews/:id", controller.DELETE);
router.post("/show_reviews", controller.POST);


export default router;
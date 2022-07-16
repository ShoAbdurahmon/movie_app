import express from "express";

import controller from "#controllers/movie_reviews.Controller";

const router = express.Router();

router.get("/movie_reviews", controller.GET);
router.delete("/movie_reviews/:id", controller.DELETE);
router.post("/movie_reviews", controller.POST);


export default router;
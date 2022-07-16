import express from "express";

import controller from "#controllers/movies.Controller";

const router = express.Router();

router.get("/movies", controller.GET);
router.delete("/movies/:id", controller.DELETE);
router.post("/movies", controller.POST);


export default router;
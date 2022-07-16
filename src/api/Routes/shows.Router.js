import express from "express";

import controller from "#controllers/shows.Controller";

const router = express.Router();

router.get("/shows", controller.GET);
router.delete("/shows/:id", controller.DELETE);


export default router;
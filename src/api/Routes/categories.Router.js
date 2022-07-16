import express from "express";

import controller from "#controllers/categories.Controller";

const router = express.Router();

router.get("/categories", controller.GET);
router.delete("/categories/:id", controller.DELETE);
router.post("/categories", controller.POST);


export default router;
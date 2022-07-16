import express from "express";

import controller from "#controllers/users.Controller";

const router = express.Router();

router.get("/users", controller.GET);
router.delete("/users/:id", controller.DELETE);
router.post("/users", controller.POST);


export default router;
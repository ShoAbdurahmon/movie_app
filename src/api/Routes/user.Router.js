import express from "express";

import controller from "#controllers/user.Controller";

const router = express.Router();

router.post("/login", controller.GET);



export default router;
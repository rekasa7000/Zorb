import express from "express";
import { isAuthenticated } from "../middlewares";

const router = express.Router();

router.get("/users", isAuthenticated);

export default router;

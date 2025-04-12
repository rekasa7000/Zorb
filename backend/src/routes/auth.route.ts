import express from "express";
import {
  checkAuth,
  logout,
  signin,
  signup,
  updateProfile,
} from "../controllers/auth.controller";
import { validate } from "../utils/validate";
import { SigninSchema, SignupSchema } from "../schemas";
import { isAuthenticated } from "../middlewares";

const router = express.Router();

router.post("/signup", validate("Signup", SignupSchema), signup);
router.post("/signin", validate("Signin", SigninSchema), signin);
router.post("/logout", isAuthenticated, logout);

router.put("/update-profile", isAuthenticated, updateProfile);

router.get("/check", isAuthenticated, checkAuth);
export default router;

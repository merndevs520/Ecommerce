import { Router } from "express";
import {
  UserLogin,
  UserLogout,
  meController,
  UserRegister,
  UserResetPassword,
  UserResetPasswordverify,
} from "../controllers/AuthController.js";

const router = Router();

router.post("/login", UserLogin);
router.post("/resetpassword", UserResetPassword);
router.post("/resetpasswordverify", UserResetPasswordverify);
router.post("/register", UserRegister);
router.get("/logout", UserLogout);
router.get("/me", meController);

export default router;

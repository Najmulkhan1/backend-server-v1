import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validateRequest } from "../../middleware/validateSchema";
import { ChangePasswordSchema, ForgotPasswordSchema, LoginSchema, RegisterSchema } from "./auth.validation";

const router: Router = Router();



router.get("/login", validateRequest(LoginSchema), AuthController.login);
router.get("/register", AuthController.register);
router.get("/change-password", validateRequest(ChangePasswordSchema), AuthController.changePassword);
router.get("/forgot-password", validateRequest(ForgotPasswordSchema), AuthController.forgotPassword);

export const AuthRouter = router;
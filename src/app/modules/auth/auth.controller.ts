import type { Request, Response } from "express";
import { Authservice } from "./auth.service";
import { ApiResponse } from "../../utils/ApiResponse";

const login = async (req: Request, res: Response) => {
    const result = await Authservice.login("najmulislam624@gmail.com")
    // res.json({
    //     success: true,
    //     message: "Login successful",
    //     data: result
    // });
    ApiResponse.success(res, "Login successful", result)
};
const register = async (req: Request, res: Response) => {
    const result = await Authservice.register("najmulislam624@gmail.com")
    ApiResponse.success(res, "Registration successful", result, 201)
};
const changePassword = async (req: Request, res: Response) => {
    const result = await Authservice.changePassword("najmulislam624@gmail.com")
    ApiResponse.success(res, "Password changed successfully", result)
};
const forgotPassword = async (req: Request, res: Response) => {
    const result = await Authservice.forgotPassword("najmulislam624@gmail.com")
    ApiResponse.success(res, "Password reset link sent successfully", result)
};

export const AuthController = {
    login,
    register,
    changePassword,
    forgotPassword
}
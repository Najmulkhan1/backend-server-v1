import z from "zod";


export const LoginSchema = z.object({
    email: z.email("this field should be a valid email address"),
    password: z.string().min(6, "password should be at least 6 characters long")
});

export const RegisterSchema = z.object({
    name: z.string().min(2, "name should be at least 2 characters long"),
    email: z.email("this field should be a valid email address"),
    password: z.string().min(6, "password should be at least 6 characters long")
});

export const ChangePasswordSchema = z.object({
    password: z.string().min(6, "password should be at least 6 characters long"),
    newPassword: z.string().min(6, "new password should be at least 6 characters long"),
    confirmPassword: z.string().min(6, "confirm password should be at least 6 characters long")
})

export const ForgotPasswordSchema = z.object({
    email: z.email("this field should be a valid email address")
});
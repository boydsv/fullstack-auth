import { z } from "zod";

// SIGN UP PAGE:

export const signUpSchema = z
  .object({
    email: z.string().email("Email is invalid"),
    password: z.string().min(8, "Password must be 8 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignUpForm = z.infer<typeof signUpSchema>;

// = = = = = =

// SIGN IN PAGE:

export const signInSchema = z.object({
  email: z.string().email("Email is invalid"),
  password: z.string().min(1, "Password is required"),
});

export type SignInForm = z.infer<typeof signInSchema>;

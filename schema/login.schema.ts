import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Please enter your email address.")
    .email("Invalid email"),
  password: z.string().min(1, "Please enter your password."),
});

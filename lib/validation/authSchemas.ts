// validation/authSchemas.ts
import { z } from 'zod';

export const SignUpSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    // bio: z.string().max(300).optional(),
    role: z.enum(["admin", "user", "guest"]),
    password: z.string().min(6), // Not stored in Sanity
});

export const SignInSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(1, 'Password required'),
});

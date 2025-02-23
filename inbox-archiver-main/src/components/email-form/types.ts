
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  provider: z.enum(["gmail", "outlook", "imap"] as const),
  credentials: z.object({
    clientId: z.string().optional(),
    clientSecret: z.string().optional(),
    refreshToken: z.string().optional(),
    host: z.string().optional(),
    port: z.number().optional(),
    password: z.string().optional(),
  }),
});

export type FormValues = z.infer<typeof formSchema>;

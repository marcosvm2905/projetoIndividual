import { z } from "zod";

export const createCustomerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().nullable().default(null),
});

export const updateCustomerSchema = createCustomerSchema.partial();
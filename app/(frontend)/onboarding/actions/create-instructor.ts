"use server";

import { db } from "@/db";
import { instructor } from "@/db/schema";
import { z } from "zod";
import { instructorCreateFormSchema } from "../form-schema/instructor-create";

export async function createInstructor(input: z.infer<typeof instructorCreateFormSchema> & { userId: string }) {
  const parsed = instructorCreateFormSchema.safeParse(input);
  
  if (!parsed.success) {
    throw new Error("Invalid input");
  }
  
  await db.insert(instructor).values({
    userId: input.userId,
    adiNumber: input.adiNumber,
    name: input.name,
    email: input.email,
    phone: input.phone,
  });
}

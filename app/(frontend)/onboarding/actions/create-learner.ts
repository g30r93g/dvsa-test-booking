"use server";

import { db } from "@/db";
import { learner } from "@/db/schema";
import { z } from "zod";
import { learnerCreateFormSchema } from "../form-schema/learner-create";

export async function createLearner(input: z.infer<typeof learnerCreateFormSchema> & { userId: string }) {
  const parsed = learnerCreateFormSchema.safeParse(input);
  
  if (!parsed.success) {
    throw new Error("Invalid input");
  }
  
  await db.insert(learner).values({
    userId: input.userId,
    drivingLicenceNumber: input.drivingLicenceNumber,
    theoryTestNumber: input.theoryTestNumber,
    name: input.name,
    email: input.email,
    phone: input.phone,
  });
}

import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/db";
import { learner, instructor } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const user = await currentUser();
  if (!user) {
    return NextResponse.json({ userType: null }, { status: 401 });
  }
  const userId = user.id;

  const [learnerResult, instructorResult] = await Promise.all([
    db.select().from(learner).where(eq(learner.userId, userId)).limit(1),
    db.select().from(instructor).where(eq(instructor.userId, userId)).limit(1),
  ]);

  let userType: "learner" | "instructor" | null = null;
  if (learnerResult.length > 0) userType = "learner";
  else if (instructorResult.length > 0) userType = "instructor";

  return NextResponse.json({ userType });
}

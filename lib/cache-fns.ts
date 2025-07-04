import { currentUser } from '@clerk/nextjs/server';
import redis from '@/lib/redis';
import { unauthorized } from 'next/navigation';
import { db } from '@/db';
import { instructor, learner } from '@/db/schema';
import { eq } from "drizzle-orm";

/**
 * Fetches the user role from Redis using the userId from Clerk's auth token.
 * Returns null if not found or not logged in.
 */
export async function getUserRole() {
  const user = await currentUser();
  if (!user) {
    // Handle unauthenticated user
    // note: code should never reach here due to middleware protection
    unauthorized();
  }


  const cachedUserRole = await redis.get(`user:role:${user.id}`);

  if (cachedUserRole) {
    return cachedUserRole;
  }

  // If not found in cache, you might want to fetch from the database or another source
  const userId = user.id;

  // Query both tables to determine if onboarding has completed
  const learnerQuery = db
    .select()
    .from(learner)
    .where(eq(learner.userId, userId))
    .limit(1);
  const instructorQuery = db
    .select()
    .from(instructor)
    .where(eq(instructor.userId, userId))
    .limit(1);

  const [learnerResult, instructorResult] = await Promise.all([learnerQuery, instructorQuery]);

  let userRole: "learner" | "instructor" | null = null;

  if (learnerResult.length > 0) {
    redis.set(`user:role:${userId}`, "learner");
    redis.expire(`user:role:${userId}`, 60 * 60 * 24); // Cache for 1 day
    userRole = "learner";
  }

  if (instructorResult.length > 0) {
    redis.set(`user:role:${userId}`, "instructor");
    redis.expire(`user:role:${userId}`, 60 * 60 * 24); // Cache for 1 day
    userRole = "instructor";
  }

  return userRole;
}


export async function getLearnerId() {
  const user = await currentUser();
  if (!user) {
    // Handle unauthenticated user
    unauthorized();
  }

  // Determine if learner ID is cached
  const cachedLearnerId = await redis.get(`learner:id:${user.id}`);

  if (cachedLearnerId) {
    return cachedLearnerId;
  }

  const userId = user.id;
  // Fetch the learner ID from the database
  const learnerRecord = await db
    .select()
    .from(learner)
    .where(eq(learner.userId, userId))
    .limit(1)
    .then((result) => result[0]);

  if (!learnerRecord) {
    throw new Error("Learner not found");
  }

  // Cache the learner ID
  await redis.set(`learner:id:${user.id}`, learnerRecord.id);
  await redis.expire(`learner:id:${user.id}`, 60 * 60 * 24); // Cache for 1 day

  return learnerRecord.id;
}

export async function getInstructorId() {
  const user = await currentUser();
  if (!user) {
    // Handle unauthenticated user
    unauthorized();
  }

  // Determine if instructor ID is cached
  const cachedInstructorId = await redis.get(`instructor:id:${user.id}`);

  if (cachedInstructorId) {
    return cachedInstructorId;
  }

  const userId = user.id;
  // Fetch the instructor ID from the database
  const instructorRecord = await db
    .select()
    .from(instructor)
    .where(eq(instructor.userId, userId))
    .limit(1)
    .then((result) => result[0]);

  if (!instructorRecord) {
    throw new Error("Instructor not found");
  }

  // Cache the instructor ID
  await redis.set(`instructor:id:${user.id}`, instructorRecord.id);
  await redis.expire(`instructor:id:${user.id}`, 60 * 60 * 24); // Cache for 1 day

  return instructorRecord.id;
} 
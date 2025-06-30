import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/db";
import { learner, instructor } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect, unauthorized } from "next/navigation";
import { OnboardingForm } from "./OnboardingForm";

async function checkOnboardingStatus() {
    const user = await currentUser();

    if (!user) {
        // Handle unauthenticated user
        // note: code should never reach here due to middleware protection
        unauthorized();
    }

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

    const [learnerResult, instructorResult] = await Promise.all([
        learnerQuery,
        instructorQuery,
    ]);

    console.log('Learner Result:', learnerResult);
    console.log('Instructor Result:', instructorResult);

    if (learnerResult.length || instructorResult.length) {
        redirect('/');
    }
}

export default async function OnboardingPage() {
    await checkOnboardingStatus();
    
    return <OnboardingForm />;
}
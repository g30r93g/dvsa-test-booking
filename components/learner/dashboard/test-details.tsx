import { db } from "@/db";
import { eq } from "drizzle-orm";
import { booking } from "@/db/schema";
import { getLearnerId } from "@/lib/cache-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getTestBooking() {
    const learnerId = await getLearnerId();

    if (!learnerId) {
        return null; // Handle unauthenticated user
    }

    // Fetch the test booking details for the learner
    const testBooking = await db
        .select()
        .from(booking)
        .where(eq(booking.learnerId, learnerId))
        .limit(1)
        .then((result) => result[0]);

    return testBooking;
}

export default async function TestDetails() {
    const testBooking = await getTestBooking();

    if (!testBooking) {
        return (
            <div className="my-4">
                <p>You have not booked a test.</p>
                <Link href="/book">
                    <Button variant="link" asChild>
                        <span>Book A Test</span>
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="my-4">
            <h2 className="text-xl font-bold">Your Test Details</h2>
            <p>{testBooking.slot}</p>
        </div>
    );
}
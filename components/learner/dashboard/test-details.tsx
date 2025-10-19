import { db } from "@/db";
import { getLearnerId } from "@/lib/cache-fns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { slot } from "@/db/schema";
import { format } from "date-fns";

type TestBooking = {
    id: string;
    bookedByType: "instructor" | "learner";
    bookedById: string; 
    learnerId: string;
    slot: typeof slot.$inferSelect
}


async function getTestBooking() {
    const learnerId = await getLearnerId();

    if (!learnerId) {
        return null; // Handle unauthenticated user
    }

    // Fetch the test booking details for the learner
    const data = await db.query.booking.findFirst({
        where: (booking, { eq }) => eq(booking.learnerId, learnerId),
        with: {
            slot: true, // Assuming 'slot' is a relation or column in the booking table
        },
    }) as TestBooking;

    if (!data) {
        return null; // No booking found for the learner
    }

    // Transform the data to match the expected type
    return {
        id: data.id,
        slot: data.slot,
    };
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

    const slotStart = testBooking.slot.startTime;
    const slotEnd = testBooking.slot.endTime;

    return (
        <div className="my-4">
            <h2 className="text-xl font-bold">Your Test Details</h2>
            <p>Start: {format(slotStart, 'HH:mm d/m/y')}</p>
            <p>End: {format(slotEnd, 'HH:mm d/m/y')}</p>
        </div>
    );
}
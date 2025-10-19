import { boolean, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { booking } from "./bookings";
import { learner } from "./learners";
import { instructor } from "./instructors";

export const bookingApproval = pgTable("booking_approvals", {
    id: uuid("id").primaryKey().defaultRandom(),
    bookingId: uuid("booking_id").notNull().references(() => booking.id),
    isApproved: boolean("is_approved").notNull().default(false),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    expiresAt: timestamp("expires_at").notNull(),

    // -- learner
    learnerId: uuid("learner_id").notNull().references(() => learner.id),
    learnerApprovedAt: timestamp("learner_approved_at"),

    // -- instructor
    instructorId: uuid("instructor_id").notNull().references(() => instructor.id),
    instructorApprovedAt: timestamp("instructor_approved_at"),
});

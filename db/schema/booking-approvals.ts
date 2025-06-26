import { boolean, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";

export const bookingApproval = pgTable("booking_approvals", {
    id: uuid("id").primaryKey(),
    bookingId: uuid("booking_id").notNull(),
    isApproved: boolean("is_approved").notNull().default(false),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    expiresAt: timestamp("expires_at").notNull(),

    // -- learner
    learnerId: uuid("learner_id").notNull(),
    learnerApprovedAt: timestamp("learner_approved_at"),

    // -- instructor
    instructorId: uuid("instructor_id").notNull(),
    instructorApprovedAt: timestamp("instructor_approved_at"),
});

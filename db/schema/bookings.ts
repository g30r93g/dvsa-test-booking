import { pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";

export const bookedByEnum = pgEnum("booked_by", [
    "learner",
    "instructor",
]);

export const booking = pgTable("bookings", {
    id: uuid("id").primaryKey(),
    bookedByType: bookedByEnum("booked_by_type").notNull(),
    bookedById: uuid("booked_by_id").notNull(),
    slot: uuid("slot_id").notNull(),
    learnerId: uuid("learner_id").notNull(),
});

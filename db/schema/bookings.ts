import { pgEnum, pgTable, uuid } from "drizzle-orm/pg-core";
import { learner } from "./learners";
import { slot } from "./slots";

export const bookedByEnum = pgEnum("booked_by", [
    "learner",
    "instructor",
]);

export const booking = pgTable("bookings", {
    id: uuid("id").primaryKey().defaultRandom(),
    bookedByType: bookedByEnum("booked_by_type").notNull(),
    bookedById: uuid("booked_by_id").notNull(),
    slot: uuid("slot_id").notNull().references(() => slot.id),
    learnerId: uuid("learner_id").notNull().references(() => learner.id),
});

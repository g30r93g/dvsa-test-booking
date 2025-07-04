import { pgEnum, pgTable, timestamp, uuid } from "drizzle-orm/pg-core";
import { instructor } from "./instructors";
import { learner } from "./learners";

export const linkStateEnum = pgEnum("link_state", [
    "pending",
    "cancelled",
    "accepted",
    "rejected",
    "removed",
]);

export const instructorStudent = pgTable("instructor_students", {
    id: uuid("id").primaryKey().defaultRandom(),
    instructorId: uuid("instructor_id").notNull().references(() => instructor.id),
    studentId: uuid("student_id").notNull().references(() => learner.id),
    linkState: linkStateEnum("link_state").notNull().default("pending"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

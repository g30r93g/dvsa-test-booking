import { pgTable, uuid } from "drizzle-orm/pg-core";
import { instructor } from "./instructors";
import { learner } from "./learners";

export const instructorStudent = pgTable("instructor_students", {
    id: uuid("id").primaryKey().defaultRandom(),
    instructorId: uuid("instructor_id").notNull().references(() => instructor.id),
    studentId: uuid("student_id").notNull().references(() => learner.id),
});

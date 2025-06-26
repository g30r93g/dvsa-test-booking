import {pgTable, uuid} from "drizzle-orm/pg-core";

export const instructorStudent = pgTable("instructor_students", {
    id: uuid("id").primaryKey(),
    instructorId: uuid("instructor_id").notNull(),
    studentId: uuid("student_id").notNull(),
});

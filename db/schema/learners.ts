import {pgTable, text, uuid} from "drizzle-orm/pg-core";

export const learner = pgTable("learners", {
    id: uuid("id").primaryKey(),
    userId: uuid("user_id").notNull(),
    drivingLicenceNumber: text("driving_licence_number").notNull(),
    theoryTestNumber: text("theory_test_number").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
});

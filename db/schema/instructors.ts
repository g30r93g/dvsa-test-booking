import {pgTable, text, uuid} from "drizzle-orm/pg-core";

export const instructor = pgTable("instructors", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id").notNull(),
    adiNumber: text("adi_number").notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
});

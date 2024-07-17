import { pgTable, uuid, varchar, integer, pgEnum } from "drizzle-orm/pg-core";

export const UserRole = pgEnum("userRole", ["admin", "basic"]);

export const userTable = pgTable("user_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  role: UserRole("userRole").default("basic").notNull(),
});

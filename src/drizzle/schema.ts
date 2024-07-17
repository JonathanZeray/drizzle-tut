import {
  pgTable,
  uuid,
  varchar,
  integer,
  pgEnum,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const UserRole = pgEnum("userRole", ["admin", "basic"]);

export const userTable = pgTable(
  "user_table",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    age: integer("age").notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    role: UserRole("userRole").default("basic").notNull(),
  },
  (table) => {
    return {
      emailIndex: uniqueIndex("emailIndex").on(table.email),
    };
  }
);

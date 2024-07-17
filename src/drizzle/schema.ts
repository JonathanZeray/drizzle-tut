import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("user_table", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
});

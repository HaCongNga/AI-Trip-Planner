import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // You can add your tables here as needed
  // Example for future use:
  
    //   trips: defineTable({
    //     userId: v.string(),
    //     destination: v.string(),
    //     startDate: v.string(),
    //     endDate: v.string(),
    //     budget: v.number(),
    //     preferences: v.array(v.string()),
    //     createdAt: v.number(),
    //   }),
  
  UserTable: defineTable({
    name: v.string(),
    imageUrl: v.string(),
    email: v.string(),
    subscription: v.optional(v.string()),
    }),
});
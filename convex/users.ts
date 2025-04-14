import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const syncUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    clerkId: v.string(),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    console.log("Syncing user with args:", args);
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .first();

    if (existingUser) {
      console.log("User already exists:", existingUser);
      return;
    }

    const newUser = await ctx.db.insert("users", {
      ...args,
      role: undefined, // Explicitly set as undefined
      hasSelectedRole: false, // Explicitly set as false for new users
    });
    console.log("New user created:", newUser);
    return newUser;
  },
});

export const getUsers = query({
  handler:async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if(!identity) throw new Error("User is not authenticated")

    const users = await ctx.db.query("users").collect()

    return users;
  }
})

export const getUserByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    return user;
  },
});

export const setUserRole = mutation({
  args: {
    clerkId: v.string(),
    role: v.union(v.literal("candidate"), v.literal("interviewer")),
  },
  handler: async (ctx, args) => {
    // Find the user by Clerk ID
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (!user) {
      // If user doesn't exist, create a new one with minimal data
      return await ctx.db.insert("users", {
        clerkId: args.clerkId,
        role: args.role,
        hasSelectedRole: true, // Set this flag as well
        name: "User", // Minimal placeholder
        email: `${args.clerkId}@example.com`, // Placeholder email
      });
    }

    // Update existing user's role and hasSelectedRole flag
    return await ctx.db.patch(user._id, {
      role: args.role,
      hasSelectedRole: true, // Ensure this is updated too
    });
  },
});

// Migration helper to fix users without roles
export const fixUserRoles = mutation({
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    let fixed = 0;
    
    for (const user of users) {
      // @ts-ignore - checking if role is missing
      if (!user.role) {
        await ctx.db.patch(user._id, {
          role: "candidate", // Default role
        });
        fixed++;
      }
    }
    
    return { fixed };
  },
});

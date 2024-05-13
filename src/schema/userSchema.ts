import { z as zod } from "zod"

export const registrationSchema = zod.object({
    email: zod.string({ message: "email is required" }).email({ message: "Email must be valid" }),
    username: zod.string({ message: "username is required" }).min(5).max(15).trim(),
    password: zod.string({ message: "password is required" }).min(5).trim(),
});

export const loginSchema = zod.object({
    username: zod.string({ message: "username is required" }).min(5).max(15).trim(),
    password: zod.string({ message: "password is required" }).min(5),
});




import { z as zod } from "zod"

export const registrationSchema = zod.object({
    email: zod.string({ message: "email is required" }).email({ message: "Email must be valid" }),
    username: zod.string({ message: "username is required" }),
    password: zod.string({ message: "password is required" }),
});

export const loginSchema = zod.object({
    username: zod.string({ message: "username is required" }),
    password: zod.string({ message: "password is required" }),
});




import { Static, Type } from "@sinclair/typebox";

export const SignupSchema = Type.Object({
  firstName: Type.String({ minLength: 1 }),
  lastName: Type.Optional(Type.String()),
  email: Type.String({ format: "email" }),
  password: Type.String({ minLength: 8 }),
});

export const SigninSchema = Type.Object({
  email: Type.String({ format: "email" }),
  password: Type.String({ minLength: 8 }),
});

export const UpdateProfileSchema = Type.Object({
  firstName: Type.String({ minLength: 1 }),
  lastName: Type.Optional(Type.String()),
  profilePicture: Type.String({ minLength: 1 }),
});

export type Signup = Static<typeof SignupSchema>;
export type Signin = Static<typeof SigninSchema>;
export type UpdateProfile = Static<typeof UpdateProfileSchema>;

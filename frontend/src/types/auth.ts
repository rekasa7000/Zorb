export type User = {
  email: string;
  firstName: string;
  lastName?: string | null;
  profilePicture: string;
  _id: Object;
  createdAt: Date;
  updatedAt: Date;
};

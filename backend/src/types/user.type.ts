export type UserInformation = {
  email: string;
  firstName: string;
  lastName?: string | null;
  password: string;
  profilePicture: string;
  _id: Object;
  createdAt: Date;
  updatedAt: Date;
};

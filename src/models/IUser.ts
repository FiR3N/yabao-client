export interface IUser {
  id: number;
  email: string;
  isConfirmed: boolean;
  role: number;
  password?: string;
  phone?: string;
  name?: string;
  surname?: string;
  activationLink?: string;
}

export interface IUser {
  id: number;
  email: string;
  isConfirmed: boolean;
  role: number;
  phone?: string;
  name?: string;
  surname?: string;
  activationLink?: string;
}

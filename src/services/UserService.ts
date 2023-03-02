import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class UserService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("users/login", { email, password });
  }
  static async reg(
    email: string,
    password: string,
    repeatePassword: string,
    name: string,
    surname: string,
    phone: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("users/reg", {
      email,
      password,
      repeatePassword,
      name,
      surname,
      phone,
    });
  }
  static async refresh(): Promise<AxiosResponse<AuthResponse>> {
    return $api<AuthResponse>(`users/refresh`, { withCredentials: true });
  }
  static async updateUserById(
    id: number,
    name: string,
    surname: string,
    phone: string
  ) {
    await $api.post(`/users/${id}`, { name, surname, phone });
  }
  static async getUserById(id: number): Promise<AxiosResponse> {
    return $api(`/users/user/${id}`);
  }
  static async logout() {
    await $api.post(`/users/logout`);
    localStorage.setItem("token", "");
  }
}

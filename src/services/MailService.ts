import $api from "../http";
import { AxiosResponse } from "axios";

export default class MailService {
  static async sendMessage(
    email: string,
    theme: string,
    text: string
  ): Promise<AxiosResponse> {
    return await $api.post("/mail", { email, theme, text });
  }
  static async sendActivationMessage(email: string, activationLink: string) {
    await $api.post("/users/send-activation-message", {
      email,
      activationLink,
    });
  }
}

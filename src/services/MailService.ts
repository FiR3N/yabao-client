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
}

import { IUser } from "../IUser";
import { AuthResponse } from "../response/AuthResponse";

export interface UserState {
  user: IUser;
  isAuth: boolean;
  error: string | boolean;
  loading: boolean;
}

export enum UserActionTypes {
  USER_LOGIN = "USER_LOGIN",
  USER_LOGOUT = "USER_LOGOUT",
  USER_REG = "USER_REG",
  USER_CHECK = "USER_CHECK",
  USER_ERROR = "USER_ERROR",
  USER_UPDATE = "USER_UPDATE",
  USER_LOADING = "USER_LOADING",
}

export type UserAction =
  | UserLoginAction
  | UserLogoutAction
  | UserRegAction
  | UserCheckAction
  | UserErrorAction
  | UserUpdateAction
  | UserLoadingAction;

export interface UserLoginAction {
  type: UserActionTypes.USER_LOGIN;
  payload: IUser;
}
export interface UserLogoutAction {
  type: UserActionTypes.USER_LOGOUT;
}
export interface UserRegAction {
  type: UserActionTypes.USER_REG;
  payload: IUser;
}
export interface UserCheckAction {
  type: UserActionTypes.USER_CHECK;
  payload: IUser;
}
export interface UserErrorAction {
  type: UserActionTypes.USER_ERROR;
  payload: string;
}
export interface UserUpdateAction {
  type: UserActionTypes.USER_UPDATE;
  payload: IUser;
}
export interface UserLoadingAction {
  type: UserActionTypes.USER_LOADING;
}

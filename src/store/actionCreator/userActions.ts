import { Dispatch } from "redux";
import {
  UserAction,
  UserActionTypes,
} from "../../models/store/UserReducerTypes";
import UserService from "../../services/UserService";

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await UserService.login(email, password);
      const user = await UserService.getUserById(response.data.user.id);
      dispatch({
        type: UserActionTypes.USER_LOGIN,
        payload: user.data,
      });
      localStorage.setItem("token", response.data.accessToken);
    } catch (e: any) {
      dispatch({
        type: UserActionTypes.USER_ERROR,
        payload: e.response?.data?.message,
      });
    }
  };
};

export const reg = (
  email: string,
  password: string,
  repeatePassword: string,
  name: string,
  surname: string,
  phone: string
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const response = await UserService.reg(
        email,
        password,
        repeatePassword,
        name,
        surname,
        phone
      );
      const user = await UserService.getUserById(response.data.user.id);
      dispatch({
        type: UserActionTypes.USER_REG,
        payload: user.data,
      });
      localStorage.setItem("token", response.data.accessToken);
    } catch (e: any) {
      dispatch({
        type: UserActionTypes.USER_ERROR,
        payload: e.response?.data?.message,
      });
    }
  };
};

export const checkIsAuth = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.USER_LOADING,
      });
      const response = await UserService.refresh();
      const user = await UserService.getUserById(response.data.user.id);
      localStorage.setItem("token", response.data.accessToken);
      dispatch({
        type: UserActionTypes.USER_CHECK,
        payload: user.data,
      });
    } catch (e: any) {
      // dispatch({
      //   type: UserActionTypes.USER_ERROR,
      //   payload: e.response?.data?.message,
      // });
      // console.log(e.response?.data?.message);
    }
  };
};

export const userUpdate = (
  id: number,
  name: string,
  surname: string,
  phone: string
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await UserService.updateUserById(id, name, surname, phone);
      const user = await UserService.getUserById(id);
      dispatch({
        type: UserActionTypes.USER_UPDATE,
        payload: user.data,
      });
    } catch (e: any) {
      dispatch({
        type: UserActionTypes.USER_ERROR,
        payload: e.response?.data?.message,
      });
    }
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await UserService.logout();
      dispatch({
        type: UserActionTypes.USER_LOGOUT,
      });
    } catch (e: any) {
      dispatch({
        type: UserActionTypes.USER_ERROR,
        payload: e.response?.data?.message,
      });
    }
  };
};

export const setAuthError = (message: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.USER_ERROR,
      payload: message,
    });
  };
};

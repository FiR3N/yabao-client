import { IUser } from "../../models/IUser";
import {
  UserActionTypes,
  UserAction,
  UserState,
} from "../../models/store/UserReducerTypes";

const initialState: UserState = {
  user: {} as IUser,
  isAuth: false,
  loading: false,
  error: false,
};

export default function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case UserActionTypes.USER_LOGIN:
      return { ...state, user: action.payload, error: false };
    case UserActionTypes.USER_LOADING:
      return { ...state, loading: true };
    case UserActionTypes.USER_REG:
      return { ...state, user: action.payload, error: false };
    case UserActionTypes.USER_CHECK:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        error: false,
        loading: false,
      };
    case UserActionTypes.USER_ERROR:
      return { ...state, error: action.payload };
    case UserActionTypes.USER_UPDATE:
      return { ...state, user: action.payload };
    case UserActionTypes.USER_LOGOUT:
      return { ...state, user: {} as IUser, isAuth: false };
    default:
      return state;
  }
}

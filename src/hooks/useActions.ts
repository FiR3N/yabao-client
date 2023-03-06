import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreator from "../store/actionCreator/userActions";
import * as BasketActionCreator from "../store/actionCreator/basketActions";

export const UserActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreator, dispatch);
};

export const BasketActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(BasketActionCreator, dispatch);
};

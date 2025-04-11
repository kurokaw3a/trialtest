import { useLocation } from "react-router-dom";
import { useAppDispatch } from "./redux";
import { TestingSlice } from "../store/reducers/TestingSlice";

export const ClearStateByLocation = () => {
  const location = useLocation();

  const dispatch = useAppDispatch();

  if (location.pathname) {
    dispatch(TestingSlice.actions.clearState());
  }
};

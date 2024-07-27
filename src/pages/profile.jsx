import React, { useEffect } from "react";
import store from "../redux/store";
import { getUsers, getUser } from "../redux/slices/userDetailsSlice";
import { useDispatch, useSelector } from "react-redux";

let id = "66a3ef7da2198e89edc770d9";

export default function profile() {
  // store.dispatch(getUsers());
  const dispatch = useDispatch();
  const usersArr = useSelector((state) => state.users.users.document);
  console.log(usersArr);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  return <div>profile</div>;
}


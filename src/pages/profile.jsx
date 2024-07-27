import React, { useEffect } from "react";
import store from "../redux/store";
import { getUsers, getUser } from "../redux/slices/userDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import MediaCard from "../components/profile/profileCard";
import Variants from "../components/profile/skeleton";

let id = "66a3ef7da2198e89edc770d9";

export default function profile() {
  // store.dispatch(getUsers());
  const dispatch = useDispatch();
  const usersArr = useSelector((state) => state.users.users.document);
  console.log(usersArr);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);
  if (!usersArr) {
    return <Variants></Variants>;
  }
  return (
    <div>
      <MediaCard user={usersArr[0]}></MediaCard>
    </div>
  );
}


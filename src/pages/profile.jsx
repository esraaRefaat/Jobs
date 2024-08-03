import React, { useEffect } from "react";
import store from "../redux/store";
import { getUsers, getUser } from "../redux/slices/userDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import MediaCard from "../components/profile/profileCard";
import Variants from "../components/profile/skeleton";
import AppliedJobsCard from "../components/profile/appliedJobsCard";
import AddedJobsCard from "../components/profile/addedJobsCard";

import { Box, Container, Grid } from "@mui/material";

export default function profile() {
  let id = useSelector((state) => state.Token.token.user_id);
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
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingY: 2,
        gap: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <MediaCard user={usersArr[0]} />
      </Box>
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <AppliedJobsCard user={usersArr[0]} />
      </Box>
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        <AddedJobsCard user={usersArr[0]} />
      </Box>
    </Container>
  );
}


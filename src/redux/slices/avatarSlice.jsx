import { createSlice } from "@reduxjs/toolkit";

export const avatarSlice = createSlice({
  name: "avatar",
  initialState: {
    avatar: "Profile/avatar/2.svg",
  },
  reducers: {
    getAvatar: (state, action) => {
      state.avatar = action.payload;
    },
  },
});
export default avatarSlice.reducer;


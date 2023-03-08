import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";


const UserStore = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default UserStore;
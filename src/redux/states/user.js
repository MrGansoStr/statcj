import { createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../../models/InitialUser";
import { LSKeys } from "../../models/LocalStorageKeys";
import { ClearLocalStorageValue, GetLocalStorage } from "../../utilities/ManageLocalStorage";
import { InsertLocalStorageValue } from './../../utilities/ManageLocalStorage';

export const userSlice = createSlice({
  name: LSKeys.USER,
  initialState: GetLocalStorage(LSKeys.USER) ? JSON.parse(GetLocalStorage(LSKeys.USER)) : UserModel,
  reducers: {
    createUser: (state, action) => {
      InsertLocalStorageValue(LSKeys.USER, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      let result = { ...state, ...action.payload };
      InsertLocalStorageValue(LSKeys.USER, result);
      return result;
    },
    deleteUser: (state, action) => {
      ClearLocalStorageValue(LSKeys.USER);
      return UserModel;
    }
  }
});

export const { createUser, updateUser, deleteUser } = userSlice.actions;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userLogin} from './authAction';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

type AuthState = {
    isAuth: boolean;
    last_name: string;
    first_name: string;
    loading: boolean;
    token: string;
  };
  
  const initialState: AuthState = {
    isAuth: false,
    first_name: "",
    last_name: "",
    loading: false,
    token: "",
  };

  // Configure Redux Persist
const authPersistConfig = {
    key: "auth",
    storage,
    blacklist: ["loading"],
    // Add any additional configuration options as needed
  };

  export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      logOut: () => {
        localStorage.setItem("token", "");
        localStorage.clear();
  
        return initialState;
      },
      logIn: (state, action: PayloadAction<string>) => {
        state.isAuth = true;
      },
    },
    extraReducers: (builder) => {
      // login
      builder
        .addCase(userLogin.pending, (state) => {
          state.loading = true;
        })
        .addCase(userLogin.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuth = true;
          state.token = action.payload?.token;
          state.first_name = action.payload?.first_name;
          state.last_name = action.payload?.last_name;
          localStorage.setItem("token", action.payload.token);
        })
        .addCase(userLogin.rejected, (state) => {
          state.loading = false;
          state.isAuth = false;
        });
    }
})

const authReducer = persistReducer(authPersistConfig, authSlice.reducer);
export const { logOut, logIn } = authSlice.actions;
export default authReducer;
  
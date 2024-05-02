import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../config";
import axios from "axios";
import toast from "react-hot-toast"

interface LoginCredentials {
    token: string;
  }

  export interface LoginApiResponse {
    // Define the properties you expect in the API response
    token: string;
    // Add other properties as needed
  }
  
  export const userLogin = createAsyncThunk(
    "login",
    async (credentials: LoginCredentials, { rejectWithValue }) => {
      try {
        const res = await axios.post(`${apiUrl}auth/login/`, {
          token: credentials.token,
        });
        if (res.status === 200) {
          let data = res.data.data;
          toast.success("Login successful!", {
            style: {
              border: "1px solid #9437f1",
              backgroundColor: " #9437f1",
              color: "#FFFFFF",
              fontSize: 14,
            },
            position: "bottom-right",
          });
          return data;
        }
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
          toast.error("Invalid Credentials!");
          return rejectWithValue(error);
        } else {
          toast.error("Invalid Credentials!");
          return rejectWithValue(error);
        }
      }
    }
  );

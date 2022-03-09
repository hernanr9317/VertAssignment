import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getActivitiesAxios, refreshAuth } from "../../utils/axiosApi";

const initialState = {
  data: [],
  status: "idle",
  errorMsg: "",
  loader: false,
};

export const getActivities = createAsyncThunk(
  "activities/getActivitiesData",
  async (token) => {
    try {
      const token = await refreshAuth();
      const response = await getActivitiesAxios(token);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
);

export const activitiesReducer = createSlice({
  name: "activities",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getActivities.pending, (state) => {
        state.status = "pending";
        state.loader = true;
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
        state.loader = false;
      })
      .addCase(getActivities.rejected, (state, action) => {
        state.errorMsg = action.payload.error;
        state.status = "error";
        state.loader = false;
      });
  },
});

export default activitiesReducer.reducer;

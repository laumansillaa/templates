// import createListToSelect from "@/helpers/createListToSelect";
import { createSlice } from "@reduxjs/toolkit";

export const themesSlice = createSlice({
  name: "theme",
  initialState: {
    list: [],
    post: {},
    propertyTypes: [],
  },

  reducers: {
    getCategoryList: (state, action) => {
      state.action = result;
    },

    actionSetPropertyId: (state, action) => {
      state.post = action.payload;
    },

    getPost: (state, action) => {
      state.post = action.payload;
    },

    setListPost: (state, action) => {
      state.list = action.payload;
    },

    setSearch: (state, action) => {
      state.list = action.payload;
    },

    setPropertyTypes: (state, action) => {
      state.propertyTypes = action.payload;
    },
  },
});

export const {
  getCategoryList,
  actionSetPropertyId,
  getPost,
  setListPost,
  setSearch,
  setPropertyTypes
} = themesSlice.actions;

export default themesSlice.reducer;

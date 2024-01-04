
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./slices/index";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    // formPublish: formPersistedReducer,
    // book: bookReducer,
    // category: categoryReducer,
    // cart: cartReducer,
  },
  middleware: [thunk],
});

export const persistor = store;

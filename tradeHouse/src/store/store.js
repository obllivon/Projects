import {configureStore} from "@reduxjs/toolkit";
import mainReducer from "./slices/mainSlice";
import userPageReducer from "./slices/userPageSlice";
    const store = configureStore({
        reducer: {
            main:mainReducer,
            userPage:userPageReducer
        }
    })

    export default store;
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import workReducer from "./reducers/WorkSlice";
import designerReducer from "./reducers/DesignerSlice";
import todoReducer from "./reducers/ToDoSlice";
import {todoAPI} from "../modules/NotesModule/sevices/ToDoService";

const rootReducer = combineReducers({
    workReducer,
    designerReducer,
    todoReducer,
    [todoAPI.reducerPath]: todoAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoAPI.middleware),
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

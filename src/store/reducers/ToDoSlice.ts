import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IToDo} from "../../models/IToDo";
import {fetchToDos} from "./ActionCreator";

interface ITodoState {
    todos: IToDo[],
    isLoading: boolean,
    error: string,
}

const initialState: ITodoState = {
    todos: [],
    isLoading: false,
    error: '',
}

export const todoSlice = createSlice({
        name: 'todo',
        initialState,
        reducers: {
            editToDo(state, action:PayloadAction<{id: number, newTitle: string}>){
                const index = state.todos.indexOf(state.todos.find((elem)=>elem.id===action.payload.id)!);
                state.todos[index].title = action.payload.newTitle;
            },
            deleteToDo(state, action:PayloadAction<number>){
                const index = state.todos.indexOf(state.todos.find((elem)=>elem.id===action.payload)!);
                state.todos.splice(index, 1);
            }
        },
        extraReducers: {
            [fetchToDos.fulfilled.type]: (state, action: PayloadAction<IToDo[]>) => {
                state.isLoading = false;
                state.error = '';
                state.todos = action.payload;
            },
            [fetchToDos.pending.type]: (state) => {
                state.isLoading = true;
            },
            [fetchToDos.rejected.type]: (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        },
    }
);

export default todoSlice.reducer;
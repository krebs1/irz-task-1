import axios from "axios";
import {IToDo} from "../../models/IToDo";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchToDos = createAsyncThunk(
    'todos/fetchAll',
    async(_, thunkAPI)=>{
        try {
            const response = await axios.get<IToDo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10");
            return response.data;
        }catch (err) {
            if(err instanceof Error) return thunkAPI.rejectWithValue(err.message);
            else return thunkAPI.rejectWithValue("Unknown error");
        }
    }
)
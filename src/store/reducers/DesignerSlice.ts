import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDesigner} from "../../models/IDesigner";
import {DESIGNER_DATA} from "../../data/DesignerData";

interface IDesignerState {
    designers: IDesigner[],
    isLoading: boolean,
    error: string,
}

const initialState: IDesignerState = {
    designers: DESIGNER_DATA,
    isLoading: false,
    error: '',
}

export const designerSlice = createSlice({
    name: 'designer',
    initialState,
    reducers: {},
    extraReducers: {},
});

export default designerSlice.reducer;
import {IWork} from "../../models/IWork";
import {WORK_DATA} from "../../data/WorkData";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IWorkState {
    works: IWork[],
    isLoading: boolean,
    error: string,
}

const initialState: IWorkState = {
    works: WORK_DATA.sort((a, b) => a.index - b.index),
    isLoading: false,
    error: '',
}

export const workSlice = createSlice({
    name: 'work',
    initialState,
    reducers: {
        removeDesigner(state, action: PayloadAction<{ workId: number, designerId: number }>) {
            const workIndex = state.works.indexOf(state.works.find((elem) => elem.id === action.payload.workId)!);
            const designerIndex = state.works[workIndex].designers.indexOf(action.payload.designerId);
            state.works[workIndex].designers.splice(designerIndex, 1);
        },
        addDesigner(state, action: PayloadAction<{ workId: number, designerId: number }>) {
            const index = state.works.indexOf(state.works.find((elem) => elem.id === action.payload.workId)!)
            state.works[index].designers.push(action.payload.designerId);
        },
        changeOrder(state, action: PayloadAction<{ dragId: number, hoverId: number, displacement: 'up' | 'low' }>) {
            const dragIndex = state.works.indexOf(state.works.find((elem) => elem.id === action.payload.dragId)!);
            const hoverIndex = state.works.indexOf(state.works.find((elem) => elem.id === action.payload.hoverId)!);
            const buf = state.works[dragIndex];
            state.works.splice(dragIndex, 1);
            if (action.payload.displacement === 'up') {
                state.works.splice(hoverIndex, 0, buf);
            } else if (action.payload.displacement === 'low') {
                state.works.splice(hoverIndex + 1, 0, buf);
            }
            state.works.map((elem, index) => elem.index = index);
        }
    },
    extraReducers: {},
});

export default workSlice.reducer;
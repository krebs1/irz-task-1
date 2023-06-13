import {createContext, Dispatch, SetStateAction} from "react";
import {IWorkDataItem, WORK_DATA} from "../data/WorkData";

export interface IWorkDataContext{
    workData: Array<IWorkDataItem>,
    setWorkData?: Dispatch<SetStateAction<Array<IWorkDataItem>>>,
}
export const WorkDataContext = createContext<IWorkDataContext>({
    workData: WORK_DATA
})
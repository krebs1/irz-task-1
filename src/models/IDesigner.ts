import {IPhoto} from "./IPhoto";

export interface IDesigner {
    id: number,
    name: string,
    about: string,
    avatar: string,
    photos: IPhoto[],
}
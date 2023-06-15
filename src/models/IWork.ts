export interface IWork{
    id:number,
    title: string,
    des: string,
    photos: Array<{alt:string, path:string}>,
    designers: Array<number>,
    index: number,
}
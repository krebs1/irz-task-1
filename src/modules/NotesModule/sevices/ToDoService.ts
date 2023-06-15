import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IToDo} from "../../../models/IToDo";

export const todoAPI = createApi({
    reducerPath: 'todoAPI',
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (build) => ({
        fetchAllToDos: build.query<IToDo[], number>({
            query: (limit:number = 10) => ({
                url: '/todos',
                params: {
                    _limit: limit,
                }
            })
        })
    }),
})
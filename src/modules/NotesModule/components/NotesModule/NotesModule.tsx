import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import Loader from "../../../../UI/Loader/Loader";
import {todoAPI} from "../../sevices/ToDoService";
import {fetchToDos} from "../../../../store/reducers/ActionCreator";
import NoteCard from "../NoteCard/NoteCard";
import Style from "./NotesModule.module.scss";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "../../../../hooks/reduxHooks";

const NotesModule = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get('q');

    //rtk
    //const {data: todos, error, isLoading} = todoAPI.useFetchAllToDosQuery(10);

    const dispatch = useAppDispatch();
    const {todos, isLoading, error} = useAppSelector(state => state.todoReducer);

    useEffect(()=>{
        dispatch(fetchToDos());
    }, [])

    return (
        <div className={Style.NotesModule}>
            {
                isLoading &&
                <Loader/>
            }
            {
                error &&
                <h2>{error}</h2>
            }
            {
                todos &&
                todos.map((todo)=>{
                    return(
                        <NoteCard id={todo.id}
                                  userId={todo.userId}
                                  title={todo.title}
                                  completed={todo.completed}
                                  classname={Style.NotesModule_Note}
                                  key={todo.id}
                        />
                    )
                })
            }
        </div>
    );
};

export default NotesModule;
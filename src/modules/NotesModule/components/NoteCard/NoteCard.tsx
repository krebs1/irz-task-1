import React, {FC, useState} from 'react';
import UserAvatar from "../../../../UI/UserAvatar/UserAvatar";
import {useAppSelector} from "../../../../hooks/reduxHooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../UI/Button/Button";
import Style from "./NoteCard.module.scss";
import {useDispatch} from "react-redux";
import {todoSlice} from "../../../../store/reducers/ToDoSlice";

interface INoteCardProps {
    classname?: string,
    style?: React.CSSProperties,
    id: number,
    userId: number,
    title: string,
    completed: boolean,
}

const NoteCard: FC<INoteCardProps> = ({classname = '', style, id, userId, title, completed}) => {
    const dispatch = useDispatch();
    const {designers} = useAppSelector(state => state.designerReducer);
    const {deleteToDo, editToDo} = todoSlice.actions;
    const designer = designers.find((elem) => elem.id === userId)!;
    const avatar = require(`../../../../data/${designer.avatar}`);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [newTitle, setNewTitle] = useState<string>(title);

    return (
        <div className={`${Style.NoteCard} ${classname}`}
             style={style}
        >
            <div className={Style.NoteCard_header}>
                {
                    !isEdit &&
                    <div className={Style.NoteCard_header_titleWrapper}>
                        <h4 className={Style.NoteCard_header_titleWrapper_title}>{title}</h4>
                        <button className={Style.NoteCard_header_titleWrapper_editBtn}
                                onClick={() => setIsEdit(true)}
                        >
                            <FontAwesomeIcon icon={faPenToSquare}/>
                        </button>
                    </div>
                }
                {
                    isEdit &&
                    <div className={Style.NoteCard_header_editTitleWrapper}>
                        <input className={Style.NoteCard_header_editTitleWrapper_input}
                               type="text"
                               placeholder="Enter new title"
                               value={newTitle}
                               onChange={(e) => {
                                   setNewTitle(e.target.value)
                               }}
                        />
                        <Button type={"solid"}
                                className={Style.NoteCard_header_editTitleWrapper_btn}
                                onClickHandler={() => {
                                    dispatch(editToDo({id: id, newTitle: newTitle}))
                                    setIsEdit(false);
                                }}
                        >
                            Edit
                        </Button>
                    </div>
                }
            </div>
            <div className={Style.NoteCard_creatorWrapper}>
                <h5 className={Style.NoteCard_creatorWrapper_title}>Creator:</h5>
                <div className={Style.NoteCard_creatorWrapper_creator}>
                    <UserAvatar className={Style.NoteCard_creatorWrapper_creator_avatar}
                                src={avatar}
                                alt={`${designer.name} avatar`}
                    />
                    <span className={Style.NoteCard_creatorWrapper_creator_name}>{designer.name}</span>
                </div>
            </div>
            <div className={Style.NoteCard_actions}>
                <Button type={"solid"}
                        onClickHandler={() => {
                            dispatch(deleteToDo(id));
                        }}
                        className={Style.NoteCard_actions_deleteAction}
                >
                    Delete
                </Button>
            </div>
        </div>
    );
}

export default NoteCard;
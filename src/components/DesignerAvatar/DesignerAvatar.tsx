import React, {FC, useState} from 'react';
import UserAvatar from "../../UI/UserAvatar/UserAvatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import Style from "./DesignerAvatar.module.scss";
import {useDispatch} from "react-redux";
import {workSlice} from "../../store/reducers/WorkSlice";

interface IDesignerAvatar {
    classname?: string,
    style?: React.CSSProperties,
    src: string,
    alt: string,
    designerId: number,
    workId: number
}

const DesignerAvatar: FC<IDesignerAvatar> = ({classname = '', style, src, alt, designerId, workId}) => {
    const dispatch = useDispatch();
    const {removeDesigner} = workSlice.actions;

    let [isMouseOn, setIsMouseOn] = useState<boolean>(false);

    return (
        <div className={`${Style.DesignerAvatar} ${classname}`}
             style={style}
             onMouseEnter={() => setIsMouseOn(true)}
             onMouseLeave={() => setIsMouseOn(false)}
        >
            <UserAvatar className={Style.DesignerAvatar_avatar}
                        src={src}
                        alt={alt}
            />
            {
                isMouseOn &&
                <button className={Style.DesignerAvatar_btn}
                        onClick={() => {
                            dispatch(removeDesigner({workId, designerId}))
                        }}
                >
                    <FontAwesomeIcon className={Style.DesignerAvatar_btn_icon}
                                     icon={faTrash}
                    />
                </button>
            }
        </div>
    );
};

export default DesignerAvatar;
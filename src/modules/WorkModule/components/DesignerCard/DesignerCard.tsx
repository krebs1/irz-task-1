import React, {FC} from 'react';
import Style from "./DesignerCard.module.scss";
import UserAvatar from "../../../../UI/UserAvatar/UserAvatar";

interface IDesignerCard {
    classname?: string,
    style?: React.CSSProperties,
    id: number,
    workId: number,
    avatar: string,
    name: string,
    about: string,
}

const DesignerCard: FC<IDesignerCard> = ({classname = '', style, name, about, id, workId, avatar}) => {
    return (
        <div className={`${Style.DesignerCardWrapper} ${classname}`}
             style={style}
        >
            <div className={Style.DesignerCardWrapper_card}>
                <UserAvatar className={Style.DesignerCardWrapper_card_avatar}
                            src={avatar}
                            alt={name}
                />
                <h3 className={Style.DesignerCardWrapper_card_name}>{name}</h3>
                <p className={Style.DesignerCardWrapper_card_about}>{about}</p>
            </div>
        </div>
    );
};

export default DesignerCard;
import React, {FC} from 'react';
import Style from "./DesignerCard.module.scss";
import UserAvatar from "../../../../UI/UserAvatar/UserAvatar";
import {itemTypes} from "../../../../reactDND/types";
import {useDrag} from "react-dnd";

type IDesignerCardProps = {
    className?: string,
    style?: React.CSSProperties,
    alt?: string,
    src: string,
    title: string,
    id: number
}

const DesignerCard: FC<IDesignerCardProps> = ({className, style, alt = '', src, title, id}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: itemTypes.DESIGNER,
        item: {id},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <div className={Style.DesignerCard}
             style={{
                 opacity: isDragging ? 0.5 : 1,
                 cursor: isDragging ? 'grabbing' : 'grab',
             }}
             ref={drag}
        >
            <UserAvatar className={Style.DesignerCard_avatar}
                        src={src}
                        alt={alt}
            />
            <h5 className={Style.DesignerCard_title}>{title}</h5>
        </div>
    );
};

export default DesignerCard;
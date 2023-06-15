import React, {FC} from 'react';
import Style from "./ManagementCard.module.scss";
import {useDrop} from "react-dnd";
import {itemTypes} from "../../../../reactDND/types";
import {workSlice} from "../../../../store/reducers/WorkSlice";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../../hooks/reduxHooks";
import UserAvatar from "../../../../UI/UserAvatar/UserAvatar";
import {IPhoto} from "../../../../models/IPhoto";
import DesignerAvatar from "../../../../components/DesignerAvatar/DesignerAvatar";

type IManagementCardProps = {
    className?: string,
    id: number,
    title: string,
    description: string,
    photos: IPhoto[],
    designersIds: number[],
}

interface IDragItem {
    id: number,
}

const ManagementCard: FC<IManagementCardProps> = ({className = '', id, title, description, photos, designersIds}) => {
    const dispatch = useDispatch();
    const {addDesigner} = workSlice.actions;
    const {designers} = useAppSelector(state => state.designerReducer);

    const [{isOver, canDrop}, drop] = useDrop(
        () => ({
            accept: itemTypes.DESIGNER,
            drop: (item: IDragItem) => {
                dispatch(addDesigner({workId: id, designerId: item.id}));
            },
            canDrop: (item: IDragItem) => {
                return !(designersIds.includes(item.id));
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            })
        }),
        [id, designersIds]
    )


    return (
        <div className={`${Style.CardWrapper} ${className}`}
             style={{border: isOver ? '1px solid var(--color-text-dark)' : 'none'}}
             ref={drop}
        >
            <div className={Style.CardWrapper_header}>
                <div className={Style.CardWrapper_header_info}>
                    <h5 className={Style.CardWrapper_header_info_title}>{title}</h5>
                    <p className={Style.CardWrapper_header_info_des}>{description}</p>
                </div>
                <div className={Style.CardWrapper_header_designers}>
                    {
                        designers.filter((elem) => designersIds.includes(elem.id)).map((designer) => {
                            const avatar = require(`../../../../data/${designer.avatar}`);

                            return (
                                <DesignerAvatar
                                    classname={Style.CardWrapper_header_designers_designer}
                                    src={avatar}
                                    alt={designer.name}
                                    designerId={designer.id}
                                    workId={id}
                                    key={`avatar${designer.id}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className={Style.CardWrapper_photos}>
                {
                    photos.map((photoData) => {
                        const photo = require(`../../../../data/${photoData.path}`);

                        return (
                            <img className={Style.CardWrapper_photos_phohto}
                                 src={photo}
                                 alt={photoData.alt}
                                 key={photoData.path}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ManagementCard;
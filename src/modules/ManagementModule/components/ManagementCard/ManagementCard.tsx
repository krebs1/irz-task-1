import React, {FC, useContext} from 'react';
import Style from "./ManagementCard.module.scss";
import {useDrop} from "react-dnd";
import {itemTypes} from "../../../../reactDND/types";
import {IWorkDataContext, WorkDataContext} from "../../../../context/WORKDATAcontext";

type IManagementCardProps = {
    className?: string,
    title: string,
    description: string,
    id: number,
    photos: Array<{ alt: string, path: string }>,
    designers: Array<number>,
}

const ManagementCard: FC<IManagementCardProps> = ({className, title, description, photos, id, designers}) => {
    let {workData, setWorkData} = useContext<IWorkDataContext>(WorkDataContext);

    console.log(workData[id-1].designers)

    const [{isOver, canDrop}, drop] = useDrop(
        () => ({
            accept: itemTypes.DESIGNER,
            drop: (item) => {
                if (setWorkData) {
                    console.log(workData[id].designers)
                    setWorkData(prevState => {
                        // @ts-ignore
                        prevState[id-1].designers.push(item.id)
                        return prevState
                    });
                }
            },
            canDrop: (item) => {
                // @ts-ignore
                return !(designers.includes(item.id));
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            })
        }),
        []
    )

    return (
        <div className={`${Style.CardWrapper} ${className}`}
             ref={drop}
        >
            <div className={Style.CardWrapper_header}>
                <div className={Style.CardWrapper_header_left}>
                    <div className={Style.CardWrapper_header_left_titleWrapper}>
                        <h5 className={Style.CardWrapper_header_left_titleWrapper_title}>{title}</h5>
                    </div>
                    <p className={Style.CardWrapper_header_left_des}>{description}</p>
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
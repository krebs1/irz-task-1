import React, {FC, useMemo, useRef} from 'react';
import Style from "./WorksCard.module.scss";
import Button from "../../../../UI/Button/Button";
import {DESIGNER_DATA} from "../../../../data/DesignerData";
import UserAvatar from "../../../../UI/UserAvatar/UserAvatar";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGripVertical} from "@fortawesome/free-solid-svg-icons";
import {useDrag, useDrop} from "react-dnd";
import {Identifier, XYCoord} from "dnd-core";
import {itemTypes} from "../../../../reactDND/types";
import {useDispatch} from "react-redux";
import {workSlice} from "../../../../store/reducers/WorkSlice";
import {useAppSelector} from "../../../../hooks/reduxHooks";

interface IWorkCardProps {
    className?: string,
    title: string,
    description: string,
    photos: Array<{ alt: string, path: string }>,
    designers: Array<number>,
    id: number,
}

interface IDragItem {
    dragId: number
}

const WorksCard: FC<IWorkCardProps> = ({className, title, description, photos, designers, id}) => {
    const ref = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const {changeOrder} = workSlice.actions;
    const {works} = useAppSelector(state => state.workReducer);

    const [{isDragging}, drag] = useDrag({
        type: itemTypes.WORK,
        item: () => {
            return {dragId: id}
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [{handlerId}, drop] = useDrop<IDragItem,
        void,
        { handlerId: Identifier | null }>({
        accept: itemTypes.WORK,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: IDragItem, monitor) {
            if (!ref.current) {
                return
            }
            const dragId = item.dragId;
            const hoverId = id;

            if (dragId === hoverId) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            //dragId < hoverId &&
            //dragId > hoverId &&

            const dragIndex = works.indexOf(works.find((elem) => elem.id === dragId)!);
            const hoverIndex = works.indexOf(works.find((elem) => elem.id === hoverId)!);


            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            if (hoverClientY > hoverMiddleY) dispatch(changeOrder({dragId, hoverId, displacement: "low"}))
            else if (hoverClientY <= hoverMiddleY) dispatch(changeOrder({dragId, hoverId, displacement: "up"}))
        },
        drop(item: IDragItem) {

        }
    })

    drop(ref);

    return (
        <div className={`${Style.CardWrapper} ${className}`}
             style={{opacity: isDragging ? 0.5 : 1}}
             ref={ref}
        >
            <div className={Style.CardWrapper_header}>
                <div className={Style.CardWrapper_header_left}>
                    <div className={Style.CardWrapper_header_left_titleWrapper}>
                        <h5 className={Style.CardWrapper_header_left_titleWrapper_title}>{title}</h5>
                        <Link to={`/works/${id}`}>

                            <Button type={'border'}
                                    textColor={'#4A4A4A'}
                                    borderColor={'#4A4A4A'}
                                    className={Style.CardWrapper_header_left_titleWrapper_btn}
                            >
                                Button 1
                            </Button>
                        </Link>

                    </div>
                    <div className={Style.CardWrapper_header_left_designers}>
                        {
                            designers.map((designerID) => {
                                const avatar = require(`../../../../data/${DESIGNER_DATA[designerID - 1].avatar}`)
                                return (
                                    <UserAvatar className={Style.CardWrapper_header_left_designers_avatar}
                                                src={avatar}
                                                alt={DESIGNER_DATA[designerID - 1].name}
                                                key={DESIGNER_DATA[designerID - 1].id}
                                    />
                                );
                            })
                        }
                    </div>
                    <p className={Style.CardWrapper_header_left_des}>{description}</p>
                </div>
                <div className={Style.CardWrapper_header_gripWrapper}
                     ref={drag}
                >
                    <FontAwesomeIcon className={Style.CardWrapper_header_gripWrapper_grip}
                                     icon={faGripVertical}
                    />
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

export default WorksCard;
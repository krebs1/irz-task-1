import React, {FC} from 'react';
import Style from "./WorkCard.module.scss";
import Button from "../../../../UI/Button/Button";
import {DESIGNER_DATA} from "../../../../data/DesignerData";
import UserAvatar from "../../../../UI/UserAvatar/UserAvatar";
import {Link} from "react-router-dom";

type IWorkCardProps = {
    className?: string,
    title: string,
    description: string,
    photos: Array<{ alt: string, path: string }>,
    designers: Array<number>,
    id: number,
}

const WorkCard: FC<IWorkCardProps> = ({className, title, description, photos, designers, id}) => {
    return (
        <div className={`${Style.CardWrapper} ${className}`}>
            <div className={Style.CardWrapper_header}>
                <div className={Style.CardWrapper_header_left}>
                    <div className={Style.CardWrapper_header_left_titleWrapper}>
                        <h5 className={Style.CardWrapper_header_left_titleWrapper_title}>{title}</h5>
                        <Link to={`/work?workId=${id}`}>

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
                                                alt={DESIGNER_DATA[designerID - 1].title}
                                                key={DESIGNER_DATA[designerID - 1].id}
                                    />
                                );
                            })
                        }
                    </div>
                    <p className={Style.CardWrapper_header_left_des}>{description}</p>
                </div>
                <Button type={'solid'}
                        bgColor={'#C1C0BE'}
                        textColor={'#4A4A4A'}
                        className={Style.CardWrapper_header_btn}
                >
                    Button 2
                </Button>
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

export default WorkCard;
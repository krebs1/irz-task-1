import React, {FC} from 'react';
import Style from "./DesignersCard.module.scss";
import Button from "../../../../UI/Button/Button";
import UserAvatar from "../../../../UI/UserAvatar/UserAvatar";

type IDesignersCardProps = {
    className?: string,
    title: string,
    description: string,
    avatar: string,
    photos: Array<{ alt: string, path: string }>,
    id: number,
}

const DesignersCard: FC<IDesignersCardProps> = ({className, title, description, photos, avatar, id}) => {
    return (
        <div className={`${Style.CardWrapper} ${className}`}>
            <div className={Style.CardWrapper_header}>
                <div className={Style.CardWrapper_header_left}>
                    <UserAvatar src={require(`../../../../data/${avatar}`)}
                                alt='User avatar'
                                className={Style.CardWrapper_header_left_avatar}
                    />
                    <div className={Style.CardWrapper_header_left_data}>
                        <div className={Style.CardWrapper_header_left_data_titleWrapper}>
                            <h5 className={Style.CardWrapper_header_left_data_titleWrapper_title}>{title}</h5>
                            <Button type={'border'}
                                    textColor={'#4A4A4A'}
                                    borderColor={'#4A4A4A'}
                                    className={Style.CardWrapper_header_left_data_titleWrapper_btn}
                            >
                                Button 1
                            </Button>
                        </div>
                        <p className={Style.CardWrapper_header_left_data_des}>{description}</p>
                    </div>
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

export default DesignersCard;
import React, {FC} from 'react';
import Style from "./WorkCard.module.scss";
import Button from "../../../../UI/Button/Button";

type IWorkCardProps = {
    className?: string,
    title: string,
    description: string,
    photos: Array<{alt:string, path: string}>,
}

const WorkCard:FC<IWorkCardProps> = ({className, title, description, photos}) => {
    return (
        <div className={`${Style.CardWrapper} ${className}`}>
            <div className={Style.CardWrapper_header}>
                <div className={Style.CardWrapper_header_left}>
                    <div className={Style.CardWrapper_header_left_titleWrapper}>
                        <h5 className={Style.CardWrapper_header_left_titleWrapper_title}>{title}</h5>
                        <Button type={'border'}
                                textColor={'#4A4A4A'}
                                borderColor={'#4A4A4A'}
                                className={Style.CardWrapper_header_left_titleWrapper_btn}
                        >
                            Button 1
                        </Button>
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
                    photos.map((photoData)=>{
                        const photo = require(`../../../../data/${photoData.path}`);

                        return(
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
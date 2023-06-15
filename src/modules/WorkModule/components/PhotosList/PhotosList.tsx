import React, {FC} from 'react';
import {IPhoto} from "../../../../models/IPhoto";
import Style from "./PhotoList.module.scss";
import Img from "../../../../UI/Img/Img";

interface IPhotosListProps {
    classname?: string,
    style?: React.CSSProperties,
    photos: IPhoto[],
}

const PhotosList: FC<IPhotosListProps> = ({classname = '', style, photos}) => {


    return (
        <div className={`${Style.PhotoList} ${classname}`}
             style={style}
        >
            <h2 className={Style.PhotoList_title}>Photos</h2>
            <div className={Style.PhotoList_list}>
                {
                    photos.map((elem) => {
                        const photo = require(`../../../../data/${elem.path}`);

                        return (
                            <Img classname={Style.PhotoList_list_img}
                                 src={photo}
                                 alt='photo'
                                 key={elem.path}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default PhotosList;
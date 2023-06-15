import React, {FC, useState} from 'react';
import Style from "./Img.module.scss";
import {spacing} from "react-select/dist/declarations/src/theme";

interface IImgProps {
    classname?: string,
    style?: React.CSSProperties,
    src: string,
    alt?: string,
}

const Img: FC<IImgProps> = ({classname = '', style, src, alt = ''}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    return (
        <div className={`${Style.ImgWrapper} ${classname}`}
             style={style}
        >
            <img className={Style.ImgWrapper_img}
                 style={{display: isError ? 'none' : 'block'}}
                 src={src}
                 alt={alt}
                 onLoad={() => setIsLoading(true)}
                 onError={() => setIsError(true)}
            />
            {
                !isLoading &&
                <div className={Style.ImgWrapper_loader}>
                    {
                        isError &&
                        <span className={Style.ImgWrapper_loader_errMsg}>Loading error!</span>
                    }
                </div>
            }
        </div>
    );
};

export default Img;
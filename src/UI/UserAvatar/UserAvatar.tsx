import React, {FC} from 'react';
import Style from './UserAvatar.module.scss';

type IUserAvatarProps = {
    className?: string,
    src: string,
    alt: string,
}

const UserAvatar: FC<IUserAvatarProps> = ({className, src, alt}) => {
    return (
        <div className={`${Style.wrapper} ${className}`}>
            <img src={src} alt={alt}/>
        </div>
    );
};

export default UserAvatar;
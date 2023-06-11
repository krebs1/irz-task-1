import React, {FC, MouseEvent, useEffect} from 'react';
import Style from './HeaderLink.module.scss'

type IHeaderLink = {
    children?: React.ReactNode | string,
    className?: string,
    style?: React.CSSProperties,
    onClick: (e: MouseEvent<HTMLAnchorElement>) => void,
    isActive: boolean,
}

const HeaderLink: FC<IHeaderLink> = ({children, className = '', style, onClick, isActive = false}) => {
    const clickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onClick(e);
    }

    return (
        <a className={`${Style.headerLink} ${isActive ? Style.headerLinkActive : ''} ${className}`}
           style={style}
           onClick={clickHandler}
        >
            {children}
        </a>
    );
};

export default HeaderLink;
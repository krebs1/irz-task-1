import React, {FC, MouseEvent, useEffect} from 'react';
import Style from './HeaderLink.module.scss'
import {Link} from "react-router-dom";

type IHeaderLink = {
    children?: React.ReactNode | string,
    className?: string,
    style?: React.CSSProperties,
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void,
    to: string,
}

const HeaderLink: FC<IHeaderLink> = ({children, className = '', style, onClick, to='/'}) => {
    const clickHandler = (e: MouseEvent<HTMLAnchorElement>) => {
        if(onClick) onClick(e);
    }

    return (
        <Link to={to}
              style={style}
              className={`${Style.headerLink} ${className}`}
              onClick={clickHandler}
        >
            {children}
        </Link>
    );
};

export default HeaderLink;
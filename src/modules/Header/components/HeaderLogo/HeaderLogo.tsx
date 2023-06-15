import React, {FC} from 'react';
import Style from "./HeaderLogo.module.scss"
import {Link} from "react-router-dom";

type IHeaderLogoProps = {
    children?: React.ReactNode | string,
    className?: string,
    style?: React.CSSProperties,
    onClickHandler?: () => void,
    to: string,
}

const HeaderLogo: FC<IHeaderLogoProps> = ({children, className = '', style, onClickHandler, to='/'}) => {
    return (
        <Link className={`${Style.headerLogo} ${className}`}
              style={style}
              onClick={onClickHandler}
              to={to}
        >
            {children}
        </Link>
    );
};

export default HeaderLogo;
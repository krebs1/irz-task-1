import React, {FC} from 'react';
import Style from "./HeaderLogo.module.scss"

type IHeaderLogoProps = {
    children?: React.ReactNode | string,
    className?: string,
    style?: React.CSSProperties,
    onClickHandler?: ()=>void,
}

const HeaderLogo:FC<IHeaderLogoProps> = ({children, className = '', style, onClickHandler}) => {
    return (
        <a className={`${Style.headerLogo} ${className}`}
           style={style}
           onClick={onClickHandler}
        >
            {children}
        </a>
    );
};

export default HeaderLogo;
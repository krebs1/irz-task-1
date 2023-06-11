import React from 'react';
import Style from './Button.module.scss';

type IButtonProps = {
    children?: React.ReactNode | string,
    className?: string,
    onClickHandler?: () => void,
    type: 'border' | 'solid',
    bgColor?: string,
    textColor?: string,
    borderColor?: string
}

const Button: React.FC<IButtonProps> = ({children, className = '', onClickHandler, type, bgColor, textColor, borderColor}) => {
    const style:React.CSSProperties = {
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor
    }

    return (
        <button style={style}
                className={`${type === 'border' ? Style.ButtonBorder : Style.ButtonSolid} ${className}`}
                onClick={onClickHandler}
        >
            {children}
        </button>
    );
};

export default Button;
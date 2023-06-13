import React, {CSSProperties, FC, useState} from 'react';
import Style from './Checkbox.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare, faSquareCheck} from "@fortawesome/free-solid-svg-icons";

type ICheckboxProps = {
    className?: string,
    style?: CSSProperties,
    label: string,
    onChangeValue?: (isChecked: boolean) => void,
    value: boolean,
}

const Checkbox: FC<ICheckboxProps> = ({className, style, label, onChangeValue, value = false}) => {
    let [isChecked, setIsChecked] = useState<boolean>(value);

    const changeHandler = (e: React.MouseEvent<HTMLInputElement | SVGSVGElement | HTMLSpanElement>) => {
        e.stopPropagation();
        setIsChecked(!isChecked);
        if (onChangeValue) onChangeValue(isChecked);
    }

    return (
        <div className={`${Style.Checkbox} ${className}`}
        >
            <label className={Style.Checkbox_label}>
                <input className={Style.Checkbox_label_input}
                       type="checkbox"
                       checked={isChecked}
                       onChange={() => {}}
                />
                <FontAwesomeIcon icon={isChecked ? faSquareCheck : faSquare}
                                 className={Style.Checkbox_label_Icon}
                                 onClick={changeHandler}
                />
                <span onClick={changeHandler}
                      className={Style.Checkbox_label_span}
                >
                    {label}
                </span>
            </label>
        </div>
    );
};

export default Checkbox;
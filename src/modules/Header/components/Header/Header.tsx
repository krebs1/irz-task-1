import React, {useEffect, useMemo, useState} from 'react';
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderLink from "../HeaderLink/HeaderLink";
import Style from "./Header.module.scss";
import Select from "react-select";
import UserAvatar from "../../../../UI/UserAvatar/UserAvatar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

type IHeaderProps = {
    children?: React.ReactNode | string,
    className?: string,
    style?: React.CSSProperties,
    onTabChanged: (tab: string) => void
}

const Header: React.FC<IHeaderProps> = ({children, className = '', style, onTabChanged}) => {
    let [tab, setTab] = useState('work');

    useEffect(() => {
        onTabChanged(tab);
    }, [tab])

    return (
        <header className={`${Style.header} side-padding ${className}`}
                style={style}
        >
            <nav className={Style.header_nav}>
                <HeaderLogo className={Style.header_nav_logo}>99d</HeaderLogo>
                <HeaderLink className={Style.header_nav_link}
                            onClick={(e) => {
                                setTab('work')
                            }}
                            isActive={tab === 'work'}
                >
                    Your work
                </HeaderLink>
                <HeaderLink className={Style.header_nav_link}
                            onClick={(e) => {
                                setTab('designers')
                            }}
                            isActive={tab === 'designers'}
                >
                    Your designers
                </HeaderLink>
                <HeaderLink className={Style.header_nav_link}
                            onClick={(e) => {
                                setTab('discover')
                            }}
                            isActive={tab === 'discover'}
                >
                    Discover
                </HeaderLink>
                {children}
            </nav>
            <div className={Style.header_userControls}>
                <Select placeholder={'Support'}
                        options={[
                            {value: 1, label: 'Option 1'},
                            {value: 2, label: 'Option 2'},
                            {value: 3, label: 'Option 3'}
                        ]}
                        components={{IndicatorSeparator: () => null}}
                        className={Style.header_userControls_support}
                        styles={{
                            control: provided => ({
                                ...provided,
                                border: "none",
                                boxShadow: "none",
                                background: "none",
                                color: "pink",
                            }),
                            singleValue: provided => ({
                                ...provided,
                                color: "#4A4A4A",
                            })
                        }}
                />
                <FontAwesomeIcon icon={faEnvelope}
                                 className={Style.header_userControls_icon}
                />
                <UserAvatar src={require('../../../../data/imgs/img_1.png')}
                            alt={'Avatar 1'}
                            className={Style.header_userControls_avatar}
                />
                <UserAvatar src={require('../../../../data/imgs/img_3.png')}
                            alt={'Avatar 2'}
                            className={Style.header_userControls_avatar}
                />
            </div>
        </header>
    );
};

export default Header;
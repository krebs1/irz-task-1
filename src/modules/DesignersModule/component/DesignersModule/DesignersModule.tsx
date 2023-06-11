import React, {FC, useEffect, useState} from 'react';
import {DESIGNER_DATA} from "../../../../data/DesignerData";
import Style from './DesignersModule.module.scss';
import DesignersCard from "../DesignersCard/DesignersCard";

type IDesignersModuleProps = {
    className?: string,
    style?: React.CSSProperties,
    searchQ: string,
}

const DesignersModule: FC<IDesignersModuleProps> = ({className = '', style, searchQ = ''}) => {
    let [data, setData] = useState(DESIGNER_DATA);

    useEffect(
        () => {
            if (searchQ !== '') {
                let newData = DESIGNER_DATA.filter((item) => item.title.includes(searchQ));
                setData(newData);
            } else {
                setData(DESIGNER_DATA);
            }
        },
        [searchQ]
    )

    return (
        <div className={`${Style.list} ${className}`}>
            {
                data.map((data) => {
                    return (
                        <DesignersCard title={data.title}
                                       description={data.des}
                                       avatar={data.avatar}
                                       photos={data.photos}
                                       key={data.id}
                                       id={data.id}
                                       className={Style.list_item}
                        />
                    );
                })
            }
        </div>
    );
};

export default DesignersModule;
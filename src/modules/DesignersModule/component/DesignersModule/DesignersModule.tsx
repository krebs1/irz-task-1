import React, {FC, useEffect, useState} from 'react';
import {DESIGNER_DATA} from "../../../../data/DesignerData";
import Style from './DesignersModule.module.scss';
import DesignersCard from "../DesignersCard/DesignersCard";
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../../../hooks/reduxHooks";
import {IWork} from "../../../../models/IWork";
import {IDesigner} from "../../../../models/IDesigner";

type IDesignersModuleProps = {
    className?: string,
    style?: React.CSSProperties,
    searchQ: string,
}

const DesignersModule: FC<IDesignersModuleProps> = ({className = '', style, searchQ = ''}) => {
    let [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get('q');

    const {designers} = useAppSelector(state => state.designerReducer);

    let [data, setData] = useState<IDesigner[]>(designers);

    useEffect(
        () => {
            if (q === '' || q === null) {
                setData(designers);
            } else {
                let newData = designers.filter((item) => item.name.includes(q as string));
                setData(newData);
            }
        },
        [q]
    )

    useEffect(
        () => {
            if (searchQ !== '') {
                let newData = DESIGNER_DATA.filter((item) => item.name.includes(searchQ));
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
                        <DesignersCard title={data.name}
                                       description={data.about}
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
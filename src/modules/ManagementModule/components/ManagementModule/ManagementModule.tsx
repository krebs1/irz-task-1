import React, {FC, useContext, useEffect, useState} from 'react';
import Style from "./ManagementModule.module.scss";
import ManagementCard from "../ManagementCard/ManagementCard";
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../../../hooks/reduxHooks";
import {IWork} from "../../../../models/IWork";

interface IManagementModuleProps {
    className?: string,
    style?: React.CSSProperties,
}

const ManagementModule: FC<IManagementModuleProps> = ({className, style}) => {
    let [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get('q');

    const {works} = useAppSelector(state => state.workReducer);

    let [data, setData] = useState<IWork[]>([]);

    useEffect(
        () => {
            let newData;
            if (q === '' || q === null) {
                newData = works;
            } else {
                newData = works.filter((item) => item.title.includes(q as string));
            }
            setData(newData);
        },
        [q, works]
    )

    return (
        <div className={`${Style.ManagementModule} ${className}`}
             style={style}
        >
            <h4 className={Style.ManagementModule_title}>Проекты</h4>
            <div className={Style.ManagementModule_list}>
                {
                    data.map((data) => {
                        return (
                            <ManagementCard id={data.id}
                                            title={data.title}
                                            description={data.des}
                                            photos={data.photos}
                                            designersIds={data.designers}
                                            key={data.id}
                                            className={Style.ManagementModule_list_item}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ManagementModule;
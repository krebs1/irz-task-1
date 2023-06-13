import React, {FC, useContext, useEffect, useState} from 'react';
import Style from "./ManagementModule.module.scss";
import {WORK_DATA} from "../../../../data/WorkData";
import ManagementCard from "../ManagementCard/ManagementCard";
import {IWorkDataContext, WorkDataContext} from "../../../../context/WORKDATAcontext";

type IManagementModuleProps = {
    className?: string,
    style?: React.CSSProperties,
    searchQ: string,
}

const ManagementModule: FC<IManagementModuleProps> = ({className, style, searchQ}) => {
    let {workData, setWorkData} = useContext<IWorkDataContext>(WorkDataContext);
    let [data, setData] = useState(workData);

    useEffect(
        () => {
            if (searchQ !== '') {
                let newData = workData.filter((item) => item.title.includes(searchQ));
                setData(newData);
            } else {
                setData(workData);
            }
        },
        [searchQ]
    )

    return (
        <div className={`${Style.list} ${className}`}>
            {
                data.map((data) => {
                    return (
                        <ManagementCard title={data.title}
                                        description={data.des}
                                        photos={data.photos}
                                        id={data.id}
                                        designers={data.designers}
                                        key={data.id}
                                        className={Style.list_item}
                        />
                    );
                })
            }
        </div>
    );
};

export default ManagementModule;
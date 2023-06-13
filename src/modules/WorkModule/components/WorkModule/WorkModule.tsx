import React, {FC, useContext, useEffect, useState} from 'react';
import {WORK_DATA} from "../../../../data/WorkData";
import Style from './WorkModule.module.scss';
import WorkCard from "../WorkCard/WorkCard";
import {IWorkDataContext, WorkDataContext} from "../../../../context/WORKDATAcontext";

type IWorkModuleProps = {
    className?: string,
    style?: React.CSSProperties,
    searchQ: string,
}

const WorkModule: FC<IWorkModuleProps> = ({className = '', style, searchQ = ''}) => {
    let {workData, setWorkData} = useContext<IWorkDataContext>(WorkDataContext);
    let [data, setData] = useState(workData);

    useEffect(
        () => {
            if (searchQ !== '') {
                let newData = workData.filter((item) => item.title.includes(searchQ));
                setData(newData);
            }else{
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
                        <WorkCard title={data.title}
                                  description={data.des}
                                  photos={data.photos}
                                  id={data.id}
                                  key={data.id}
                                  designers={data.designers}
                                  className={Style.list_item}
                        />
                    );
                })
            }
        </div>
    );
};

export default WorkModule;
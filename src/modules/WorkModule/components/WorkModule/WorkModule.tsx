import React, {FC, useEffect, useState} from 'react';
import {WORK_DATA} from "../../../../data/WorkData";
import Style from './WorkModule.module.scss';
import WorkCard from "../WorkCard/WorkCard";

type IWorkModuleProps = {
    className?: string,
    style?: React.CSSProperties,
    searchQ: string,
}

const WorkModule: FC<IWorkModuleProps> = ({className = '', style, searchQ = ''}) => {
    let [data, setData] = useState(WORK_DATA);

    useEffect(
        () => {
            if (searchQ !== '') {
                let newData = WORK_DATA.filter((item) => item.title.includes(searchQ));
                setData(newData);
            }else{
                setData(WORK_DATA);
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
                                  key={data.id}
                                  className={Style.list_item}
                        />
                    );
                })
            }
        </div>
    );
};

export default WorkModule;
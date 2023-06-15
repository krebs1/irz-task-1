import React, {FC, useEffect, useState} from 'react';
import Style from './WorksModule.module.scss';
import WorksCard from "../WorksCard/WorksCard";
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../../../hooks/reduxHooks";
import {IWork} from "../../../../models/IWork";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

interface IWorkModuleProps {
    className?: string,
    style?: React.CSSProperties,
}

const WorksModule: FC<IWorkModuleProps> = ({className = '', style}) => {
    let [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get('q');

    const {works} = useAppSelector(state => state.workReducer);

    let [data, setData] = useState<IWork[]>(works);

    useEffect(
        () => {
            let newData;
            if (q === '' || q === null) newData = works;
            else newData = works.filter((item) => item.title.includes(q as string));;
            setData(newData);
        },
        [q, works]
    )

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={`${Style.list} ${className}`}
                 style={style}
            >
                {
                    data.map((data) => {
                        return (
                            <WorksCard title={data.title}
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
        </DndProvider>
    );
};

export default WorksModule;
import React from 'react';
import DesignersList from "../DesignersList/DesignersList";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../../hooks/reduxHooks";
import PhotosList from "../PhotosList/PhotosList";
import Style from "./WorkModule.module.scss";

const WorkModule = () => {
    const {id} = useParams();

    const {works} = useAppSelector(state => state.workReducer);
    const work = works.find(work => work.id === Number(id))!;
    return (
        <div className={Style.WorkModule}>
            <h1 className={Style.WorkModule_title}>{work.title}</h1>
            <p className={Style.WorkModule_description}>{work.des}</p>
            <DesignersList workId={work.id}/>
            <PhotosList photos={work.photos}/>
        </div>
    );
};

export default WorkModule;
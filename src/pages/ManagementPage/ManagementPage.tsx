import React from 'react';
import ManagementModule from "../../modules/ManagementModule/components/ManagementModule/ManagementModule";
import DesignersList from "../../modules/ManagementModule/components/DesignersList/DesignersList";
import Style from './ManagementPage.module.scss';
import {useSearchParams} from "react-router-dom";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const ManagementPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get('q');

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={Style.ManagementPage}>
                <DesignersList classname={Style.ManagementPage_designersList}/>
                <ManagementModule searchQ={q ? q : ''}/>
            </div>
        </DndProvider>
    );
};

export default ManagementPage;
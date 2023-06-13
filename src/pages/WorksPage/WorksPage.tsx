import React from 'react';
import WorkModule from "../../modules/WorkModule/components/WorkModule/WorkModule";
import {useSearchParams} from "react-router-dom";

const WorksPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get('q');

    return (
        <div>
            <WorkModule searchQ={q ? q : ''}/>
        </div>
    );
};

export default WorksPage;
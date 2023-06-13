import React from 'react';
import DesignersModule from "../../modules/DesignersModule/component/DesignersModule/DesignersModule";
import {useSearchParams} from "react-router-dom";

const DesignersPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get('q');

    return (
        <div>
            <DesignersModule searchQ={q ? q : ''}/>
        </div>
    );
};

export default DesignersPage;
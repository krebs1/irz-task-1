import React from 'react';
import Header from "../modules/Header/components/Header/Header";
import Style from "../App.module.scss";
import SearchModule from "../modules/SearchModule/components/SearchModule/SearchModule";
import FiltersModule from "../modules/FiltersModule/components/FiltersModule/FiltersModule";
import {Outlet} from "react-router-dom";
import Footer from "../modules/Footer/components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header className={Style.App_header}/>
            <div className={`${Style.App_mainWrapper} side-padding`}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
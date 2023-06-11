import React, {useState} from 'react';
import './styles/index..scss';
import Header from "./modules/Header/components/Header/Header";
import SearchModule from "./modules/SearchModule/components/SearchModule/SearchModule";
import WorkModule from './modules/WorkModule/components/WorkModule/WorkModule';
import Style from './App.module.scss';
import DesignersModule from "./modules/DesignersModule/component/DesignersModule/DesignersModule";
import FiltersModule from "./modules/FiltersModule/components/FiltersModule/FiltersModule";

function App() {
    let [tab, setTab] = useState<string>('work');
    let [searchQ, setSearchQ] = useState<string>('');

    return (
        <div className={`App ${Style.App}`}>
            <Header className={Style.App_header}
                    onTabChanged={(tab) => {
                        setTab(tab)
                    }}
            />
            <SearchModule onSearchHandler={
                (searchQ: string) => {
                    setSearchQ(searchQ);
                }
            }
            />
            <div className={`${Style.App_mainWrapper} side-padding`}>
                <div className={Style.App_mainWrapper_listWrapper}>
                    {
                        tab === 'work' ? <WorkModule className={Style.App_mainWrapper_listWrapper_list} searchQ={searchQ}/> :
                            tab === 'designers' ?
                                <DesignersModule searchQ={searchQ} className={Style.App_mainWrapper_listWrapper_list}/> :
                                <DesignersModule searchQ={searchQ} className={Style.App_mainWrapper_listWrapper_list}/>
                    }
                </div>
                <FiltersModule/>
            </div>
        </div>
    );
}

export default App;

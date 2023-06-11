import React, {FC, FormEvent} from 'react';
import SearchBar from "../SearchBar/SearchBar";
import Button from "../../../../UI/Button/Button";
import Style from './SearchModule.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";

type ISearchModuleProps = {
    onSearchHandler: (searchQ: string) => void,

}

const SearchModule: FC<ISearchModuleProps> = ({onSearchHandler}) => {


    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchInput = e.currentTarget.query;
        const searchBarValue = searchInput.value;
        searchInput.value = '';
        onSearchHandler(searchBarValue);
    }

    return (
        <div className={`side-padding ${Style.SearchModule}`}>
            <SearchBar className={Style.SearchModule_searchBar} onSubmitHandler={submitHandler}/>
            <div className={Style.SearchModule_filters}>
                <div className={Style.SearchModule_filters_btnsWrapper}>
                    <Button type={"border"}
                            className={Style.SearchModule_filters_btnsWrapper_btn}
                    >
                        Button1
                    </Button>
                    <Button type={"border"}
                            className={Style.SearchModule_filters_btnsWrapper_btn}
                    >
                        Button2
                    </Button>
                    <Button type={"border"}
                            className={Style.SearchModule_filters_btnsWrapper_btn}
                    >
                        Button3
                    </Button>
                </div>
                <div className={Style.SearchModule_filters_filter}>
                    <FontAwesomeIcon className={Style.SearchModule_filters_filter_icon}
                                     icon={faFilter}
                    />
                    <div className={Style.SearchModule_filters_filter_name}>
                        <h5>Filters</h5>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModule;
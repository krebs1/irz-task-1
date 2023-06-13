import React, {FC, FormEvent, useState} from 'react';
import Button from "../../../../UI/Button/Button";
import Style from './SearchBar.module.scss';

type ISearchBarProps = {
    className?: string,
    style?: React.CSSProperties,
    onSubmitHandler?: (e:FormEvent<HTMLFormElement>) => void,
}

const SearchBar: FC<ISearchBarProps> = ({className = '', style, onSubmitHandler}) => {
    return (
        <div className={`${Style.SearchBar} ${className}`}
             style={style}
        >
            <form onSubmit={onSubmitHandler}
                  className={Style.SearchBar_form}
            >
                <input type="text"
                       placeholder="type to search"
                       name="query"
                       className={Style.SearchBar_form_input}
                />
                <Button type='solid'
                        className={Style.SearchBar_form_button}
                >
                    Search
                </Button>
            </form>
        </div>
    );
};

export default SearchBar;
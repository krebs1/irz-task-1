import React from 'react';
import Checkbox from "../../../../UI/Checkbox/Checkbox";
import Select from "react-select";
import Style from './FiltersModule.module.scss';

const FiltersModule = () => {
    return (
        <div className={Style.FiltersModule}>
            <div className={Style.FiltersModule_titleWrapper}>
                <h3 className={Style.FiltersModule_titleWrapper_title}>Filters title</h3>
                <p className={Style.FiltersModule_titleWrapper_des}>Filters description</p>
            </div>
            <div className={Style.FiltersModule_cbWrapper}>
                <h4 className={Style.FiltersModule_cbWrapper_title}>Checkbox 1 title</h4>
                <Checkbox label={'Label 1'} value={false} className={Style.FiltersModule_cbWrapper_cb}/>
                <Checkbox label={'Label 2'} value={true} className={Style.FiltersModule_cbWrapper_cb}/>
            </div>
            <div className={Style.FiltersModule_selectWrapper}>
                <h3 className={Style.FiltersModule_selectWrapper_title}>Select title 1</h3>
                <Select placeholder={'Select 1'}
                        options={[
                            {value: 1, label: 'Option 1'},
                            {value: 2, label: 'Option 2'},
                            {value: 3, label: 'Option 3'}
                        ]}
                        components={{IndicatorSeparator: () => null}}
                        className={Style.FiltersModule_selectWrapper_select}
                />
                <h3 className={Style.FiltersModule_selectWrapper_title}>Select title 2</h3>
                <Select placeholder={'Select 2'}
                        options={[
                            {value: 1, label: 'Option 1'},
                            {value: 2, label: 'Option 2'},
                            {value: 3, label: 'Option 3'}
                        ]}
                        components={{IndicatorSeparator: () => null}}
                        className={Style.FiltersModule_selectWrapper_select}
                />
            </div>
            <div className={Style.FiltersModule_cbWrapper}>
                <h4 className={Style.FiltersModule_cbWrapper_title}>Checkbox 2 title</h4>
                <Checkbox label={'Label 3'} value={true}/>
            </div>
        </div>
    );
};

export default FiltersModule;
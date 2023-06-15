import React, {FC} from 'react';
import Style from './DesignerList.module.scss';
import DesignerCard from "../DesignerCard/DesignerCard";
import {useAppSelector} from "../../../../hooks/reduxHooks";

interface IDesignersListProps {
    classname?: string,
    style?: React.CSSProperties,
}

const DesignersList: FC<IDesignersListProps> = ({classname = '', style}) => {
    const {designers} = useAppSelector(state => state.designerReducer)

    return (
        <div className={`${Style.DesignerList} ${classname}`} style={style}>
            <h4 className={Style.DesignerList_title}>Пользователи</h4>
            {
                designers.map((designer) => {
                    let avatar = require(`../../../../data/${designer.avatar}`);

                    return (
                        <DesignerCard key={designer.id}
                                      src={avatar}
                                      title={designer.name}
                                      alt={designer.name}
                                      id={designer.id}
                        />
                    );
                })
            }
        </div>
    );
};

export default DesignersList;
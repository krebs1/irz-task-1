import React, {FC} from 'react';
import {DESIGNER_DATA} from "../../../../data/DesignerData";
import Style from './DesignerList.module.scss';
import DesignerCard from "../DesignerCard/DesignerCard";

type DesignersListProps = {
    classname?: string,
    style?: React.CSSProperties,
}

const DesignersList: FC<DesignersListProps> = ({classname = '', style}) => {
    return (
        <div className={`${Style.DesignerList} ${classname}`} style={style}>
            {
                DESIGNER_DATA.map((designer) => {
                    let avatar = require(`../../../../data/${designer.avatar}`);

                    return (
                        <DesignerCard key={designer.id}
                                      src={avatar}
                                      title={designer.title}
                                      alt={designer.title}
                                      id={designer.id}
                        />
                    );
                })
            }
        </div>
    );
};

export default DesignersList;
import React, {FC} from 'react';
import Style from "./DesignerList.module.scss";
import {useAppSelector} from "../../../../hooks/reduxHooks";
import DesignerCard from "../DesignerCard/DesignerCard";

interface IDesignerListProps {
    classname?: string,
    style?: React.CSSProperties,
    workId: number,
}

const DesignersList: FC<IDesignerListProps> = ({classname = '', style, workId}) => {
    const {designers} = useAppSelector(state => state.designerReducer);
    const {works} = useAppSelector(state => state.workReducer);
    const designersIds = works.find(work => work.id === workId)!.designers;
    const designersFiltered = designers.filter((designer) => designersIds.includes(designer.id));

    console.log(designersIds);
    console.log(designersFiltered)

    return (
        <div className={`${Style.DesignerList} ${classname}`}
             style={style}
        >
            <h2 className={Style.DesignerList_title}>Designers</h2>
            <div className={Style.DesignerList_list}>
                {
                    designersFiltered.map((designer) => {
                        const avatar = require(`../../../../data/${designer.avatar}`);

                        return (
                            <DesignerCard key={`designer${designer.id}`}
                                          id={designer.id}
                                          workId={workId}
                                          name={designer.name}
                                          about={designer.about}
                                          avatar={avatar}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default DesignersList;
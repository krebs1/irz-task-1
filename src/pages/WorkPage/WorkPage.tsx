import React, {useContext, useState} from 'react';
import {IWorkDataContext, WorkDataContext} from "../../context/WORKDATAcontext";
import {useSearchParams} from "react-router-dom";
import {IWorkDataItem} from "../../data/WorkData";
import UserAvatar from "../../UI/UserAvatar/UserAvatar";
import {DESIGNER_DATA} from "../../data/DesignerData";
import Style from './WorkPage.module.scss';

const WorkPage = () => {
    let {workData, setWorkData} = useContext<IWorkDataContext>(WorkDataContext);
    let [searchParams, setSearchParams] = useSearchParams();

    let workId = searchParams.get('workId');
    let [data, setData] = useState<IWorkDataItem>(workData[Number(workId) - 1]);

    if (workId === null) return (<h1>Page not found</h1>)

    return (
        <div className={Style.WorkPage}>
            <h1 className={Style.WorkPage_title}>{data.title}</h1>
            <p className={Style.WorkPage_description}>{data.des}</p>
            <div className={Style.WorkPage_designers}>
                <h2 className={Style.WorkPage_designers_title}>Designers</h2>
                <div className={Style.WorkPage_designers_list}>
                    {
                        data.designers.map((designerId) => {
                            const designer = DESIGNER_DATA[designerId - 1];
                            const avatar = require(`../../data/${designer.avatar}`)

                            return (
                                <div key={`designer${designer.id}`}
                                     className={Style.WorkPage_designers_list_cardWrapper}
                                >
                                    <div className={Style.WorkPage_designers_list_cardWrapper_card}>
                                        <UserAvatar className={Style.WorkPage_designers_list_cardWrapper_card_avatar}
                                                    src={avatar}
                                                    alt={designer.title}
                                        />
                                        <h3 className={Style.WorkPage_designers_list_cardWrapper_card_name}>{designer.title}</h3>
                                        <p className={Style.WorkPage_designers_list_cardWrapper_card_description}>{designer.des}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className={Style.WorkPage_photos}>
                <h2 className={Style.WorkPage_photos_title}>Photos</h2>
                <div className={Style.WorkPage_photos_list}>
                    {
                        data.photos.map((photo) => {
                            const avatar = require(`../../data/${photo.path}`);

                            return (
                                <div className={Style.WorkPage_photos_list_imgWrapper}>
                                    <img className={Style.WorkPage_photos_list_imgWrapper_img}
                                         src={avatar}
                                         alt={photo.alt}
                                         key={`photo${photo.path}`}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkPage;
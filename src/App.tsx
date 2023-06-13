import React, {useState} from 'react';
import './styles/index..scss';
import AppRouter from "./router/AppRouter";
import {WorkDataContext} from "./context/WORKDATAcontext";
import {IWorkDataItem, WORK_DATA} from "./data/WorkData";

function App() {
    const [workData, setWorkData] = useState<Array<IWorkDataItem>>(WORK_DATA);

    return (
        <WorkDataContext.Provider value={{workData, setWorkData}}>
            <AppRouter/>
        </WorkDataContext.Provider>
    );
}

export default App;

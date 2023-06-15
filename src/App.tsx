import React from 'react';
import './styles/index..scss';
import AppRouter from "./router/AppRouter";
import {useAppSelector} from "./hooks/reduxHooks";

function App() {
    const {} = useAppSelector(state => state.workReducer)

    return (
        <AppRouter/>
    );
}

export default App;

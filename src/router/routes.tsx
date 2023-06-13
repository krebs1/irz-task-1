import WorksPage from "../pages/WorksPage/WorksPage";
import DesignersPage from "../pages/DesignersPage/DesignersPage";
import MainLayout from "../layouts/MainLayout";
import ManagementPage from "../pages/ManagementPage/ManagementPage";
import WorkPage from "../pages/WorkPage/WorkPage";
import WithoutSearchLayout from "../layouts/WithoutSearchLayout";

export const routes = [
    {
        layout: <MainLayout/>,
        routes: [
            {
                path: '/',
                element: <WorksPage/>
            },
            {
                path: '/works',
                element: <WorksPage/>
            },
            {
                path: '/designers',
                element: <DesignersPage/>
            },
            {
                path: '/management',
                element: <ManagementPage/>
            },
        ]
    },
    {
        layout: <WithoutSearchLayout/>,
        routes: [
            {
                path: '/work',
                element: <WorkPage/>
            },
        ]
    }
]
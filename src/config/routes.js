import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic'

//Admin pages
import AdminHome from '../pages/Admin';
import AdminSingIn from '../pages/Admin/SignIn/SingIn';

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Error404 from '../pages/Error404'

const routes = [
    {
        path: "/",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/",
                component: AdminHome,
                exact: false
            }
        ]
    }
]

export default routes;
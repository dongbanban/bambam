/*
 * @FilePath: /click/Users/i104/vite3/src/routes/index.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import routeConfig from './config'

const router = createBrowserRouter(routeConfig);

const AppRoutes = () => <RouterProvider router={router} />

export default AppRoutes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routeConfig from "./config";

const router = createBrowserRouter(routeConfig);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;

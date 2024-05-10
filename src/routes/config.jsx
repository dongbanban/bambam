/*
 * @FilePath: /Users/i104/bambam/src/routes/config.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import { lazy } from "react";
import ac from "./AsyncComponent";
import ErrorRoute from "./errorRoute";

const routeConfig = [
  {
    path: "/",
    element: ac(lazy(() => import("@/layout"))),
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "/memoTest",
        element: ac(lazy(() => import("views/memoTest"))),
        errorElement: <ErrorRoute />,
      },
      {
        path: "/contextDemo/:id",
        element: ac(lazy(() => import("views/contextDemo"))),
        errorElement: <ErrorRoute />,
      },
      {
        path: "/requestQueue",
        element: ac(lazy(() => import("views/requestQueue"))),
        errorElement: <ErrorRoute />,
      },
      {
        path: "/zustand",
        element: ac(lazy(() => import("views/zustandDemo"))),
        errorElement: <ErrorRoute />,
      },
      {
        path: "/cssDemo",
        element: ac(lazy(() => import("views/cssDemo"))),
        errorElement: <ErrorRoute />,
      },
      {
        path: "/file&blob",
        element: ac(lazy(() => import("views/file&blob"))),
        errorElement: <ErrorRoute />,
      },
      {
        path: "/dayjsDemo",
        element: ac(lazy(() => import("views/dayjsDemo"))),
        errorElement: <ErrorRoute />,
      },
      {
        path: "/componentsDemo",
        element: ac(lazy(() => import("views/componentsDemo"))),
        errorElement: <ErrorRoute />,
      },
      {
        path: "/sharinganDemo",
        element: ac(lazy(() => import("views/sharinganDemo"))),
        errorElement: <ErrorRoute />,
      },
      {
        path: "/menuDemo",
        element: ac(lazy(() => import("views/menuDemo"))),
        errorElement: <ErrorRoute />,
      },
    ],
  },
];

export default routeConfig;

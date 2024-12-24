import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthenticatedRoute from "./auth/AuthProvider";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/account/SignIn";
import SignUp from "./pages/account/SignUp";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/dashboard",
        element: (
            <AuthenticatedRoute>
                <Dashboard />
            </AuthenticatedRoute>
        ),
        //loader: DashboardLoader
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
];

const router = createBrowserRouter(routes);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;

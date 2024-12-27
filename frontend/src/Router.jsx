import { createBrowserRouter, RouterProvider, Routes, Route, useLocation } from "react-router-dom";

import AuthenticatedRoute from "./auth/AuthProvider";

import Navigation from "./components/navigaton/Navigation";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn, {SignInModal} from "./pages/account/SignIn";
import SignUp, {SignupModal} from "./pages/account/SignUp";
import NotFoundPage from "./pages/NotFoundPage";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Jobs } from "./pages/Jobs";
import { Profile } from "./pages/Profile";

const routes = [
    {
        path: "/",
        element: 
            <Navigation>
                <Home />
            </Navigation>,
    },
    {
        path: "/about",
        element: 
            <Navigation>
                <About />
            </Navigation>,
    },
    {
        path: "/courses",
        element: 
            <Navigation>
                <Courses />
            </Navigation>,
    },
    {
        path: "/jobs",
        element: 
            <Navigation>
                <Jobs />
            </Navigation>,
    },
    {
        path: "/profile",
        element: 
            <AuthenticatedRoute>
                <Navigation>
                    <Profile />
                </Navigation>
            </AuthenticatedRoute>,
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


const RouterComponent = () => {
    const location = useLocation();
    const background = location.state && location.state.background;
    console.log(background, "derrtdrfvnkcisdc");

    return (
        <>
            <Routes location={background || location}>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>

            {background && (
                <Routes>
                    <Route path="/sign-in" element={<SignInModal />} />
                    <Route path="/sign-up" element={<SignupModal />} />
                </Routes>
            )}
        </>
    );
};


const router = createBrowserRouter([
    {
        path: "*",
        element: <RouterComponent />
    }
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;

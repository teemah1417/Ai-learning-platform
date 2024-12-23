import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';

/* /* const createRouter = () => {
    return createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            children: [
                {
                path: '/',
                element: <Home />
                },
                {
                path: '/dashboard',
                element: <AuthenticatedRoute><Dashboard /></AuthenticatedRoute>
                },
                {
                    path: '/dashboard',
                    element: <AuthenticatedRoute><Dashboard /></AuthenticatedRoute>
                },
                {
                    path: '/account/login',
                    element: <AnonymousRoute><Login /></AnonymousRoute>
                },
                {
                    path: '/account/verify-email/:key',
                    element: <VerifyEmail />,
                    loader: verifyEmailLoader
                },
            ]
        },
    ])
} 

const createRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/dashboard"  element={<AuthenticatedRoute><Dashboard /></AuthenticatedRoute>} /> }

                <Route path="/" index element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}


const Router = () => {
     return (
        <div className="App">
            <BrowserRouter>
                <Routes>

                    {/* <Route path="/" index element={
                        <AuthenticatedRoute>
                            <Home /> 
                        </AuthenticatedRoute>}
                     /> }

                     <Route path="/" index exact element={<Home />} />

                     <Route path="/dashboard" element={<Dashboard />} />
 
                     <Route component={ <NotFoundPage /> } />
 
                 </Routes>
             </BrowserRouter>
         </div>
     );
}

export default Router
 */

const AuthenticatedRoute = ({ children }) => {
    const { user } = useAuth();
  
    return user ? children : <Navigate to="/login" />;
};
  
const AnonymousRoute = ({ children }) => {
    const { user } = useAuth();

    return user ? <Navigate to="/" /> : children;
};


const routes = [
    {
      path: '/',
      element: <Home />,
    },
    /* {
      path: '/dashboard',
      element: <AuthenticatedRoute>
                    <Dashboard /> 
                </AuthenticatedRoute>,
    }, */
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ];

const router = createBrowserRouter(routes);


const Router = () => {
    console.log("Creating Router")
    return (
        <RouterProvider router={router} />
    );
}

export default Router
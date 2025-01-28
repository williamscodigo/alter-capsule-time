import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './App.js';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import ErrorPage from './pages/Error.js';
import AboutUs from './pages/AboutUs.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/profile',
        element: <Profile />
      },{
        path: '/about',
        element: <AboutUs />
      }
    ]
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
} 


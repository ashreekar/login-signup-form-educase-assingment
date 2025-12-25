import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import App from './App'
import NotFound from './component/NotFound'
import WelcomePage from './page/WelcomePage'
import Login from './page/Login'
import CreateAccount from './page/CreateAccount'
import Dashboard from './page/Dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <WelcomePage />,
      },
      {
        path: "you",
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "create",
        element: <CreateAccount />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
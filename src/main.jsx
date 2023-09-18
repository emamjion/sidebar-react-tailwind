import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard.jsx'
import Saved from './component/Saved/Saved.jsx'
import User from './component/User/User.jsx'
import File from './component/File/File.jsx'
import Message from './component/Message/Message.jsx'
import Analytics from './component/Analytics/Analytics.jsx'
import Cart from './component/Cart/Cart.jsx'
import Setting from './component/Setting/Setting.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>,
      },
      {
        path: '/saved',
        element: <Saved/>
      },
      {
        path: '/user',
        element: <User/>,
      },
      {
        path: '/file',
        element: <File/>
      },
      {
        path: '/message',
        element: <Message/>,
      },
      {
        path: '/analytics',
        element: <Analytics/>
      },
      {
        path: '/cart',
        element: <Cart/>,
      },
      {
        path: '/setting',
        element: <Setting/>
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

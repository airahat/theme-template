import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./assets/custom.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Navbar from './components/layout/Navbar.tsx'
import Dashboard from './components/pages/Dashboard.tsx'


const router = createBrowserRouter([

  {path: "/", element: <Layout />,
    children: [
      {index: true, element: <Dashboard />},
      {path: "/rayhan", element: <h1 className='mt-5 p-5'>Rayhan Boss is the BOSS!</h1>},
      {path: "/sohel", element: <h1 className='mt-5 p-5'>Sohel Boss is the BOSS!</h1>},



    ]



  },
  {path: "/login", element: <h1>Login Page</h1>},
  {path: "/navbar", element: <Navbar />},
  // {path: "/", element: <App />}



])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

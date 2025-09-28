import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./assets/custom.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Navbar from './components/layout/Navbar.tsx'
import Dashboard from './components/pages/Dashboard.tsx'
import Users from './components/pages/Users.tsx'
import Products from './components/pages/Products.tsx'
import Roles from './components/pages/Roles.tsx'
import POS from './components/pages/POS.tsx'
import Sales from './components/pages/Sales.tsx'
import ManagePosts from './components/pages/posts/ManagePosts.tsx'
import CreatePost from './components/pages/posts/CreatePosts.tsx'
import DetailsPost from './components/pages/posts/DetailsPost.tsx'
import EditPost from './components/pages/posts/EditPost.tsx'


const router = createBrowserRouter([

  {path: "/", element: <Layout />,
    children: [
      {index: true, element: <Dashboard />},
      {path: "/users", element: <Users />},
      {path: "/products", element: <Products />},
      {path: "/roles", element: <Roles />},
      {path: "/sales", element: <Sales />},
      {path: "/posts", element: <ManagePosts/>},
      {path: "/posts/add", element: <CreatePost/>},
      {path: "/posts/details/:id", element: <DetailsPost/>},
      {path: "/posts/edit/:id", element: <EditPost/>},
      
      
      
      
    ] },
  {path: "/pos", element: <POS />},
  {path: "/login", element: <h1>Login Page</h1>},
  {path: "/navbar", element: <Navbar />},
  // {path: "/", element: <App />}



])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import AutoIncrementCounter from './components/Counter.tsx'


const router=createBrowserRouter([
  {path:'/',element:<App/> , errorElement:<div className='text-white'>404 NOT FOUND </div>},
  {path:'/counter',element:<AutoIncrementCounter/>},
],
{ basename: import.meta.env.BASE_URL,})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider> 
  </StrictMode>,
)

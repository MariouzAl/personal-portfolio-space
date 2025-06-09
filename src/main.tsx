import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import AutoIncrementCounter from './components/Counter.tsx'


const router=createBrowserRouter([
  {path:'/',element:<App/> , errorElement:<div>404</div>},
  {path:'/counter',element:<AutoIncrementCounter/> , errorElement:<div className='text-white'>404</div>},
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider> 
  </StrictMode>,
)

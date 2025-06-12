import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider, createHashRouter } from 'react-router'
import AutoIncrementCounter from './components/Counter.tsx'
import './i18n';
import AppErrorBoundary from './components/ErrorBoundaries.tsx';

const router = createHashRouter([
  { path: '/', element: <App /> },
  { path: '/counter', element: <AutoIncrementCounter /> },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppErrorBoundary>
    <RouterProvider router={router} ></RouterProvider>
    </AppErrorBoundary>
  </StrictMode>,
)

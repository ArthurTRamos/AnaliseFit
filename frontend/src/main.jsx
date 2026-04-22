import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route 
} from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'
import { AuthProvider } from './contexts/AuthProvider.jsx'

import App from './App.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import Login from './pages/LoginPage.jsx'
import Register from './pages/RegisterPage.jsx'

import './index.css'

const rotas = createRoutesFromElements(
  <>
    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<App />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Route>

    <Route path="/login" element={<Login />} />
    <Route path='/register' element={<Register />} />
  </>
);

const router = createBrowserRouter(rotas);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
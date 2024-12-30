import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Router from './Router/Router';
import AuthProvider from './provider/AuthProvider';
import ThemeProvider from './provider/ThemeProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)

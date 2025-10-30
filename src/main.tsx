import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainRoutes from './MainRoutes.tsx'
import { BrowserRouter } from "react-router";
import MainLayout from './components/MainLayout.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <MainLayout>
          <MainRoutes />
        </MainLayout>
      </BrowserRouter>
   </StrictMode>,
);
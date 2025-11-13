import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './myComponents/HomePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* App layout wraps all child routes */}
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          {/* <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

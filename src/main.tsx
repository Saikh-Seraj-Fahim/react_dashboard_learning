import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './myComponents/HomePage.tsx'
import UsersPage from './myComponents/Users.tsx'
import UserDetailPage from './myComponents/UserDetailPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* App layout wraps all child routes */}
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetailPage />} /> {/* Dynamic route */}
          {/* <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

// 2 hour 6 minute 6 second
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './myComponents/HomePage.tsx'
import UsersPage from './myComponents/users/Users.tsx'
import UserDetailPage from './myComponents/UserDetailPage.tsx'
import Payments from './myComponents/Payments.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* App layout wraps all child routes */}
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetailPage />} /> {/* Dynamic route */}
          <Route path="payments" element={<Payments />} />
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

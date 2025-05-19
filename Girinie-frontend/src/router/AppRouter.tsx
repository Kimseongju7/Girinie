import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@/pages/LoginPage';
import Signup from '@/pages/SignupPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* 다른 페이지들 */}
      </Routes>
    </BrowserRouter>
  );
}
// AppRouter.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '@/pages/LoginPage';
import Signup from '@/pages/SignupPage';
import Guardian from '@/pages/GuardianPage';
import GuardianLayout from '@/components/layout/GuardianLayout';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<GuardianLayout />}>
          <Route path="guardian" element={<Guardian />} />
          {/* 추가로 여기다가 report, settings도 계속 추가 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

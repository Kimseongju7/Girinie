// AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home/HomePage.tsx";
import LoginPage from "@/pages/login/LoginPage";
import SignupPage from "@/pages/signup/SignupPage";
import GuardianPage from "@/pages/gardian/GuardianPage";
import ChildPage from "@/pages/child/ChildPage";
import FindAccountPage from "@/pages/account/FindAccountPage";
// import GuardianLayout from '@/components/layout/GuardianLayout';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="guardian" element={<GuardianPage />} />
        <Route path="child" element={<ChildPage />} />
        <Route path="/find-account" element={<FindAccountPage />} />
        {/* 추가로 여기다가 report, settings도 계속 추가 */}
      </Routes>
    </BrowserRouter>
  );
}

// AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/common/Header";
import HomePage from "@/pages/home/HomePage.tsx";
import LoginPage from "@/pages/login/LoginPage";
import SignupPage from "@/pages/signup/SignupPage";
import GuardianPage from "@/pages/gardian/GuardianPage";
import ChildPage from "@/pages/child/ChildPage";
import SettingsPage from "@/pages/settings/SettingPage";
import ReportPage from "@/pages/report/ReportPage";
import ChatbotPage from "@/pages/chatbot/ChatBotPage";
import LearningRagePage from "@/pages/learningrate/LearningRatePage";

// import GuardianLayout from '@/components/layout/GuardianLayout';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/gardian" element={<GuardianPage />} />
        <Route path="/child" element={<ChildPage />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/learning-rate" element={<LearningRagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

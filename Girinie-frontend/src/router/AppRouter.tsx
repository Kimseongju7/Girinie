// AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/common/Header";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import HomePage from "@/pages/home/HomePage.tsx";
import LoginHomePage from "@/pages/home/LoginHomePage";
import LoginPage from "@/pages/login/LoginPage";
import SignupPage from "@/pages/signup/SignupPage";
import FindAccountPage from "@/pages/account/FindAccountPage";
import GuardianPage from "@/pages/gardian/GuardianPage";
import ChildPage from "@/pages/child/ChildPage";
import SettingsPage from "@/pages/settings/SettingPage";
import ReportPage from "@/pages/report/ReportPage";
import ChatbotPage from "@/pages/chatbot/ChatBotPage";
import LearningRagePage from "@/pages/learningrate/LearningRatePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <LoginHomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/find-account" element={<FindAccountPage />} />
        <Route
          path="/gardian"
          element={
            <ProtectedRoute>
              <GuardianPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/child"
          element={
            <ProtectedRoute>
              <ChildPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report"
          element={
            <ProtectedRoute>
              <ReportPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <ChatbotPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learning-rate"
          element={
            <ProtectedRoute>
              <LearningRagePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

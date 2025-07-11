// ProtectedRoute.tsx
import { useAuthStore } from "@/stores/authStore";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

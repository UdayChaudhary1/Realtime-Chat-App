import Navbar from "./components/Navbar.jsx";
import { Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import { Route } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import { isCheckingAuth } from "./store/useAuthStore.js";

const App = () => {
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("🚀 ~ App ~ authUser:", authUser);

  if(isCheckingAuth && !authUser){
    return (
      <div className="flex justify-center items-center h-screen`">
        <Loader className="size-10 animate-spin"/>
      </div>
    )
  }
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};
export default App;

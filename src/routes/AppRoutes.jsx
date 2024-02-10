import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage/HomePage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { RegistrationPage } from "../pages/registrationPage/RegistrationPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

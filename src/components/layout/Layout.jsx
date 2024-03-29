import { AppRoutes } from "../../routes/AppRoutes";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

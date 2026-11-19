import { Outlet } from "react-router-dom";
import { Footer } from "../Ui/Footer";
import { Header } from "../Ui/Header";

export const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

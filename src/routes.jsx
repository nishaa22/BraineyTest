import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Otp from "./components/Otp";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRouter;

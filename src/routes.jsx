import { Routes, Route } from "react-router-dom";
import DetailsPage from './Pages/DetailsPage';
import Register from "./Pages/Register";
import Otp from "./Pages/Otp";
import Dashboard from './Pages/Dashboard';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/details" element={<DetailsPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default AppRouter;

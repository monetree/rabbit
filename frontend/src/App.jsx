import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "./views/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

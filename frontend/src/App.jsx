import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./views/dashboard";
import Login from "./views/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

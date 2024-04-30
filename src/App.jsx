import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./views/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

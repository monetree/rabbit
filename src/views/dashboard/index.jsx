import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "../../components/Header";
import Users from "../../components/users";

const Dashboard = () => {
  return (
    <>
      <div>
        <Header />
        <div className="p-16 mt-12">
          <div class="relative overflow-x-auto">
            <Routes>
              <Route path="/" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

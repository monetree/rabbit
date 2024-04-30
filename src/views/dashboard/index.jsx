import Header from "../../components/Header";
import Category from "../../components/categories";
import HsaAdministrators from "../../components/hsa-administrators";
import Sidebar from "../../components/sidebar";
import SubCategory from "../../components/sub-categories";
import { useState } from "react";
import HealthConditions from "../../components/health-conditions";
import Brand from "../../components/brands";
import { Routes, Route, Navigate } from "react-router-dom";

const Dashboard = () => {
  const [tab, setTab] = useState("hsa-administrators");

  return (
    <>
      <div>
        <Header />
        <Sidebar setTab={setTab} />
        <div className="p-4 sm:ml-64 mt-12">
          <div class="relative overflow-x-auto">
            <Routes>
              <Route
                path="/hsa-administrators"
                element={<HsaAdministrators />}
              />
              <Route path="/categories" element={<Category />} />
              <Route path="/sub-categories" element={<SubCategory />} />
              <Route path="/health-conditions" element={<HealthConditions />} />
              <Route path="/brands" element={<Brand />} />
              <Route
                path="/"
                element={<Navigate replace to="hsa-administrators" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

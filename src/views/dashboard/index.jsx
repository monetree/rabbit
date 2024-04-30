import Header from "../../components/Header";
import Category from "../../components/categories";
import HsaAdministrators from "../../components/hsa-administrators";
import Sidebar from "../../components/sidebar";
import SubCategory from "../../components/sub-categories";
import { useState } from "react";
import HealthConditions from "../../components/health-conditions";
import Brand from "../../components/brands";

const Dashboard = () => {
  const [tab, setTab] = useState("hsa-administrators");

  return (
    <>
      <div>
        <Header />
        <Sidebar setTab={setTab} />
        <div className="p-4 sm:ml-64 mt-12">
          <div class="relative overflow-x-auto">
            <Switch>
              <Route path="/hsa-administrators" component={HsaAdministrators} />
              <Route path="/categories" component={Category} />
              <Route path="/sub-categories" component={SubCategory} />
              <Route path="/health-conditions" component={HealthConditions} />
              <Route path="/brands" component={Brand} />
              <Redirect from="/" to="/hsa-administrators" />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

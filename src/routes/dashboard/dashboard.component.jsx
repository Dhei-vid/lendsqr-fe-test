import Users from "../../components/users/users.component";
import UserData from "../../components/userData/userData.components";
import SideBar from "../../components/sideBar/sidebar.component";
import Navigation from "../../components/navigation/navigation.component";

import "./dashboard.styles.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navigation />
      <div className="dashboard-info">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="user-info">
          <Users />
          <UserData />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

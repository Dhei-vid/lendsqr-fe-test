import SideBar from "../../components/sideBar/sidebar.component";
import Navigation from "../../components/navigation/navigation.component";
import UserProfile from "../../components/userProfileDetails/userProfile.component";
import LogOut from "../../components/logout/logout.component";

import "./userDetails.styles.scss";

const UserDetails = () => {
  return (
    <div className="user-details-container">
      <Navigation />
      <div className="details-container">
        <div>
          <SideBar />
          <LogOut />
        </div>
        <div>
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

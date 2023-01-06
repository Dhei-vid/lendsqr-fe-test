import Users from '../../components/users/users.component'
import UserData from '../../components/userData/userData.components'
import SideBar from '../../components/sideBar/sidebar.component'
import SearchBar from '../../components/searchBar/searchbar.component'

const Dashboard = () => {
  return (
    <div>
      {/* <SearchBar /> */}
      <SideBar />
      <Users />
      <UserData />
    </div>
  )
}

export default Dashboard

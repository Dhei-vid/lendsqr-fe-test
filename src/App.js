import { Routes, Route } from 'react-router-dom'

import Navigation from './components/navigation/navigation.component'
import Login from './routes/login/login.form.component'
import Dashboard from './routes/dashboard/dashboard.component'
import UserDetails from './routes/userDetailsPage/userDetailsPage.component'
import SideBar from './components/sideBar/sidebar.component'
import Users from './components/users/users.component'
import Filter from './components/filter/filter.component'
import Status from './components/status/status.component'

// testing
import UserData from './components/userData/userData.components'

function App () {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='nav' element={<Navigation />} />
      <Route path='user' element={<Users />} />
      <Route path='userdata' element={<UserData />} />
      <Route path='filter' element={<Filter />} />
      <Route path='status' element={<Status />} />
      <Route path='sidebar' element={<SideBar />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='user' element={<UserDetails />} />
    </Routes>
  )
}

export default App

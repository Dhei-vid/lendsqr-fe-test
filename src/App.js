import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component'
import Login from './components/login/login.form.component'
import Dashboard from './components/dashboard/dashboard.component'
import UserDetails from './components/userDetailsPage/userDetailsPage.component'
import SideBar from './components/sideBar/sidebar.component'
import Users from './components/users/users.component'

function App () {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='nav' element={<Navigation />} />
      <Route path='user' element={<Users />} />
      <Route path='sidebar' element={<SideBar />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='user' element={<UserDetails />} />
    </Routes>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'

import Navigation from './components/navigation/navigation.component'
import Login from './routes/login/login.form.component'
import Dashboard from './routes/dashboard/dashboard.component'
import UserDetails from './routes/userDetails/userDetails.components'
import Users from './components/users/users.component'
import Filter from './components/filter/filter.component'
import Status from './components/status/status.component'

// testing
import UserData from './components/userData/userData.components'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='userdetails' element={<UserDetails />} />
    </Routes>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component'
import Login from './components/login/login.form.component'
import Dashboard from './components/dashboard/dashboard.component'
import UserDetails from './components/userDetailsPage/userDetailsPage.component'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Login />}>
        <Route index element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='user' element={<UserDetails />} />
      </Route>
    </Routes>
  )
}

export default App

{
  /* <div className='App'>
<Login />
</div> */
}

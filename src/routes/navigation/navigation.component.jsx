import SearchBar from '../../components/searchBar/searchbar.component'
import './navigation.style.scss'

import logo from '../../assets/lendsqr_logo1.png'
import profile from '../../assets/image 4.png'
import { MdOutlineNotifications as Notification } from 'react-icons/md'

const Navigation = () => {
  return (
    <div className='nav-container'>
      <div className='nav-items'>
        <img className='logo' src={logo} alt='logo' />
      </div>

      <div className='nav-items'>
        <div className='search-bar'>
          <SearchBar />
        </div>
      </div>

      <div className='nav-items'>
        <div className='profile'>
          <a href='/'>
            <p>Docs</p>
          </a>

          <Notification className='notification-icon' />

          <div className='profile-details'>
            <img src={profile} alt='user profile' />
            <span>Adedeji</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation

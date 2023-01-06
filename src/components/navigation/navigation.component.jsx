// Components
import SearchBar from '../searchBar/searchbar.component'

// styles
import './navigation.style.scss'

// Assets
import logo from '../../assets/lendsqr_logo1.png'
import profile from '../../assets/image 4.png'

// Icons
import { MdOutlineNotifications as Notification } from 'react-icons/md'
import { MdOutlineArrowDropDown as Arrow } from 'react-icons/md'

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
          <a className='profile-item' href='/'>
            <p>Docs</p>
          </a>

          <Notification className='icon profile-item' />

          <div className='profile-details profile-item'>
            <img src={profile} alt='user profile' />
            <span>Adedeji</span>
            <Arrow className='icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation

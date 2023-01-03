import logo from '../../assets/lendsqr_logo1.png'
import profile from '../../assets/image 4.png'
// import { BsBell } from 'react-icons/fa'

const Navigation = () => {
  return (
    <div className='nav'>
      <div className='nav-items'>
        <img src={logo} alt='logo' />
      </div>

      <div className='nav-items'>
        <div className='search-bar'></div>
      </div>

      <div className='nav-items'>
        <a href='/'>
          <p>Docs</p>
        </a>
        {/* <BsBell /> */}
        <img src={profile} alt='profile image' />
      </div>
    </div>
  )
}

export default Navigation

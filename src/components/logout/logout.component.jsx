import { FiLogOut } from 'react-icons/fi'
import { FcSettings } from 'react-icons/fc'

import './logout.styles.scss'

const LogOut = () => {
  return (
    <div className='logout-container'>
      <div className='side-bar-item side-bar-items-container'>
        <div className='side-bar-icons'>
          <FcSettings />
        </div>
        <div className='side-bar-title'> Systems Messages</div>
      </div>

      <ul className='logout-list'>
        <li className='logout-icon-text logout-list-item'>
          <FiLogOut />
          <span>Logout</span>
        </li>
        <li className='logout-list-item'>
          <p className='version'>v1.2.0</p>
        </li>
      </ul>
    </div>
  )
}

export default LogOut

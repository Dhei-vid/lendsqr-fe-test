import { FiLogOut } from 'react-icons/fi'
import './logout.styles.scss'

const LogOut = () => {
  return (
    <div className='logout-container'>
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

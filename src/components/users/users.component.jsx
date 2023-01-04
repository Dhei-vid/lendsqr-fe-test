import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import icon4 from '../../assets/icons/icon4.png'

import './user.styles.scss'

const Users = () => {
  return (
    <div className='user-container'>
      <div className='user-card-container'>
        <ul className='user-card-elements'>
          <li>
            <img src={icon1} alt='icon' />
          </li>
          <li className='user-text'> USERS</li>
          <li className='user-number'>2,453</li>
        </ul>
      </div>

      <div className='user-card-container'>
        <ul className='user-card-elements'>
          <li>
            <img src={icon2} alt='icon' />
          </li>
          <li className='user-text'>ACTIVE USERS</li>
          <li className='user-number'>2,453</li>
        </ul>
      </div>

      <div className='user-card-container'>
        <ul className='user-card-elements'>
          <li>
            <img src={icon3} alt='icon' />
          </li>
          <li className='user-text'>USERS WITH LOANS</li>
          <li className='user-number'>12,453</li>
        </ul>
      </div>

      <div className='user-card-container'>
        <ul className='user-card-elements'>
          <li>
            <img src={icon4} alt='icon' />
          </li>
          <li className='user-text'>USERS WITH SAVINGS</li>
          <li className='user-number'>102,453</li>
        </ul>
      </div>
    </div>
  )
}

export default Users

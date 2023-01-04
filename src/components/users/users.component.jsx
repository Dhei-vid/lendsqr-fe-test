import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import icon4 from '../../assets/icons/icon4.png'

const Users = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <img src={icon1} alt='icon' />
          </li>
          <li>USERS</li>
          <li>2,453</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <img src={icon2} alt='icon' />
          </li>
          <li>ACTIVE USERS</li>
          <li>2,453</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <img src={icon3} alt='icon' />
          </li>
          <li>USERS WITH LOANS</li>
          <li>12,453</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <img src={icon4} alt='icon' />
          </li>
          <li>USERS WITH SAVINGS</li>
          <li>102,453</li>
        </ul>
      </div>
    </div>
  )
}

export default Users

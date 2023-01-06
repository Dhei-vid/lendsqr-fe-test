import { useEffect, useState } from 'react'

// import SIDE_BAR_NAV_LIST from './sideBar.elements'
import { customers, business, settings, menu } from './sideBar.elements'
import './sidebar.style.scss'

const SideBar = () => {
  const [activeStatus, setActiveStatus] = useState(false)

  useEffect(() => {})

  const onActiveHandler = () => {
    setActiveStatus(true)
  }

  return (
    <div className='side-bar-container'>
      <div className='side-bar-elements'>
        <ul>
          <li
            className='side-bar-items-container active'
            key={menu.organization}
          >
            <div className='side-bar-items organizations-item'>
              <span className='side-bar-icons'>{menu.oLIcon}</span>
              <span className='side-bar-title'>{menu.organization}</span>
              <span className='side-bar-icons'>{menu.oRIcon}</span>
            </div>
          </li>
          <li className='side-bar-items-container' key={menu.dashboard}>
            <div className='side-bar-items dashboard-item'>
              <span className='side-bar-icons'>{menu.dIcon}</span>
              <span className='side-bar-title'>{menu.dashboard}</span>
            </div>
          </li>

          <p className='side-bar-subheading'>customers</p>
          {customers.map((customers, index) => (
            <li className='side-bar-items-container' key={index}>
              <div className='side-bar-items'>
                <span className='side-bar-icons'>{customers.icon}</span>
                <span className='side-bar-title'>{customers.title}</span>
              </div>
            </li>
          ))}

          <p className='side-bar-subheading'>business</p>
          {business.map((business, index) => (
            <li className='side-bar-items-container' key={index + 1}>
              <div className='side-bar-items'>
                <span className='side-bar-icons'>{business.icon}</span>
                <span className='side-bar-title'>{business.title}</span>
              </div>
            </li>
          ))}
          <p className='side-bar-subheading'>settings</p>
          {settings.map((settings, index) => (
            <li className='side-bar-items-container' key={index + 2}>
              <div className='side-bar-items'>
                <span className='side-bar-icons'>{settings.icon}</span>
                <span className='side-bar-title'>{settings.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar

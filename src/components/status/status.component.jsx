import { BsEye } from 'react-icons/bs'
import { RiUserUnfollowLine } from 'react-icons/ri'
import { GrUserExpert } from 'react-icons/gr'

import './status.style.scss'

const Status = () => {
  return (
    <div className='status-container'>
      <div className='status-item'>
        <BsEye />
        View Details
      </div>

      <div className='status-item'>
        <RiUserUnfollowLine />
        Blacklist User
      </div>
      <div className='status-item'>
        <GrUserExpert />
        Activate User
      </div>
    </div>
  )
}

export default Status

import { HiArrowLongLeft } from 'react-icons/hi2'
import { IoStarSharp, IoStarOutline } from 'react-icons/io5'

import './userProfile.styles.scss'

const UserProfile = () => {
  const userData = JSON.parse(localStorage.getItem('data'))

  console.log(userData)

  return (
    <div className='user-profile-container'>
      <div className='user-details-nav'>
        <HiArrowLongLeft />
        <span className='b2u-cta'>Back to Users</span>
      </div>

      <div className='user-details-header-items'>
        <span className='user-heading'>User Details</span>
        <span className='btn-container'>
          <button className='btn blacklist-btn'>blacklist user</button>
          <button className='btn active-btn'>active user</button>
        </span>
      </div>

      <div className='bank-details-container'>
        <div className='basic-info-container'>
          <div className='basic-profile border-right'>
            <div>
              <img src={userData[0].profile.avatar} alt='' />
            </div>
            <div>
              <h2 className='basic-profile-head'>
                {userData[0].profile.firstName +
                  ' ' +
                  userData[0].profile.lastName}
              </h2>
              <p className='basic-profile-subhead'>LSQFf587g90</p>
            </div>
          </div>

          <div className='border-right'>
            <h4 className='user-tier'>User's Tier</h4>
            <div>
              <IoStarSharp style={{ color: '#E9B200' }} />
              <IoStarOutline style={{ color: '#E9B200' }} />
              <IoStarOutline style={{ color: '#E9B200' }} />
            </div>
          </div>

          <div>
            <h2 className='basic-profile-head'>
              &#8358;{userData[0].accountBalance}
            </h2>
            <p className='basic-profile-subhead'>{`${userData[0].accountNumber}/Providus Bank`}</p>
          </div>
        </div>

        <div className='bank-details-headings'>
          <p className='bank-heading-items'>General Details</p>
          <p className='bank-heading-items'>Documents</p>
          <p className='bank-heading-items'>Bank Details</p>
          <p className='bank-heading-items'>Loans</p>
          <p className='bank-heading-items'>Savings</p>
          <p className='bank-heading-items'>App and System</p>
        </div>
      </div>

      <div className='info-container'>
        <div className='border-item'>
          <p className='user-details-subheading'>Personal Information</p>
          <div className='info personal-info-container'>
            <div>
              <h3 className='info-header'>full Name</h3>
              <p className='info-text'>
                {userData[0].profile.firstName +
                  ' ' +
                  userData[0].profile.lastName}
              </p>
            </div>
            <div>
              <h3 className='info-header'>phone Number</h3>
              <p className='info-text'> {userData[0].profile.phoneNumber}</p>
            </div>
            <div>
              <h3 className='info-header'>Email Address</h3>
              <p className='info-text'> {userData[0].email}</p>
            </div>
            <div>
              <h3 className='info-header'>bvn</h3>
              <p className='info-text'>{userData[0].profile.bvn}</p>
            </div>
            <div>
              <h3 className='info-header'>Gender</h3>
              <p className='info-text'>{userData[0].profile.gender}</p>
            </div>
            <div>
              <h3 className='info-header'>Marital status</h3>
              <p className='info-text'> Single </p>
            </div>
            <div>
              <h3 className='info-header'>children</h3>
              <p className='info-text'>None</p>
            </div>
            <div>
              <h3 className='info-header'>Type of residence</h3>
              <p className='info-text'>Parent's Apartment</p>
            </div>
          </div>
        </div>

        <div className='border-item'>
          <p className='user-details-subheading'>Education and Employment</p>
          <div className='info edu-info-container'>
            <div>
              <h3 className='info-header'>level of Education</h3>
              <p className='info-text'>{userData[0].education.level}</p>
            </div>
            <div>
              <h3 className='info-header'>Employment status</h3>
              <p className='info-text'>
                {userData[0].education.employmentStatus}
              </p>
            </div>
            <div>
              <h3 className='info-header'>Sector of employment</h3>
              <p className='info-text'>{userData[0].education.sector}</p>
            </div>
            <div>
              <h3 className='info-header'>Duration of employment</h3>
              <p className='info-text'>{userData[0].education.duration}</p>
            </div>
            <div>
              <h3 className='info-header'>Office email</h3>
              <p className='info-text'>{userData[0].education.officeEmail}</p>
            </div>
            <div>
              <h3 className='info-header'>Monthly income</h3>
              <p className='info-text'>
                &#8358;
                {userData[0].education.monthlyIncome[0]} - &#x20A6;
                {userData[0].education.monthlyIncome[1]}
              </p>
            </div>
            <div>
              <h3 className='info-header'>Loan repayment</h3>
              <p className='info-text'>{userData[0].education.loanRepayment}</p>
            </div>
          </div>
        </div>

        <div className='border-item'>
          <p className='user-details-subheading'>Socials</p>
          <div className='info social-info-container'>
            <div>
              <h3 className='info-header'>Twitter</h3>
              <p className='info-text'>{userData[0].socials.twitter}</p>
            </div>
            <div>
              <h3 className='info-header'>Facebook</h3>
              <p className='info-text'>{userData[0].socials.facebook}</p>
            </div>
            <div>
              <h3 className='info-header'>Instagram</h3>
              <p className='info-text'>{userData[0].socials.instagram}</p>
            </div>
          </div>
        </div>

        <div className='border-item'>
          <p className='user-details-subheading'>Guarantor</p>
          <div className='info guarantor-info-container'>
            <div className='info-details-container'>
              <h3 className='info-header'>full Name</h3>
              <p className='info-text'>{`${userData[0].guarantor.firstName} ${userData[0].guarantor.lastName}`}</p>
            </div>
            <div>
              <h3 className='info-header'>Phone Number</h3>
              <p className='info-text'>{userData[0].guarantor.phoneNumber}</p>
            </div>
            <div>
              <h3 className='info-header'>Email Address</h3>
              <p className='info-text'>celine.monah@gmail.com</p>
            </div>
            <div>
              <h3 className='info-header'>Relationship</h3>
              <p className='info-text'>Sister</p>
            </div>
          </div>
        </div>

        <div className='border-item'>
          <div className='info further-info-container'>
            <div>
              <h3 className='info-header'>full Name</h3>
              <p className='info-text'>{userData[0].guarantor.firstName}</p>
            </div>
            <div>
              <h3 className='info-header'>Phone Number</h3>
              <p className='info-text'>{userData[0].guarantor.phoneNumber}</p>
            </div>
            <div>
              <h3 className='info-header'>Email Address</h3>
              <p className='info-text'>celine.monah@gmail.com</p>
            </div>
            <div>
              <h3 className='info-header'>Relationship</h3>
              <p className='info-text'>Sister</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile

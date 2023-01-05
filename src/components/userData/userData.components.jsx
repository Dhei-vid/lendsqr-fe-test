import { useEffect, useState } from 'react'
import dateFormat from 'dateformat'

import { BiFilter } from 'react-icons/bi'

import './userData.styles.scss'

const UserData = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData () {
      const response = await fetch(
        'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
      )
      const data = await response.json()
      console.log(data)

      setData(data)
    }

    fetchData()
  }, [])

  return (
    <div className='user-data-container'>
      <table>
        <thead>
          <tr className='data-heading-container'>
            <th className='data-headings'>
              Organization
              <span className='data-heading-icon'>
                <BiFilter
                  className='data-icon'
                  size='20px'
                  style={{ position: 'absolute', top: '-3px' }}
                />
              </span>
            </th>
            <th className='data-headings'>
              Username
              <span className='data-heading-icon'>
                <BiFilter
                  className='data-icon'
                  size='20px'
                  style={{ position: 'absolute', top: '-3px' }}
                />
              </span>
            </th>
            <th className='data-headings'>
              Email
              <span className='data-heading-icon'>
                <BiFilter
                  className='data-icon'
                  size='20px'
                  style={{ position: 'absolute', top: '-3px' }}
                />
              </span>
            </th>
            <th className='data-headings'>
              Phone Number
              <span className='data-heading-icon'>
                <BiFilter
                  className='data-icon'
                  size='20px'
                  style={{ position: 'absolute', top: '-3px' }}
                />
              </span>
            </th>
            <th className='data-headings'>
              Date Joined
              <span className='data-heading-icon'>
                <BiFilter
                  className='data-icon'
                  size='20px'
                  style={{ position: 'absolute', top: '-3px' }}
                />
              </span>
            </th>
            <th className='data-headings'>
              Status
              <span className='data-heading-icon'>
                <BiFilter
                  className='data-icon'
                  size='20px'
                  style={{ position: 'absolute', top: '-3px' }}
                />
              </span>
            </th>
          </tr>
        </thead>

        <tbody key={1}>
          {data ? (
            data.map(item => (
              <tr className='user-data-item-container'>
                <td className='user-data-item'>{item.orgName}</td>
                <td className='user-data-item'>{item.userName}</td>
                <td className='user-data-item'>{item.email}</td>
                <td className='user-data-item'>{item.phoneNumber}</td>
                <td className='user-data-item'>
                  {dateFormat(`${item.createdAt}`, 'mmm dd, yyyy hh:M TT')}
                </td>
                <td className='user-data-item'>Status</td>
              </tr>
            ))
          ) : (
            <tr className='user-data-error-container'>
              <td className='user-data-error'>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserData

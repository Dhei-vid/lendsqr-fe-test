import { useMemo, useState, useEffect } from 'react'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import './pagination.styles.scss'

const Pagination = () => {
  return (
    <div className='pagination-container'>
      <div className='left-pagination'>
        <span>Showing</span>
        <span>
          <select name='' id='' data-role='select'>
            <option value='option 1'>100</option>
            <option value='option 1'>100</option>
            <option value='option 1'>100</option>
          </select>
        </span>
        <span>Out of 100</span>
      </div>

      <div className='right-pagination'>
        <span className='left-arrow'>
          <MdKeyboardArrowLeft />
        </span>
        <span>
          <ul className='page-list'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </span>
        <span className='right-arrow'>
          <MdKeyboardArrowRight />
        </span>
      </div>
    </div>
  )
}

export default Pagination

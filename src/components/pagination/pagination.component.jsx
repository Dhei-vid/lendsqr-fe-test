import { useMemo } from 'react'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import './pagination.styles.scss'

const Pagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}) => {
  const paginationRange = useMemo(() => {}, [
    totalCount,
    pageSize,
    siblingCount,
    currentPage
  ])

  const totalPageCount = Math.ceil(totalCount / pageSize)

  const totalPageNumbers = siblingCount + 5

  const range = (start, end) => {
    const length = end - start + 1

    return Array.from({ length }, (_, idx) => idx + start)
  }

  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.max(currentPage + siblingCount, totalPageCount)

  const showLeftDot = leftSiblingIndex > 2
  const showrightDot = rightSiblingIndex < totalPageCount - 2
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

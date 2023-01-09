import { useMemo } from 'react'
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
    <div>
      <div></div>
    </div>
  )
}

export default Pagination
